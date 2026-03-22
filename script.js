// Games Hub - Main Script
const gamesData = [
    // MODERNOS
    {
        id: 1,
        title: 'God of War Ragnarök',
        era: 'moderno',
        platform: ['ps5'],
        release: '2022',
        trophies: { platinum: 1, gold: 2, silver: 10, bronze: 32 },
        totalTrophies: 45,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi1JaTwDtEE8j7fhU.png',
        description: 'A épica saga nórdica continua com Kratos e Atreus enfrentando Ragnarök.',
        detonado_summary: '46 troféus - Guia com todos os Favores, Nornir Chests e Crater Bosses.',
        curiosidades: ['DLC Valhalla é gratuito', 'Mais de 38 horas de história principal'],
        tutorial_tips: ['Use Atreus para distrair inimigos', 'Upgrade Blades of Chaos primeiro'],
        news: 'Update 4.02 com novos conteúdos!'
    },
    {
        id: 2,
        title: 'GTA V',
        era: 'moderno',
        platform: ['ps5','xbox','pc'],
        release: '2013',
        trophies: { platinum: 1, gold: 3, silver: 15, bronze: 48 },
        totalTrophies: 67,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/maI5fsiAuqIYBp5iHQFWlbwz.png',
        description: 'Mundo aberto definitivo da Rockstar com 3 protagonistas.',
        detonado_summary: 'Guia 100% - 69 troféus, todas missões secundárias, propriedades.',
        curiosidades: ['Mais vendido da história', 'GTA Online ainda recebe updates'],
        tutorial_tips: ['Compre todas propriedades', 'Complete Heists com Gold'],
        news: 'GTA Online Winter Update 2024!'
    },
    {
        id: 3,
        title: 'FIFA 24',
        era: 'moderno',
        platform: ['ps5','xbox','pc'],
        release: '2023',
        trophies: { platinum: 1, gold: 4, silver: 12, bronze: 38 },
        totalTrophies: 55,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202307/1919/7360c0f7c0fce67260826ef0b1734ce0f9b698c15988071c.png',
        description: 'Futebol definitivo com Ultimate Team e HyperMotion.',
        detonado_summary: 'Troféus Division Rivals, Season Objectives, Squad Building.',
        curiosidades: ['Mais de 7000 jogadores reais', 'IA revolucionária'],
        tutorial_tips: ['Complete Daily Objectives', 'Use PlayStyles+'],
        news: 'TOTY promo disponível!'
    },
    {
        id: 4,
        title: 'Elden Ring',
        era: 'moderno',
        platform: ['ps5','xbox','pc'],
        release: '2022',
        trophies: { platinum: 1, gold: 1, silver: 10, bronze: 73 },
        totalTrophies: 85,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202111/2407/aHdWh8hx11hP3FmCidcUzgCv.png',
        description: 'RPG aberto épico dos criadores de Dark Souls.',
        detonado_summary: 'Guia todos 84 troféus + Legendary Weapons/Armors.',
        curiosidades: ['Mundo criado por George R.R. Martin', '238 bosses'],
        tutorial_tips: ['Use Spirit Ashes', 'Explore catacombs cedo'],
        news: 'Shadow of the Erdtree DLC!'
    },
    // PS1 CLÁSSICOS
    {
        id: 5,
        title: 'Crash Bandicoot',
        era: 'ps1',
        platform: ['ps1'],
        release: '1996',
        trophies: { platinum: 1, gold: 8, silver: 12, bronze: 19 },
        totalTrophies: 40,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/bKkLkvhqoQDOtBvXafAYY6Fw.png',
        description: 'Platformer 3D revolucionário da Naughty Dog.',
        detonado_summary: 'Guia 100% + Relics - todos níveis sem morte, 99 vidas.',
        curiosidades: ['Primeiro 3D da Sony', 'Inspirou Spyro'],
        tutorial_tips: ['Jump spin sempre', 'Collect Wumpa Fruits'],
        news: 'N. Sane Trilogy HD disponível!'
    },
    {
        id: 6,
        title: 'Final Fantasy VII',
        era: 'ps1',
        platform: ['ps1'],
        release: '1997',
        trophies: { platinum: 1, gold: 7, silver: 15, bronze: 27 },
        totalTrophies: 50,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/cTZQgf6GqGF8enGLJ5VdQ0Qd.png',
        description: 'JRPG lendário que definiu o gênero.',
        detonado_summary: 'Guia completo materia, summons, Ultimate Weapons.',
        curiosidades: ['Aerith morte chocou mundo', 'Remake moderno'],
        tutorial_tips: ['Master Magic Materia', 'Bahamut sempre'],
        news: 'Remake Part 3 em desenvolvimento!'
    },
    // SNES/NES
    {
        id: 7,
        title: 'Super Mario World',
        era: 'snes',
        platform: ['snes'],
        release: '1990',
        trophies: { platinum: 1, gold: 5, silver: 10, bronze: 24 },
        totalTrophies: 40,
        img: 'https://images.nintendolife.com/6a5a3a2b4e3c0/super-mario-world-cover.cover_large.jpg',
        description: 'Melhor 2D Mario da Nintendo.',
        detonado_summary: 'Guia 100% secret exits, Yoshi colors, all dragons.',
        curiosidades: ['96 saídas secretas', 'Cape Feather essencial'],
        tutorial_tips: ['Yoshi eggs', 'Star World loop'],
        news: 'SNES Online Nintendo Switch!'
    },
    {
        id: 8,
        title: 'Street Fighter II',
        era: 'arcade',
        platform: ['arcade','snes'],
        release: '1991',
        trophies: { platinum: 1, gold: 4, silver: 8, bronze: 16 },
        totalTrophies: 29,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Street_Fighter_II_-_The_World_Warrior_%28flyer%29.jpg/220px-Street_Fighter_II_-_The_World_Warrior_%28flyer%29.jpg',
        description: 'Definidor dos jogos de luta.',
        detonado_summary: 'Perfect moves todos personagens + combos.',
        curiosidades: ['8 milhões vendidos', 'Dhadkan sound'],
        tutorial_tips: ['Ryuk special moves', 'Block high/low'],
        news: 'SF6 conecta clássicos!'
    },
    // PS2
    {
        id: 9,
        title: 'God of War II',
        era: 'ps2',
        platform: ['ps2'],
        release: '2007',
        trophies: { platinum: 1, gold: 3, silver: 11, bronze: 25 },
        totalTrophies: 40,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/rlvVOP0N9FsKXww8eYfQf2G8.png',
        description: 'Pico técnico do PS2.',
        detonado_summary: 'Guia todos Urns, Kratos costumes.',
        curiosidades: ['Maior boss fights PS2', 'Chronos boss épico'],
        tutorial_tips: ['Blade of Artemis', 'Magic Gorgon'],
        news: 'Remasterizado PS3!'
    },
    // XBOX 360
    {
        id: 10,
        title: 'Gears of War',
        era: 'x360',
        platform: ['x360'],
        release: '2006',
        trophies: { platinum: 1, gold: 2, silver: 9, bronze: 28 },
        totalTrophies: 40,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/9fFbqZ5d8XJQYkM7YpCgHwY0.png',
        description: 'Revolucionou cover shooters.',
        detonado_summary: 'Guia co-op, all collectibles COG tags.',
        curiosidades: ['Primeira Unreal Engine 3', 'Chainsaw kills icônicos'],
        tutorial_tips: ['Roadie Run', 'Curty Curty'],
        news: 'Gears 5 disponível Game Pass!'
    },
    // +2 BONUS
    {
        id: 11,
        title: 'Metal Gear Solid (PS1)',
        era: 'ps1',
        platform: ['ps1'],
        release: '1998',
        trophies: { platinum: 1, gold: 6, silver: 14, bronze: 19 },
        totalTrophies: 40,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/hL2bBZ5LmCq3Zv7YpGgHwY0.png',
        description: 'Nascimento stealth games.',
        detonado_summary: 'No alerts, Bandana, Stealth run.',
        curiosidades: ['Codec calls lendárias', 'PS2 Substance version'],
        tutorial_tips: ['Cardboard Box', 'Chaff Grenades'],
        news: 'Master Collection Vol.1!'
    },
    {
        id: 12,
        title: 'Pac-Man (Arcade)',
        era: 'arcade',
        platform: ['arcade','nes'],
        release: '1980',
        trophies: { platinum: 1, gold: 3, silver: 7, bronze: 12 },
        totalTrophies: 23,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Pac-Man_cover.png/220px-Pac-Man_cover.png',
        description: 'Clássico absoluto dos arcades.',
        detonado_summary: 'Perfect score 3,333,360 pontos.',
        curiosidades: ['Primeiro maze game', 'Ghost AI padrões'],
        tutorial_tips: ['Cherry route', 'Blinky patterns'],
        news: 'Pac-Man 99 battle royale!'
    },
    {
        id: 13,
        title: 'Cyberpunk 2077',
        era: 'moderno',
        platform: ['ps5','xbox','pc'],
        release: '2020',
        trophies: { platinum: 1, gold: 5, silver: 13, bronze: 31 },
        totalTrophies: 50,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/2214/7XH6qUQNQ8rLqNqQqQqQqQqQ.png',
        description: 'RPG futurista CD Projekt RED.',
        detonado_summary: 'Todos endings, Phantom Liberty trophies.',
        curiosidades: ['250+ horas conteúdo', 'Ray Tracing pioneiro'],
        tutorial_tips: ['Quickhacks Sandevistan', 'Max Street Cred'],
        news: 'Update 2.1 com Metro system!'
    },
    {
        id: 14,
        title: 'Hogwarts Legacy',
        era: 'moderno',
        platform: ['ps5','xbox','pc'],
        release: '2023',
        trophies: { platinum: 1, gold: 4, silver: 11, bronze: 34 },
        totalTrophies: 50,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202209/0115/9XqQNqQ8rLqNqQqQqQqQqQqQ.png',
        description: 'Mundo mágico Harry Potter.',
        detonado_summary: 'Guia todas spells, beasts, Merlin Trials.',
        curiosidades: ['Maior lançamento 2023', 'Open world mágico'],
        tutorial_tips: ['House talent trees', 'Ancient Magic Hotspots'],
        news: 'Switch version lançada!'
    },
    {
        id: 15,
        title: 'Spider-Man 2 (PS5)',
        era: 'moderno',
        platform: ['ps5'],
        release: '2023',
        trophies: { platinum: 1, gold: 4, silver: 12, bronze: 33 },
        totalTrophies: 50,
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/3015/8XJQNqQ8rLqNqQqQqQqQqQqQ.png',
        description: 'Swinging definitivo Insomniac.',
        detonado_summary: 'Todos suits, crimes, levels PR.',
        curiosidades: ['Fórmula Web Wings', 'Dual protagonista'],
        tutorial_tips: ['Symbiote powers', 'Web swing tricks'],
        news: 'New Game+ disponível!'
    },
    {
        id: 16,
        title: 'Zelda A Link to the Past',
        era: 'snes',
        platform: ['snes'],
        release: '1991',
        trophies: { platinum: 1, gold: 5, silver: 9, bronze: 20 },
        totalTrophies: 35,
        img: 'https://images.nintendolife.com/8c3a2b4e3c0a/zelda-a-link-to-the-past-cover.cover_large.jpg',
        description: 'Topo SNES Zelda.',
        detonado_summary: 'Mirror Shield, todas dungeons.',
        curiosidades: ['Dark World genius', 'Influenciou toda série'],
        tutorial_tips: ['Heart Piece locations', 'Potion refills'],
        news: 'Switch Online disponível!'
    }
];

