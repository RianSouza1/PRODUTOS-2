/**
 * app.js - Entrada principal da aplicação
 */

import { store } from './store.js';
import { timer } from './timer.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializa UI e Timer
  ui.init();
  timer.init();

  // Atualiza tempo do cronômetro na interface a cada segundo
  timer.onTick((elapsedMs) => {
    const activeEmp = store.getActiveEmployee();
    if (activeEmp) {
      ui.updateStopwatchUI(activeEmp.id);
    }
  });

  // 2. Event Listeners Globais & Navegação

  // Alternar Tema (Dark / Light)
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    ui.toggleTheme();
  });

  // Seletor de Funcionários & Views (Pills no Header)
  document.getElementById('employee-pills-container')?.addEventListener('click', (e) => {
    const pill = e.target.closest('.emp-pill');
    if (!pill) return;

    const view = pill.dataset.view;
    if (view === 'team') {
      ui.activeView = 'team';
      ui.renderAll();
      return;
    }

    const empId = pill.dataset.empId;
    if (empId) {
      store.setActiveEmployee(empId);
      ui.activeView = 'employee';
      ui.renderAll();
    }
  });

  // Botão Adicionar Novo Funcionário
  document.getElementById('btn-add-employee-modal')?.addEventListener('click', () => {
    const modal = document.getElementById('employee-modal');
    const form = document.getElementById('employee-form');
    if (form) form.reset();
    modal?.classList.add('active');
  });

  document.getElementById('btn-cancel-employee')?.addEventListener('click', () => {
    document.getElementById('employee-modal')?.classList.remove('active');
  });

  document.getElementById('employee-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('emp-name');
    const roleInput = document.getElementById('emp-role');
    const targetInput = document.getElementById('emp-target');
    const colorInput = document.getElementById('emp-color');

    if (!nameInput.value.trim()) return;

    const newEmp = store.addEmployee(
      nameInput.value,
      roleInput.value,
      targetInput.value || 40,
      colorInput.value || '#3b82f6'
    );

    document.getElementById('employee-modal')?.classList.remove('active');
    ui.activeView = 'employee';
    ui.renderAll();
    ui.showToast('Funcionário Cadastrado!', `${newEmp.name} adicionado à equipe.`);
  });

  // 3. Cronômetro Actions

  // Botão Iniciar / Pausar Cronômetro
  document.getElementById('btn-stopwatch-start')?.addEventListener('click', () => {
    const emp = store.getActiveEmployee();
    if (!emp) return;

    const isNowRunning = timer.toggle(emp.id);
    ui.updateStopwatchUI(emp.id);
    ui.renderEmployeeTabs(); // Atualiza indicador visual na pill

    if (isNowRunning) {
      ui.showToast('Cronômetro Iniciado', `Contando tempo para ${emp.name}.`);
    } else {
      ui.showToast('Cronômetro Pausado', `Você pode retomar o cronômetro a qualquer momento.`);
    }
  });

  // Botão Zerar Cronômetro
  document.getElementById('btn-stopwatch-reset')?.addEventListener('click', () => {
    const emp = store.getActiveEmployee();
    if (!emp) return;

    if (confirm(`Deseja zerar o cronômetro de ${emp.name}?`)) {
      timer.reset(emp.id);
      ui.updateStopwatchUI(emp.id);
      ui.renderEmployeeTabs();
      ui.showToast('Cronômetro Zerado', 'O tempo do cronômetro foi reiniciado.');
    }
  });

  // Botão Transferir Tempo Cronometrado para o Contador
  document.getElementById('btn-stopwatch-add-to-cycle')?.addEventListener('click', () => {
    const emp = store.getActiveEmployee();
    if (!emp) return;

    const elapsedMs = timer.getElapsedMs(emp.id);
    const { hours, minutes, totalMinutes } = timer.getHoursAndMinutes(elapsedMs);

    if (totalMinutes <= 0) {
      alert('É necessário ter ao menos 1 minuto acumulado no cronômetro para enviar ao contador.');
      return;
    }

    const desc = prompt('Digite uma descrição/tarefa para esta sessão (opcional):', 'Sessão Cronometrada');

    // Adiciona ao histórico do funcionário
    store.addEntry(emp.id, {
      hours,
      minutes,
      type: 'stopwatch',
      description: desc || 'Sessão Cronometrada'
    });

    // Zerar cronômetro após transferir
    timer.reset(emp.id);

    ui.renderAll();
    ui.showToast('Horas Computadas! 🎉', `+${hours}h ${minutes}m adicionados ao ciclo de ${emp.name}.`);
  });

  // 4. Lançamento Manual & Presets

  // Presets Rápidos (+15m, +30m, +1h, +2h, +4h, +8h)
  document.querySelectorAll('.preset-row .btn-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const h = parseInt(btn.dataset.h, 10) || 0;
      const m = parseInt(btn.dataset.m, 10) || 0;
      const emp = store.getActiveEmployee();
      if (!emp) return;

      store.addEntry(emp.id, {
        hours: h,
        minutes: m,
        type: 'manual',
        description: `Lançamento rápido (+${h > 0 ? h + 'h' : ''}${m > 0 ? m + 'm' : ''})`
      });

      ui.renderAll();
      ui.showToast('Horas Adicionadas', `+${h}h ${m}m adicionados ao ciclo de ${emp.name}.`);
    });
  });

  // Define data padrão do formulário como a data atual YYYY-MM-DD
  const dateInput = document.getElementById('input-date');
  if (dateInput) {
    const today = new Date();
    dateInput.value = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
  }

  // Formulário Manual de Adicionar Horas
  document.getElementById('add-hours-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emp = store.getActiveEmployee();
    if (!emp) return;

    const hInput = document.getElementById('input-hours');
    const mInput = document.getElementById('input-minutes');
    const dInput = document.getElementById('input-date');
    const descInput = document.getElementById('input-description');

    let dateIso;
    if (dInput && dInput.value) {
      try {
        const parts = dInput.value.split('-');
        if (parts.length === 3) {
          const y = parseInt(parts[0], 10);
          const m = parseInt(parts[1], 10) - 1;
          const d = parseInt(parts[2], 10);
          dateIso = new Date(y, m, d, 12, 0, 0).toISOString();
        } else {
          dateIso = new Date().toISOString();
        }
      } catch (err) {
        dateIso = new Date().toISOString();
      }
    } else {
      dateIso = new Date().toISOString();
    }

    const entry = store.addEntry(emp.id, {
      hours: hInput ? hInput.value : 0,
      minutes: mInput ? mInput.value : 0,
      date: dateIso,
      type: 'manual',
      description: descInput?.value || 'Lançamento manual de horas'
    });

    if (entry) {
      if (descInput) descInput.value = '';
      ui.renderAll();
      ui.showToast('Lançamento Registrado! 🎉', `+${entry.hours}h ${entry.minutes}m salvos em ${emp.name}.`);
    } else {
      alert('Por favor, informe ao menos 1 minuto ou hora para o lançamento.');
    }
  });

  // Botão Desfazer (Undo)
  document.getElementById('btn-undo')?.addEventListener('click', () => {
    const result = store.undoLastAction();
    if (result) {
      ui.renderAll();
      ui.showToast('Ação Desfeita', result.message);
    } else {
      alert('Nenhuma ação recente para desfazer.');
    }
  });

  // Botão Concluir Ciclo de 40h
  document.getElementById('btn-complete-cycle')?.addEventListener('click', () => {
    const emp = store.getActiveEmployee();
    if (!emp) return;

    if (confirm(`Parabéns! Deseja arquivar este ciclo de 40h para ${emp.name} e iniciar um novo ciclo zerado?`)) {
      const cycle = store.completeCycle(emp.id);
      ui.renderAll();
      ui.showToast('Ciclo Concluído! 🏆', `Ciclo de ${cycle.hoursCount}h arquivado com sucesso.`);
    }
  });

  // 5. Histórico: Edição e Exclusão de Entradas

  document.getElementById('history-list')?.addEventListener('click', (e) => {
    const emp = store.getActiveEmployee();
    if (!emp) return;

    // Botão Excluir
    const btnDelete = e.target.closest('.btn-delete-entry');
    if (btnDelete) {
      const entryId = btnDelete.dataset.entryId;
      if (confirm('Deseja excluir este registro de horas?')) {
        store.deleteEntry(emp.id, entryId);
        ui.renderAll();
        ui.showToast('Registro Excluído', 'O lançamento foi removido. Você pode desfazer.');
      }
      return;
    }

    // Botão Editar
    const btnEdit = e.target.closest('.btn-edit-entry');
    if (btnEdit) {
      const entryId = btnEdit.dataset.entryId;
      const entry = emp.entries.find(item => item.id === entryId);
      if (!entry) return;

      document.getElementById('edit-id').value = entry.id;
      document.getElementById('edit-hours').value = entry.hours;
      document.getElementById('edit-minutes').value = entry.minutes;
      const entryDate = new Date(entry.date);
      const formattedEntryDate = entryDate.getFullYear() + '-' + String(entryDate.getMonth() + 1).padStart(2, '0') + '-' + String(entryDate.getDate()).padStart(2, '0');
      document.getElementById('edit-date').value = formattedEntryDate;
      document.getElementById('edit-description').value = entry.description || '';

      document.getElementById('edit-modal')?.classList.add('active');
    }
  });

  // Cancelar Edição Modal
  document.getElementById('btn-cancel-edit')?.addEventListener('click', () => {
    document.getElementById('edit-modal')?.classList.remove('active');
  });

  // Salvar Edição Modal
  document.getElementById('edit-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emp = store.getActiveEmployee();
    if (!emp) return;

    const id = document.getElementById('edit-id').value;
    const hours = document.getElementById('edit-hours').value;
    const minutes = document.getElementById('edit-minutes').value;
    const dateVal = document.getElementById('edit-date').value;
    const description = document.getElementById('edit-description').value;

    const dateIso = dateVal ? new Date(dateVal + 'T12:00:00').toISOString() : undefined;

    store.updateEntry(emp.id, id, { hours, minutes, date: dateIso, description });
    document.getElementById('edit-modal')?.classList.remove('active');
    ui.renderAll();
    ui.showToast('Registro Atualizado', 'As alterações foram salvas com sucesso.');
  });

  // 6. Selecionar Funcionário no Dashboard da Equipe
  document.getElementById('team-grid-container')?.addEventListener('click', (e) => {
    const btnSelect = e.target.closest('.btn-select-employee');
    if (!btnSelect) return;

    const empId = btnSelect.dataset.empId;
    if (empId) {
      store.setActiveEmployee(empId);
      ui.activeView = 'employee';
      ui.renderAll();
    }
  });

  // 7. Backup Export & Import

  // Exportar Backup JSON
  document.getElementById('btn-export')?.addEventListener('click', () => {
    const jsonStr = store.exportBackup();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_ponto_40h_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    ui.showToast('Backup Exportado!', 'Arquivo JSON baixado para o seu computador.');
  });

  // Importar Backup JSON
  document.getElementById('btn-import')?.addEventListener('click', () => {
    document.getElementById('import-file-input')?.click();
  });

  document.getElementById('import-file-input')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        store.importBackup(event.target.result);
        ui.renderAll();
        ui.showToast('Backup Restaurado!', 'Os dados foram importados com sucesso.');
      } catch (err) {
        alert('Erro ao importar backup: arquivo JSON inválido.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  });

  // Relatório CSV para a Folha/Ponto
  document.getElementById('btn-report')?.addEventListener('click', () => {
    const emp = store.getActiveEmployee();
    if (!emp) return;

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'Funcionario,Data,Tipo,Horas,Minutos,TotalMinutos,Descricao\n';

    (emp.entries || []).forEach(e => {
      const dateStr = new Date(e.date).toLocaleDateString('pt-BR');
      const desc = (e.description || '').replace(/"/g, '""');
      csvContent += `"${emp.name}","${dateStr}","${e.type}",${e.hours},${e.minutes},${e.totalMinutes},"${desc}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `relatorio_ponto_${emp.name.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    ui.showToast('Relatório Gerado!', `CSV baixado para ${emp.name}.`);
  });
});
