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
        img: 'https://imgs.search.brave.com/541l4Vsli3nY-Zhb2molU_HHZ2BwAhA5jLfdgaFbA60/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjEv/MDkvMDkvZ29kLW9m/LXdhci1yYWduYXJv/ay1idXR0b24tMTYz/MTIzMTg3OTE1NC5q/cGc_Y3JvcD0xOjEs/c21hcnQmZm9ybWF0/PWpwZyZhdXRvPXdl/YnAmcXVhbGl0eT04/MA',
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
        img: 'https://i.pinimg.com/736x/27/7e/55/277e551fe8d33b67ec51ba6365964dce.jpg',
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
        img: 'https://via.placeholder.com/350x200/0072bb/00ff88?text=FIFA+24',
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
        img: 'https://via.placeholder.com/350x200/2d1b69/00ff88?text=Elden+Ring',
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
        img: 'https://via.placeholder.com/350x200/ff6b35/00ff88?text=Crash+Bandicoot',
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
        img: 'https://via.placeholder.com/350x200/27408b/00ff88?text=FFVII',
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
        img: 'https://via.placeholder.com/350x200/e74126/00ff88?text=Super+Mario+World',
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
        img: 'https://via.placeholder.com/350x200/b8191f/00ff88?text=Street+Fighter+II',
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
        img: 'https://via.placeholder.com/350x200/8b1a1a/00ff88?text=God+of+War+II',
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
        img: 'https://via.placeholder.com/350x200/1f2f38/00ff88?text=Gears+of+War',
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
        img: 'https://via.placeholder.com/350x200/8b4513/00ff88?text=MGS1',
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
        img: 'https://via.placeholder.com/350x200/ffb347/00ff88?text=Pac-Man',
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
        img: 'https://via.placeholder.com/350x200/00d4ff/000?text=Cyberpunk+2077',
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
        img: 'https://via.placeholder.com/350x200/2e3440/00ff88?text=Hogwarts+Legacy',
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
        img: 'https://via.placeholder.com/350x200/ff4757/00ff88?text=Spider-Man+2',
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
        img: 'https://via.placeholder.com/350x200/3867a0/00ff88?text=Zelda+ALttP',
        description: 'Topo SNES Zelda.',
        detonado_summary: 'Mirror Shield, todas dungeons.',
        curiosidades: ['Dark World genius', 'Influenciou toda série'],
        tutorial_tips: ['Heart Piece locations', 'Potion refills'],
        news: 'Switch Online disponível!'
    }
];

let filteredGames = [...gamesData];

// DOM Elements
const searchInput = document.getElementById('search');
const grid = document.querySelector('.grid');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const modal = document.getElementById('gameModal');
const modalClose = document.querySelector('.close');

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    renderGames();
    setupEventListeners();
    showSection('home');
}

function setupEventListeners() {
    searchInput.addEventListener('input', filterGames);
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            showSection(target);
        });
    });
    
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
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
        document.querySelector(`[href="#${sectionName}"]`).classList.add('active');
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
    grid.innerHTML = '';
    filteredGames.forEach(game => {
        const card = createGameCard(game);
        grid.appendChild(card);
    });
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-img">
            <img src="${game.img}" alt="${game.title}">
            <div class="platform-badges">
                ${game.platform.map(p => `<span class="platform ${p}">${p.toUpperCase()}</span>`).join('')}
            </div>
        </div>
        <div class="card-body">
            <h3 class="card-title">${game.title}</h3>
            <p class="card-meta">Lançamento: ${game.release} | ${Object.values(game.trophies).reduce((a,b)=>a+b,0)} troféus</p>
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
    const query = searchInput.value.toLowerCase();
    filteredGames = gamesData.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.platform.some(p => p.includes(query))
    );
    if (document.getElementById('games').classList.contains('active')) {
        renderGames();
    }
}

function openModal(id) {
    const game = gamesData.find(g => g.id === id);
    document.getElementById('modalTitle').textContent = game.title;
    document.getElementById('modalDescription').textContent = game.description;
    document.getElementById('modalGuides').textContent = game.guides;
    document.getElementById('modalNews').textContent = game.news;
    modal.style.display = 'block';
}

function renderTrophies() {
    grid.innerHTML = '';
    gamesData.forEach(game => {
        const trophyRate = ((game.trophies.platinum + game.trophies.gold * 0.75 + game.trophies.silver * 0.5 + game.trophies.bronze * 0.25) / 100 * 100).toFixed(1);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${game.img}" alt="${game.title}">
                <div style="position:absolute;top:10px;left:10px;background:var(--accent);color:black;padding:0.5rem;border-radius:10px;font-weight:bold;">${trophyRate}%</div>
            </div>
            <div class="card-body">
                <h3>${game.title}</h3>
                <p>Guia completo de troféus disponível</p>
                <button class="btn" onclick="openModal(${game.id})">Ver Guia</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderGuides() {
    grid.innerHTML = '';
    const guides = [
        { title: 'God of War Ragnarök - 100% Walkthrough', gameId: 1 },
        { title: 'GTA V - Todos os troféus Platinum', gameId: 2 },
        { title: 'Elden Ring - Guia Todos os Bosses', gameId: 4 }
    ];
    guides.forEach(guide => {
        const game = gamesData.find(g => g.id === guide.gameId);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img"><img src="${game.img}" alt="${guide.title}"></div>
            <div class="card-body">
                <h3>${guide.title}</h3>
                <p>Guia detalhado com todos os passos.</p>
                <button class="btn">Ver Guia Completo</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderNews() {
    grid.innerHTML = '';
    const newsItems = [
        { title: 'PS5 Pro anunciado com 8K real!', img: 'https://via.placeholder.com/350x200/00ff88/000?text=PS5+Pro', tag: 'Hardware' },
        { title: 'GTA VI trailer bate recorde!', img: 'https://via.placeholder.com/350x200/ff0080/000?text=GTA+VI', tag: 'Trailer' },
        { title: 'The Last of Us Part II Remastered', img: 'https://via.placeholder.com/350x200/2d1b69/00ff88?text=TLOU2', tag: 'Lançamento' }
    ];
    newsItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img"><img src="${item.img}" alt="${item.title}"></div>
            <div class="card-body">
                <div class="news-meta">
                    <span class="tag">${item.tag}</span>
                    <span>2 horas atrás</span>
                </div>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-text">Notícia completa com detalhes exclusivos.</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

