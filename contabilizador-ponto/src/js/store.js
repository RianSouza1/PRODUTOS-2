/**
 * store.js - Gerenciamento de Dados com Sincronização em Tempo Real Centralizada
 * 
 * Recursos:
 * 1. Sincronização contínua com o servidor (api.php) a cada 4 segundos.
 * 2. Cálculo de desvio de relógio (serverTimeOffset) para sincronização perfeita de cronômetro.
 * 3. Ações atômicas (stopwatch, entradas, funcionários) para prevenir sobrescrita de dados entre abas e dispositivos.
 * 4. Cache local redundante (LocalStorage + IndexedDB) para suporte offline imediato.
 */

const STORAGE_KEY = 'contabilizador_ponto_v1';
const ACTIVE_EMP_KEY = 'contabilizador_active_emp_id';
const THEME_KEY = 'contabilizador_theme_pref';
const API_URL = './api.php';

const DEFAULT_DATA = {
  activeEmployeeId: 'emp-1',
  theme: 'dark',
  employees: [
    {
      id: 'emp-1',
      name: 'Eduardo',
      role: 'Funcionário',
      targetHours: 40,
      color: '#3b82f6',
      avatar: 'ED',
      stopwatch: { isRunning: false, startTime: null, accumulatedMs: 0, updatedAt: 0 },
      entries: [],
      completedCyclesCount: 0,
      completedCyclesHistory: []
    },
    {
      id: 'emp-2',
      name: 'Públio',
      role: 'Funcionário',
      targetHours: 40,
      color: '#10b981',
      avatar: 'PB',
      stopwatch: { isRunning: false, startTime: null, accumulatedMs: 0, updatedAt: 0 },
      entries: [],
      completedCyclesCount: 0,
      completedCyclesHistory: []
    }
  ],
  undoStack: []
};

class Store {
  constructor() {
    this.db = null;
    this.serverAvailable = false;
    this.serverTimeOffset = 0; // serverTime - Date.now()
    this.isPolling = false;
    this.pollIntervalId = null;
    this.lastSyncTimestamp = null;
    this.onSyncCallbacks = [];
    this.onConnectionChangeCallbacks = [];

    // Carrega dados locais iniciais
    this.data = this._loadLocal();

    // Restaura preferência de funcionário e tema locais
    const savedActiveId = localStorage.getItem(ACTIVE_EMP_KEY);
    if (savedActiveId && this.data.employees.some(e => e.id === savedActiveId)) {
      this.data.activeEmployeeId = savedActiveId;
    }
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      this.data.theme = savedTheme;
    }

    this._initIndexedDB();

    // Sincronização inicial com o servidor
    this._pullFromServer(false);

    // Inicia polling em segundo plano (a cada 4 segundos)
    this.startPolling(4000);

