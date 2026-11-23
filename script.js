// ==================== DATA MODEL (14 UNITS ACROSS 3 FLOORS) ====================
const unitsData = [
  { id: 'AC-101', floor: 1, room: 'R. Kelas 1A', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'COOL', fan: 'AUTO', swing: true, setpoint: 24, temp: 26.8, rh: 62, compressor: 'OFF', kw: 0.00, kwh: 18.4, people: 0, hmiState: 'off' },
  { id: 'AC-102', floor: 1, room: 'R. Kelas 1B', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'COOL', fan: 'AUTO', swing: true, setpoint: 24, temp: 26.5, rh: 61, compressor: 'OFF', kw: 0.00, kwh: 19.2, people: 0, hmiState: 'off' },
  { id: 'AC-103', floor: 1, room: 'Lab Komputer 1', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'COOL', fan: 'HIGH', swing: true, setpoint: 22, temp: 25.9, rh: 58, compressor: 'OFF', kw: 0.00, kwh: 31.6, people: 0, hmiState: 'off' },
  { id: 'AC-104', floor: 1, room: 'R. Tata Usaha', on: false, reason: 'Di luar jadwal', control: 'AUTO', mode: 'COOL', fan: 'LOW', swing: false, setpoint: 24, temp: 26.2, rh: 60, compressor: 'OFF', kw: 0.00, kwh: 21.0, people: 0, hmiState: 'off' },
  { id: 'AC-105', floor: 1, room: 'Perpustakaan', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'ECO', fan: 'AUTO', swing: true, setpoint: 24, temp: 26.4, rh: 59, compressor: 'OFF', kw: 0.00, kwh: 22.8, people: 0, hmiState: 'off' },

  { id: 'AC-201', floor: 2, room: 'R. Kelas 2A', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'COOL', fan: 'AUTO', swing: true, setpoint: 24, temp: 27.1, rh: 63, compressor: 'OFF', kw: 0.00, kwh: 17.5, people: 0, hmiState: 'off' },
  { id: 'AC-202', floor: 2, room: 'R. Kelas 2B', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'COOL', fan: 'AUTO', swing: true, setpoint: 24, temp: 27.0, rh: 63, compressor: 'OFF', kw: 0.00, kwh: 16.9, people: 0, hmiState: 'off' },
  { id: 'AC-203', floor: 2, room: 'R. Dosen', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'COOL', fan: 'MED', swing: false, setpoint: 23, temp: 26.1, rh: 57, compressor: 'OFF', kw: 0.00, kwh: 24.3, people: 0, hmiState: 'off' },
  { id: 'AC-204', floor: 2, room: 'Lab Komputer 2', on: false, reason: 'Sensor offline', control: 'AUTO', mode: 'COOL', fan: 'HIGH', swing: true, setpoint: 22, temp: 27.6, rh: 65, compressor: 'OFF', kw: 0.00, kwh: 28.4, people: 0, hmiState: 'offline' },
  { id: 'AC-205', floor: 2, room: 'R. Rapat Utama', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'COOL', fan: 'AUTO', swing: true, setpoint: 23, temp: 26.3, rh: 60, compressor: 'OFF', kw: 0.00, kwh: 14.2, people: 0, hmiState: 'off' },

  { id: 'AC-301', floor: 3, room: 'R. Kelas 3A', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'COOL', fan: 'AUTO', swing: true, setpoint: 24, temp: 27.4, rh: 64, compressor: 'OFF', kw: 0.00, kwh: 15.8, people: 0, hmiState: 'off' },
  { id: 'AC-302', floor: 3, room: 'R. Kelas 3B', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'COOL', fan: 'AUTO', swing: true, setpoint: 24, temp: 27.3, rh: 64, compressor: 'OFF', kw: 0.00, kwh: 15.1, people: 0, hmiState: 'off' },
  { id: 'AC-303', floor: 3, room: 'R. Server', on: true, reason: 'R. Server (24/7)', control: 'AUTO', mode: 'COOL', fan: 'HIGH', swing: false, setpoint: 20, temp: 21.8, rh: 48, compressor: 'RUN', kw: 1.65, kwh: 36.2, people: 1, hmiState: 'server' },
  { id: 'AC-304', floor: 3, room: 'Aula Serbaguna', on: false, reason: 'R. Kosong', control: 'AUTO', mode: 'COOL', fan: 'HIGH', swing: true, setpoint: 23, temp: 27.5, rh: 65, compressor: 'OFF', kw: 0.00, kwh: 12.4, people: 0, hmiState: 'off' }
];

