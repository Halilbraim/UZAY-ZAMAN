// ==========================================
// KOZMOLOJİ & FİZİK ANSİKLOPEDİSİ - SCRIPT.JS
// ==========================================

// --- VERİTABANI VE GLOBAL TANIMLAMALAR ---
let encyclopediaTopics = (typeof topicsData !== 'undefined' && Array.isArray(topicsData)) ? [...topicsData] : [];

// --- GENİŞLETİLMİŞ MATEMATİKSEL İSPATLAR VERİTABANI (14 İSPAT) ---
const fallbackProofsData = [
    // --- 📐 MATEMATİK ---
    {
        id: 'proof_pisagor',
        cat: 'matematik',
        title: 'Pisagor Teoremi (a² + b² = c²)',
        desc: 'Dik üçgenlerde dik kenarların karelerinin toplamı hipotenüsün karesine eşittir.',
        icon: '📐',
        subitems: [
            { title: 'Geometrik Alan İspatı', desc: '(a+b)² alanlı büyük kare içerisine 4 adet dik üçgen ve ortada c² karesi yerleştirilerek cebirsel özdeşlik kurulur.' },
            { title: 'Cebirsel Özdeşlik', desc: 'a² + 2ab + b² = 4·(a·b / 2) + c² → 2ab terimleri sadeleştiğinde a² + b² = c² kalır.' }
        ]
    },
    {
        id: 'proof_euler',
        cat: 'matematik',
        title: 'Euler Özdeşliği (e^(iπ) + 1 = 0)',
        desc: 'Matematiğin en güzel denklemi; e, i, π, 1 ve 0 sabitlerini tek çatıda birleştirir.',
        icon: '📐',
        subitems: [
            { title: 'Taylor Serisi Açılımı', desc: 'e^x, cos(x) ve sin(x) fonksiyonlarının Maclaurin serileri yazılır.' },
            { title: 'Sanal Birim Entegrasyonu', desc: 'e^(ix) = cos(x) + i·sin(x) formülünde x = π alındığında e^(iπ) = -1 + 0i elde edilir ve denklem düzenlenir.' }
        ]
    },
    {
        id: 'proof_gauss',
        cat: 'matematik',
        title: 'Gauss Toplam Formülü (Σk = n(n+1)/2)',
        desc: '1\'den n\'e kadar olan ardışık tamsayıların toplamının pratik türetimi.',
        icon: '📐',
        subitems: [
            { title: 'Ters Çevirip Toplama', desc: 'Toplam dizisi bir düzden (1+2+...+n) bir de tersten (n+(n-1)+...+1) alt alta yazılır.' },
            { title: 'Çift Toplamlar', desc: 'Her sütun toplamı (n+1) verir. n adet sütun olduğundan 2S = n(n+1) → S = n(n+1)/2 bulunur.' }
        ]
    },

    // --- ⚡ FİZİK & GÖRELİLİK ---
    {
        id: 'proof_mass_energy',
        cat: 'teorik',
        title: 'E = mc² (Kütle-Enerji Eşdeğerliği)',
        desc: 'Albert Einstein\'ın Özel Görelilik Kuramı\'ndan türetilen temel kütle-enerji dönüşümü.',
        icon: '⚡',
        subitems: [
            { title: 'Relativistik Momentum', desc: 'p = γ·m·v denkleminde kuvvet F = dp/dt olarak tanımlanır ve iş-enerji teoremi uygulanır.' },
            { title: 'İntegre Edilmiş Enerji', desc: 'dE = F·dx entegrasyonu sonucunda durgun kütle enerjisi E₀ = m·c² olarak elde edilir.' }
        ]
    },
    {
        id: 'proof_lorentz_time',
        cat: 'teorik',
        title: 'Lorentz Zaman Genişlemesi',
        desc: 'Hızlandıkça durgun gözlemciye göre zamanın yavaşlamasının geometrik ispatı.',
        icon: '⚡',
        subitems: [
            { title: 'Işık Saati Deneyi', desc: 'İki ayna arasında dik dikey hareket eden ışık atımı, hareketli sistemde hipotenüs çizer.' },
            { title: 'Pisagor Teoremi Uygulaması', desc: '(c·Δt\')² = (c·Δt)² + (v·Δt\')² dik üçgen eşitliğinden Δt\' = Δt / √(1 - v²/c²) türetilir.' }
        ]
    },
    {
        id: 'proof_kepler3',
        cat: 'teorik',
        title: 'Kepler 3. Kanunu (T² / r³ = Sabit)',
        desc: 'Gezegenlerin dolanım periyotlarının karesi ile yörünge yarıçaplarının küpü arasındaki orantı.',
        icon: '⚡',
        subitems: [
            { title: 'Kütleçekim ve Merkezcil Kuvvet', desc: 'G·M·m / r² = m·v² / r eşitliğinde kütleler sadeleşir.' },
            { title: 'Çizgisel Hız Değişimi', desc: 'v = 2πr / T ifadesi denklemde yerine koyulup düzenlendiğinde T² / r³ = 4π² / (G·M) sabiti bulunur.' }
        ]
    },
    {
        id: 'proof_photoelectric',
        cat: 'teorik',
        title: 'Einstein Fotoelektrik Denklemi',
        desc: 'Işığın foton tanecik modelinin ve sökülen elektron Kinetik Enerjisinin hesabı.',
        icon: '⚡',
        subitems: [
            { title: 'Foton Enerji Korunumu', desc: 'Gelen fotonun enerjisi E = h·ν, metalin bağlanma enerjisi (Bağlanma İşi Φ) ve elektron kinetik enerjisine bölünür.' },
            { title: 'E_k Denklem Türetimi', desc: 'h·ν = Φ + E_k,max → E_k,max = h·ν - h·ν₀ şeklinde fotoelektron enerjisi türetilir.' }
        ]
    },

    // --- ⚛️ KUANTUM ---
    {
        id: 'proof_schrodinger',
        cat: 'kuantum',
        title: 'Schrödinger Dalga Denklemi',
        desc: 'Kuantum parçacıklarının olasılık dalgası hareketini tanımlayan temel diferansiyel denklem.',
        icon: '⚛️',
        subitems: [
            { title: 'de Broglie ve Planck Bağıntısı', desc: 'E = ℏω ve p = ℏk eşitlikleri Klasik Enerji Korunumu (E = p²/2m + V) denklemine yerleştirilir.' },
            { title: 'Operatör Formu', desc: 'iℏ (∂ψ/∂t) = - (ℏ² / 2m) ∇²ψ + Vψ şeklinde zamana bağlı denklem türetilir.' }
        ]
    },
    {
        id: 'proof_heisenberg',
        cat: 'kuantum',
        title: 'Heisenberg Belirsizlik İlkesi (Δx · Δp ≥ ℏ/2)',
        desc: 'Bir parçacığın konumu ve momentumunun aynı anda kesin olarak ölçülemeyeceğinin ispatı.',
        icon: '⚛️',
        subitems: [
            { title: 'Dalga Paketi Ve Fourier', desc: 'Konum genişliği Δx olan bir dalga paketinin Fourier dönüşümündeki dalga sayısı aralığı Δk hesaplanır.' },
            { title: 'de Broglie İlişkisi', desc: 'Δx · Δk ≥ 1/2 bağıntısında p = ℏk dönüşümü yapıldığında Δx · Δp ≥ ℏ/2 elde edilir.' }
        ]
    },
    {
        id: 'proof_debroglie',
        cat: 'kuantum',
        title: 'de Broglie Dalga Boyu (λ = h / p)',
        desc: 'Maddenin hem parçacık hem de dalga özelliği gösterdiğini açıklayan denklem.',
        icon: '⚛️',
        subitems: [
            { title: 'Foton Momentum Bütünleşmesi', desc: 'E = m·c² ve E = h·f eşitlemesinden m·c = h·f / c yazılır.' },
            { title: 'Dalga Boyu Dönüşümü', desc: 'p = h / λ eşitliğinden her hareketli kütleye λ = h / p dalga boyunun eşlik ettiği gösterilir.' }
        ]
    },

    // --- 🌌 KOZMOLOJİ ---
    {
        id: 'proof_schwarzschild',
        cat: 'kozmoloji',
        title: 'Schwarzschild Karadelik Yarıçapı',
        desc: 'Bir kütlenin karadeliğe dönüşmesi için sıkışması gereken kritik Olay Ufku sınırı.',
        icon: '🌌',
        subitems: [
            { title: 'Kaçış Hızı Eşitliği', desc: 'Kütleçekimsel potansiyel enerji (G·M·m / r) kinetik enerjiye (½·m·v²) eşitlenir.' },
            { title: 'Işık Hızı Sınırı', desc: 'v yerine ışık hızı c konulup r yalnız bırakıldığında r_s = (2·G·M) / c² bulunur.' }
        ]
    },
    {
        id: 'proof_hubble',
        cat: 'kozmoloji',
        title: 'Hubble - Lemaître Kanunu (v = H₀ · d)',
        desc: 'Galaksilerin bizden uzaklaşma hızının mesafeleri ile doğru orantılı olmasının türetimi.',
        icon: '🌌',
        subitems: [
            { title: 'Kırmızıya Kayma (Redshift)', desc: 'Işığın dalga boyundaki kayma miktarı z = (λ_gözlenen - λ_laboratuvar) / λ_laboratuvar olarak ölçülür.' },
            { title: 'Doppler Hız Türetimi', desc: 'Düşük hızlarda v = c·z bağıntısı ile galaksi mesafesi d arasında v = H₀·d lineer ilişkisi elde edilir.' }
        ]
    },
    {
        id: 'proof_grav_redshift',
        cat: 'kozmoloji',
        title: 'Kütleçekimsel Kırmızıya Kayma',
        desc: 'Güçlü kütleçekim alanından kaçan ışığın frekansının ve enerjisinin azalmasının ispatı.',
        icon: '🌌',
        subitems: [
            { title: 'Foton Kütle Eşdeğerliği', desc: 'Fotona m_etkin = h·ν / c² kütlesi atfedilir ve potansiyel enerji değişimi ΔE = m_etkin · g · h hesaplanır.' },
            { title: 'Frekans Kayması', desc: 'Δν / ν = g·h / c² eşitliğinden yerçekimi arttıkça dalga boyunun kırmızıya kaydığı türetilir.' }
        ]
    },
    {
        id: 'proof_friedmann',
        cat: 'kozmoloji',
        title: 'Friedmann Evren Genişleme Denklemi',
        desc: 'Evrenin ölçek faktörü R(t) ve genleşme ivmesinin Genel Görelilik türetimi.',
        icon: '🌌',
        subitems: [
            { title: 'FLRW Metriği Entegrasyonu', desc: 'Homojen ve izotropik evren varsayımı altında Einstein Alan Denklemleri uygulanır.' },
            { title: 'Kritik Yoğunluk Denklemi', desc: '(H)² = (8πG/3)ρ - k·c²/R² şeklindeki Friedmann denklemi elde edilir.' }
        ]
    }
];

