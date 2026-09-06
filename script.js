// --- VERİTABANI TANIMLAMALARI ---
let encyclopediaTopics = [];
if (typeof topicsData !== 'undefined') {
    encyclopediaTopics = [...topicsData];
}

let proofsTopics = [];
if (typeof extendedProofsData !== 'undefined') {
    proofsTopics = [...extendedProofsData];
}

// Arama, rastgele konu ve detay görüntüleme için birleştirilmiş tam liste
let fullTopics = [...encyclopediaTopics, ...proofsTopics];

// Aktif kategori durumu (arama kutusuyla birlikte çalışır)
let currentCategory = 'all';

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

// --- KARTLARI DİNAMİK OLUŞTURMA (Sadece Ansiklopedi Konuları) ---
function renderCards(data) {
    const grid = document.querySelector('.card-grid');
    if (!grid) return;
    grid.innerHTML = "";

    if (!data || data.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: #a0a0c0; padding: 40px;">Bu kategoride henüz içerik bulunamadı veya eşleşme sağlanamadı.</div>`;
        return;
    }

    data.forEach(item => {
        const subCount = item.subitems ? item.subitems.length : 0;
        const favActive = isFavorite(item.id) ? 'active' : '';
        const starIcon = isFavorite(item.id) ? '★' : '☆';
        grid.innerHTML += `
            <div class="card" data-cat="${item.cat}" onclick="showTopicModal('${item.id}')">
                <button class="fav-star ${favActive}" data-id="${item.id}" onclick="toggleFavorite('${item.id}', event)">${starIcon}</button>
                <div class="card-icon">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <span class="sub-count" style="display:block; font-size:0.8rem; color:#a855f7; margin-top:8px;">📌 ${subCount} Detaylı Alt Başlık</span>
                <span class="read-more">Detayları İncele &rarr;</span>
            </div>
        `;
    });

    attachTiltEffect();
}

// --- ARAMA VE KATEGORİ FİLTRELEME (Favoriler dahil, birlikte çalışır) ---
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
            t.title.toLowerCase().includes(query) ||
            t.desc.toLowerCase().includes(query)
        );
    }

    renderCards(data);
}

function filterCategory(keyword, btnElement) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));

    const currentBtn = btnElement || (window.event && window.event.currentTarget);
    if (currentBtn) currentBtn.classList.add('active');

    const normalized = keyword.toLowerCase().trim();
    currentCategory = (normalized === 'tümü') ? 'all' : normalized;

    filterCards();
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

// --- TÜM MODALLARI KAPATAN ORTAK FONKSİYON ---
function closeAllModals() {
    closeModal();
    closeSimModal();
    closeConverterModal();
    closeProofsModal();
    closeQuizModal();
}

