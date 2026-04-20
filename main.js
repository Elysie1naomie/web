// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40); 
}, { passive: true });

// ===== BURGER MENU =====
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ===== FADE-UP ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== ANIMATED COUNTERS =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const startTime = performance.now();
  const duration = 2200;
  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.floor(eased * target).toLocaleString('fr-FR') + '+';
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObserver.observe(el));

// ===== ACTIVE NAV =====
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.fontWeight = a.getAttribute('href') === '#' + current ? '700' : '500';
  });
}, { passive: true });

// ===== NAV DOT INDICATOR =====
const navDotStyle = document.createElement('style');
navDotStyle.textContent = `
  .nav-dot { position:absolute; bottom:-8px; left:50%; transform:translateX(-50%);
    width:4px; height:4px; border-radius:50%; background:#60a5fa;
    opacity:0; transition:opacity 0.3s ease; }
  .nav-links li { position:relative; }
  .nav-links li.active .nav-dot { opacity:1; }
`;
document.head.appendChild(navDotStyle);
document.querySelectorAll('.nav-links li').forEach(li => {
  const dot = document.createElement('span');
  dot.className = 'nav-dot';
  li.appendChild(dot);
});
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  document.querySelectorAll('.nav-links li').forEach(li => {
    const a = li.querySelector('a');
    li.classList.toggle('active', a && a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// ===== SCROLL PROGRESS BAR =====
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = pct + '%';
}, { passive: true });

// ===== PARALLAX HERO SHAPES =====
const shapes = document.querySelectorAll('.shape');
window.addEventListener('scroll', () => {
  shapes.forEach((s, i) => {
    s.style.transform = 'translateY(' + (window.scrollY * (0.08 + i * 0.04)) + 'px)';
  });
}, { passive: true });

// ===== CURSOR GLOW — désactivé =====

// ===== MAGNETIC BUTTONS (exclut le logo) =====
document.querySelectorAll('.btn:not(.logo)').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    btn.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.18) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.18) + 'px)';
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

// ===== RIPPLE ON BUTTON CLICK =====
const rippleKF = document.createElement('style');
rippleKF.textContent = '@keyframes rippleClick { to { transform:scale(2.5); opacity:0; } }';
document.head.appendChild(rippleKF);
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const span = document.createElement('span');
    span.style.cssText = 'position:absolute;border-radius:50%;pointer-events:none;width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - r.left - size / 2) + 'px;top:' + (e.clientY - r.top - size / 2) + 'px;background:rgba(255,255,255,0.3);transform:scale(0);animation:rippleClick 0.6s ease-out forwards;';
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(span);
    setTimeout(() => span.remove(), 600);
  });
});

// ===== TILT CARDS =====
document.querySelectorAll('.platform-card, .testi-card, .feature-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = 'perspective(800px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) translateY(-6px)';
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ===== HERO STAT PILLS COUNT UP =====
document.querySelectorAll('.stat-pill strong').forEach(el => {
  const raw = el.textContent.replace(/[^0-9]/g, '');
  if (!raw) return;
  const target = parseInt(raw);
  const suffix = el.textContent.replace(/[0-9]/g, '').trim();
  el.textContent = '0' + suffix;
  setTimeout(() => {
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / 1800, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 4)) * target).toLocaleString('fr-FR') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(performance.now());
  }, 1200);
});

// ===== PROBLEM NUMBERS COUNT UP =====
document.querySelectorAll('.problem-number').forEach(el => {
  const raw = el.textContent.replace(/[^0-9]/g, '');
  if (!raw) return;
  const target = parseInt(raw);
  const suffix = el.textContent.replace(/[0-9]/g, '').trim();
  el.textContent = '0' + suffix;
  const pObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      el.classList.add('flip-in');
      const start = performance.now();
      (function tick(now) {
        const p = Math.min((now - start) / 1400, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toLocaleString('fr-FR') + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(performance.now());
      pObs.unobserve(el);
    });
  }, { threshold: 0.6 });
  pObs.observe(el);
});

// ===== PHONE NOTIFICATIONS =====
const phoneFrame = document.querySelector('.phone-mockup');
if (phoneFrame) {
  const n1 = document.createElement('div');
  n1.className = 'app-notif';
  n1.innerHTML = '✅ Quiz terminé — 18/20';
  phoneFrame.appendChild(n1);
  const n2 = document.createElement('div');
  n2.className = 'app-notif app-notif-2';
  n2.innerHTML = '🤖 IA répond à ta question...';
  phoneFrame.appendChild(n2);
}