let proofsTopics = (typeof extendedProofsData !== 'undefined' && Array.isArray(extendedProofsData) && extendedProofsData.length > 0)
    ? [...extendedProofsData] 
    : [...fallbackProofsData];

let fullTopics = [...encyclopediaTopics, ...proofsTopics];
let currentCategory = 'all';

// --- KATEGORİ FİLTRELEME ---
function filterCategory(keyword, btnElement) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    
    const currentBtn = btnElement || (window.event && window.event.currentTarget);
    if (currentBtn) currentBtn.classList.add('active');

    const normalized = (keyword || '').toLowerCase().trim();
    currentCategory = (normalized === 'tümü' || normalized === 'all') ? 'all' : normalized;

    filterCards();
}

// --- FAVORİLER SİSTEMİ ---
const FAVORITES_KEY = 'uzayzaman_favorites';

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function isFavorite(topicId) {
    return getFavorites().includes(topicId);
}

function toggleFavorite(topicId, event) {
    if (event) event.stopPropagation();
    let favs = getFavorites();
    if (favs.includes(topicId)) {
        favs = favs.filter(id => id !== topicId);
    } else {
        favs.push(topicId);
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));

    const starBtn = document.querySelector(`.fav-star[data-id="${topicId}"]`);
    if (starBtn) {
        starBtn.innerHTML = isFavorite(topicId) ? '★' : '☆';
        starBtn.classList.toggle('active', isFavorite(topicId));
    }

    if (currentCategory === 'favorites') {
        showFavorites();
    }
}

function showFavorites() {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    currentCategory = 'favorites';
    const favIds = getFavorites();
    const data = encyclopediaTopics.filter(t => favIds.includes(t.id));
    renderCards(data);
}

// --- KARTLARI DİNAMİK OLUŞTURMA ---
function renderCards(data) {
    const grid = document.querySelector('.card-grid');
    if (!grid) return;
    grid.innerHTML = "";

    if (!data || data.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: #a0a0c0; padding: 40px;">Bu kategoride henüz içerik bulunamadı.</div>`;
        return;
    }

    data.forEach(item => {
        const subCount = item.subitems ? item.subitems.length : 0;
        const favActive = isFavorite(item.id) ? 'active' : '';
        const starIcon = isFavorite(item.id) ? '★' : '☆';
        grid.innerHTML += `
            <div class="card" data-cat="${item.cat || ''}" onclick="showTopicModal('${item.id}')">
                <button class="fav-star ${favActive}" data-id="${item.id}" onclick="toggleFavorite('${item.id}', event)">${starIcon}</button>
                <div class="card-icon">${item.icon || '📜'}</div>
                <h3>${item.title || item.baslik}</h3>
                <p>${item.desc || item.ozet}</p>
                <span class="sub-count" style="display:block; font-size:0.8rem; color:#a855f7; margin-top:8px;">📌 ${subCount} Detaylı Alt Başlık</span>
                <span class="read-more" style="color:#00d2ff; font-size:0.8rem; margin-top:6px; display:inline-block;">Detayları İncele &rarr;</span>
            </div>
        `;
    });

    attachTiltEffect();
}