// Rest of the code remains the same...
let filteredGames = [...gamesData];

// DOM Elements
const searchInput = document.getElementById('search');
const grid = document.querySelector('.grid');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const modal = document.getElementById('gameModal');
const modalClose = document.querySelector('.close');

// Tab elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    renderGames();
    setupEventListeners();
    setupTabListeners();
    showSection('home');
}

function setupEventListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', filterGames);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-section');
            if (target) {
                showSection(target);
            }
        });
    });
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function setupTabListeners() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current button and content
            btn.classList.add('active');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

function showSection(sectionName) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Render specific content
    if (sectionName === 'games') renderGames();
    if (sectionName === 'trophies') renderTrophies();
    if (sectionName === 'guides') renderGuides();
    if (sectionName === 'news') renderNews();
}

function renderGames() {
    if (!grid) return;
    grid.innerHTML = '';
    filteredGames.forEach(game => {
        const card = createGameCard(game);
        grid.appendChild(card);
    });
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'card';
    const totalTrophies = Object.values(game.trophies).reduce((a, b) => a + b, 0);
    card.innerHTML = `
        <div class="card-img">
            <img src="${game.img}" alt="${game.title}" loading="lazy">
            <div class="platform-badges">
                ${game.platform.map(p => `<span class="platform ${p}">${p.toUpperCase()}</span>`).join('')}
            </div>
        </div>
        <div class="card-body">
            <h3 class="card-title">${game.title}</h3>
            <p class="card-meta">Lançamento: ${game.release} | ${totalTrophies} troféus</p>
            <div class="trophy-badges">
                ${Object.entries(game.trophies).map(([type, count]) => `
                    <span class="trophy ${type}">
                        <i class="fas fa-trophy"></i> ${count} ${type}
                    </span>
                `).join('')}
            </div>
            <p class="card-text">${game.description}</p>
            <button class="btn" onclick="openModal(${game.id})">Ver Detalhes</button>
        </div>
    `;
    return card;
}