    // Atualiza imediatamente quando a aba volta a ficar visível
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this._pullFromServer(true);
      }
    });
  }

  // Registra callbacks de sincronização
  onSync(callback) {
    this.onSyncCallbacks.push(callback);
  }

  onConnectionChange(callback) {
    this.onConnectionChangeCallbacks.push(callback);
  }

  _notifyConnection(status, details) {
    this.onConnectionChangeCallbacks.forEach(cb => cb(status, details));
  }

  // Retorna o timestamp atual sincronizado com o fuso do servidor
  getSynchronizedNow() {
    return Date.now() + (this.serverTimeOffset || 0);
  }

  // ========== PERSISTÊNCIA LOCAL ==========

  _loadLocal() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const initial = JSON.parse(JSON.stringify(DEFAULT_DATA));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        return initial;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.employees || !Array.isArray(parsed.employees) || parsed.employees.length === 0) {
        return JSON.parse(JSON.stringify(DEFAULT_DATA));
      }
      this._migrateData(parsed);
      return parsed;
    } catch (e) {
      console.error('Erro ao carregar LocalStorage:', e);
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }

  _migrateData(data) {
    if (!data || !data.employees) return;
    data.employees.forEach(emp => {
      if (!emp.entries || !Array.isArray(emp.entries)) emp.entries = [];
      if (!emp.completedCyclesHistory || !Array.isArray(emp.completedCyclesHistory)) emp.completedCyclesHistory = [];
      if (!emp.stopwatch || typeof emp.stopwatch !== 'object') {
        emp.stopwatch = { isRunning: false, startTime: null, accumulatedMs: 0, updatedAt: 0 };
      }
      if (emp.targetHours === undefined) emp.targetHours = 40;
    });
  }

  _saveLocal() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      if (this.data.activeEmployeeId) {
        localStorage.setItem(ACTIVE_EMP_KEY, this.data.activeEmployeeId);
      }
      if (this.data.theme) {
        localStorage.setItem(THEME_KEY, this.data.theme);
      }
    } catch (e) {
      console.error('Erro ao salvar LocalStorage:', e);
    }
  }

  // ========== IndexedDB ==========

  _initIndexedDB() {
    try {
      if (!window.indexedDB) return;
      const request = indexedDB.open('ContabilizadorPontoDB_v3', 1);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('app_state')) {
          db.createObjectStore('app_state', { keyPath: 'key' });
        }
      };
      request.onsuccess = (e) => {
        this.db = e.target.result;
      };
    } catch (e) {}
  }

  _saveToIndexedDB(data) {
    if (!this.db) return;
    try {
      const tx = this.db.transaction('app_state', 'readwrite');
      tx.objectStore('app_state').put({ key: STORAGE_KEY, value: data });
    } catch (e) {}
  }

  // ========== SINCRONIZAÇÃO EM SEGUNDO PLANO (POLLING) ==========

  startPolling(intervalMs = 4000) {
    if (this.pollIntervalId) clearInterval(this.pollIntervalId);
    this.pollIntervalId = setInterval(() => {
      if (!document.hidden && !this.isPolling) {
        this._pullFromServer(true);
      }
    }, intervalMs);
  }

  stopPolling() {
    if (this.pollIntervalId) {
      clearInterval(this.pollIntervalId);
      this.pollIntervalId = null;
    }
  }

  // ========== SERVIDOR (api.php) ==========

  async _pullFromServer(isBackground = false) {
    if (this.isPolling) return;
    this.isPolling = true;

    try {
      const cacheBust = Date.now();
      const response = await fetch(`${API_URL}?t=${cacheBust}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      });

      if (!response.ok) {
        this.serverAvailable = false;
        this._notifyConnection('offline', `Status ${response.status}`);
        this.isPolling = false;
        return;
      }

      const serverData = await response.json();

      // Ajusta fuso / offset de relógio com o servidor
      if (serverData && serverData.serverTime) {
        this.serverTimeOffset = Number(serverData.serverTime) - Date.now();
      }

      if (serverData && serverData.employees && Array.isArray(serverData.employees) && serverData.employees.length > 0) {
        this.serverAvailable = true;
        this.lastSyncTimestamp = Date.now();
        this._notifyConnection('connected', 'Online sincronizado');

        // Verifica se houve alteração real nos dados dos funcionários
        const currentHash = JSON.stringify(this.data.employees);
        const serverHash = JSON.stringify(serverData.employees);

        if (currentHash !== serverHash) {
          // Atualiza lista de funcionários preservando seleções locais da interface
          const localActiveId = this.data.activeEmployeeId;
          const localTheme = this.data.theme;

          this.data.employees = serverData.employees;
          this._migrateData(this.data);

          // Se o funcionário ativo não existir mais, seleciona o primeiro
          if (!this.data.employees.some(e => e.id === localActiveId)) {
            this.data.activeEmployeeId = this.data.employees[0]?.id || 'emp-1';
          } else {
            this.data.activeEmployeeId = localActiveId;
          }

          this.data.theme = localTheme || 'dark';

          this._saveLocal();
          this._saveToIndexedDB(this.data);

          // Notifica observadores (UI e Timer)
          this.onSyncCallbacks.forEach(cb => cb(this.data, isBackground));
        } else {
          // Mesmo sem alteração em lista/entradas, avisa timer para checar cronômetros
          this.onSyncCallbacks.forEach(cb => cb(this.data, true));
        }
      } else if (serverData && serverData.status === 'empty') {
        // Servidor vazio: enviar seed inicial com os dados locais
        this.serverAvailable = true;
        this._notifyConnection('connected', 'Sincronizado');
        await this._postToServer({
          action: 'full_replace',
          employees: this.data.employees
        });
      }
    } catch (err) {
      this.serverAvailable = false;
      this._notifyConnection('offline', 'Modo offline');
    } finally {
      this.isPolling = false;
    }
  }

  async _postToServer(payload) {
    try {
      this._notifyConnection('syncing', 'Sincronizando...');
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        this._notifyConnection('offline', 'Falha no envio');
        return false;
      }

      const resData = await response.json();
      if (resData && resData.serverTime) {
        this.serverTimeOffset = Number(resData.serverTime) - Date.now();
      }

      this.serverAvailable = true;
      this.lastSyncTimestamp = Date.now();
      this._notifyConnection('connected', 'Online sincronizado');
      return resData;
    } catch (err) {
      console.warn('Falha na requisição ao servidor:', err);
      this.serverAvailable = false;
      this._notifyConnection('offline', 'Modo offline');
      return false;
    }
  }

  // ========== GERENCIAMENTO DE FUNCIONÁRIOS ==========

  getEmployees() {
    return this.data.employees || [];
  }

  getActiveEmployee() {
    const employees = this.getEmployees();
    const emp = employees.find(e => e.id === this.data.activeEmployeeId);
    return emp || employees[0] || DEFAULT_DATA.employees[0];
  }

  setActiveEmployee(id) {
    if (this.data.employees.some(e => e.id === id)) {
      this.data.activeEmployeeId = id;
      this._saveLocal(); // Preferência local, não envia para o servidor
    }
  }

  async addEmployee(name, role, targetHours = 40, color = '#3b82f6') {
    const initials = name.trim().split(' ').filter(Boolean).map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'FN';
    const newEmp = {
      id: 'emp-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      name: name.trim(),
      role: role.trim() || 'Funcionário',
      targetHours: parseInt(targetHours, 10) || 40,
      color: color || '#3b82f6',
      avatar: initials,
      stopwatch: { isRunning: false, startTime: null, accumulatedMs: 0, updatedAt: this.getSynchronizedNow() },
      entries: [],
      completedCyclesCount: 0,
      completedCyclesHistory: []
    };

    this.data.employees.push(newEmp);
    this.data.activeEmployeeId = newEmp.id;
    this._saveLocal();
    this._saveToIndexedDB(this.data);

    // Envia ação atômica ao servidor
    await this._postToServer({
      action: 'add_employee',
      employee: newEmp
    });

    return newEmp;
  }

  async updateEmployee(id, updatedFields) {
    const emp = this.data.employees.find(e => e.id === id);
    if (!emp) return false;

    if (updatedFields.name) {
      emp.name = updatedFields.name.trim();
      emp.avatar = emp.name.split(' ').filter(Boolean).map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'FN';
    }
    if (updatedFields.role !== undefined) emp.role = updatedFields.role.trim();
    if (updatedFields.targetHours !== undefined) emp.targetHours = parseInt(updatedFields.targetHours, 10) || 40;
    if (updatedFields.color !== undefined) emp.color = updatedFields.color;

    this._saveLocal();
    this._saveToIndexedDB(this.data);

    // Envia ação atômica ao servidor
    await this._postToServer({
      action: 'update_employee',
      employeeId: id,
      fields: {
        name: emp.name,
        role: emp.role,
        targetHours: emp.targetHours,
        color: emp.color,
        avatar: emp.avatar
      }
    });

    return true;
  }

  async deleteEmployee(id) {
    if (this.data.employees.length <= 1) {
      throw new Error('É necessário ter pelo menos 1 funcionário cadastrado.');
    }

    const removedEmp = this.data.employees.find(e => e.id === id);
    this.data.employees = this.data.employees.filter(e => e.id !== id);

    if (this.data.activeEmployeeId === id) {
      this.data.activeEmployeeId = this.data.employees[0].id;
    }

    this._saveLocal();
    this._saveToIndexedDB(this.data);

    // Envia ação atômica ao servidor
    await this._postToServer({
      action: 'delete_employee',
      employeeId: id
    });

    return removedEmp;
  }

  // ========== CRONÔMETRO (ATÔMICO EM TEMPO REAL) ==========

  async saveStopwatch(employeeId, stopwatchState) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp) return;

    emp.stopwatch = {
      ...emp.stopwatch,
      ...stopwatchState,
      updatedAt: this.getSynchronizedNow()
    };

    this._saveLocal();
    this._saveToIndexedDB(this.data);

    // Envia imediatamente ação atômica de cronômetro
    await this._postToServer({
      action: 'update_stopwatch',
      employeeId,
      stopwatch: emp.stopwatch
    });
  }

  // ========== LANÇAMENTOS / HISTÓRICO ==========

  async addEntry(employeeId, { hours, minutes, date, type = 'manual', description = '' }) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp) return null;

    const h = parseInt(hours, 10) || 0;
    const m = parseInt(minutes, 10) || 0;
    const totalMinutes = h * 60 + m;
    if (totalMinutes <= 0) return null;

    let validIsoDate;
    try {
      if (date) {
        const d = new Date(date);
        validIsoDate = isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
      } else {
        validIsoDate = new Date().toISOString();
      }
    } catch (err) {
      validIsoDate = new Date().toISOString();
    }

    const entry = {
      id: 'entry-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      hours: h,
      minutes: m,
      totalMinutes,
      date: validIsoDate,
      type,
      description: (description || '').trim()
    };

    if (!emp.entries || !Array.isArray(emp.entries)) emp.entries = [];
    emp.entries.unshift(entry);

    if (!this.data.undoStack) this.data.undoStack = [];
    this.data.undoStack.push({ action: 'add_entry', employeeId, entry });

    this._saveLocal();
    this._saveToIndexedDB(this.data);

    // Envia ação atômica ao servidor
    await this._postToServer({
      action: 'add_entry',
      employeeId,
      entry
    });

    return entry;
  }

  async updateEntry(employeeId, entryId, { hours, minutes, date, description }) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp || !emp.entries) return false;

    const entry = emp.entries.find(e => e.id === entryId);
    if (!entry) return false;

    const h = parseInt(hours, 10) || 0;
    const m = parseInt(minutes, 10) || 0;
    entry.hours = h;
    entry.minutes = m;
    entry.totalMinutes = h * 60 + m;

    if (date) {
      try {
        const d = new Date(date);
        if (!isNaN(d.getTime())) entry.date = d.toISOString();
      } catch (e) {}
    }
    if (description !== undefined) entry.description = description.trim();

    this._saveLocal();
    this._saveToIndexedDB(this.data);

    // Envia ação atômica ao servidor
    await this._postToServer({
      action: 'update_entry',
      employeeId,
      entryId,
      entry: {
        hours: entry.hours,
        minutes: entry.minutes,
        totalMinutes: entry.totalMinutes,
        date: entry.date,
        description: entry.description
      }
    });

    return true;
  }

  async deleteEntry(employeeId, entryId) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp || !emp.entries) return false;

    const index = emp.entries.findIndex(e => e.id === entryId);
    if (index !== -1) {
      const removed = emp.entries.splice(index, 1)[0];
      if (!this.data.undoStack) this.data.undoStack = [];
      this.data.undoStack.push({ action: 'delete_entry', employeeId, entry: removed, index });

      this._saveLocal();
      this._saveToIndexedDB(this.data);

      // Envia ação atômica ao servidor
      await this._postToServer({
        action: 'delete_entry',
        employeeId,
        entryId
      });

      return removed;
    }
    return false;
  }

  async undoLastAction() {
    if (!this.data.undoStack || this.data.undoStack.length === 0) return null;

    const lastAction = this.data.undoStack.pop();
    const emp = this.data.employees.find(e => e.id === lastAction.employeeId);
    if (!emp) return null;

    if (lastAction.action === 'add_entry') {
      await this.deleteEntry(emp.id, lastAction.entry.id);
      return { message: 'Lançamento desfeito com sucesso.', entry: lastAction.entry };
    } else if (lastAction.action === 'delete_entry') {
      if (!emp.entries) emp.entries = [];
      emp.entries.splice(lastAction.index, 0, lastAction.entry);
      this._saveLocal();
      this._saveToIndexedDB(this.data);
      await this._postToServer({
        action: 'add_entry',
        employeeId: emp.id,
        entry: lastAction.entry
      });
      return { message: 'Registro restaurado com sucesso.', entry: lastAction.entry };
    }
    return null;
  }

  // ========== CÁLCULO DE ESTATÍSTICAS ==========

  getEmployeeTotalMinutes(employeeId) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp || !emp.entries) return 0;
    return emp.entries.reduce((acc, curr) => acc + (curr.totalMinutes || 0), 0);
  }

  getEmployeeCurrentCycleStats(employeeId) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp) return { currentMinutes: 0, targetMinutes: 2400, percent: 0, remainingMinutes: 2400, isCompleted: false };

    const totalMinutes = this.getEmployeeTotalMinutes(employeeId);
    const targetMinutes = (emp.targetHours || 40) * 60;
    const remainingMinutes = Math.max(0, targetMinutes - totalMinutes);
    const percent = Math.min(100, Math.round((totalMinutes / targetMinutes) * 100));

    return { totalMinutes, targetMinutes, remainingMinutes, percent, isCompleted: totalMinutes >= targetMinutes };
  }

  async completeCycle(employeeId) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp) return false;

    const totalMin = this.getEmployeeTotalMinutes(employeeId);
    const cycleRecord = {
      id: 'cycle-' + Date.now(),
      completedAt: new Date().toISOString(),
      totalMinutes: totalMin,
      hoursCount: Math.floor(totalMin / 60),
      minutesCount: totalMin % 60,
      entriesCount: (emp.entries || []).length,
      archivedEntries: [...(emp.entries || [])]
    };

    emp.completedCyclesCount = (emp.completedCyclesCount || 0) + 1;
    if (!emp.completedCyclesHistory) emp.completedCyclesHistory = [];
    emp.completedCyclesHistory.push(cycleRecord);
    emp.entries = [];

    this._saveLocal();
    this._saveToIndexedDB(this.data);

    // Envia ação atômica ao servidor
    await this._postToServer({
      action: 'complete_cycle',
      employeeId,
      cycle: cycleRecord
    });

    return cycleRecord;
  }

  // ========== TEMA ==========

  getTheme() {
    return this.data.theme || localStorage.getItem(THEME_KEY) || 'dark';
  }

  setTheme(theme) {
    this.data.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }

  // ========== BACKUP ==========

  exportBackup() {
    return JSON.stringify(this.data, null, 2);
  }

  async importBackup(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.employees || !Array.isArray(parsed.employees)) {
        throw new Error('Arquivo JSON inválido para backup de Ponto.');
      }
      this._migrateData(parsed);
      this.data.employees = parsed.employees;
      if (parsed.undoStack) this.data.undoStack = parsed.undoStack;

      this._saveLocal();
      this._saveToIndexedDB(this.data);

      await this._postToServer({
        action: 'full_replace',
        employees: this.data.employees,
        undoStack: this.data.undoStack
      });

      return true;
    } catch (e) {
      console.error('Falha ao importar backup:', e);
      throw e;
    }
  }
}

export const store = new Store();
