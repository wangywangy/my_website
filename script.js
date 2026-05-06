/* ══════════════════════════════════════════
   script.js  —  Graphic Design Portfolio
   ══════════════════════════════════════════ */

/* ──────────────────────────────────────────
   PROJECT DATA
   - Add your image path to each project.
   - If a project has no image yet, leave
     image: '' and a placeholder shows instead.
   ────────────────────────────────────────── */
   const projects = [
    {
      id: 1,
      title: 'Project Title One',
      year: '2025',
      category: 'Brand Identity',
      tools: 'Illustrator, Photoshop',
      desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.',
      images: [
        'assets/DataGenImg2.webp',
        'assets/DataGenImg.webp',
        'assets/DataGenImg3.webp',
      ]
    },
    {
      id: 2,
      title: 'Project Title Two',
      year: '2024',
      category: 'Poster Design',
      tools: 'Photoshop, InDesign',
      desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.',
      images: [
        'assets/Booklet1.jpg',
        'assets/Booklet2.jpg',
        'assets/Booklet3.jpg',
        'assets/Booklet4.jpg',
        'assets/Booklet5.jpg',
      ]
    },
    {
      id: 3,
      title: 'Project Title Three',
      year: '2024',
      category: 'Typography',
      tools: 'Illustrator',
      desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.',
      images: [
        'assets/MagazineMockup1.jpg',
        'assets/MagazineMockup2.jpg',
        'assets/Magazine1.jpg',
      ]
    },
    {
      id: 4,
      title: 'Project Title Four',
      year: '2023',
      category: 'Motion Graphics',
      tools: 'After Effects, AI',
      desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.',
      images: [
        'assets/BauhausMagazine.jpg',
        'assets/BauhausMagazine2.jpg',
        'assets/BauhausMagazine3.jpg',
      ]
    },
    {
      id: 5,
      title: 'Project Title Five',
      year: '2023',
      category: 'Packaging',
      tools: 'Illustrator, Cinema 4D',
      desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.',
      images: [
        'assets/RingsPoster1.jpg',
        'assets/RingsPoster2.jpg',
        'assets/OlympicMockups1.jpg',
        'assets/OlympicMockups2.jpg',
        'assets/OlympicMockups3.jpg',
      ]
    },
    {
      id: 6,
      title: 'Project Title Six',
      year: '2022',
      category: 'Editorial Design',
      tools: 'InDesign, Photoshop',
      desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you. Full 40 pages at https://online.fliphtml5.com/yxzep/rcyu/', 
      images: [
        'assets/CoffeeProduct.jpg',
        'assets/CoffeeProduct2.jpg',
        'assets/CoffeeProduct3.jpg',
        'assets/CoffeeProduct4.jpg',
        'assets/CoffeeProduct5.jpg',
      ]
    },
    {
      id: 7,
      title: 'Project Title Seven',
      year: '2022',
      category: 'Editorial Design',
      tools: 'InDesign, Photoshop',
      desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.',
      images: [
        'assets/TypoTriBrochure.webp',
        'assets/TypoTriBrochure2.webp',
        'assets/TypoTriBrochure3.webp',
        'assets/TypoTriBrochureGif.gif',
      ]
    },
    {
      id: 8,
      title: 'Project Title Eight',
      year: '2022',
      category: 'Editorial Design',
      tools: 'InDesign, Photoshop',
      desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.',
      images: [
        'assets/AIGABrochure1.jpg',
        'assets/AIGABrochure2.jpg',
      ]
    },
    {
      id: 9,
      title: 'Project Title Nine',
      year: '2022',
      category: 'Editorial Design',
      tools: 'InDesign, Photoshop',
      desc: 'Replace this with your project description. Explain the concept, the tools used, the client brief, and what makes this piece special to you.',
      images: [
        'assets/VisionOs.jpg',
        'assets/VisionOs2.jpg',
        'assets/VisionOs3.jpg',
        'assets/VisionOs4.jpg',
        'assets/VisionOs5.jpg',
        'assets/VisionOs6.jpg',
      ]
    },
  ];
  
  /* SVG icons — used as fallback when no image is provided */
  const icons = [
    `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9l4-4 4 4 4-6 4 6"/></svg>`,
    `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>`,
    `<svg viewBox="0 0 24 24"><polygon points="12 2 19 21 12 17 5 21"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
  ];
  
  /* Helper: card thumbnail — uses first image or SVG placeholder */
  function thumbContent(project, i) {
    if (project.images && project.images.length > 0) {
      return `<img src="${project.images[0]}" alt="${project.title}"
                   style="width:100%;height:100%;object-fit:cover;display:block;" />`;
    }
    return `
      <div class="card-thumb-inner">
        <div class="thumb-icon">${icons[i]}</div>
        <span class="thumb-num">0${i + 1}</span>
      </div>`;
  }
  
  
  /* ══════════════════════════════════════════
     PAGE NAVIGATION
     ══════════════════════════════════════════ */
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function showPage(pageId) {
    pages.forEach(p => p.classList.add('hidden'));
  
    const target = document.getElementById('page-' + pageId);
    if (target) {
      target.classList.remove('hidden');
      target.style.animation = 'none';
      target.offsetHeight;
      target.style.animation = '';
    }
  
    navLinks.forEach(a => {
      a.classList.toggle('active', a.dataset.page === pageId);
    });
  
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
  const dots = document.querySelectorAll('.dot');
  
  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  
  function moveSlide(dir) {
    goToSlide(currentSlide + dir);
  }
  
  document.getElementById('arrow-left').addEventListener('click', () => moveSlide(-1));
  document.getElementById('arrow-right').addEventListener('click', () => moveSlide(1));
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });
  
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
        ${thumbContent(project, i)}
      </div>
      <span class="card-title">${project.title}</span>
    `;
    card.addEventListener('click', () => openDetail(project, i));
    grid.appendChild(card);
  });
  
  
  /* ══════════════════════════════════════════
     PORTFOLIO DETAIL VIEW
     ══════════════════════════════════════════ */
  function openDetail(project, i) {
    document.getElementById('grid-view').classList.add('hidden');
  
    const detail = document.getElementById('detail-view');
    detail.classList.remove('hidden');
    detail.style.animation = 'none';
    detail.offsetHeight;
    detail.style.animation = '';
  
    /* Fill in text */
    document.getElementById('detail-title').textContent = project.title;
    document.getElementById('detail-desc').textContent = project.desc;
    document.getElementById('meta-year').textContent = project.year;
    document.getElementById('meta-cat').textContent = project.category;
    document.getElementById('meta-tools').textContent = project.tools;
  
    /* Fill in image area — scoped to #detail-view to avoid grabbing wrong element */
    const imageBox = document.querySelector('#detail-view .detail-image');
    imageBox.innerHTML = '';
  
    const hasImages = project.images && project.images.length > 0;
  
    if (!hasImages) {
      imageBox.innerHTML = `
        <div class="detail-image-inner">
          <div class="detail-img-icon">${icons[i]}</div>
          <span class="slide-label">Project 0${i + 1}</span>
        </div>`;
    } else if (project.images.length === 1) {
      imageBox.innerHTML = `
        <img src="${project.images[0]}" alt="${project.title}" />`;
    } else {
      const total = project.images.length;
  
      const slidesHTML = project.images.map((src, idx) => `
        <div class="detail-slide ${idx === 0 ? 'active' : ''}">
          <img src="${src}" alt="${project.title} — image ${idx + 1}" />
        </div>
      `).join('');
  
      const thumbsHTML = project.images.map((src, idx) => `
        <img class="detail-thumb ${idx === 0 ? 'active' : ''}"
             src="${src}" alt="Thumbnail ${idx + 1}"
             data-index="${idx}" />
      `).join('');
  
      imageBox.innerHTML = `
        <div class="detail-slides">${slidesHTML}</div>
        <div class="detail-thumbs">${thumbsHTML}</div>
        <p class="detail-img-counter" id="detail-img-counter">1 / ${total}</p>`;
  
      let detailCurrent = 0;
  
      function goToDetailSlide(idx) {
        detailCurrent = (idx + total) % total;
        imageBox.querySelectorAll('.detail-slide').forEach((s, si) =>
          s.classList.toggle('active', si === detailCurrent));
        imageBox.querySelectorAll('.detail-thumb').forEach((t, ti) =>
          t.classList.toggle('active', ti === detailCurrent));
        document.getElementById('detail-img-counter').textContent =
          `${detailCurrent + 1} / ${total}`;
      }
  
      imageBox.querySelectorAll('.detail-thumb').forEach(thumb => {
        thumb.addEventListener('click', () =>
          goToDetailSlide(parseInt(thumb.dataset.index)));
      });
  
      const autoTimer = setInterval(() => goToDetailSlide(detailCurrent + 1), 10000);
  
      document.getElementById('back-btn').addEventListener('click', () => {
        clearInterval(autoTimer);
      }, { once: true });
    }
  
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