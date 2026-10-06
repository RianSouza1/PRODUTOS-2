/**
 * ui.js - Renderização da Interface do Usuário (DOM & Eventos)
 * 
 * Atualizações em tempo real com preservação de foco em formulários
 */

import { store } from './store.js';
import { timer } from './timer.js';

class UI {
  constructor() {
    this.activeView = 'employee'; // 'employee' ou 'team'
    window.ui = this;
  }

  init() {
    this.applyTheme(store.getTheme());

    // Observa mudanças de conectividade com o servidor
    store.onConnectionChange((status, details) => {
      this.updateConnectionStatus(status, details);
    });

    // Observa sincronizações em tempo real vindas do servidor
    store.onSync((data, isBackground) => {
      this.onStoreSync(data, isBackground);
    });

    this.renderAll();
  }

  // --- STATUS DE CONECTIVIDADE ---
  updateConnectionStatus(status, details) {
    const container = document.getElementById('connection-status');
    const textElem = document.getElementById('connection-status-text');
    if (!container || !textElem) return;

    container.className = `connection-status ${status}`;
    if (status === 'connected') {
      textElem.textContent = 'Online';
      container.title = 'Conectado e sincronizado em tempo real com o servidor';
    } else if (status === 'syncing') {
      textElem.textContent = 'Sincronizando...';
      container.title = 'Enviando alterações para o servidor';
    } else {
      textElem.textContent = 'Offline (Local)';
      container.title = details || 'Servidor inacessível. Usando dados locais salvos.';
    }
  }

  // --- TRATAMENTO INTELIGENTE DE SINCRONIZAÇÃO ---
  onStoreSync(data, isBackground) {
    // Se o usuário estiver interagindo com um input de formulário ou com modal aberto,
    // não reconstrói o DOM inteiro para não roubar o foco da digitação.
    const isTyping = document.activeElement && (
      document.activeElement.tagName === 'INPUT' ||
      document.activeElement.tagName === 'TEXTAREA' ||
      document.activeElement.tagName === 'SELECT'
    );
    const hasActiveModal = document.querySelector('.modal-backdrop.active');

    if (isTyping || hasActiveModal) {
      // Atualização suave: apenas cronômetro, pills e barra de progresso
      this.renderEmployeeTabs();
      const activeEmp = store.getActiveEmployee();
      if (activeEmp) {
        this.updateStopwatchUI(activeEmp.id);
      }
      return;
    }

    // Renderização completa se a tela estiver livre
    this.renderAll();
  }

