/**
 * timer.js - Controlador do Cronômetro em Tempo Real por Funcionário
 * 
 * Sincronizado com o relógio do servidor via store.getSynchronizedNow()
 */

import { store } from './store.js';

class StopwatchTimer {
  constructor() {
    this.intervalId = null;
    this.onTickCallbacks = [];

    // Quando o store sincroniza com o servidor, verifica se algum cronômetro começou a rodar
    store.onSync(() => {
      this.checkTicker();
    });
  }

  // Registra callback para atualizar a UI a cada segundo
  onTick(callback) {
    this.onTickCallbacks.push(callback);
  }

  notifyTick(elapsedMs) {
    this.onTickCallbacks.forEach(cb => cb(elapsedMs, this.formatMs(elapsedMs)));
  }

  // Calcula o tempo decorrido total em milissegundos com sincronia de servidor
  getElapsedMs(employeeId) {
    const emp = store.getEmployees().find(e => e.id === employeeId);
    if (!emp || !emp.stopwatch) return 0;

    const { isRunning, startTime, accumulatedMs = 0 } = emp.stopwatch;
    const baseMs = Math.max(0, Number(accumulatedMs) || 0);

    if (isRunning && startTime) {
      const now = store.getSynchronizedNow();
      const startMs = Number(startTime) || now;
      const sessionElapsed = Math.max(0, now - startMs);
      return baseMs + sessionElapsed;
    }

    return baseMs;
  }

  // Detecta se a sessão contínua do cronômetro passou de um limite (ex: 16h = 57.600.000 ms)
  // Ajuda a avisar se alguém esqueceu o cronômetro rodando por dias
  isLongSession(employeeId, thresholdHours = 16) {
    const emp = store.getEmployees().find(e => e.id === employeeId);
    if (!emp || !emp.stopwatch || !emp.stopwatch.isRunning || !emp.stopwatch.startTime) {
      return false;
    }
    const now = store.getSynchronizedNow();
    const sessionMs = now - Number(emp.stopwatch.startTime);
    return sessionMs > (thresholdHours * 3600 * 1000);
  }

  // Formata ms para HH:MM:SS (com suporte a mais de 99 horas se necessário)
  formatMs(ms) {
    const safeMs = Math.max(0, Number(ms) || 0);
    const totalSeconds = Math.floor(safeMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = num => String(num).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  // Formata ms para horas e minutos (ex: 2h 45m)
  getHoursAndMinutes(ms) {
    const safeMs = Math.max(0, Number(ms) || 0);
    const totalMinutes = Math.floor(safeMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes, totalMinutes };
  }

  // Inicia o cronômetro para o funcionário
  start(employeeId) {
    const emp = store.getEmployees().find(e => e.id === employeeId);
    if (!emp) return;

    if (emp.stopwatch && emp.stopwatch.isRunning) return;

    const now = store.getSynchronizedNow();
    store.saveStopwatch(employeeId, {
      isRunning: true,
      startTime: now,
      accumulatedMs: Number(emp.stopwatch?.accumulatedMs) || 0
    });

    this.startTicker();
  }

  // Pausa o cronômetro para o funcionário
  pause(employeeId) {
    const emp = store.getEmployees().find(e => e.id === employeeId);
    if (!emp || !emp.stopwatch || !emp.stopwatch.isRunning) return;

    const currentElapsed = this.getElapsedMs(employeeId);

    store.saveStopwatch(employeeId, {
      isRunning: false,
      startTime: null,
      accumulatedMs: currentElapsed
    });

    this.checkStopTicker();
  }

  // Alterna entre Iniciar e Pausar
  toggle(employeeId) {
    const emp = store.getEmployees().find(e => e.id === employeeId);
    if (!emp) return false;

    if (emp.stopwatch && emp.stopwatch.isRunning) {
      this.pause(employeeId);
      return false;
    } else {
      this.start(employeeId);
      return true;
    }
  }

  // Zera o cronômetro do funcionário
  reset(employeeId) {
    store.saveStopwatch(employeeId, {
      isRunning: false,
      startTime: null,
      accumulatedMs: 0
    });

    this.checkStopTicker();
    this.notifyTick(0);
  }

  // Inicia o intervalo de 1 segundo se houver algum cronômetro rodando
  startTicker() {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      const activeEmp = store.getActiveEmployee();
      if (activeEmp) {
        const ms = this.getElapsedMs(activeEmp.id);
        this.notifyTick(ms);
      }
    }, 1000);
  }

  // Para o intervalo se nenhum cronômetro de nenhum funcionário estiver rodando
  checkStopTicker() {
    const anyRunning = store.getEmployees().some(e => e.stopwatch && e.stopwatch.isRunning);
    if (!anyRunning && this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Verifica e sincroniza o ticker de acordo com os estados salvos
  checkTicker() {
    const anyRunning = store.getEmployees().some(e => e.stopwatch && e.stopwatch.isRunning);
    if (anyRunning) {
      this.startTicker();
    } else {
      this.checkStopTicker();
    }
  }

  // Inicializa o ticker se houver cronômetros rodando ao carregar a página
  init() {
    this.checkTicker();
  }
}

export const timer = new StopwatchTimer();