const alarmsData = [
  { id: 'ALM-01', time: '22:14:08', unit: 'AC-303', room: 'R. Server', category: 'Suhu', message: 'Lonjakan beban termal rak server terdeteksi (kompresor high-duty)', acked: false },
  { id: 'ALM-02', time: '21:48:32', unit: 'AC-204', room: 'Lab Komputer 2', category: 'Komunikasi', message: 'Timeout telemetri node Modbus/MQTT > 120 detik', acked: false },
  { id: 'ALM-03', time: '18:05:11', unit: 'AC-103', room: 'Lab Komputer 1', category: 'Otomasi', message: 'Auto-off berhasil dijalankan setelah ruang kosong 15 menit', acked: true }
];

const auditLogs = [
  { time: '22:30:12', category: 'Otomasi', unit: 'AC-303', actor: 'RuleEngine', text: 'Menjaga mode COOL 20°C pada R. Server (prioritas 24/7)' },
  { time: '22:14:08', category: 'Alarm', unit: 'AC-303', actor: 'System', text: 'Alarm beban termal tinggi dipicu pada R. Server' },
  { time: '21:48:32', category: 'Alarm', unit: 'AC-204', actor: 'System', text: 'Koneksi sensor Lab Komputer 2 terputus (offline)' },
  { time: '21:00:00', category: 'Otomasi', unit: 'ALL-NON-SRV', actor: 'Scheduler', text: 'Sapu akhir hari: 13 unit non-server dipastikan OFF' },
  { time: '19:42:19', category: 'Operator', unit: 'AC-205', actor: 'Operator', text: 'Mengembalikan AC-205 (R. Rapat Utama) ke mode AUTO' },
  { time: '18:15:04', category: 'System', unit: 'GATEWAY-01', actor: 'System', text: 'Sinkronisasi tarif kWh & kalibrasi sensor suhu luar (26.2°C)' }
];

const buildingSchedule = [
  { day: 'Senin', active: true, open: '07:00', close: '21:00' },
  { day: 'Selasa', active: true, open: '07:00', close: '21:00' },
  { day: 'Rabu', active: true, open: '07:00', close: '21:00' },
  { day: 'Kamis', active: true, open: '07:00', close: '21:00' },
  { day: 'Jumat', active: true, open: '07:00', close: '21:00' },
  { day: 'Sabtu', active: true, open: '07:30', close: '17:00' },
  { day: 'Minggu', active: false, open: '08:00', close: '12:00' }
];

let selectedRemoteId = 'AC-303';
let currentAuditFilter = 'Semua';
let powerChart, tempCompareChart, roomEnergyChart, dailyEnergyChart;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initCharts();
  populateRemoteSelect();
  renderAll();
  setInterval(simulateTelemetryTick, 5000);
});

function initClock() {
  const update = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('liveClock').textContent = `${hh}:${mm}:${ss} WIB`;
  };
  update();
  setInterval(update, 1000);
}

function getTimeString() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
}

function renderAll() {
  updateKpis();
  renderUnitsTable();
  renderDashboardActivities();
  renderHmiFloors();
  renderAlarmsTable();
  renderScheduleTable();
  renderAuditTable();
  updateRemoteView();
}

// ==================== NAVIGATION ====================
function switchMainView(viewName) {
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.toggle('active', sec.id === `view-${viewName}`);
  });
}

