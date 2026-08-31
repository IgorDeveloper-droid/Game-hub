const requests = [
  { title: 'Poda de árvore solicitada', category: 'Zeladoria', region: 'Pinheiros', updated: 'há 12 min', status: 'open', label: 'Em andamento' },
  { title: 'Iluminação apagada na Rua Harmonia', category: 'Iluminação', region: 'Vila Madalena', updated: 'há 24 min', status: 'open', label: 'Em andamento' },
  { title: 'Coleta de resíduos agendada', category: 'Limpeza', region: 'Moema', updated: 'há 43 min', status: 'done', label: 'Resolvida' },
  { title: 'Sinalização de trânsito danificada', category: 'Mobilidade', region: 'Sé', updated: 'há 1h', status: 'open', label: 'Em andamento' },
  { title: 'Buraco ocupa faixa da avenida', category: 'Pavimentação', region: 'Santana', updated: 'há 2h', status: 'done', label: 'Resolvida' }
];

const rows = document.querySelector('#requestRows');
const emptyState = document.querySelector('#emptyState');
const search = document.querySelector('#requestSearch');
const filter = document.querySelector('#requestFilter');
const dialog = document.querySelector('#requestDialog');
const dialogTitle = document.querySelector('#dialogTitle');
const dialogPriority = document.querySelector('#dialogPriority');

function renderRequests() {
  const query = search.value.toLowerCase().trim();
  const status = filter.value;
  const visible = requests.filter((request) => {
    const matchesQuery = [request.title, request.category, request.region].join(' ').toLowerCase().includes(query);
    return matchesQuery && (status === 'all' || request.status === status);
  });
  rows.innerHTML = visible.map((request) => `<tr><td>${request.title}</td><td>${request.category}</td><td class="region">${request.region}</td><td class="region">${request.updated}</td><td><span class="status-pill status-${request.status}">${request.label}</span></td><td><button class="row-action" type="button" aria-label="Abrir ${request.title}" data-request="${request.title}">···</button></td></tr>`).join('');
  emptyState.style.display = visible.length ? 'none' : 'block';
  rows.querySelectorAll('[data-request]').forEach((button) => button.addEventListener('click', () => openRequest(button.dataset.request)));
}

function openRequest(title) {
  const request = requests.find((item) => item.title === title);
  dialogTitle.textContent = request?.title || title;
  dialogPriority.textContent = request?.label || 'Atenção';
  dialog.showModal();
}

document.querySelector('#closeDialog').addEventListener('click', () => dialog.close());
document.querySelector('#dialogAction').addEventListener('click', () => dialog.close());
document.querySelector('#newRequest').addEventListener('click', () => openRequest('Nova solicitação urbana'));
document.querySelectorAll('.priority-item').forEach((item) => item.addEventListener('click', () => openRequest(item.dataset.request)));
search.addEventListener('input', renderRequests);
filter.addEventListener('change', renderRequests);
document.querySelector('#chartPeriod').addEventListener('change', (event) => {
  const scale = event.target.value.includes('7') ? 0.7 : 1;
  document.querySelectorAll('.bar').forEach((bar) => { bar.style.transform = `scaleY(${scale})`; bar.style.transformOrigin = 'bottom'; });
});
document.querySelector('#mobileMenu').addEventListener('click', () => document.querySelector('#sidebar').classList.toggle('open'));

const bars = document.querySelector('#bars');
[68, 84, 55, 92, 76, 61, 88, 74, 98, 81].forEach((height, index) => {
  const group = document.createElement('span');
  group.className = 'bar-group';
  group.innerHTML = `<i class="bar received" style="height:${height}%"></i><i class="bar resolved" style="height:${Math.max(height - 14 - index * 2, 35)}%"></i>`;
  bars.appendChild(group);
});
renderRequests();