function filterGames() {
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase();
    filteredGames = gamesData.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.platform.some(p => p.includes(query))
    );
    if (document.getElementById('games') && document.getElementById('games').classList.contains('active')) {
        renderGames();
    }
}

function openModal(id) {
    const game = gamesData.find(g => g.id === id);
    if (!game) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetonado = document.getElementById('modalDetonado');
    const modalCuriosidades = document.getElementById('modalCuriosidades');
    const modalTutorial = document.getElementById('modalTutorial');
    const modalTrophies = document.getElementById('modalTrophies');
    
    if (modalTitle) modalTitle.textContent = game.title;
    if (modalDescription) modalDescription.textContent = game.description;
    if (modalDetonado) modalDetonado.textContent = game.detonado_summary;
    
    if (modalCuriosidades) {
        modalCuriosidades.innerHTML = game.curiosidades.map(c => `<li><i class="fas fa-star" style="color: var(--accent); margin-right: 0.5rem;"></i>${c}</li>`).join('');
    }
    
    if (modalTutorial) {
        modalTutorial.innerHTML = game.tutorial_tips.map(t => `<li><i class="fas fa-gamepad" style="color: var(--accent); margin-right: 0.5rem;"></i>${t}</li>`).join('');
    }
    
    if (modalTrophies) {
        const total = Object.values(game.trophies).reduce((a, b) => a + b, 0);
        modalTrophies.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="text-align: center; margin-bottom: 1rem;">
                    <h3 style="color: var(--accent);">Total: ${total} troféus</h3>
                </div>
                ${Object.entries(game.trophies).map(([type, count]) => `
                    <div style="display: flex; justify-content: space-between; padding: 0.5rem; background: var(--glass); border-radius: 10px;">
                        <span><i class="fas fa-trophy" style="margin-right: 0.5rem;"></i>${type.charAt(0).toUpperCase() + type.slice(1)}</span>
                        <span style="font-weight: bold;">${count}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (modal) modal.style.display = 'block';
}

function renderTrophies() {
    if (!grid) return;
    grid.innerHTML = '';
    gamesData.forEach(game => {
        const totalTrophies = Object.values(game.trophies).reduce((a, b) => a + b, 0);
        const trophyRate = ((game.trophies.platinum * 100 + game.trophies.gold * 75 + game.trophies.silver * 50 + game.trophies.bronze * 25) / (totalTrophies * 100) * 100).toFixed(1);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${game.img}" alt="${game.title}" loading="lazy">
                <div style="position:absolute;top:10px;left:10px;background:var(--accent);color:black;padding:0.5rem;border-radius:10px;font-weight:bold;">${trophyRate}%</div>
            </div>
            <div class="card-body">
                <h3>${game.title}</h3>
                <p>Guia completo de troféus disponível com ${totalTrophies} conquistas</p>
                <button class="btn" onclick="openModal(${game.id})">Ver Guia</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderGuides() {
    if (!grid) return;
    grid.innerHTML = '';
    const guides = [
        { title: 'God of War Ragnarök - 100% Walkthrough', gameId: 1 },
        { title: 'GTA V - Todos os troféus Platinum', gameId: 2 },
        { title: 'Elden Ring - Guia Todos os Bosses', gameId: 4 }
    ];
    guides.forEach(guide => {
        const game = gamesData.find(g => g.id === guide.gameId);
        if (!game) return;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img"><img src="${game.img}" alt="${guide.title}" loading="lazy"></div>
            <div class="card-body">
                <h3>${guide.title}</h3>
                <p>Guia detalhado com todos os passos para completar 100%.</p>
                <button class="btn" onclick="openModal(${guide.gameId})">Ver Guia Completo</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderNews() {
    if (!grid) return;
    grid.innerHTML = '';
    const newsItems = [
        { title: 'PS5 Pro anunciado com 8K real!', img: 'https://placehold.co/350x200/00ff88/000000?text=PS5+Pro', tag: 'Hardware' },
        { title: 'GTA VI trailer bate recorde!', img: 'https://placehold.co/350x200/ff0080/ffffff?text=GTA+VI', tag: 'Trailer' },
        { title: 'The Last of Us Part II Remastered', img: 'https://placehold.co/350x200/2d1b69/ffffff?text=TLOU2', tag: 'Lançamento' }
    ];
    newsItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img"><img src="${item.img}" alt="${item.title}" loading="lazy"></div>
            <div class="card-body">
                <div class="news-meta">
                    <span class="tag">${item.tag}</span>
                    <span>2 horas atrás</span>
                </div>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-text">Notícia completa com detalhes exclusivos sobre este lançamento imperdível.</p>
            </div>
        `;
        grid.appendChild(card);
    });
}