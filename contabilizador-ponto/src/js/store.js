/**
 * store.js - Gerenciamento de Dados com Persistência Centralizada no Servidor
 * 
 * Hierarquia de dados:
 * 1. Servidor (api.php + data.json) → fonte da verdade, compartilhado entre todos os dispositivos
 * 2. LocalStorage → cache local para acesso offline rápido
 * 3. IndexedDB → backup redundante local
 */

const STORAGE_KEY = 'contabilizador_ponto_v1';
const API_URL = './api.php';

// Dados iniciais com os funcionários padrão: Eduardo e Públio
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
      stopwatch: { isRunning: false, startTime: null, accumulatedMs: 0 },
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
      stopwatch: { isRunning: false, startTime: null, accumulatedMs: 0 },
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
    this.data = this._loadLocal();
    this._initIndexedDB();
    // Ao carregar, tenta baixar dados do servidor (fonte da verdade)
    this._pullFromServer();
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
        emp.stopwatch = { isRunning: false, startTime: null, accumulatedMs: 0 };
      }
    });
  }

  _saveLocal() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('Erro ao salvar LocalStorage:', e);
    }
  }

  // ========== IndexedDB (backup redundante) ==========

  _initIndexedDB() {
    try {
      if (!window.indexedDB) return;
      const request = indexedDB.open('ContabilizadorPontoDB_v2', 1);
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

  // ========== SERVIDOR (fonte da verdade) ==========

  async _pullFromServer() {
    try {
      const response = await fetch(API_URL, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (!response.ok) {
        console.log('Servidor não disponível (status ' + response.status + '). Usando dados locais.');
        return;
      }
      const serverData = await response.json();
      if (serverData && serverData.employees && Array.isArray(serverData.employees) && serverData.employees.length > 0) {
        this.serverAvailable = true;
        // Servidor é a fonte da verdade — seus dados prevalecem
        // Preservar tema e activeEmployeeId locais (preferências de cada dispositivo)
        const localTheme = this.data.theme;
        const localActiveId = this.data.activeEmployeeId;
        this.data = serverData;
        this.data.theme = localTheme || serverData.theme || 'dark';
        this.data.activeEmployeeId = localActiveId || serverData.activeEmployeeId;
        this._saveLocal();
        this._saveToIndexedDB(this.data);
        // Re-renderizar se UI já estiver disponível
        if (window.ui) window.ui.renderAll();
        console.log('✅ Dados sincronizados do servidor com sucesso.');
      } else if (serverData && serverData.status === 'empty') {
        // Servidor vazio — enviar dados locais como seed inicial
        this.serverAvailable = true;
        await this._pushToServer();
        console.log('📤 Dados locais enviados ao servidor como seed inicial.');
      }
    } catch (err) {
      console.log('Servidor offline ou inacessível. Operando com dados locais.');
    }
  }

  async _pushToServer() {
    if (!this.serverAvailable) {
      // Tentar mesmo assim — pode ser a primeira vez
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.data)
        });
        if (res.ok) {
          this.serverAvailable = true;
          console.log('✅ Dados enviados ao servidor.');
        }
      } catch (e) {}
      return;
    }
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.data)
      });
    } catch (e) {
      console.log('Falha ao enviar dados ao servidor (offline?).');
    }
  }

  // ========== SAVE CENTRAL (grava em tudo) ==========

  saveData(data = this.data) {
    this.data = data;
    this._saveLocal();
    this._saveToIndexedDB(data);
    this._pushToServer();
  }

  // ========== MÉTODOS DE FUNCIONÁRIO ==========

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
      this.saveData();
    }
  }

  addEmployee(name, role, targetHours = 40, color = '#6366f1') {
    const initials = name.trim().split(' ').filter(Boolean).map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'FN';
    const newEmp = {
      id: 'emp-' + Date.now(),
      name: name.trim(),
      role: role.trim() || 'Funcionário',
      targetHours: parseInt(targetHours, 10) || 40,
      color,
      avatar: initials,
      stopwatch: { isRunning: false, startTime: null, accumulatedMs: 0 },
      entries: [],
      completedCyclesCount: 0,
      completedCyclesHistory: []
    };
    this.data.employees.push(newEmp);
    this.data.activeEmployeeId = newEmp.id;
    this.saveData();
    return newEmp;
  }

  updateEmployee(id, updatedFields) {
    const emp = this.data.employees.find(e => e.id === id);
    if (emp) {
      Object.assign(emp, updatedFields);
      if (updatedFields.name) {
        emp.avatar = updatedFields.name.trim().split(' ').filter(Boolean).map(n => n[0]).join('').substring(0, 2).toUpperCase();
      }
      this.saveData();
    }
  }

  deleteEmployee(id) {
    if (this.data.employees.length <= 1) {
      throw new Error('É necessário ter pelo menos 1 funcionário cadastrado.');
    }
    this.data.employees = this.data.employees.filter(e => e.id !== id);
    if (this.data.activeEmployeeId === id) {
      this.data.activeEmployeeId = this.data.employees[0].id;
    }
    this.saveData();
  }

  // ========== LANÇAMENTOS / HISTÓRICO ==========

  addEntry(employeeId, { hours, minutes, date, type = 'manual', description = '' }) {
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

    this.saveData();
    return entry;
  }

  updateEntry(employeeId, entryId, { hours, minutes, date, description }) {
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

    this.saveData();
    return true;
  }

  deleteEntry(employeeId, entryId) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp || !emp.entries) return false;

    const index = emp.entries.findIndex(e => e.id === entryId);
    if (index !== -1) {
      const removed = emp.entries.splice(index, 1)[0];
      if (!this.data.undoStack) this.data.undoStack = [];
      this.data.undoStack.push({ action: 'delete_entry', employeeId, entry: removed, index });
      this.saveData();
      return removed;
    }
    return false;
  }

  undoLastAction() {
    if (!this.data.undoStack || this.data.undoStack.length === 0) return null;

    const lastAction = this.data.undoStack.pop();
    const emp = this.data.employees.find(e => e.id === lastAction.employeeId);
    if (!emp) return null;

    if (lastAction.action === 'add_entry') {
      emp.entries = (emp.entries || []).filter(e => e.id !== lastAction.entry.id);
      this.saveData();
      return { message: 'Lançamento desfeito com sucesso.', entry: lastAction.entry };
    } else if (lastAction.action === 'delete_entry') {
      if (!emp.entries) emp.entries = [];
      emp.entries.splice(lastAction.index, 0, lastAction.entry);
      this.saveData();
      return { message: 'Registro restaurado com sucesso.', entry: lastAction.entry };
    }
    return null;
  }

  // ========== CÁLCULO DE HORAS ==========

  getEmployeeTotalMinutes(employeeId) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp || !emp.entries) return 0;
    return emp.entries.reduce((acc, curr) => acc + (curr.totalMinutes || 0), 0);
  }

  getEmployeeCurrentCycleStats(employeeId) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp) return { currentMinutes: 0, targetMinutes: 2400, percent: 0, remainingMinutes: 2400 };

    const totalMinutes = this.getEmployeeTotalMinutes(employeeId);
    const targetMinutes = (emp.targetHours || 40) * 60;
    const remainingMinutes = Math.max(0, targetMinutes - totalMinutes);
    const percent = Math.min(100, Math.round((totalMinutes / targetMinutes) * 100));

    return { totalMinutes, targetMinutes, remainingMinutes, percent, isCompleted: totalMinutes >= targetMinutes };
  }

  completeCycle(employeeId) {
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
    this.saveData();
    return cycleRecord;
  }

  // ========== CRONÔMETRO ==========

  updateStopwatch(employeeId, stopwatchState) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (emp) {
      emp.stopwatch = { ...emp.stopwatch, ...stopwatchState };
      this.saveData();
    }
  }

  // ========== TEMA ==========

  getTheme() { return this.data.theme || 'dark'; }
  setTheme(theme) { this.data.theme = theme; this.saveData(); }

  // ========== BACKUP ==========

  exportBackup() { return JSON.stringify(this.data, null, 2); }

  importBackup(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.employees || !Array.isArray(parsed.employees)) {
        throw new Error('Arquivo JSON inválido para backup de Ponto.');
      }
      this.data = parsed;
      this.saveData();
      return true;
    } catch (e) {
      console.error('Falha ao importar backup:', e);
      throw e;
    }
  }
}

export const store = new Store();
