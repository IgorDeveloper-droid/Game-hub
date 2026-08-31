const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const contrastToggle = document.querySelector('#contrastToggle');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#siteSearch');
const searchStatus = document.querySelector('#searchStatus');
const subscribeForm = document.querySelector('#subscribeForm');
const subscribeStatus = document.querySelector('#subscribeStatus');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

contrastToggle?.addEventListener('click', () => {
  const isHighContrast = document.body.classList.toggle('high-contrast');
  contrastToggle.setAttribute('aria-pressed', String(isHighContrast));
  localStorage.setItem('sp-high-contrast', String(isHighContrast));
});

if (localStorage.getItem('sp-high-contrast') === 'true') {
  document.body.classList.add('high-contrast');
  contrastToggle?.setAttribute('aria-pressed', 'true');
}

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  searchStatus.textContent = query
    ? `Busca preparada para: ${query}. Consulte os serviços em destaque enquanto conectamos ao catálogo.`
    : 'Digite um termo para iniciar sua busca.';
  if (!query) searchInput.focus();
});

subscribeForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(subscribeForm).get('email');
  subscribeStatus.textContent = `Pronto. As novidades serão enviadas para ${email}.`;
  subscribeForm.reset();
});