function switchHmiTab(tabName) {
  document.querySelectorAll('.subtab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.hmiTab === tabName);
  });
  document.querySelectorAll('.hmi-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `hmi-tab-${tabName}`);
  });
}

function toggleRole() {
  const badge = document.getElementById('roleBadge');
  badge.textContent = badge.textContent === 'Operator' ? 'Admin Gedung' : 'Operator';
  showToast(`Peran aktif beralih ke ${badge.textContent}`);
}

// ==================== KPI & DASHBOARD TABLE ====================
function updateKpis() {
  const activeUnits = unitsData.filter(u => u.on);
  const totalKw = activeUnits.reduce((sum, u) => sum + u.kw, 0);
  const totalKwh = unitsData.reduce((sum, u) => sum + u.kwh, 0);
  const estCost = Math.round(totalKwh * 1444.7);
  const idleOnCount = activeUnits.filter(u => u.people === 0 && u.id !== 'AC-303').length;

  document.getElementById('kpiActiveUnits').textContent = `${activeUnits.length}/${unitsData.length} unit`;
  document.getElementById('kpiActiveSub').textContent = `${unitsData.length - activeUnits.length} unit standby / mati`;
  document.getElementById('kpiPower').textContent = `${totalKw.toFixed(2)} kW`;
  document.getElementById('chartPowerNow').textContent = `${totalKw.toFixed(2)} kW`;
  document.getElementById('kpiEnergy').textContent = `${totalKwh.toFixed(1)} kWh`;
  document.getElementById('kpiCost').textContent = `Est. biaya Rp ${estCost.toLocaleString('id-ID')}`;
  document.getElementById('kpiRooms').textContent = `${activeUnits.length}/${unitsData.length} ruangan`;
  document.getElementById('kpiIdleCount').textContent = idleOnCount;
}

function renderUnitsTable() {
  const query = document.getElementById('unitSearch').value.toLowerCase();
  const floorVal = document.getElementById('floorFilter').value;
  const statusVal = document.getElementById('statusFilter').value;
  const tbody = document.getElementById('unitsTableBody');

  const filtered = unitsData.filter(u => {
    const matchSearch = u.id.toLowerCase().includes(query) || u.room.toLowerCase().includes(query);
    const matchFloor = floorVal === 'all' || String(u.floor) === floorVal;
    const matchStatus = statusVal === 'all' || (statusVal === 'ON' ? u.on : !u.on);
    return matchSearch && matchFloor && matchStatus;
  });

  tbody.innerHTML = filtered.map(u => `
    <tr>
      <td class="mono"><strong>${u.id}</strong></td>
      <td>${u.room} <small style="color:#64748b">(Lt.${u.floor})</small></td>
      <td><span class="badge ${u.on ? 'badge-on' : 'badge-off'}">${u.on ? 'ON' : 'OFF'}</span></td>
      <td><span class="reason-tag">• ${u.reason}</span></td>
      <td><span class="badge ${u.control === 'AUTO' ? 'badge-auto' : 'badge-manual'}">${u.control}</span></td>
      <td class="mono">${u.mode}</td>
      <td class="mono">${u.setpoint}°C</td>
      <td class="mono">${u.temp.toFixed(1)}°C</td>
      <td class="mono">${u.rh}%</td>
      <td class="mono">${u.compressor}</td>
      <td class="mono">${u.kw.toFixed(2)} kW</td>
      <td class="mono">${u.kwh.toFixed(1)} kWh</td>
      <td>
        <button class="btn-xs ${u.on ? 'turn-off' : 'turn-on'}" onclick="toggleSingleUnit('${u.id}')">
          ${u.on ? 'Matikan' : 'Nyalakan'}
        </button>
        <button class="btn-xs" onclick="openUnitInRemote('${u.id}')">Remote</button>
      </td>
    </tr>
  `).join('');
}