// ===== SECTION DIVIDERS =====
const dividerObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
}, { threshold: 0.1 });
document.querySelectorAll('.about, .platforms, .testimonials').forEach(s => dividerObs.observe(s));

// ===== STEPS REVEAL =====
document.querySelectorAll('.step').forEach((step, i) => {
  const sObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      setTimeout(() => {
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        step.style.opacity = '1';
        step.style.transform = 'translateY(0)';
      }, i * 150);
      sObs.unobserve(step);
    });
  }, { threshold: 0.3 });
  sObs.observe(step);
});

// ===== PARTNERS TICKER =====
const partnersGrid = document.querySelector('.partners-grid');
if (partnersGrid) {
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'overflow:hidden;position:relative;';
  const track = document.createElement('div');
  track.style.cssText = 'display:flex;gap:20px;width:max-content;animation:tickerScroll 18s linear infinite;';
  const logos = Array.from(partnersGrid.children);
  logos.forEach(l => track.appendChild(l.cloneNode(true)));
  logos.forEach(l => track.appendChild(l.cloneNode(true)));
  wrapper.appendChild(track);
  partnersGrid.replaceWith(wrapper);
  const ts = document.createElement('style');
  ts.textContent = '@keyframes tickerScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}} .ticker-wrapper:hover div{animation-play-state:paused}';
  document.head.appendChild(ts);
}

// ===== GALERIE TERRAIN PAGINÉE =====
const TERRAIN_PHOTOS = [
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930050/WhatsApp_Image_2026-04-11_at_11.23.13_AM_2_z3elsk.jpg',   alt: 'Terrain 1',  tag: 'Université',  caption: 'Rencontre étudiante sur le campus' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930049/WhatsApp_Image_2026-04-11_at_11.23.12_AM_1_uzbhlj.jpg',   alt: 'Terrain 2',  tag: 'Secondaire',  caption: 'Démonstration dans un collège' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930048/WhatsApp_Image_2026-04-11_at_11.23.13_AM_1_rmo3gv.jpg',   alt: 'Terrain 3',  tag: 'Partenaires', caption: 'Réunion avec des partenaires institutionnels' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930047/WhatsApp_Image_2026-04-11_at_11.23.11_AM_cgupwi.jpg',     alt: 'Terrain 4',  tag: 'Formation',   caption: 'Formation des formateurs VALIDE' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930045/WhatsApp_Image_2026-04-11_at_11.23.09_AM_1_id6d4b.jpg',   alt: 'Terrain 5',  tag: 'Université',  caption: 'Présentation officielle sur campus' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930046/WhatsApp_Image_2026-04-11_at_11.23.12_AM_2_zezm6e.jpg',   alt: 'Terrain 6',  tag: 'Secondaire',  caption: 'Visite terrain dans les lycées' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930057/WhatsApp_Image_2026-04-11_at_11.29.13_AM_sn5ynt.jpg',     alt: 'Terrain 7',  tag: 'Formation',   caption: "Déploiement dans l'Extrême-Nord" },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930056/WhatsApp_Image_2026-04-11_at_11.23.14_AM_fuozke.jpg',     alt: 'Terrain 8',  tag: 'Formation',   caption: 'Atelier de formation des enseignants' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930055/WhatsApp_Image_2026-04-11_at_11.23.16_AM_1_rftnby.jpg',   alt: 'Terrain 9',  tag: 'Université',  caption: "Lancement à l'Université de Dschang" },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930055/WhatsApp_Image_2026-04-11_at_11.23.17_AM_bqouf2.jpg',     alt: 'Terrain 10', tag: 'Secondaire',  caption: 'Présentation dans un lycée de Douala' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930053/WhatsApp_Image_2026-04-11_at_11.23.15_AM_1_m05zdg.jpg',   alt: 'Terrain 11', tag: 'Partenaires', caption: 'Partenariat avec un lycée de Bafoussam' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930050/WhatsApp_Image_2026-04-11_at_11.23.12_AM_vlydhe.jpg',     alt: 'Terrain 12', tag: 'Formation',   caption: 'Session de formation à Ngaoundéré' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930067/WhatsApp_Image_2026-04-11_at_11.23.16_AM_tbjeki.jpg',     alt: 'Terrain 13', tag: 'Université',  caption: "Présentation à l'Université de Yaoundé 1" },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930062/WhatsApp_Image_2026-04-11_at_11.34.04_AM_1_v9fv0t.jpg',   alt: 'Terrain 14', tag: 'Université',  caption: 'Session de démonstration — Yaoundé 2' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930062/WhatsApp_Image_2026-04-11_at_11.34.04_AM_l6pywr.jpg',     alt: 'Terrain 15', tag: 'Secondaire',  caption: 'Rencontres avec des proviseurs de lycées' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930059/WhatsApp_Image_2026-04-11_at_11.34.03_AM_1_jhuajw.jpg',   alt: 'Terrain 16', tag: 'Partenaires', caption: 'Échanges avec des enseignants partenaires' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930059/WhatsApp_Image_2026-04-11_at_11.29.12_AM_1_dro6pc.jpg',   alt: 'Terrain 17', tag: 'Université',  caption: 'Session de démonstration live sur campus' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930058/WhatsApp_Image_2026-04-11_at_11.24.27_AM_wcl1ce.jpg',     alt: 'Terrain 18', tag: 'Secondaire',  caption: "Visite dans les collèges de l'Adamaoua" },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930045/WhatsApp_Image_2026-04-11_at_11.23.09_AM_vsgd6x.jpg',     alt: 'Terrain 19', tag: 'Partenaires', caption: 'Échange avec des associations étudiantes' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930045/WhatsApp_Image_2026-04-11_at_11.23.10_AM_wosbsv.jpg',     alt: 'Terrain 20', tag: 'Formation',   caption: 'Atelier pédagogique avec les enseignants' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930044/WhatsApp_Image_2026-04-11_at_11.23.13_AM_jhhoxp.jpg',     alt: 'Terrain 21', tag: 'Université',  caption: 'Session interactive avec les étudiants' },
  { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1775930044/WhatsApp_Image_2026-04-11_at_11.23.08_AM_c5d8jo.jpg',     alt: 'Terrain 22', tag: 'Secondaire',  caption: 'Rencontre avec les élèves du secondaire' },
];

