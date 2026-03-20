/* ══════════════════════════════════════════
   script.js  —  Graphic Design Portfolio
   ══════════════════════════════════════════ */

/* ──────────────────────────────────────────
   PROJECT DATA
   Edit titles, years, categories, tools, and
   descriptions here to fill in your portfolio.
   ────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: 'Project Title One',
    year: '2025',
    category: 'Brand Identity',
    tools: 'Illustrator, Photoshop',
    desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.'
  },
  {
    id: 2,
    title: 'Project Title Two',
    year: '2024',
    category: 'Poster Design',
    tools: 'Photoshop, InDesign',
    desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.'
  },
  {
    id: 3,
    title: 'Project Title Three',
    year: '2024',
    category: 'Typography',
    tools: 'Illustrator',
    desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.'
  },
  {
    id: 4,
    title: 'Project Title Four',
    year: '2023',
    category: 'Motion Graphics',
    tools: 'After Effects, AI',
    desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.'
  },
  {
    id: 5,
    title: 'Project Title Five',
    year: '2023',
    category: 'Packaging',
    tools: 'Illustrator, Cinema 4D',
    desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.'
  },
  {
    id: 6,
    title: 'Project Title Six',
    year: '2022',
    category: 'Editorial Design',
    tools: 'InDesign, Photoshop',
    desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.'
  },
];

/* SVG icons for placeholder cards */
const icons = [
  `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9l4-4 4 4 4-6 4 6"/></svg>`,
  `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>`,
  `<svg viewBox="0 0 24 24"><polygon points="12 2 19 21 12 17 5 21"/></svg>`,
  `<svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
  `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
];


/* ══════════════════════════════════════════
   PAGE NAVIGATION
   ══════════════════════════════════════════ */
const pages    = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');

function showPage(pageId) {
  /* hide all pages */
  pages.forEach(p => p.classList.add('hidden'));

  /* show target */
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.remove('hidden');
    /* re-trigger fade animation */
    target.style.animation = 'none';
    target.offsetHeight; /* reflow */
    target.style.animation = '';
  }

  /* update active nav link */
  navLinks.forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });

  /* scroll to top */
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

/* Logo click → Home */
document.querySelector('.logo-box').addEventListener('click', () => showPage('home'));


/* ══════════════════════════════════════════
   SLIDESHOW  (Home page)
   ══════════════════════════════════════════ */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function moveSlide(dir) { goToSlide(currentSlide + dir); }

/* Arrow buttons */
document.getElementById('arrow-left').addEventListener('click',  () => moveSlide(-1));
document.getElementById('arrow-right').addEventListener('click', () => moveSlide(1));

/* Dot clicks */
dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));

/* Auto-advance every 4 s */
setInterval(() => moveSlide(1), 4000);


/* ══════════════════════════════════════════
   PORTFOLIO GRID
   ══════════════════════════════════════════ */
const grid = document.getElementById('project-grid');

projects.forEach((project, i) => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="card-thumb">
      <div class="card-thumb-inner">
        <div class="thumb-icon">${icons[i]}</div>
        <span class="thumb-num">0${i + 1}</span>
      </div>
    </div>
    <span class="card-title">${project.title}</span>
  `;
  card.addEventListener('click', () => openDetail(project, i));
  grid.appendChild(card);
});

/* ── Detail view ── */
function openDetail(project, i) {
  document.getElementById('grid-view').classList.add('hidden');

  const detail = document.getElementById('detail-view');
  detail.classList.remove('hidden');
  /* re-trigger animation */
  detail.style.animation = 'none';
  detail.offsetHeight;
  detail.style.animation = '';

  document.getElementById('detail-title').textContent   = project.title;
  document.getElementById('detail-desc').textContent    = project.desc;
  document.getElementById('meta-year').textContent      = project.year;
  document.getElementById('meta-cat').textContent       = project.category;
  document.getElementById('meta-tools').textContent     = project.tools;
  document.getElementById('detail-img-num').textContent = `Project 0${i + 1}`;
  document.getElementById('detail-img-icon').innerHTML  = icons[i];

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeDetail() {
  document.getElementById('detail-view').classList.add('hidden');
  document.getElementById('grid-view').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('back-btn').addEventListener('click', closeDetail);


/* ══════════════════════════════════════════
   CONTACT FORM
   ══════════════════════════════════════════ */
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const confirm = document.getElementById('form-confirm');
  confirm.classList.remove('hidden');
  this.reset();
  setTimeout(() => confirm.classList.add('hidden'), 4000);
});