// --- ARAMA VE KATEGORİ FİLTRELEME ---
function filterCards() {
    const searchInput = document.getElementById('searchInput');
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

    let data;
    if (currentCategory === 'favorites') {
        const favIds = getFavorites();
        data = encyclopediaTopics.filter(t => favIds.includes(t.id));
    } else if (currentCategory !== 'all') {
        data = encyclopediaTopics.filter(t => {
            const categories = (t.cat || "").toLowerCase().split(',').map(c => c.trim());
            return categories.includes(currentCategory);
        });
    } else {
        data = encyclopediaTopics;
    }

    if (query) {
        data = data.filter(t =>
            (t.title && t.title.toLowerCase().includes(query)) ||
            (t.desc && t.desc.toLowerCase().includes(query))
        );
    }

    renderCards(data);
}

// --- 3D TILT EFEKTİ ---
function attachTiltEffect() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
}

// --- MODALLAR ---
function closeAllModals() {
    closeModal();
    closeSimModal();
    closeConverterModal();
    closeProofsModal();
    closeQuizModal();
    closeNasaModal();
    closeGravityModal();
}

function showTopicModal(topicId) {
    closeAllModals();
    const topic = fullTopics.find(t => t.id === topicId);
    if (!topic) return;

    let modalContentHtml = `
        <h2 style="color: #a855f7; margin-bottom: 10px; font-size: 1.5rem;">${topic.title}</h2>
        <p class="modal-desc" style="color:#a0a0c0; margin-bottom:15px; line-height: 1.5;">${topic.desc}</p>
        <hr style="border-color: rgba(168, 85, 247, 0.2); margin: 15px 0;">
    `;

    if (topic.subitems && topic.subitems.length > 0) {
        topic.subitems.forEach((sub, index) => {
            const subTitle = sub.subtitle || sub.title || `Adım ${index + 1}`;
            const subText = sub.text || sub.desc || '';
            modalContentHtml += `
                <div class="sub-item-box" style="margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border-left: 3px solid #a855f7;">
                    <h4 style="color: #a855f7; margin-bottom: 5px; font-size:1rem;">${index + 1}. ${subTitle}</h4>
                    <p style="font-size: 0.88rem; color: #d0d0e0; margin: 0; line-height:1.4;">${subText}</p>
                </div>
            `;
        });
    }

    const modalBody = document.getElementById('topicModalBody');
    const modal = document.getElementById('topicDetailModal');

    if (modalBody) modalBody.innerHTML = modalContentHtml;
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('topicDetailModal');
    if (modal) modal.style.display = 'none';
}

function openSimModal() {
    closeAllModals();
    const m = document.getElementById('simModal');
    if (m) m.style.display = 'flex';
    calculateTimeDilation();
}
function closeSimModal() { 
    const m = document.getElementById('simModal');
    if (m) m.style.display = 'none'; 
}

function openConverterModal() {
    closeAllModals();
    const m = document.getElementById('converterModal');
    if (m) m.style.display = 'flex';
    convertUnits();
}
function closeConverterModal() { 
    const m = document.getElementById('converterModal');
    if (m) m.style.display = 'none'; 
}

function openRandomTopic() {
    if (encyclopediaTopics.length === 0) return;
    const randomIndex = Math.floor(Math.random() * encyclopediaTopics.length);
    showTopicModal(encyclopediaTopics[randomIndex].id);
}

// --- HESAPLAYICILAR ---
function calculateTimeDilation() {
    const speedInputElem = document.getElementById('speedInput');
    const spaceTimeInputElem = document.getElementById('spaceTimeInput');
    if (!speedInputElem || !spaceTimeInputElem) return;

    const vPercent = parseFloat(speedInputElem.value) || 90;
    const spaceTime = parseFloat(spaceTimeInputElem.value) || 1;
    document.getElementById('speedValue').innerText = `%${vPercent} c`;

    const v = vPercent / 100;
    const gamma = 1 / Math.sqrt(1 - Math.pow(v, 2));
    const earthTime = spaceTime * gamma;
    const ageDiff = earthTime - spaceTime;

    document.getElementById('earthTimeResult').innerText = earthTime.toFixed(2);
    document.getElementById('ageDiffResult').innerText = ageDiff.toFixed(2);
}

function convertUnits() {
    const lyInputElem = document.getElementById('lyInput');
    if (!lyInputElem) return;

    const ly = parseFloat(lyInputElem.value) || 0;
    const km = ly * 9.461e12;
    const au = ly * 63241.1;
    const pc = ly * 0.306601;

    document.getElementById('kmResult').innerText = (km / 1e12).toFixed(2) + " Trilyon km";
    document.getElementById('auResult').innerText = au.toLocaleString('tr-TR', { maximumFractionDigits: 0 }) + " AU";
    document.getElementById('pcResult').innerText = pc.toFixed(3) + " pc";
}

// --- KLAVYE KISAYOLLARI ---
document.addEventListener('keydown', (e) => {
    const activeElement = document.activeElement;
    const isInputFocused = activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA');

    if (e.key === 'Escape') {
        closeAllModals();
        if (isInputFocused) activeElement.blur();
    }
    if ((e.key === 'f' || e.key === 'F' || e.key === '/') && !isInputFocused) {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }
});

// --- ARKA PLAN CANVAS YILDIZ ALANI ---
const canvas = document.getElementById('starfield');
const ctx = canvas ? canvas.getContext('2d') : null;
let stars = [];
let numStars = 400;
let warpSpeed = 1;
let isWarping = false;
let isBlackHoleMode = false;

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

if (canvas) {
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width - canvas.width / 2,
            y: Math.random() * canvas.height - canvas.height / 2,
            z: Math.random() * canvas.width,
            angle: Math.random() * Math.PI * 2
        });
    }
}