function renderDashboardActivities() {
  const list = document.getElementById('dashboardActivityList');
  list.innerHTML = auditLogs.slice(0, 8).map(item => `
    <li class="activity-item">
      <div class="activity-top">
        <span>${item.unit} • ${item.category}</span>
        <span>${item.time}</span>
      </div>
      <div class="activity-msg">${item.text}</div>
    </li>
  `).join('');
}

// ==================== UNIT ACTIONS ====================
function deriveHmiState(u) {
  if (u.reason === 'Sensor offline') return 'offline';
  if (!u.on) return 'off';
  if (u.id === 'AC-303') return 'server';
  if (u.temp <= 23.0) return 'dingin';
  if (u.temp >= 26.0) return 'tinggi';
  return 'sedang';
}

function toggleSingleUnit(unitId) {
  const u = unitsData.find(x => x.id === unitId);
  if (!u) return;
  u.on = !u.on;
  u.control = 'MANUAL';
  u.reason = u.on ? 'Manual Operator' : 'Dimatikan Operator';
  u.compressor = u.on ? 'RUN' : 'OFF';
  u.kw = u.on ? (u.id === 'AC-304' ? 2.45 : 1.45) : 0.00;
  u.hmiState = deriveHmiState(u);

  pushAudit('Operator', u.id, 'Operator', `${u.on ? 'Menyalakan' : 'Mematikan'} ${u.id} (${u.room}) secara manual`);
  renderAll();
  showToast(`${u.id} (${u.room}) berhasil di-${u.on ? 'nyalakan' : 'matikan'}`);
}

function openUnitInRemote(unitId) {
  selectedRemoteId = unitId;
  document.getElementById('remoteUnitSelect').value = unitId;
  updateRemoteView();
  switchMainView('remote');
}

