/**
 * timer.js - Controlador do Cronômetro em Tempo Real por Funcionário
 */

import { store } from './store.js';

class StopwatchTimer {
  constructor() {
    this.intervalId = null;
    this.onTickCallbacks = [];
  }

  // Registra callback para atualizar a UI a cada segundo
  onTick(callback) {
    this.onTickCallbacks.push(callback);
  }

  notifyTick(elapsedMs) {
    this.onTickCallbacks.forEach(cb => cb(elapsedMs, this.formatMs(elapsedMs)));
  }

  // Calcula o tempo decorrido total em milissegundos
  getElapsedMs(employeeId) {
    const emp = store.getEmployees().find(e => e.id === employeeId);
    if (!emp || !emp.stopwatch) return 0;

    const { isRunning, startTime, accumulatedMs = 0 } = emp.stopwatch;

    if (isRunning && startTime) {
      const now = Date.now();
      const sessionElapsed = Math.max(0, now - startTime);
      return accumulatedMs + sessionElapsed;
    }

    return accumulatedMs;
  }

  // Formata ms para HH:MM:SS
  formatMs(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = num => String(num).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  // Formata ms para horas e minutos (ex: 2h 45m)
  getHoursAndMinutes(ms) {
    const totalMinutes = Math.floor(ms / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes, totalMinutes };
  }

  // Inicia o cronômetro para o funcionário
  start(employeeId) {
    const emp = store.getEmployees().find(e => e.id === employeeId);
    if (!emp) return;

    if (emp.stopwatch.isRunning) return; // Já está rodando

    store.updateStopwatch(employeeId, {
      isRunning: true,
      startTime: Date.now()
    });

    this.startTicker();
  }

  // Pausa o cronômetro para o funcionário (autonomia total para pausar quando quiser)
  pause(employeeId) {
    const emp = store.getEmployees().find(e => e.id === employeeId);
    if (!emp || !emp.stopwatch.isRunning) return;

    const currentElapsed = this.getElapsedMs(employeeId);

    store.updateStopwatch(employeeId, {
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

    if (emp.stopwatch.isRunning) {
      this.pause(employeeId);
      return false; // Agora pausado
    } else {
      this.start(employeeId);
      return true; // Agora rodando
    }
  }

  // Zera o cronômetro do funcionário
  reset(employeeId) {
    store.updateStopwatch(employeeId, {
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

  // Inicializa o ticker se houver cronômetros salvos como 'rodando' ao recarregar a página
  init() {
    const anyRunning = store.getEmployees().some(e => e.stopwatch && e.stopwatch.isRunning);
    if (anyRunning) {
      this.startTicker();
    }
  }
}

export const timer = new StopwatchTimer();