  // --- TEMAS ---
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    store.setTheme(theme);
  }

  toggleTheme() {
    const current = store.getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
  }

  // --- RENDERIZAÇÃO GERAL ---
  renderAll() {
    this.renderEmployeeTabs();
    
    if (this.activeView === 'team') {
      document.getElementById('single-emp-container')?.classList.add('hidden');
      document.getElementById('team-container')?.classList.remove('hidden');
      this.renderTeamDashboard();
    } else {
      document.getElementById('single-emp-container')?.classList.remove('hidden');
      document.getElementById('team-container')?.classList.add('hidden');
      this.renderActiveEmployeeData();
    }
  }

  // --- SELETOR DE FUNCIONÁRIOS (PILLS) ---
  renderEmployeeTabs() {
    const container = document.getElementById('employee-pills-container');
    if (!container) return;

    const employees = store.getEmployees();
    const activeEmp = store.getActiveEmployee();

    let html = `
      <button class="emp-pill ${this.activeView === 'team' ? 'active' : ''}" data-view="team">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        Painel da Equipe
      </button>
    `;

    employees.forEach(emp => {
      const isActive = this.activeView === 'employee' && emp.id === activeEmp.id;
      const isRunning = emp.stopwatch && emp.stopwatch.isRunning;

      html += `
        <button class="emp-pill ${isActive ? 'active' : ''}" data-emp-id="${emp.id}" title="${this.escapeHtml(emp.name)} (${emp.role || 'Funcionário'})">
          <span class="emp-avatar" style="background: ${emp.color || '#3b82f6'};">${emp.avatar || 'FN'}</span>
          <span>${this.escapeHtml(emp.name)}</span>
          ${isRunning ? '<span style="color: var(--success); font-size: 0.8rem; animation: pulse 1s infinite;" title="Cronômetro Ativo">●</span>' : ''}
        </button>
      `;
    });

    container.innerHTML = html;
  }

  // --- RENDERIZAÇÃO DO FUNCIONÁRIO ATIVO ---
  renderActiveEmployeeData() {
    const emp = store.getActiveEmployee();
    if (!emp) return;

    // Estatísticas do ciclo
    const stats = store.getEmployeeCurrentCycleStats(emp.id);

    // Hero counter
    const currentHours = Math.floor(stats.totalMinutes / 60);
    const currentMins = stats.totalMinutes % 60;
    const remainingHours = Math.floor(stats.remainingMinutes / 60);
    const remainingMins = stats.remainingMinutes % 60;

    const counterElem = document.getElementById('counter-current');
    if (counterElem) counterElem.textContent = `${currentHours}h ${String(currentMins).padStart(2, '0')}min`;

    const targetElem = document.getElementById('counter-target');
    if (targetElem) targetElem.textContent = `/ ${emp.targetHours || 40}h`;

    const remainingElem = document.getElementById('remaining-text');
    if (remainingElem) {
      if (stats.isCompleted) {
        remainingElem.innerHTML = `<strong style="color: var(--success);">🎉 Meta do Ciclo Concluída! (${currentHours}h ${currentMins}min)</strong>`;
      } else {
        remainingElem.innerHTML = `Faltam <strong>${remainingHours}h ${String(remainingMins).padStart(2, '0')}min</strong> para completar o ciclo`;
      }
    }

    // Barra de progresso
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = `${stats.percent}%`;

    const percentText = document.getElementById('progress-percentage');
    if (percentText) percentText.textContent = `${stats.percent}% concluído`;

    // Botão Concluir Ciclo
    const btnCompleteCycle = document.getElementById('btn-complete-cycle');
    if (btnCompleteCycle) {
      if (stats.isCompleted) {
        btnCompleteCycle.classList.remove('hidden');
      } else {
        btnCompleteCycle.classList.add('hidden');
      }
    }

    // Stats Grid
    const cyclesVal = document.getElementById('completed-cycles');
    if (cyclesVal) cyclesVal.textContent = emp.completedCyclesCount || 0;

    const totalGenVal = document.getElementById('total-general');
    if (totalGenVal) {
      const pastMinutes = (emp.completedCyclesHistory || []).reduce((acc, c) => acc + (c.totalMinutes || 0), 0);
      const grandTotalMin = pastMinutes + stats.totalMinutes;
      const gH = Math.floor(grandTotalMin / 60);
      const gM = grandTotalMin % 60;
      totalGenVal.textContent = `${gH}h ${String(gM).padStart(2, '0')}min`;
    }

    // Header do perfil ativo
    const empAvatarHeader = document.getElementById('emp-active-avatar');
    if (empAvatarHeader) {
      empAvatarHeader.textContent = emp.avatar || 'FN';
      empAvatarHeader.style.background = emp.color || '#3b82f6';
    }

    const empNameHeader = document.getElementById('emp-active-name');
    if (empNameHeader) empNameHeader.textContent = emp.name;

    const empRoleHeader = document.getElementById('emp-active-role');
    if (empRoleHeader) empRoleHeader.textContent = `${emp.role || 'Funcionário'} • Meta: ${emp.targetHours || 40}h`;

    // Cronômetro do funcionário ativo
    this.updateStopwatchUI(emp.id);

    // Histórico de entradas
    this.renderHistoryList(emp);
  }

  // --- ATUALIZAÇÃO DO CRONÔMETRO NA UI ---
  updateStopwatchUI(employeeId) {
    const activeEmp = store.getActiveEmployee();
    if (!activeEmp || activeEmp.id !== employeeId) return;

    const stopwatchCard = document.getElementById('stopwatch-card');
    const statusTag = document.getElementById('stopwatch-status-tag');
    const display = document.getElementById('stopwatch-display');
    const startBtn = document.getElementById('btn-stopwatch-start');
    const startText = document.getElementById('stopwatch-start-text');
    const startIcon = document.getElementById('stopwatch-start-icon');
    const warningBanner = document.getElementById('stopwatch-warning');

    const elapsedMs = timer.getElapsedMs(employeeId);
    const timeFormatted = timer.formatMs(elapsedMs);
    const isRunning = activeEmp.stopwatch && activeEmp.stopwatch.isRunning;

    if (display) display.textContent = timeFormatted;

    // Alerta de sessão prolongada (>16h)
    if (warningBanner) {
      if (timer.isLongSession(employeeId, 16)) {
        warningBanner.classList.remove('hidden');
      } else {
        warningBanner.classList.add('hidden');
      }
    }

    if (isRunning) {
      stopwatchCard?.classList.add('running');
      if (statusTag) {
        statusTag.textContent = 'RODANDO (AO VIVO)';
        statusTag.className = 'stopwatch-status-tag running';
      }
      if (startBtn) startBtn.className = 'btn-stopwatch-main running';
      if (startText) startText.textContent = 'PAUSAR CRONÔMETRO';
      if (startIcon) {
        startIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;
      }
    } else {
      stopwatchCard?.classList.remove('running');
      if (statusTag) {
        statusTag.textContent = 'PAUSADO';
        statusTag.className = 'stopwatch-status-tag';
      }
      if (startBtn) startBtn.className = 'btn-stopwatch-main';
      if (startText) startText.textContent = 'INICIAR CRONÔMETRO';
      if (startIcon) {
        startIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
      }
    }
  }

  // --- HISTÓRICO DE LANÇAMENTOS AGRUPADO POR DIA ---
  renderHistoryList(employee) {
    const listElem = document.getElementById('history-list');
    const countElem = document.getElementById('history-count');
    if (!listElem) return;

    const entries = employee.entries || [];
    if (countElem) countElem.textContent = `${entries.length} registro(s)`;

    if (entries.length === 0) {
      listElem.innerHTML = `
        <div class="empty-state">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--text-subtle); margin-bottom: 0.5rem;"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
          <div style="font-weight: 600; font-size: 0.9rem;">Nenhum registro no histórico</div>
          <div style="font-size: 0.8rem; color: var(--text-subtle); margin-top: 0.2rem;">Adicione horas acima para começar o controle deste funcionário.</div>
        </div>
      `;
      return;
    }

    // Agrupa por data YYYY-MM-DD
    const groups = {};
    entries.forEach(entry => {
      const d = new Date(entry.date);
      const dateKey = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      if (!groups[dateKey]) {
        groups[dateKey] = {
          dateObj: d,
          totalMinutes: 0,
          items: []
        };
      }
      groups[dateKey].totalMinutes += entry.totalMinutes || 0;
      groups[dateKey].items.push(entry);
    });

    let html = '';
    const sortedDates = Object.keys(groups).sort().reverse();

    sortedDates.forEach(dateKey => {
      const group = groups[dateKey];
      const d = group.dateObj;
      
      const dayName = d.toLocaleDateString('pt-BR', { weekday: 'long' });
      const formattedDate = d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const capitalizedDay = dayName.charAt(0).toUpperCase() + dayName.slice(1);
      
      const gH = Math.floor(group.totalMinutes / 60);
      const gM = group.totalMinutes % 60;
      const totalDayStr = `${gH}h ${String(gM).padStart(2, '0')}min`;

      html += `
        <div class="history-group" style="margin-bottom: 1.25rem;">
          <div class="history-group-header" style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0.75rem; background: var(--bg-card-hover); border-radius: var(--radius-md); font-size: 0.85rem; font-weight: 700; margin-bottom: 0.6rem; border-left: 4px solid var(--primary);">
            <span>📅 ${capitalizedDay} • ${formattedDate}</span>
            <span style="color: var(--primary);">Total no dia: ${totalDayStr}</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      `;

      group.items.forEach(entry => {
        const itemDate = new Date(entry.date);
        const formattedTime = itemDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const isStopwatch = entry.type === 'stopwatch';

        html += `
          <div class="history-item">
            <div class="history-left">
              <div class="history-icon-badge ${isStopwatch ? 'stopwatch' : ''}">
                ${isStopwatch 
                  ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path></svg>' 
                  : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
                }
              </div>
              <div>
                <div class="history-info-title">${entry.description ? this.escapeHtml(entry.description) : (isStopwatch ? 'Tempo Cronometrado' : 'Lançamento Manual')}</div>
                <div class="history-info-sub">Horário: ${formattedTime} • Origem: ${isStopwatch ? 'Cronômetro' : 'Manual'}</div>
              </div>
            </div>

            <div class="history-right">
              <div class="history-duration">+${entry.hours}h ${String(entry.minutes).padStart(2, '0')}m</div>
              <div class="history-actions">
                <button class="btn-icon btn-edit-entry" data-entry-id="${entry.id}" title="Editar" style="width: 32px; height: 32px;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
                <button class="btn-icon btn-delete-entry" data-entry-id="${entry.id}" title="Excluir" style="width: 32px; height: 32px; color: var(--danger);">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    listElem.innerHTML = html;
  }

  // --- PAINEL DA EQUIPE (TEAM DASHBOARD) ---
  renderTeamDashboard() {
    const container = document.getElementById('team-grid-container');
    if (!container) return;

    const employees = store.getEmployees();

    let html = '';
    employees.forEach(emp => {
      const stats = store.getEmployeeCurrentCycleStats(emp.id);
      const isRunning = emp.stopwatch && emp.stopwatch.isRunning;
      const elapsedMs = timer.getElapsedMs(emp.id);
      const timeStr = timer.formatMs(elapsedMs);

      html += `
        <div class="team-card">
          <div>
            <div class="team-card-header">
              <div class="team-avatar-lg" style="background: ${emp.color || '#3b82f6'};">${emp.avatar || 'FN'}</div>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <h3 style="font-size: 1.1rem; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${this.escapeHtml(emp.name)}</h3>
                  <button class="btn-icon btn-edit-emp-trigger" data-emp-id="${emp.id}" title="Editar Funcionário" style="width: 28px; height: 28px; flex-shrink: 0;">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  </button>
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${this.escapeHtml(emp.role || 'Funcionário')}</div>
              </div>
            </div>

            <!-- Progresso de Horas -->
            <div style="margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.35rem;">
                <span>Ciclo de Horas</span>
                <span style="color: var(--primary);">${Math.floor(stats.totalMinutes / 60)}h ${stats.totalMinutes % 60}m / ${emp.targetHours || 40}h</span>
              </div>
              <div class="progress-track" style="height: 10px;">
                <div class="progress-bar" style="width: ${stats.percent}%;"></div>
              </div>
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">
                ${stats.percent}% concluído • ${emp.completedCyclesCount || 0} ciclo(s) fechado(s)
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--border-color); flex-wrap: wrap; gap: 0.5rem;">
            <div style="font-size: 0.8rem;">
              <span class="stopwatch-status-tag ${isRunning ? 'running' : ''}" style="margin: 0; font-size: 0.72rem;">
                ${isRunning ? `● AO VIVO: ${timeStr}` : 'PAUSADO'}
              </span>
            </div>
            <button class="btn-ghost btn-select-employee" data-emp-id="${emp.id}" style="font-weight: 700; padding: 0.4rem 0.8rem;">
              Ver Detalhes →
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // --- MODAL DE EDIÇÃO DE FUNCIONÁRIO ---
  openEditEmployeeModal(empId) {
    const emp = store.getEmployees().find(e => e.id === empId);
    if (!emp) return;

    const modal = document.getElementById('edit-employee-modal');
    document.getElementById('edit-emp-id').value = emp.id;
    document.getElementById('edit-emp-name').value = emp.name;
    document.getElementById('edit-emp-role').value = emp.role || '';
    document.getElementById('edit-emp-target').value = emp.targetHours || 40;
    document.getElementById('edit-emp-color').value = emp.color || '#3b82f6';

    modal?.classList.add('active');
  }

  closeEditEmployeeModal() {
    document.getElementById('edit-employee-modal')?.classList.remove('active');
  }

  // --- TOAST NOTIFICATIONS ---
  showToast(title, message) {
    const banner = document.getElementById('toast-banner');
    const titleElem = document.getElementById('toast-title');
    const msgElem = document.getElementById('toast-message');

    if (titleElem) titleElem.textContent = title;
    if (msgElem) msgElem.textContent = message;

    if (banner) {
      banner.classList.add('show');
      setTimeout(() => {
        banner.classList.remove('show');
      }, 4000);
    }
  }

  // Escape HTML para evitar XSS
  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

export const ui = new UI();
