// --- UZAY-ZAMAN VERİTABANI ---
const fullTopics = topicsData;

// --- KARTLARI DİNAMİK OLUŞTURMA ---
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
        grid.innerHTML += `
            <div class="card" data-cat="${item.cat}" onclick="showTopicModal('${item.id}')">
                <div class="card-icon">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <span class="sub-count" style="display:block; font-size:0.8rem; color:#00d2ff; margin-top:8px;">📌 ${subCount} Detaylı Alt Başlık</span>
                <span class="read-more">Detayları İncele &rarr;</span>
            </div>
        `;
    });

    attachTiltEffect();
}

// --- MODAL PENCERELERİ ---
function showTopicModal(topicId) {
    const topic = fullTopics.find(t => t.id === topicId);
    if (!topic) return;

    let modalContentHtml = `
        <h2 style="color: #00d2ff; margin-bottom: 10px; font-size: 1.5rem;">${topic.title}</h2>
        <p class="modal-desc" style="color:#a0a0c0; margin-bottom:15px;">${topic.desc}</p>
        <hr style="border-color: rgba(0, 210, 255, 0.2); margin: 15px 0;">
    `;
    
    if (topic.subitems && topic.subitems.length > 0) {
        topic.subitems.forEach((sub, index) => {
            modalContentHtml += `
                <div class="sub-item-box" style="margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border-left: 3px solid #00d2ff;">
                    <h4 style="color: #00d2ff; margin-bottom: 5px; font-size:1rem;">${index + 1}. ${sub.subtitle}</h4>
                    <p style="font-size: 0.88rem; color: #d0d0e0; margin: 0; line-height:1.4;">${sub.text}</p>
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

function closeSimModal() { document.getElementById('simModal').style.display = 'none'; }
function openSimModal() { document.getElementById('simModal').style.display = 'flex'; calculateTimeDilation(); }

function openConverterModal() { document.getElementById('converterModal').style.display = 'flex'; convertUnits(); }
function closeConverterModal() { document.getElementById('converterModal').style.display = 'none'; }

function openRandomTopic() {
    const randomIndex = Math.floor(Math.random() * fullTopics.length);
    showTopicModal(fullTopics[randomIndex].id);
}

// --- ARAMA VE KATEGORİ FİLTRELEME (GELİŞMİŞ EŞLEŞTİRME) ---
function filterCards() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h3') ? card.querySelector('h3').innerText.toLowerCase() : '';
        const desc = card.querySelector('p') ? card.querySelector('p').innerText.toLowerCase() : '';

        if (title.includes(input) || desc.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

function filterCategory(keyword, btnElement) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    
    const currentBtn = btnElement || (window.event && window.event.currentTarget);
    if (currentBtn) currentBtn.classList.add('active');

    if (keyword === 'all') {
        renderCards(fullTopics);
    } else {
        const target = keyword.toLowerCase().trim();
        
        const filtered = fullTopics.filter(t => {
            const topicCat = (t.cat || "").toLowerCase();
            const topicTitle = (t.title || "").toLowerCase();
            const topicDesc = (t.desc || "").toLowerCase();
            
            // Özel Kategori Eşleştirmeleri (Tüm butonların sorunsuz çalışması için)
            if (target.includes('astrofizik')) {
                return topicCat.includes('astro') || topicCat.includes('yıldız') || topicTitle.includes('astro') || topicTitle.includes('yıldız') || topicDesc.includes('yıldız');
            }
            if (target.includes('teorik')) {
                return topicCat.includes('teorik') || topicCat.includes('teori') || topicTitle.includes('teorik') || topicTitle.includes('teori');
            }
            if (target.includes('bilim')) {
                return topicCat.includes('bilim') || topicCat.includes('insan') || topicTitle.includes('einstein') || topicTitle.includes('hawking') || topicTitle.includes('newton');
            }

            return topicCat.includes(target) || 
                   topicTitle.includes(target) || 
                   topicDesc.includes(target);
        });
        
        renderCards(filtered);
    }
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
        closeModal();
        closeSimModal();
        closeConverterModal();
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
        ctx.shadowColor = "#00d2ff";
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
            ctx.fillStyle = "#00ffaa";
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
            ctx.fillStyle = isWarping ? "#00d2ff" : "#ffffff";
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
            bhBtn.style.color = "#00d2ff";
        }
        if (isWarping) {
            warpSpeed = 25;
            warpBtn.innerText = "🚀 Yavaşla (Normal Hız)"; // DEĞİŞTİ: Roket eklendi
            warpBtn.style.background = "#00d2ff";
            warpBtn.style.color = "#000";
        } else {
            warpSpeed = 1;
            warpBtn.innerText = "🚀 Işık Hızına Geç"; // DEĞİŞTİ: Roket eklendi
            warpBtn.style.background = "transparent";
            warpBtn.style.color = "#00d2ff";
        }
    });
}

const blackholeBtn = document.getElementById('blackholeBtn');
if (blackholeBtn) {
    blackholeBtn.addEventListener('click', () => {
        isWarping = false;
        isBlackHoleMode = !isBlackHoleMode;
        if (warpBtn) {
            warpSpeed = 1;
            isWarping = false;
            warpBtn.innerText = "🚀 Işık Hızına Geç"; // DEĞİŞTİ: Roket eklendi
            warpBtn.style.background = "transparent";
            warpBtn.style.color = "#00d2ff";
        }
        if (isBlackHoleMode) {
            blackholeBtn.innerText = "🕳️ Karadeliği Kapat"; // DEĞİŞTİ: Emoji korundu
            blackholeBtn.style.background = "#ff0055";
            blackholeBtn.style.color = "#fff";
        } else {
            blackholeBtn.innerText = "🕳️ Karadelik Modu"; // DEĞİŞTİ: Emoji korundu
            blackholeBtn.style.background = "rgba(5, 5, 10, 0.6)";
            blackholeBtn.style.color = "#00d2ff";
        }
    });
}

// --- BAŞLANGIÇ ---
document.addEventListener('DOMContentLoaded', () => {
    renderCards(fullTopics);
});