const PER_PAGE = 6;
let currentPage = 1;
let activeFilter = 'all';

function getFiltered() {
  return activeFilter === 'all' ? TERRAIN_PHOTOS : TERRAIN_PHOTOS.filter(p => p.tag === activeFilter);
}

function renderGallery() {
  const gallery = document.getElementById('terrainGallery');
  const pagination = document.getElementById('terrainPagination');
  if (!gallery) return;

  const filtered = getFiltered();
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE;
  const items = filtered.slice(start, start + PER_PAGE);

  // fade out
  gallery.style.opacity = '0';
  gallery.style.transform = 'translateY(12px)';

  setTimeout(() => {
    gallery.innerHTML = items.map((p, i) => {
      return '<div class="terrain-img" style="animation-delay:' + (i * 0.07) + 's" onclick="openLightbox(\'' + p.src.replace(/'/g, "\\'") + '\', \'' + p.caption.replace(/'/g, "\\'") + '\')">' +
        '<img src="' + p.src + '" alt="' + p.alt + '" loading="lazy" />' +
        '<div class="terrain-hover-info">' +
          '<span class="terrain-tag">' + p.tag + '</span>' +
          '<p>' + p.caption + '</p>' +
        '</div>' +
        '<div class="terrain-zoom-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div>' +
      '</div>';
    }).join('');

    gallery.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    gallery.style.opacity = '1';
    gallery.style.transform = 'translateY(0)';

    // Pagination
    if (totalPages <= 1) { pagination.innerHTML = ''; return; }

    let html = '<button class="tpage-btn tpage-prev' + (currentPage === 1 ? ' disabled' : '') + '" onclick="goPage(' + (currentPage - 1) + ')">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>' +
      '</button>';

    for (let p = 1; p <= totalPages; p++) {
      if (p === 1 || p === totalPages || (p >= currentPage - 1 && p <= currentPage + 1)) {
        html += '<button class="tpage-btn' + (p === currentPage ? ' active' : '') + '" onclick="goPage(' + p + ')">' + p + '</button>';
      } else if (p === currentPage - 2 || p === currentPage + 2) {
        html += '<span class="tpage-dots">&#8230;</span>';
      }
    }

    html += '<button class="tpage-btn tpage-next' + (currentPage === totalPages ? ' disabled' : '') + '" onclick="goPage(' + (currentPage + 1) + ')">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>' +
      '</button>';

    html += '<span class="tpage-count">' + (start + 1) + '&ndash;' + Math.min(start + PER_PAGE, filtered.length) + ' sur ' + filtered.length + '</span>';

    pagination.innerHTML = html;
  }, 220);
}

function goPage(p) {
  const totalPages = Math.ceil(getFiltered().length / PER_PAGE);
  if (p < 1 || p > totalPages) return;
  currentPage = p;
  renderGallery();
  const block = document.querySelector('.terrain-block');
  if (block) block.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('click', e => {
  if (!e.target.classList.contains('tfilter')) return;
  document.querySelectorAll('.tfilter').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeFilter = e.target.dataset.filter;
  currentPage = 1;
  renderGallery();
});

renderGallery();

// ===== SHORTS YOUTUBE CONTROLS =====
// Les iframes YouTube ne supportent pas postMessage pause sans l'API IFrame
// On recharge l'src pour simuler pause (approche compatible sans API key)
const shortStates = {};

function toggleShort(iframeId, btnId) {
  const iframe = document.getElementById(iframeId);
  const btn = document.getElementById(btnId);
  if (!iframe || !btn) return;

  const state = shortStates[iframeId] || { paused: false, src: iframe.src };
  shortStates[iframeId] = state;

  const pauseIcon = btn.querySelector('.icon-pause');
  const playIcon  = btn.querySelector('.icon-play');

  if (!state.paused) {
    // Pause : vider le src stoppe la vidéo
    state.src = iframe.src;
    iframe.src = '';
    state.paused = true;
    pauseIcon.style.display = 'none';
    playIcon.style.display  = 'block';
  } else {
    // Play : restaurer le src
    iframe.src = state.src;
    state.paused = false;
    pauseIcon.style.display = 'block';
    playIcon.style.display  = 'none';
  }
}

function toggleMute(iframeId, btnId) {
  const iframe = document.getElementById(iframeId);
  const btn = document.getElementById(btnId);
  if (!iframe || !btn) return;

  const state = shortStates[iframeId] || { muted: true };
  shortStates[iframeId] = state;

  const muteIcon  = btn.querySelector('.icon-mute');
  const soundIcon = btn.querySelector('.icon-sound');

  if (state.muted) {
    // Unmute : remplacer mute=1 par mute=0
    iframe.src = iframe.src.replace('mute=1', 'mute=0');
    state.muted = false;
    muteIcon.style.display  = 'none';
    soundIcon.style.display = 'block';
  } else {
    // Mute
    iframe.src = iframe.src.replace('mute=0', 'mute=1');
    state.muted = true;
    muteIcon.style.display  = 'block';
    soundIcon.style.display = 'none';
  }
}

// ===== NATIVE VIDEO CONTROLS =====
function toggleShortVideo(videoId, btnId) {
  const video = document.getElementById(videoId);
  const btn   = document.getElementById(btnId);
  if (!video || !btn) return;
  const pauseIcon = btn.querySelector('.icon-pause');
  const playIcon  = btn.querySelector('.icon-play');
  if (video.paused) {
    video.play();
    pauseIcon.style.display = 'block';
    playIcon.style.display  = 'none';
  } else {
    video.pause();
    pauseIcon.style.display = 'none';
    playIcon.style.display  = 'block';
  }
}

function toggleMuteVideo(videoId, btnId) {
  const video = document.getElementById(videoId);
  const btn   = document.getElementById(btnId);
  if (!video || !btn) return;
  video.muted = !video.muted;
  btn.querySelector('.icon-mute').style.display  = video.muted ? 'block' : 'none';
  btn.querySelector('.icon-sound').style.display = video.muted ? 'none'  : 'block';
}

// ===== CRTV LANG TOGGLE =====
const CRTV_VIDEOS = {
  FR: 'https://res.cloudinary.com/drknixj4y/video/upload/v1775930069/WhatsApp_Video_2026-04-11_at_11.29.11_AM_ehymkw.mp4',
  EN: 'https://res.cloudinary.com/drknixj4y/video/upload/v1775930069/WhatsApp_Video_2026-04-11_at_11.29.11_AM_ehymkw.mp4' // remplacer par URL EN
};

function switchCRTV(lang) {
  const video = document.getElementById('crtvIframe');
  const btnFR = document.getElementById('btnFR');
  const btnEN = document.getElementById('btnEN');
  if (!video) return;

  const currentTime = video.currentTime;
  video.src = CRTV_VIDEOS[lang];
  video.load();

  btnFR.classList.toggle('active', lang === 'FR');
  btnEN.classList.toggle('active', lang === 'EN');
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ===== LIGHTBOX =====
function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  lb.querySelector('.lb-img').src = src;
  lb.querySelector('.lb-caption').textContent = caption || '';
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});

// ===== TESTIMONIALS SLIDER =====
function scrollTesti(dir) {
  const track = document.getElementById('testiTrack');
  if (track) track.scrollBy({ left: dir * 300, behavior: 'smooth' });
}

// ===== FOOTER YEAR =====
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = '© ' + new Date().getFullYear() + ' VALIDE — Tous droits réservés';