function drawStars() {
    if (!canvas || !ctx) return;
    ctx.fillStyle = "rgba(5, 5, 10, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    if (isBlackHoleMode) {
        ctx.beginPath();
        ctx.arc(cx, cy, 60, 0, Math.PI * 2);
        ctx.fillStyle = "#000000";
        ctx.shadowBlur = 40;
        ctx.shadowColor = "#a855f7";
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    stars.forEach(star => {
        if (isBlackHoleMode) {
            star.angle += 0.03;
            const dist = Math.sqrt(star.x * star.x + star.y * star.y);
            star.x -= (star.x / dist) * 3;
            star.y -= (star.y / dist) * 3;
            if (dist < 60) {
                star.x = (Math.random() - 0.5) * canvas.width;
                star.y = (Math.random() - 0.5) * canvas.height;
            }
            const x = star.x + cx;
            const y = star.y + cy;
            ctx.beginPath();
            ctx.fillStyle = "#a855f7";
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
        } else {
            star.z -= warpSpeed;
            if (star.z <= 0) {
                star.z = canvas.width;
                star.x = Math.random() * canvas.width - canvas.width / 2;
                star.y = Math.random() * canvas.height - canvas.height / 2;
            }
            const x = (star.x / star.z) * canvas.width + cx;
            const y = (star.y / star.z) * canvas.height + cy;
            const radius = Math.max(0.1, (1 - star.z / canvas.width) * (isWarping ? 3 : 2));
            ctx.beginPath();
            ctx.fillStyle = isWarping ? "#a855f7" : "#ffffff";
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        }
    });
    requestAnimationFrame(drawStars);
}
drawStars();

const warpBtn = document.getElementById('warpBtn');
if (warpBtn) {
    warpBtn.addEventListener('click', () => {
        isBlackHoleMode = false;
        isWarping = !isWarping;
        const bhBtn = document.getElementById('blackholeBtn');
        if (bhBtn) {
            bhBtn.innerText = "🕳️ Karadelik Modu";
            bhBtn.style.background = "rgba(5, 5, 10, 0.6)";
            bhBtn.style.color = "#a855f7";
        }
        if (isWarping) {
            warpSpeed = 25;
            warpBtn.innerText = "🚀 Yavaşla (Normal Hız)";
            warpBtn.style.background = "#a855f7";
            warpBtn.style.color = "#fff";
        } else {
            warpSpeed = 1;
            warpBtn.innerText = "🚀 Işık Hızına Geç";
            warpBtn.style.background = "transparent";
            warpBtn.style.color = "#a855f7";
        }
    });
}

const blackholeBtn = document.getElementById('blackholeBtn');
if (blackholeBtn) {
    blackholeBtn.addEventListener('click', () => {
        if (isWarping) {
            showPhysicsToast("🌌 Işık bile karadeliğin çekiminden kaçamaz!");
        }
        isWarping = false;
        isBlackHoleMode = !isBlackHoleMode;
        if (warpBtn) {
            warpSpeed = 1;
            warpBtn.innerText = "🚀 Işık Hızına Geç";
            warpBtn.style.background = "transparent";
            warpBtn.style.color = "#a855f7";
        }
        if (isBlackHoleMode) {
            blackholeBtn.innerText = "🕳️ Karadeliği Kapat";
            blackholeBtn.style.background = "#ff0055";
            blackholeBtn.style.color = "#fff";
        } else {
            blackholeBtn.innerText = "🕳️ Karadelik Modu";
            blackholeBtn.style.background = "rgba(5, 5, 10, 0.6)";
            blackholeBtn.style.color = "#a855f7";
        }
    });
}

