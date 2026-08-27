/**
 * store.js - Gerenciamento de Dados e Persistência Local (LocalStorage)
 */

const STORAGE_KEY = 'contabilizador_ponto_v1';

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
      color: '#3b82f6', // azul
      avatar: 'ED',
      stopwatch: {
        isRunning: false,
        startTime: null,
        accumulatedMs: 0
      },
      entries: [],
      completedCyclesCount: 0,
      completedCyclesHistory: []
    },
    {
      id: 'emp-2',
      name: 'Públio',
      role: 'Funcionário',
      targetHours: 40,
      color: '#10b981', // verde
      avatar: 'PB',
      stopwatch: {
        isRunning: false,
        startTime: null,
        accumulatedMs: 0
      },
      entries: [],
      completedCyclesCount: 0,
      completedCyclesHistory: []
    }
  ],
  undoStack: [] // Para armazenar última ação reversível
};

class Store {
  constructor() {
    this.data = this.loadData();
  }

  loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        this.saveData(DEFAULT_DATA);
        return JSON.parse(JSON.stringify(DEFAULT_DATA));
      }
      const parsed = JSON.parse(raw);
      // Garantir estrutura correta se dados antigos existirem
      if (!parsed.employees || parsed.employees.length === 0) {
        return JSON.parse(JSON.stringify(DEFAULT_DATA));
      }
      return parsed;
    } catch (e) {
      console.error('Erro ao carregar dados do LocalStorage:', e);
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }

  saveData(data = this.data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Erro ao salvar dados no LocalStorage:', e);
    }
  }

  // --- MÉTODOS DE FUNCIONÁRIO ---

  getEmployees() {
    return this.data.employees;
  }

  getActiveEmployee() {
    const emp = this.data.employees.find(e => e.id === this.data.activeEmployeeId);
    return emp || this.data.employees[0];
  }

  setActiveEmployee(id) {
    if (this.data.employees.some(e => e.id === id)) {
      this.data.activeEmployeeId = id;
      this.saveData();
    }
  }

  addEmployee(name, role, targetHours = 40, color = '#6366f1') {
    const initials = name
      .trim()
      .split(' ')
      .filter(Boolean)
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'FN';

    const newEmp = {
      id: 'emp-' + Date.now(),
      name: name.trim(),
      role: role.trim() || 'Funcionário',
      targetHours: parseInt(targetHours, 10) || 40,
      color: color,
      avatar: initials,
      stopwatch: {
        isRunning: false,
        startTime: null,
        accumulatedMs: 0
      },
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
        emp.avatar = updatedFields.name
          .trim()
          .split(' ')
          .filter(Boolean)
          .map(n => n[0])
          .join('')
          .substring(0, 2)
          .toUpperCase();
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

  // --- MÉTODOS DE LANÇAMENTOS / HISTÓRICO ---

  addEntry(employeeId, { hours, minutes, date, type = 'manual', description = '' }) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp) return null;

    const totalMinutes = (parseInt(hours, 10) || 0) * 60 + (parseInt(minutes, 10) || 0);
    if (totalMinutes <= 0) return null;

    const entry = {
      id: 'entry-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      hours: parseInt(hours, 10) || 0,
      minutes: parseInt(minutes, 10) || 0,
      totalMinutes,
      date: date ? new Date(date).toISOString() : new Date().toISOString(),
      type,
      description: description.trim()
    };

    emp.entries.unshift(entry); // Adiciona no início
    this.data.undoStack.push({
      action: 'add_entry',
      employeeId,
      entry
    });

    this.saveData();
    return entry;
  }

  updateEntry(employeeId, entryId, { hours, minutes, date, description }) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp) return false;

    const entry = emp.entries.find(e => e.id === entryId);
    if (!entry) return false;

    const h = parseInt(hours, 10) || 0;
    const m = parseInt(minutes, 10) || 0;
    entry.hours = h;
    entry.minutes = m;
    entry.totalMinutes = h * 60 + m;
    if (date) entry.date = new Date(date).toISOString();
    if (description !== undefined) entry.description = description.trim();

    this.saveData();
    return true;
  }

  deleteEntry(employeeId, entryId) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp) return false;

    const index = emp.entries.findIndex(e => e.id === entryId);
    if (index !== -1) {
      const removed = emp.entries.splice(index, 1)[0];
      this.data.undoStack.push({
        action: 'delete_entry',
        employeeId,
        entry: removed,
        index
      });
      this.saveData();
      return removed;
    }
    return false;
  }

  undoLastAction() {
    if (this.data.undoStack.length === 0) return null;

    const lastAction = this.data.undoStack.pop();
    const emp = this.data.employees.find(e => e.id === lastAction.employeeId);
    if (!emp) return null;

    if (lastAction.action === 'add_entry') {
      emp.entries = emp.entries.filter(e => e.id !== lastAction.entry.id);
      this.saveData();
      return { message: 'Lançamento desfeito com sucesso.', entry: lastAction.entry };
    } else if (lastAction.action === 'delete_entry') {
      emp.entries.splice(lastAction.index, 0, lastAction.entry);
      this.saveData();
      return { message: 'Registro restaurado com sucesso.', entry: lastAction.entry };
    }
    return null;
  }

  // --- MÉTODOS DE CÁLCULO DE HORAS ---

  getEmployeeTotalMinutes(employeeId) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp) return 0;
    return emp.entries.reduce((acc, curr) => acc + (curr.totalMinutes || 0), 0);
  }

  getEmployeeCurrentCycleStats(employeeId) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (!emp) return { currentMinutes: 0, targetMinutes: 2400, percent: 0, remainingMinutes: 2400 };

    const totalMinutes = this.getEmployeeTotalMinutes(employeeId);
    const targetMinutes = (emp.targetHours || 40) * 60;
    const remainingMinutes = Math.max(0, targetMinutes - totalMinutes);
    const percent = Math.min(100, Math.round((totalMinutes / targetMinutes) * 100));

    return {
      totalMinutes,
      targetMinutes,
      remainingMinutes,
      percent,
      isCompleted: totalMinutes >= targetMinutes
    };
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
      entriesCount: emp.entries.length,
      archivedEntries: [...emp.entries]
    };

    emp.completedCyclesCount += 1;
    emp.completedCyclesHistory.push(cycleRecord);
    // Limpa entradas ativas do ciclo para iniciar novo ciclo zerado
    emp.entries = [];
    this.saveData();
    return cycleRecord;
  }

  // --- PERSISTÊNCIA DO CRONÔMETRO ---

  updateStopwatch(employeeId, stopwatchState) {
    const emp = this.data.employees.find(e => e.id === employeeId);
    if (emp) {
      emp.stopwatch = { ...emp.stopwatch, ...stopwatchState };
      this.saveData();
    }
  }

  // --- TEMA E BACKUP ---

  getTheme() {
    return this.data.theme || 'dark';
  }

  setTheme(theme) {
    this.data.theme = theme;
    this.saveData();
  }

  exportBackup() {
    return JSON.stringify(this.data, null, 2);
  }

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