// ==================== HMI FLOOR PLANS & ALARMS ====================
function renderHmiFloors() {
  const container = document.getElementById('hmiFloorsContainer');
  const floors = [1, 2, 3];

  container.innerHTML = floors.map(f => {
    const floorUnits = unitsData.filter(u => u.floor === f);
    const activeCount = floorUnits.filter(u => u.on).length;
    return `
      <div class="floor-block">
        <div class="floor-header">
          <div style="display:flex;align-items:center;gap:10px;">
            <span class="floor-badge">LT ${f}</span>
            <strong style="font-size:14px;">Lantai ${f} — Zona Akademik &amp; Fasilitas</strong>
          </div>
          <span style="font-size:12px;color:#94a3b8;font-family:var(--font-mono)">${activeCount}/${floorUnits.length} unit aktif</span>
        </div>
        <div class="rooms-grid">
          ${floorUnits.map(u => {
            const state = deriveHmiState(u);
            const labelMap = {
              off: 'OFF',
              dingin: 'dingin',
              sedang: 'sedang',
              tinggi: 'tinggi',
              server: 'server',
              offline: 'offline'
            };
            return `
              <div class="room-tile state-${state}" onclick="openUnitInRemote('${u.id}')" title="Klik untuk buka Remote ${u.id}">
                <div class="tile-top">
                  <span class="tile-code">${u.id}</span>
                  <span class="tile-pill ${state}">${labelMap[state]}</span>
                </div>
                <div class="tile-room">${u.room}</div>
                <div class="tile-metrics">
                  <span>🌡 ${u.temp.toFixed(1)}°C</span>
                  <span>🎯 ${u.setpoint}°C</span>
                  <span>👤 ${u.people}</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function executeGroupCommand(cmd) {
  const floorVal = document.getElementById('hmiGroupFloor').value;
  const targets = unitsData.filter(u => floorVal === 'all' || String(u.floor) === floorVal);

  targets.forEach(u => {
    if (cmd === 'ON') {
      u.on = true;
      u.control = 'MANUAL';
      u.reason = 'Grup ON Operator';
      u.compressor = 'RUN';
      u.kw = u.id === 'AC-303' ? 1.65 : 1.40;
    } else if (cmd === 'OFF') {
      u.on = false;
      u.control = 'MANUAL';
      u.reason = 'Grup OFF Operator';
      u.compressor = 'OFF';
      u.kw = 0.00;
    } else if (cmd === 'AUTO') {
      u.control = 'AUTO';
      if (u.id !== 'AC-303' && u.people === 0) {
        u.on = false;
        u.reason = 'R. Kosong';
        u.compressor = 'OFF';
        u.kw = 0.00;
      }
    } else if (cmd === 'MANUAL') {
      u.control = 'MANUAL';
      u.reason = 'Mode Manual Grup';
    }
    u.hmiState = deriveHmiState(u);
  });

  const scopeLabel = floorVal === 'all' ? 'Semua Lantai' : `Lantai ${floorVal}`;
  pushAudit('Operator', scopeLabel, 'Operator', `Perintah Grup "${cmd}" dijalankan pada ${scopeLabel}`);
  renderAll();
  showToast(`Perintah grup "${cmd}" diterapkan (${scopeLabel})`);
}

function renderAlarmsTable() {
  const tbody = document.getElementById('alarmsTableBody');
  const unacked = alarmsData.filter(a => !a.acked);

  document.getElementById('navAlarmCount').textContent = unacked.length;
  document.getElementById('navAlarmCount').style.display = unacked.length > 0 ? 'inline-block' : 'none';

  const banner = document.getElementById('alarmBanner');
  if (unacked.length === 0) {
    banner.classList.add('resolved');
    document.getElementById('alarmBannerTitle').textContent = 'Semua Alarm Telah Di-ACK';
    document.getElementById('alarmBannerDesc').textContent = 'Tidak ada alarm aktif yang belum dikonfirmasi operator.';
  } else {
    banner.classList.remove('resolved');
    document.getElementById('alarmBannerTitle').textContent = `${unacked.length} Alarm Aktif Memerlukan Perhatian`;
    document.getElementById('alarmBannerDesc').textContent = unacked.map(a => `${a.unit} (${a.room}): ${a.message}`).join(' • ');
  }

  tbody.innerHTML = alarmsData.map(a => `
    <tr>
      <td class="mono">${a.time}</td>
      <td class="mono"><strong>${a.unit}</strong></td>
      <td>${a.room}</td>
      <td><span class="badge badge-manual">${a.category}</span></td>
      <td>${a.message}</td>
      <td><span class="badge ${a.acked ? 'badge-ok' : 'badge-alarm'}">${a.acked ? 'ACKED' : 'AKTIF'}</span></td>
      <td>
        ${a.acked
          ? '<span style="color:#64748b;font-size:11px">Selesai</span>'
          : `<button class="btn-xs turn-on" onclick="ackAlarm('${a.id}')">ACK</button>`}
      </td>
    </tr>
  `).join('');
}

function ackAlarm(alarmId) {
  const alarm = alarmsData.find(a => a.id === alarmId);
  if (!alarm) return;
  alarm.acked = true;
  pushAudit('Alarm', alarm.unit, 'Operator', `Konfirmasi ACK alarm: ${alarm.message}`);
  renderAlarmsTable();
  renderDashboardActivities();
  renderAuditTable();
  showToast(`Alarm ${alarm.unit} dikonfirmasi (ACK)`);
}

function ackAllAlarms() {
  alarmsData.forEach(a => a.acked = true);
  pushAudit('Alarm', 'ALL', 'Operator', 'Melakukan ACK pada seluruh alarm aktif');
  renderAlarmsTable();
  renderDashboardActivities();
  renderAuditTable();
  showToast('Semua alarm berhasil di-ACK');
}

// ==================== SCHEDULE & AUDIT LOG ====================
function renderScheduleTable() {
  const tbody = document.getElementById('scheduleTableBody');
  tbody.innerHTML = buildingSchedule.map((row, idx) => `
    <tr>
      <td><strong>${row.day}</strong></td>
      <td>
        <input type="checkbox" ${row.active ? 'checked' : ''} onchange="buildingSchedule[${idx}].active = this.checked" />
      </td>
      <td><input type="time" class="input-dark" value="${row.open}" onchange="buildingSchedule[${idx}].open = this.value" /></td>
      <td><input type="time" class="input-dark" value="${row.close}" onchange="buildingSchedule[${idx}].close = this.value" /></td>
    </tr>
  `).join('');
}

function logAutomationToggle(label, state) {
  pushAudit('Otomasi', 'SYSTEM', 'Operator', `Mengubah "${label}" menjadi ${state ? 'AKTIF' : 'NONAKTIF'}`);
  renderDashboardActivities();
  renderAuditTable();
  showToast(`${label}: ${state ? 'Aktif' : 'Nonaktif'}`);
}

function saveAutomationParams() {
  const emptyMins = document.getElementById('paramEmptyMins').value;
  const defTemp = document.getElementById('paramDefaultSetpoint').value;
  const afterAlarm = document.getElementById('paramAfterHoursAlarm').value;
  pushAudit('Otomasi', 'RULE-CFG', 'Operator', `Update parameter: kosong ${emptyMins}m, setpoint ${defTemp}°C, alarm luar jam ${afterAlarm}m`);
  renderDashboardActivities();
  renderAuditTable();
  showToast('Parameter otomasi berhasil disimpan');
}

function saveScheduleHours() {
  pushAudit('Otomasi', 'SCHEDULE', 'Operator', 'Memperbarui jadwal operasional gedung Senin–Minggu');
  renderDashboardActivities();
  renderAuditTable();
  showToast('Jadwal operasional berhasil disimpan');
}

function filterAuditLog(category, btn) {
  currentAuditFilter = category;
  document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAuditTable();
}

function renderAuditTable() {
  const tbody = document.getElementById('auditTableBody');
  const rows = auditLogs.filter(l => currentAuditFilter === 'Semua' || l.category === currentAuditFilter);
  tbody.innerHTML = rows.map(l => `
    <tr>
      <td class="mono">${l.time}</td>
      <td><span class="badge badge-auto">${l.category}</span></td>
      <td class="mono"><strong>${l.unit}</strong></td>
      <td>${l.actor}</td>
      <td>${l.text}</td>
    </tr>
  `).join('');
}

function pushAudit(category, unit, actor, text) {
  auditLogs.unshift({ time: getTimeString(), category, unit, actor, text });
  if (auditLogs.length > 40) auditLogs.pop();
}

// ==================== REMOTE SIMULATOR ====================
function populateRemoteSelect() {
  const sel = document.getElementById('remoteUnitSelect');
  const floors = [1, 2, 3];
  sel.innerHTML = floors.map(f => {
    const groupUnits = unitsData.filter(u => u.floor === f);
    return `<optgroup label="Lantai ${f}">
      ${groupUnits.map(u => `<option value="${u.id}" ${u.id === selectedRemoteId ? 'selected' : ''}>${u.id} — ${u.room}</option>`).join('')}
    </optgroup>`;
  }).join('');
}

function selectRemoteUnit(unitId) {
  selectedRemoteId = unitId;
  updateRemoteView();
}

function updateRemoteView() {
  const u = unitsData.find(x => x.id === selectedRemoteId) || unitsData[0];
  const lcd = document.getElementById('remoteLcd');
  lcd.classList.toggle('off', !u.on);

  document.getElementById('lcdMode').textContent = `MODE: ${u.mode}`;
  document.getElementById('lcdFan').textContent = `FAN: ${u.fan}`;
  document.getElementById('lcdSwing').textContent = `SWING: ${u.swing ? 'ON' : 'OFF'}`;
  document.getElementById('lcdTemp').textContent = u.on ? u.setpoint : '--';
  document.getElementById('lcdRoomTemp').textContent = `${u.temp.toFixed(1)}°C`;
  document.getElementById('lcdRh').textContent = `${u.rh}%`;
  document.getElementById('lcdKw').textContent = `${u.kw.toFixed(2)} kW`;
  document.getElementById('lcdUnitCode').textContent = `${u.id} • ${u.room}`;
  document.getElementById('lcdCtrlBadge').textContent = u.control;

  document.getElementById('remoteUnitMeta').innerHTML = `
    <div class="meta-line"><span>Lantai / Zona</span><strong>Lantai ${u.floor}</strong></div>
    <div class="meta-line"><span>Status Daya</span><strong>${u.on ? 'MENYALA (ON)' : 'MATI (OFF)'}</strong></div>
    <div class="meta-line"><span>Mode Kontrol</span><strong>${u.control}</strong></div>
    <div class="meta-line"><span>Okupansi Ruangan</span><strong>${u.people} orang terdeteksi</strong></div>
  `;
}

function blinkIrLed() {
  const led = document.getElementById('irLed');
  led.classList.add('blink');
  setTimeout(() => led.classList.remove('blink'), 220);
}

function remoteAction(action) {
  const u = unitsData.find(x => x.id === selectedRemoteId);
  if (!u) return;
  blinkIrLed();

  const modes = ['COOL', 'AUTO', 'DRY', 'FAN'];
  const fans = ['AUTO', 'LOW', 'MED', 'HIGH'];

  if (action === 'power') {
    u.on = !u.on;
    u.control = 'MANUAL';
    u.reason = u.on ? 'Remote Operator' : 'Dimatikan via Remote';
    u.compressor = u.on ? 'RUN' : 'OFF';
    u.kw = u.on ? 1.45 : 0.00;
    pushAudit('Operator', u.id, 'Remote', `Tombol POWER: ${u.on ? 'ON' : 'OFF'}`);
  } else if (action === 'mode') {
    u.control = 'MANUAL';
    u.mode = modes[(modes.indexOf(u.mode) + 1) % modes.length];
    pushAudit('Operator', u.id, 'Remote', `Ubah mode ke ${u.mode}`);
  } else if (action === 'fan') {
    u.control = 'MANUAL';
    u.fan = fans[(fans.indexOf(u.fan) + 1) % fans.length];
    pushAudit('Operator', u.id, 'Remote', `Ubah kecepatan fan ke ${u.fan}`);
  } else if (action === 'swing') {
    u.control = 'MANUAL';
    u.swing = !u.swing;
    pushAudit('Operator', u.id, 'Remote', `Swing ${u.swing ? 'ON' : 'OFF'}`);
  } else if (action === 'tempUp') {
    u.control = 'MANUAL';
    u.setpoint = Math.min(30, u.setpoint + 1);
    pushAudit('Operator', u.id, 'Remote', `Naikkan setpoint ke ${u.setpoint}°C`);
  } else if (action === 'tempDown') {
    u.control = 'MANUAL';
    u.setpoint = Math.max(16, u.setpoint - 1);
    pushAudit('Operator', u.id, 'Remote', `Turunkan setpoint ke ${u.setpoint}°C`);
  } else if (action === 'returnAuto') {
    u.control = 'AUTO';
    u.setpoint = Number(document.getElementById('paramDefaultSetpoint').value || 24);
    if (u.id !== 'AC-303' && u.people === 0) {
      u.on = false;
      u.reason = 'R. Kosong';
      u.compressor = 'OFF';
      u.kw = 0.00;
    }
    pushAudit('Otomasi', u.id, 'Operator', `Dikembalikan ke kontrol AUTO`);
    showToast(`${u.id} dikembalikan ke mode AUTO`);
  }

  u.hmiState = deriveHmiState(u);
  renderAll();
}

// ==================== CHARTS & TELEMETRY SIMULATION ====================
function initCharts() {
  const commonGrid = { color: '#e2e8f0' };
  const commonTicks = { color: '#475569', font: { family: 'JetBrains Mono', size: 10 } };

  powerChart = new Chart(document.getElementById('powerChart'), {
    type: 'line',
    data: {
      labels: ['21:35', '21:40', '21:45', '21:50', '21:55', '22:00', '22:05', '22:10', '22:15', '22:20', '22:25', '22:30'],
      datasets: [{
        label: 'Daya (kW)',
        data: [3.10, 3.05, 2.90, 2.85, 1.70, 1.68, 1.65, 1.66, 1.64, 1.65, 1.67, 1.65],
        borderColor: '#0f172a',
        backgroundColor: 'rgba(15, 23, 42, 0.08)',
        borderWidth: 2.2,
        tension: 0.35,
        fill: true,
        pointRadius: 2.5,
        pointBackgroundColor: '#0f172a'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: commonGrid, ticks: commonTicks },
        y: { grid: commonGrid, ticks: commonTicks, beginAtZero: true }
      }
    }
  });

  tempCompareChart = new Chart(document.getElementById('tempCompareChart'), {
    type: 'line',
    data: {
      labels: ['12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
      datasets: [
        {
          label: 'Indoor (°C)',
          data: [24.2, 24.5, 24.8, 25.4, 26.1, 26.4],
          borderColor: '#0f172a',
          backgroundColor: 'transparent',
          borderWidth: 2.2,
          tension: 0.35
        },
        {
          label: 'Luar (°C)',
          data: [31.5, 32.1, 30.4, 28.2, 27.0, 26.2],
          borderColor: '#94a3b8',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          borderWidth: 2,
          tension: 0.35
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: commonGrid, ticks: commonTicks },
        y: { grid: commonGrid, ticks: commonTicks }
      }
    }
  });

  roomEnergyChart = new Chart(document.getElementById('roomEnergyChart'), {
    type: 'bar',
    data: {
      labels: ['R. Server', 'Lab Kom 1', 'Lab Kom 2', 'R. Dosen', 'Perpus', 'R. TU'],
      datasets: [{
        label: 'kWh',
        data: [36.2, 31.6, 28.4, 24.3, 22.8, 21.0],
        backgroundColor: ['#0f172a', '#1e293b', '#334155', '#475569', '#64748b', '#94a3b8'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: commonTicks },
        y: { grid: commonGrid, ticks: commonTicks }
      }
    }
  });

  dailyEnergyChart = new Chart(document.getElementById('dailyEnergyChart'), {
    type: 'bar',
    data: {
      labels: ['Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min', 'Hari Ini'],
      datasets: [{
        label: 'kWh Harian',
        data: [312, 328, 319, 298, 185, 74, 293.8],
        backgroundColor: ['#cbd5e1', '#cbd5e1', '#cbd5e1', '#cbd5e1', '#94a3b8', '#94a3b8', '#0f172a'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: commonTicks },
        y: { grid: commonGrid, ticks: commonTicks }
      }
    }
  });
}

function simulateTelemetryTick() {
  unitsData.forEach(u => {
    if (u.reason === 'Sensor offline') return;
    if (u.on) {
      const delta = (u.setpoint - u.temp) * 0.08 + (Math.random() * 0.14 - 0.07);
      u.temp = +(u.temp + delta).toFixed(1);
      u.kwh = +(u.kwh + u.kw * (5 / 3600)).toFixed(2);
    } else {
      const drift = (26.6 - u.temp) * 0.04 + (Math.random() * 0.1 - 0.05);
      u.temp = +(u.temp + drift).toFixed(1);
    }
  });

  const totalKw = unitsData.filter(u => u.on).reduce((s, u) => s + u.kw, 0);
  if (powerChart) {
    const ds = powerChart.data.datasets[0].data;
    ds.shift();
    ds.push(+totalKw.toFixed(2));
    powerChart.update('none');
  }

  updateKpis();
  renderUnitsTable();
  renderHmiFloors();
  updateRemoteView();
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(window.__toastId);
  window.__toastId = setTimeout(() => el.classList.remove('show'), 2600);
}