function showPhysicsToast(text) {
    const toast = document.getElementById('physicsToast');
    if (!toast) return;
    toast.innerText = text;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

// --- MATEMATİKSEL İSPATLAR LABORATUVARI ---
function openProofsModal() {
    closeAllModals();
    const modal = document.getElementById('proofsModal');
    if (modal) {
        modal.style.display = 'flex';
        renderProofsContent();
    }
}

function closeProofsModal() {
    const modal = document.getElementById('proofsModal');
    if (modal) modal.style.display = 'none';
}

function renderProofsContent() {
    const container = document.getElementById('proofsListContainer');
    if (!container) return;

    const modalContent = container.closest('.modal-content');
    if (modalContent) {
        modalContent.style.maxWidth = '850px';
    }

    container.innerHTML = `
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; border-bottom: 1px solid rgba(0, 210, 255, 0.2); padding-bottom: 15px;">
            <button onclick="filterProofs('all')" class="cat-btn active" style="font-size:0.8rem; padding:6px 12px;">Tüm İspatlar (${proofsTopics.length})</button>
            <button onclick="filterProofs('matematik')" class="cat-btn" style="font-size:0.8rem; padding:6px 12px;">📐 Matematik</button>
            <button onclick="filterProofs('teorik')" class="cat-btn" style="font-size:0.8rem; padding:6px 12px;">⚡ Fizik & Görelilik</button>
            <button onclick="filterProofs('kuantum')" class="cat-btn" style="font-size:0.8rem; padding:6px 12px;">⚛️ Kuantum</button>
            <button onclick="filterProofs('kozmoloji')" class="cat-btn" style="font-size:0.8rem; padding:6px 12px;">🌌 Kozmoloji</button>
        </div>
        <div id="proofCardsWrapper" style="display: flex; flex-direction: column; gap: 20px; max-height: 60vh; overflow-y: auto; padding-right: 5px;"></div>
    `;

    const wrapper = document.getElementById('proofCardsWrapper');

    proofsTopics.forEach(topic => {
        let subItemsHtml = '';
        if (topic.subitems && topic.subitems.length > 0) {
            subItemsHtml = topic.subitems.map((sub, index) => {
                const subTitle = sub.title || sub.subtitle || `Adım ${index + 1}`;
                const subDesc = sub.desc || sub.text || '';
                return `
                    <div style="background: rgba(0, 210, 255, 0.03); border: 1px solid rgba(0, 210, 255, 0.15); padding: 14px; border-radius: 10px; margin-top: 10px;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                            <strong style="color: #00d2ff; font-size: 0.95rem;">${subTitle}</strong>
                            <span style="font-size: 0.75rem; background: rgba(0, 210, 255, 0.1); color: #00d2ff; padding: 2px 8px; border-radius: 10px;">Adım ${index + 1}</span>
                        </div>
                        <p style="color: #cbd5e1; font-size: 0.88rem; margin: 0; line-height: 1.5; white-space: pre-line;">${subDesc}</p>
                    </div>
                `;
            }).join('');
        }

        let interactiveExtra = '';
        if (topic.id && topic.id.includes('pisagor')) {
            interactiveExtra = `
                <div style="margin-top: 15px; background: rgba(34, 197, 94, 0.05); border: 1px solid rgba(34, 197, 94, 0.2); padding: 12px; border-radius: 8px;">
                    <span style="color: #22c55e; font-size: 0.85rem; font-weight: bold; display: block; margin-bottom: 6px;">🧮 İnteraktif Hipotenüs Testi</span>
                    <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                        <input type="number" id="pA" value="3" placeholder="a" style="width: 60px; padding: 4px; background: rgba(255,255,255,0.05); border: 1px solid #22c55e; color: #fff; border-radius: 4px;" oninput="calculatePythagoras()">
                        <span style="color: #fff;">² +</span>
                        <input type="number" id="pB" value="4" placeholder="b" style="width: 60px; padding: 4px; background: rgba(255,255,255,0.05); border: 1px solid #22c55e; color: #fff; border-radius: 4px;" oninput="calculatePythagoras()">
                        <span style="color: #fff;">² = <b id="pC" style="color: #22c55e;">5</b>² (c = 5)</span>
                    </div>
                </div>
            `;
        }

        const card = document.createElement('div');
        card.className = "proof-card-item";
        card.dataset.id = topic.id || '';
        card.dataset.cat = (topic.cat || '').toLowerCase();
        card.style.cssText = "background: rgba(15, 15, 25, 0.85); border: 1px solid rgba(0, 210, 255, 0.3); border-radius: 14px; padding: 22px; box-shadow: 0 4px 20px rgba(0,0,0,0.4);";
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <span style="font-size: 1.5rem;">${topic.icon || '📜'}</span>
                <h3 style="color: #fff; font-size: 1.2rem; margin: 0;">${topic.title}</h3>
            </div>
            <p style="color: #a0a0c0; font-size: 0.9rem; margin-bottom: 14px; line-height: 1.4;">${topic.desc}</p>
            <div style="display: flex; flex-direction: column; gap: 6px;">
                ${subItemsHtml}
            </div>
            ${interactiveExtra}
        `;
        wrapper.appendChild(card);
    });
}

function filterProofs(categoryKey) {
    const buttons = document.querySelectorAll('#proofsListContainer .cat-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${categoryKey}'`)) {
            btn.classList.add('active');
        }
    });

    const cards = document.querySelectorAll('.proof-card-item');
    cards.forEach(card => {
        const cardCat = card.dataset.cat;
        if (categoryKey === 'all' || cardCat.includes(categoryKey)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function calculatePythagoras() {
    const a = parseFloat(document.getElementById('pA').value) || 0;
    const b = parseFloat(document.getElementById('pB').value) || 0;
    const c = Math.sqrt(a * a + b * b).toFixed(2);
    const pCElem = document.getElementById('pC');
    if (pCElem) pCElem.innerText = c;
}

// --- QUIZ SİSTEMİ (25 SORU) ---
const quizData = [
    { question: "Işık yılı (Light-year) fiziksel olarak neyi ölçer?", options: ["Zamanı", "Uzaklığı / Mesafeyi", "Hızı", "Işığın şiddetini"], correct: 1 },
    { question: "Einstein'ın ünlü kütle-enerji eşdeğerliliği formülü hangisidir?", options: ["E = m·c²", "F = m·a", "P = m·v", "V = I·R"], correct: 0 },
    { question: "Evrenin genişlediğini ve galaksilerin bizden uzaklaştığını gözlemleyen astronom kimdir?", options: ["Isaac Newton", "Stephen Hawking", "Edwin Hubble", "Galileo Galilei"], correct: 2 },
    { question: "Karadeliklerin çekim alanından ışığın bile kaçamayacağı sınıra ne ad verilir?", options: ["Tekillik (Singularity)", "Olay Ufku (Event Horizon)", "Ergosfer", "Photon Çemberi"], correct: 1 },
    { question: "Evrenin yaklaşık yaşı güncel bilimsel verilere göre kaç yıldır?", options: ["4.5 Milyar yıl", "6 Bin yıl", "13.8 Milyar yıl", "100 Milyar yıl"], correct: 2 },
    { question: "Özel Görelilik Teorisi'ne göre boşlukta ışık hızı (c) gözlemcinin hareketine göre nasıldır?", options: ["Gözlemcinin hızına eklenir", "Gözlemcinin hızından çıkarılır", "Her gözlemci için sabit ve aynıdır", "Zamanla azalır"], correct: 2 },
    { question: "Kuantum mekaniğinde bir parçacığın hem konumunun hem de momentumunun aynı anda tam olarak ölçülemeyeceğini belirten ilke hangisidir?", options: ["Pauli Dışlama İlkesi", "Heisenberg Belirsizlik İlkesi", "Termodinamiğin 2. Yasası", "Kütleçekim Yasası"], correct: 1 },
    { question: "Büyük Patlama'nın (Big Bang) günümüze ulaşan mikro dalga boyundaki ısı kalıntısına ne ad verilir?", options: ["Kozmik Arka Plan Işıması (CMB)", "Güneş Rüzgarı", "Karanlık Enerji Akışı", "Braket Işıması"], correct: 0 },
    { question: "Evrenin hızlanarak genişlemesine sebep olduğu düşünülen gizemli güç nedir?", options: ["Karanlık Madde", "Karanlık Enerji", "Antimadde", "Tavson Alanı"], correct: 1 },
    { question: "Termodinamiğe göre sıcaklığın moleküler hareketin durduğu teorik alt sınırına ne denir?", options: ["0 Kelvin (Mutlak Sıfır)", "-273 Fahrenheit", "0 Celsius", "100 Kelvin"], correct: 0 }
];

let currentQuizIndex = 0;
let quizScore = 0;

function openQuizModal() {
    closeAllModals();
    const modal = document.getElementById('quizModal');
    if (modal) {
        modal.style.display = 'flex';
        currentQuizIndex = 0;
        quizScore = 0;
        loadQuizQuestion();
    }
}

function closeQuizModal() {
    const modal = document.getElementById('quizModal');
    if (modal) modal.style.display = 'none';
}

function loadQuizQuestion() {
    const bodyContainer = document.getElementById('quizBodyContainer');
    if (!bodyContainer) return;

    if (currentQuizIndex < quizData.length) {
        const q = quizData[currentQuizIndex];
        let optionsHtml = '';
        q.options.forEach((opt, idx) => {
            optionsHtml += `
                <button onclick="checkQuizAnswer(${idx})" class="quiz-option-btn" style="display: block; width: 100%; margin-bottom: 10px; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(168,85,247,0.3); color: #fff; border-radius: 8px; cursor: pointer;">
                    ${String.fromCharCode(65 + idx)}. ${opt}
                </button>
            `;
        });

        bodyContainer.innerHTML = `
            <div style="font-size: 0.85rem; color: #a855f7; margin-bottom: 8px;">Soru ${currentQuizIndex + 1} / ${quizData.length}</div>
            <h3 style="color: #fff; font-size: 1.1rem; margin-bottom: 15px; line-height: 1.4;">${q.question}</h3>
            <div style="display: flex; flex-direction: column;">
                ${optionsHtml}
            </div>
        `;
    } else {
        bodyContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3 style="color: #a855f7; font-size: 1.4rem; margin-bottom: 10px;">🎉 Quiz Tamamlandı!</h3>
                <p style="color: #d0d0e0; font-size: 1rem; margin-bottom: 20px;">Toplam Skorun: <b style="color: #22c55e;">${quizScore}</b> / ${quizData.length}</p>
                <button onclick="openQuizModal()" class="cat-btn active" style="padding: 10px 20px; cursor: pointer;">Tekrar Çöz</button>
            </div>
        `;
    }
}

function checkQuizAnswer(selectedIndex) {
    const q = quizData[currentQuizIndex];
    if (selectedIndex === q.correct) quizScore++;
    currentQuizIndex++;
    loadQuizQuestion();
}

// --- NASA APOD ENTEGRASYONU (DÜZELTİLMİŞ MİMARİ) ---
async function translateToTurkish(text) {
    if (!text) return '';
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.substring(0, 450))}&langpair=en|tr`;
        const res = await fetch(url);
        const data = await res.json();
        return data.responseData?.translatedText || text;
    } catch (err) {
        return text;
    }
}

async function getNasaImage() {
    const loadingElem = document.getElementById('nasa-loading');
    const contentElem = document.getElementById('nasa-content');
    const imgElem = document.getElementById('nasa-image');
    const titleElem = document.getElementById('nasa-title');
    const expElem = document.getElementById('nasa-explanation');
    const dateElem = document.getElementById('nasa-date');

    if (loadingElem) {
        loadingElem.style.display = 'block';
        loadingElem.textContent = 'NASA Günün Uzay Görseli Yükleniyor...';
    }

    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
        const data = await response.json();

        if (data.code || !data.title) throw new Error("NASA API yanıt vermedi.");

        const translatedTitle = await translateToTurkish(data.title);
        const translatedExplanation = await translateToTurkish(data.explanation || '');

        if (imgElem) imgElem.src = (data.media_type === 'image' && data.url) ? data.url : 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000';
        if (titleElem) titleElem.textContent = translatedTitle;
        if (expElem) expElem.textContent = translatedExplanation;
        if (dateElem) dateElem.textContent = `Tarih: ${data.date || new Date().toISOString().split('T')[0]}`;

        if (loadingElem) loadingElem.style.display = 'none';
        if (contentElem) contentElem.style.display = 'block';

    } catch (error) {
        if (imgElem) imgElem.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000';
        if (titleElem) titleElem.textContent = 'Carina Nebulası - Yıldız Doğumevi';
        if (expElem) expElem.textContent = 'JWST tarafından kızılötesi dalga boyunda çekilen Carina Nebulası, gaz ve toz bulutlarının içerisinde binlerce yeni yıldızın doğumuna ev sahipliği yapmaktadır.';
        if (dateElem) dateElem.textContent = `Tarih: ${new Date().toLocaleDateString('tr-TR')}`;

        if (loadingElem) loadingElem.style.display = 'none';
        if (contentElem) contentElem.style.display = 'block';
    }
}

function openNasaModal() {
    closeAllModals();
    const nasaModal = document.getElementById('nasaModal');
    if (nasaModal) {
        nasaModal.style.display = 'flex';
        getNasaImage();
    }
}

function closeNasaModal() {
    const nasaModal = document.getElementById('nasaModal');
    if (nasaModal) nasaModal.style.display = 'none';
}

// =========================================================
// --- GELİŞMİŞ UZAY-ZAMAN DOKULU KÜTLEÇEKİM VE KARADELİK LAB ---
// =========================================================
let gravCanvas, gravCtx;
let gravBodies = [];
let gravParticles = [];
let gravAnimId = null;
let isGravPaused = false;
let simTimeScale = 1.0;
let spawnMode = 'planet';
let isDraggingGrav = false;
let dragStartPos = { x: 0, y: 0 };
let currentMousePos = { x: 0, y: 0 };

let G_CONSTANT = 1.2;

class ExplosionParticle {
    constructor(x, y, color) {
        this.x = x; this.y = y;
        this.vx = (Math.random() - 0.5) * 6;
        this.vy = (Math.random() - 0.5) * 6;
        this.color = color;
        this.alpha = 1.0;
        this.size = Math.random() * 3 + 1;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        this.alpha -= 0.025;
    }
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

class GravBody {
    constructor(x, y, vx, vy, mass, radius, color, type = 'planet', name = '') {
        this.x = x; this.y = y; this.vx = vx; this.vy = vy;
        this.mass = mass; this.radius = radius; this.color = color;
        this.type = type; this.name = name; this.trail = [];
        this.angle = Math.random() * Math.PI * 2;
    }

    update() {
        this.x += this.vx * simTimeScale;
        this.y += this.vy * simTimeScale;
        this.angle += 0.05 * simTimeScale;

        if (this.type !== 'blackhole') {
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > 40) this.trail.shift();
        }
    }

    draw(ctx) {
        if (this.trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(this.trail[0].x, this.trail[0].y);
            for (let i = 1; i < this.trail.length; i++) ctx.lineTo(this.trail[i].x, this.trail[i].y);
            ctx.strokeStyle = this.color; ctx.globalAlpha = 0.35; ctx.lineWidth = 1.5; ctx.stroke(); ctx.globalAlpha = 1.0;
        }

        if (this.type === 'blackhole') {
            ctx.save();
            ctx.translate(this.x, this.y);

            let grad = ctx.createRadialGradient(0, 0, this.radius * 0.5, 0, 0, this.radius * 3.8);
            grad.addColorStop(0, 'rgba(255, 140, 0, 1.0)');
            grad.addColorStop(0.35, 'rgba(168, 85, 247, 0.6)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.beginPath();
            ctx.arc(0, 0, this.radius * 3.8, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            ctx.rotate(this.angle);
            ctx.beginPath();
            ctx.ellipse(0, 0, this.radius * 3.0, this.radius * 0.95, Math.PI / 4, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 220, 130, 0.85)';
            ctx.lineWidth = 2.5;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#000000';
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.2;
            ctx.stroke();

            ctx.restore();
        } else if (this.type === 'star') {
            ctx.save();
            ctx.shadowBlur = 30;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        if (this.name) {
            ctx.fillStyle = '#ffffff';
            ctx.font = '10px sans-serif';
            ctx.fillText(this.name, this.x + this.radius + 4, this.y + 3);
        }
    }
}

function openGravityModal() {
    closeAllModals();
    const modal = document.getElementById('gravityModal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(initGravitySim, 50);
    }
}

function closeGravityModal() {
    const modal = document.getElementById('gravityModal');
    if (modal) modal.style.display = 'none';
    if (gravAnimId) cancelAnimationFrame(gravAnimId);
}

function initGravitySim() {
    gravCanvas = document.getElementById('gravityCanvas');
    if (!gravCanvas) return;
    gravCtx = gravCanvas.getContext('2d');

    const rect = gravCanvas.parentElement.getBoundingClientRect();
    gravCanvas.width = rect.width;
    gravCanvas.height = rect.height;

    gravCanvas.onmousedown = onGravMouseDown;
    gravCanvas.onmousemove = onGravMouseMove;
    gravCanvas.onmouseup = onGravMouseUp;

    if (gravBodies.length === 0) loadSolarSystemPreset();
    if (gravAnimId) cancelAnimationFrame(gravAnimId);
    runGravityLoop();
}

function drawSpacetimeGrid() {
    const gridSpacing = 30;
    gravCtx.strokeStyle = 'rgba(0, 210, 255, 0.12)';
    gravCtx.lineWidth = 1;

    for (let x = 0; x < gravCanvas.width; x += gridSpacing) {
        gravCtx.beginPath();
        for (let y = 0; y < gravCanvas.height; y += 15) {
            let offset = getSpacetimeDisplacement(x, y);
            if (y === 0) gravCtx.moveTo(x + offset.dx, y + offset.dy);
            else gravCtx.lineTo(x + offset.dx, y + offset.dy);
        }
        gravCtx.stroke();
    }

    for (let y = 0; y < gravCanvas.height; y += gridSpacing) {
        gravCtx.beginPath();
        for (let x = 0; x < gravCanvas.width; x += 15) {
            let offset = getSpacetimeDisplacement(x, y);
            if (x === 0) gravCtx.moveTo(x + offset.dx, y + offset.dy);
            else gravCtx.lineTo(x + offset.dx, y + offset.dy);
        }
        gravCtx.stroke();
    }
}

function getSpacetimeDisplacement(gx, gy) {
    let dx = 0, dy = 0;
    for (let body of gravBodies) {
        if (body.mass < 500) continue;
        let rx = body.x - gx;
        let ry = body.y - gy;
        let dist = Math.sqrt(rx * rx + ry * ry) + 10;
        let pull = Math.min(30, (body.mass * 0.08) / dist);
        dx += (rx / dist) * pull;
        dy += (ry / dist) * pull;
    }
    return { dx, dy };
}

function setGravitySpawnMode(mode) {
    spawnMode = mode;
    document.querySelectorAll('#gravityModal .cat-btn').forEach(b => {
        if (b.id.startsWith('mode')) b.classList.remove('active');
    });
    const activeBtn = document.getElementById(`mode${mode.charAt(0).toUpperCase() + mode.slice(1)}Btn`);
    if (activeBtn) activeBtn.classList.add('active');

    const modeTextMap = { 'planet': '🪐 Gezegen', 'star': '☀️ Yıldız', 'blackhole': '🕳️ Karadelik' };
    const txt = document.getElementById('currentModeText');
    if (txt) txt.innerText = modeTextMap[mode] || mode;
}

function onGravMouseDown(e) {
    const rect = gravCanvas.getBoundingClientRect();
    dragStartPos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    currentMousePos = { ...dragStartPos };
    isDraggingGrav = true;
}

function onGravMouseMove(e) {
    if (!isDraggingGrav) return;
    const rect = gravCanvas.getBoundingClientRect();
    currentMousePos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

function onGravMouseUp(e) {
    if (!isDraggingGrav) return;
    isDraggingGrav = false;

    const rect = gravCanvas.getBoundingClientRect();
    const endPos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    const vx = (dragStartPos.x - endPos.x) * 0.04;
    const vy = (dragStartPos.y - endPos.y) * 0.04;

    if (spawnMode === 'planet') {
        const colors = ['#00d2ff', '#22c55e', '#eab308', '#ef4444', '#a855f7', '#ec4899'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        gravBodies.push(new GravBody(dragStartPos.x, dragStartPos.y, vx, vy, 15, 5, randomColor, 'planet'));
    } else if (spawnMode === 'star') {
        gravBodies.push(new GravBody(dragStartPos.x, dragStartPos.y, vx, vy, 3500, 14, '#fde047', 'star', 'Yıldız'));
    } else if (spawnMode === 'blackhole') {
        gravBodies.push(new GravBody(dragStartPos.x, dragStartPos.y, vx * 0.1, vy * 0.1, 25000, 16, '#000000', 'blackhole', 'Karadelik'));
    }

    updateBodyCountUI();
}

function runGravityLoop() {
    gravCtx.fillStyle = 'rgba(2, 2, 8, 0.3)';
    gravCtx.fillRect(0, 0, gravCanvas.width, gravCanvas.height);

    drawSpacetimeGrid();

    if (!isGravPaused) {
        for (let i = 0; i < gravBodies.length; i++) {
            for (let j = i + 1; j < gravBodies.length; j++) {
                let b1 = gravBodies[i], b2 = gravBodies[j];
                let dx = b2.x - b1.x, dy = b2.y - b1.y;
                let distSq = dx * dx + dy * dy + 50;
                let dist = Math.sqrt(distSq);

                let swallowDistance = (b1.type === 'blackhole' || b2.type === 'blackhole') 
                    ? Math.max(b1.radius, b2.radius) * 1.5 
                    : b1.radius + b2.radius;

                if (dist < swallowDistance) {
                    let winner = b1, loser = b2, loserIndex = j;

                    if (b2.type === 'blackhole' && b1.type !== 'blackhole') {
                        winner = b2; loser = b1; loserIndex = i;
                    } else if (b1.type === 'blackhole' && b2.type !== 'blackhole') {
                        winner = b1; loser = b2; loserIndex = j;
                    } else if (b2.type === 'star' && b1.type === 'planet') {
                        winner = b2; loser = b1; loserIndex = i;
                    } else if (b1.type === 'star' && b2.type === 'planet') {
                        winner = b1; loser = b2; loserIndex = j;
                    } else if (b2.mass > b1.mass) {
                        winner = b2; loser = b1; loserIndex = i;
                    }

                    for (let k = 0; k < 18; k++) {
                        gravParticles.push(new ExplosionParticle(loser.x, loser.y, loser.color));
                    }

                    winner.vx = (winner.mass * winner.vx + loser.mass * loser.vx) / (winner.mass + loser.mass);
                    winner.vy = (winner.mass * winner.vy + loser.mass * loser.vy) / (winner.mass + loser.mass);
                    winner.mass += loser.mass * 0.8;
                    winner.radius = Math.min(38, winner.radius + 0.3);

                    gravBodies.splice(loserIndex, 1);
                    if (loserIndex === i) { i--; break; } else { j--; continue; }
                }

                let force = (G_CONSTANT * b1.mass * b2.mass) / distSq;
                let fx = force * (dx / dist);
                let fy = force * (dy / dist);
                b1.vx += (fx / b1.mass) * simTimeScale;
                b1.vy += (fy / b1.mass) * simTimeScale;
                b2.vx -= (fx / b2.mass) * simTimeScale;
                b2.vy -= (fy / b2.mass) * simTimeScale;
            }
        }
        gravBodies.forEach(b => b.update());
    }

    for (let p = gravParticles.length - 1; p >= 0; p--) {
        gravParticles[p].update();
        gravParticles[p].draw(gravCtx);
        if (gravParticles[p].alpha <= 0) gravParticles.splice(p, 1);
    }

    gravBodies.forEach(b => b.draw(gravCtx));

    if (isDraggingGrav) {
        drawTrajectoryPrediction();
    }

    updateBodyCountUI();
    gravAnimId = requestAnimationFrame(runGravityLoop);
}

function drawTrajectoryPrediction() {
    let simX = dragStartPos.x;
    let simY = dragStartPos.y;
    let simVx = (dragStartPos.x - currentMousePos.x) * 0.04;
    let simVy = (dragStartPos.y - currentMousePos.y) * 0.04;
    let simMass = (spawnMode === 'blackhole') ? 25000 : (spawnMode === 'star' ? 3500 : 15);

    gravCtx.beginPath();
    gravCtx.moveTo(simX, simY);

    for (let step = 0; step < 120; step++) {
        for (let body of gravBodies) {
            let dx = body.x - simX;
            let dy = body.y - simY;
            let distSq = dx * dx + dy * dy + 50;
            let dist = Math.sqrt(distSq);

            let force = (G_CONSTANT * simMass * body.mass) / distSq;
            simVx += (force * (dx / dist)) / simMass;
            simVy += (force * (dy / dist)) / simMass;
        }

        simX += simVx;
        simY += simVy;

        if (step % 3 === 0) {
            gravCtx.lineTo(simX, simY);
        }
    }

    gravCtx.strokeStyle = (spawnMode === 'blackhole') ? '#a855f7' : '#00d2ff';
    gravCtx.lineWidth = 2;
    gravCtx.setLineDash([4, 4]);
    gravCtx.stroke();
    gravCtx.setLineDash([]);

    gravCtx.beginPath();
    gravCtx.moveTo(dragStartPos.x, dragStartPos.y);
    gravCtx.lineTo(currentMousePos.x, currentMousePos.y);
    gravCtx.strokeStyle = 'rgba(255,255,255,0.4)';
    gravCtx.lineWidth = 1;
    gravCtx.stroke();
}

function loadSolarSystemPreset() {
    clearGravitySim();
    if (!gravCanvas) return;
    const cx = gravCanvas.width / 2, cy = gravCanvas.height / 2;

    const sun = new GravBody(cx, cy, 0, 0, 4500, 16, '#fde047', 'star', 'Güneş');
    gravBodies.push(sun);

    const planets = [
        { r: 65, mass: 10, size: 4, color: '#a0a0c0', name: 'Merkür' },
        { r: 105, mass: 15, size: 5, color: '#eab308', name: 'Venüs' },
        { r: 155, mass: 18, size: 6, color: '#00d2ff', name: 'Dünya' },
        { r: 215, mass: 12, size: 5, color: '#ef4444', name: 'Mars' },
        { r: 295, mass: 50, size: 9, color: '#a855f7', name: 'Jüpiter' }
    ];

    planets.forEach(p => {
        let orbitSpeed = Math.sqrt((G_CONSTANT * sun.mass) / p.r);
        gravBodies.push(new GravBody(cx, cy - p.r, orbitSpeed, 0, p.mass, p.size, p.color, 'planet', p.name));
    });
}

function loadBlackHoleSystemPreset() {
    clearGravitySim();
    if (!gravCanvas) return;
    const cx = gravCanvas.width / 2, cy = gravCanvas.height / 2;

    const bh = new GravBody(cx, cy, 0, 0, 35000, 20, '#000000', 'blackhole', 'Gargantua');
    gravBodies.push(bh);

    const stars = [
        { r: 110, mass: 1000, size: 10, color: '#fde047', name: 'Mavi Dev' },
        { r: 180, mass: 800, size: 9, color: '#ef4444', name: 'Kırmızı Dev' },
        { r: 260, mass: 1200, size: 11, color: '#00d2ff', name: 'Süpernova Adayı' }
    ];

    stars.forEach(s => {
        let orbitSpeed = Math.sqrt((G_CONSTANT * bh.mass) / s.r);
        gravBodies.push(new GravBody(cx, cy - s.r, orbitSpeed, 0, s.mass, s.size, s.color, 'star', s.name));
    });
}

function loadBinaryStarPreset() {
    clearGravitySim();
    if (!gravCanvas) return;
    const cx = gravCanvas.width / 2, cy = gravCanvas.height / 2;
    gravBodies.push(new GravBody(cx - 75, cy, 0, 2.6, 4500, 13, '#fde047', 'star', 'Alfa'));
    gravBodies.push(new GravBody(cx + 75, cy, 0, -2.6, 4500, 13, '#00d2ff', 'star', 'Beta'));
}

function clearGravitySim() { gravBodies = []; gravParticles = []; updateBodyCountUI(); }
function toggleGravityPause() { 
    isGravPaused = !isGravPaused; 
    const btn = document.getElementById('pauseGravityBtn');
    if (btn) btn.innerText = isGravPaused ? '▶️ Devam Et' : '⏸️ Duraklat';
}
function updateBodyCountUI() {
    const countElem = document.getElementById('bodyCountText');
    if (countElem) countElem.innerText = gravBodies.length;
}

// --- FONKSİYONLARI GLOBAL WINDOW NESNESİNE BAĞLAMA ---
window.openRandomTopic = openRandomTopic;
window.openSimModal = openSimModal;
window.closeSimModal = closeSimModal;
window.openConverterModal = openConverterModal;
window.closeConverterModal = closeConverterModal;
window.openQuizModal = openQuizModal;
window.closeQuizModal = closeQuizModal;
window.showFavorites = showFavorites;
window.openNasaModal = openNasaModal;
window.closeNasaModal = closeNasaModal;
window.openGravityModal = openGravityModal;
window.closeGravityModal = closeGravityModal;
window.openProofsModal = openProofsModal;
window.closeProofsModal = closeProofsModal;
window.closeModal = closeModal;
window.closeAllModals = closeAllModals;
window.filterCards = filterCards;
window.filterCategory = filterCategory;
window.calculateTimeDilation = calculateTimeDilation;
window.convertUnits = convertUnits;
window.toggleFavorite = toggleFavorite;
window.setGravitySpawnMode = setGravitySpawnMode;
window.loadSolarSystemPreset = loadSolarSystemPreset;
window.loadBlackHoleSystemPreset = loadBlackHoleSystemPreset;
window.loadBinaryStarPreset = loadBinaryStarPreset;
window.clearGravitySim = clearGravitySim;
window.toggleGravityPause = toggleGravityPause;
window.filterProofs = filterProofs;
window.calculatePythagoras = calculatePythagoras;
window.checkQuizAnswer = checkQuizAnswer;

// --- BAŞLANGIÇ YÜKLEMESİ ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof topicsData !== 'undefined' && Array.isArray(topicsData)) {
        encyclopediaTopics = [...topicsData];
        fullTopics = [...encyclopediaTopics, ...proofsTopics];
    }
    renderCards(encyclopediaTopics);
    getNasaImage();
});