// --- KONU DETAY MODALI ---
function showTopicModal(topicId) {
    closeAllModals();
    const topic = fullTopics.find(t => t.id === topicId);
    if (!topic) return;

    let modalContentHtml = `
        <h2 style="color: #a855f7; margin-bottom: 10px; font-size: 1.5rem;">${topic.title}</h2>
        <p class="modal-desc" style="color:#a0a0c0; margin-bottom:15px;">${topic.desc}</p>
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

// --- ZAMAN GENİŞLEMESİ MODALI ---
function openSimModal() {
    closeAllModals();
    document.getElementById('simModal').style.display = 'flex';
    calculateTimeDilation();
}
function closeSimModal() { document.getElementById('simModal').style.display = 'none'; }

// --- BİRİM ÇEVİRİCİ MODALI ---
function openConverterModal() {
    closeAllModals();
    document.getElementById('converterModal').style.display = 'flex';
    convertUnits();
}
function closeConverterModal() { document.getElementById('converterModal').style.display = 'none'; }

// --- RASTGELE KONU ---
function openRandomTopic() {
    const randomIndex = Math.floor(Math.random() * encyclopediaTopics.length);
    showTopicModal(encyclopediaTopics[randomIndex].id);
}

// --- HESAPLAYICILAR ---
function calculateTimeDilation() {
    const speedInputElem = document.getElementById('speedInput');
    const spaceTimeInputElem = document.getElementById('spaceTimeInput');
    if (!speedInputElem || !spaceTimeInputElem) return;

    const vPercent = parseFloat(speedInputElem.value);
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

// --- CANVAS YILDIZ ALANI & SİMÜLASYON ---
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

document.addEventListener('DOMContentLoaded', () => {
    renderCards(encyclopediaTopics);
});

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

    const proofTopics = proofsTopics;

    container.innerHTML = `
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; border-bottom: 1px solid rgba(0, 210, 255, 0.2); padding-bottom: 15px;">
            <button onclick="filterProofs('all')" class="cat-btn active" style="font-size:0.8rem; padding:6px 12px;">Tüm İspatlar (${proofTopics.length})</button>
            <button onclick="filterProofs('matematik')" class="cat-btn" style="font-size:0.8rem; padding:6px 12px;">📐 Matematik</button>
            <button onclick="filterProofs('teorik')" class="cat-btn" style="font-size:0.8rem; padding:6px 12px;">⚡ Fizik & Görelilik</button>
            <button onclick="filterProofs('kuantum')" class="cat-btn" style="font-size:0.8rem; padding:6px 12px;">⚛️ Kuantum</button>
            <button onclick="filterProofs('kozmoloji')" class="cat-btn" style="font-size:0.8rem; padding:6px 12px;">🌌 Kozmoloji</button>
        </div>
        <div id="proofCardsWrapper" style="display: flex; flex-direction: column; gap: 20px; max-height: 60vh; overflow-y: auto; padding-right: 5px;"></div>
    `;

    const wrapper = document.getElementById('proofCardsWrapper');

    if (proofTopics.length === 0) {
        wrapper.innerHTML = `<p style="color:#a0a0c0; text-align:center; margin-top:20px;">Henüz uygun veri bulunamadı.</p>`;
        return;
    }

    proofTopics.forEach(topic => {
        let subItemsHtml = '';
        if (topic.subitems && topic.subitems.length > 0) {
            subItemsHtml = topic.subitems.map((sub, index) => {
                const subTitle = sub.title || sub.subtitle || `Adım ${index + 1}`;
                const subDesc = sub.desc || sub.text || '';
                return `
                    <div style="background: rgba(0, 210, 255, 0.03); border: 1px solid rgba(0, 210, 255, 0.15); padding: 14px; border-radius: 10px; margin-top: 10px; transition: 0.3s;">
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
        } else if (topic.id && topic.id.includes('mass-energy')) {
            interactiveExtra = `
                <div style="margin-top: 15px; background: rgba(234, 179, 8, 0.05); border: 1px solid rgba(234, 179, 8, 0.2); padding: 12px; border-radius: 8px;">
                    <span style="color: #eab308; font-size: 0.85rem; font-weight: bold; display: block; margin-bottom: 6px;">⚡ Enerji Dönüşüm Simülatörü (1 gram madde)</span>
                    <p style="color: #cbd5e1; font-size: 0.82rem; margin: 0;">1 gramlık kütle tamamen enerjiye dönüştürülürse açığa çıkan enerji: <br><b style="color: #eab308; font-size: 0.95rem;">9 × 10¹³ Joule</b></p>
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
        if (btn.getAttribute('onclick').includes(`'${categoryKey}'`)) {
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
    document.getElementById('pC').innerText = c;
}

// --- 25 SORULUK BİLİM VE KOZMOLOJİ QUIZ SİSTEMİ ---
const quizData = [
    {
        question: "Işık yılı (Light-year) fiziksel olarak neyi ölçer?",
        options: ["Zamanı", "Uzaklığı / Mesafeyi", "Hızı", "Işığın şiddetini"],
        correct: 1
    },
    {
        question: "Einstein'ın ünlü kütle-enerji eşdeğerliliği formülü hangisidir?",
        options: ["E = m·c²", "F = m·a", "P = m·v", "V = I·R"],
        correct: 0
    },
    {
        question: "Evrenin genişlediğini ve galaksilerin bizden uzaklaştığını gözlemleyen astronom kimdir?",
        options: ["Isaac Newton", "Stephen Hawking", "Edwin Hubble", "Galileo Galilei"],
        correct: 2
    },
    {
        question: "Karadeliklerin çekim alanından ışığın bile kaçamayacağı sınıra ne ad verilir?",
        options: ["Tekillik (Singularity)", "Olay Ufku (Event Horizon)", "Ergosfer", "Photon Çemberi"],
        correct: 1
    },
    {
        question: "Evrenin yaklaşık yaşı güncel bilimsel verilere göre kaç yıldır?",
        options: ["4.5 Milyar yıl", "6 Bin yıl", "13.8 Milyar yıl", "100 Milyar yıl"],
        correct: 2
    },
    {
        question: "Özel Görelilik Teorisi'ne göre boşlukta ışık hızı (c) gözlemcinin hareketine göre nasıldır?",
        options: ["Gözlemcinin hızına eklenir", "Gözlemcinin hızından çıkarılır", "Her gözlemci için sabit ve aynıdır", "Zamanla azalır"],
        correct: 2
    },
    {
        question: "Kuantum mekaniğinde bir parçacığın hem konumunun hem de momentumunun aynı anda tam olarak ölçülemeyeceğini belirten ilke hangisidir?",
        options: ["Pauli Dışlama İlkesi", "Heisenberg Belirsizlik İlkesi", "Termodinamiğin 2. Yasası", "Kütleçekim Yasası"],
        correct: 1
    },
    {
        question: "Büyük Patlama'nın (Big Bang) günümüze ulaşan mikro dalga boyundaki ısı kalıntısına ne ad verilir?",
        options: ["Kozmik Arka Plan Işıması (CMB)", "Güneş Rüzgarı", "Karanlık Enerji Akışı", "Braket Işıması"],
        correct: 0
    },
    {
        question: "Evrenin hızlanarak genişlemesine sebep olduğu düşünüle gizemli güç nedir?",
        options: ["Karanlık Madde", "Karanlık Enerji", "Antimadde", "Tavson Alanı"],
        correct: 1
    },
    {
        question: "Termodinamiğe göre sıcaklığın moleküler hareketin durduğu teorik alt sınırına ne denir?",
        options: ["0 Kelvin (Mutlak Sıfır)", "-273 Fahrenheit", "0 Celsius", "100 Kelvin"],
        correct: 0
    },
    {
        question: "Bir beyaz cücenin ulaşabileceği maksimum kütle sınırını belirleyen bilim insanı kimdir?",
        options: ["Subrahmanyan Chandrasekhar", "Niels Bohr", "Max Planck", "Enrico Fermi"],
        correct: 0
    },
    {
        question: "Galaksilerin bize yaklaşırken veya uzaklaşırken tayf çizgilerinin kaymasına neden olan etki hangisidir?",
        options: ["Fotoelektrik Etki", "Doppler Etkisi", "Compton Saçılması", "Zeeman Etkisi"],
        correct: 1
    },
    {
        question: "Evrendeki görünür normal maddelerin ve galaksilerin bir arada durmasını sağlayan ancak doğrudan gözlemlenemeyen kütle birimi nedir?",
        options: ["Karanlık Madde", "Nötrino Bulutu", "Tachyon", "Plazma Denizi"],
        correct: 0
    },
    {
        question: "Kuantum dolanıklığı (Quantum Entanglement) olayını Albert Einstein hangi ünlü ifadeyle eleştirmiştir?",
        options: ["Tanrı zar atmaz", "Uzaktan ürkütücü eylem", "Doğa boşluktan nefret eder", "Bu sadece bir illüzyondur"],
        correct: 1
    },
    {
        question: "Güneş gibi yıldızların çekirdeğinde gerçekleşen temel nükleer reaksiyon türü nedir?",
        options: ["Nükleer Fisyon (Bölünme)", "Nükleer Füzyon (Birleşme)", "Radyoaktif Bozunma", "Kimyasal Yanma"],
        correct: 1
    },
    {
        question: "Karadeliklerin kuantum etkileriyle termal radyasyon yayarak buharlaşabileceğini öne süren fizikçi kimdir?",
        options: ["Richard Feynman", "Stephen Hawking", "Carl Sagan", "J. Robert Oppenheimer"],
        correct: 1
    },
    {
        question: "Dünya dışı akıllı yaşamların varlığı ihtimali yüksek olmasına rağmen neden kanıt bulamadığımızı sorgulayan paradoks hangisidir?",
        options: ["Olbers Paradoksu", "Fermi Paradoksu", "İkizler Paradoksu", "Schrödinger Paradoksu"],
        correct: 1
    },
    {
        question: "Doğanın temel kuvvetlerinden kütleçekimini ve kuantum mekaniğini tek bir çatı altında birleştirmeyi amaçlayan teorik fizik modeli nedir?",
        options: ["Sicim Teorisi (String Theory)", "Standart Model", "Klasik Mekanik", "Hidrodinamik Model"],
        correct: 0
    },
    {
        question: "Evrenin en erken evrelerinde uzayın ışıktan bile hızlı bir şekilde katlanarak büyüdüğü döneme ne denir?",
        options: ["Enflasyon (Kozmik Enflasyon)", "Rekombinasyon", "Karanlık Çağ", "Stellar Evre"],
        correct: 0
    },
    {
        question: "Geceleri gökyüzünün neden karanlık olduğunu (eğer evren sonsuz ve yıldızlarla doluysa) sorgulayan paradoks hangisidir?",
        options: ["Olbers Paradoksu", "Fermi Paradoksu", "Maxwell Paradoksu", "Kelvin Paradoksu"],
        correct: 0
    },
    {
        question: "Evrendeki en küçük anlamlı uzunluk ve zaman birimlerini belirleyen sabit kimin adıyla anılır?",
        options: ["Max Planck", "Albert Einstein", "Isaac Newton", "Enrico Fermi"],
        correct: 0
    },
    {
        question: "Yıldızların ömrünün sonunda devasa bir patlamayla çöktüğü olaya ne ad verilir?",
        options: ["Supernova", "Nova", "Nebula", "Pulsar"],
        correct: 0
    },
    {
        question: "Çok hızlı dönen ve kutuplarından güçlü radyo dalgaları yayan nötron yıldızlarına ne denir?",
        options: ["Pulsar", "Kuasar", "Beyaz Cüce", "Magnetar"],
        correct: 0
    },
    {
        question: "Galaksilerin merkezinde yer alan, etrafındaki maddeleri yutarken devasa enerji yayan en parlak ve uzak gök cisimleri hangileridir?",
        options: ["Kuasarlar (Quasars)", "Meteorlar", "Asteroitler", "Kuyruklu Yıldızlar"],
        correct: 0
    },
    {
        question: "Samanyolu Galaksisi'ne en yakın büyük spiral galaksi hangisidir?",
        options: ["Andromeda Galaksisi", "Sombrero Galaksisi", "Üçgen (Triangulum) Galaksisi", "Büyük Macellan Bulutu"],
        correct: 0
    }
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
                <button onclick="checkQuizAnswer(${idx})" class="quiz-option-btn" style="display: block; width: 100%; margin-bottom: 10px;">
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
    const buttons = document.querySelectorAll('#quizBodyContainer button');

    buttons.forEach((btn, idx) => {
        btn.style.pointerEvents = 'none';
        if (idx === q.correct) {
            btn.classList.add('correct');
        } else if (idx === selectedIndex) {
            btn.classList.add('wrong');
        }
    });

    if (selectedIndex === q.correct) {
        quizScore++;
    }

    currentQuizIndex++;
    setTimeout(() => {
        loadQuizQuestion();
    }, 1200);
}