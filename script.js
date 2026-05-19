(function () {
  const testimonials = [
    {
      quote: "The family pass made our weekend easy — all the attractions were included and the farm felt authentic.",
      name: "Mia, spring visit"
    },
    {
      quote: "Our kids loved the flower field and wagon tour. This feels like a real farm experience, not a theme park.",
      name: "Jordan, summer visit"
    },
    {
      quote: "The pumpkin patch and hay maze were beautiful. We will come back every fall.",
      name: "Alex, fall visit"
    },
    {
      quote: "Friendly staff, clean pathways, and a peaceful farm atmosphere. It felt warm and welcoming.",
      name: "Nina, family day"
    }
  ];

  const seasonalHero = {
    spring: {
      title: 'Spring at HollowCreek Farm',
      copy: 'Blooming fields, baby animals, and fresh-cut bouquets make Rexburg feel like the heart of Idaho farm country.',
      badge: 'Spring bloom season'
    },
    summer: {
      title: 'Summer days on the farm',
      copy: 'Everything is open — from the flower fields to the petting zoo. Spend the day in the sunshine with family-friendly farm experiences.',
      badge: 'Full farm open'
    },
    fall: {
      title: 'Fall harvest at HollowCreek',
      copy: 'Pumpkin picking, cozy hay routes, and the October haunted maze create a rich seasonal weekend for the whole family.',
      badge: 'Harvest season'
    },
    offseason: {
      title: 'See you in spring',
      copy: 'The farm is resting for winter, and we are already planning the next season of fresh fields and family visits.',
      badge: 'Off-season pause'
    }
  };

  function toggleMenu() {
    const button = document.querySelector('.nav-toggle');
    const panel = document.querySelector('.nav-panel');
    if (!button || !panel) {
      return;
    }
    button.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function renderHero() {
    const title = document.getElementById('hero-title');
    const copy = document.getElementById('hero-copy');
    const badge = document.getElementById('hero-badge');
    if (!title || !copy || !badge) {
      return;
    }
    const season = window.currentSeason || document.body.dataset.season || 'offseason';
    const data = seasonalHero[season] || seasonalHero.offseason;
    title.textContent = data.title;
    copy.textContent = data.copy;
    badge.textContent = data.badge;
  }

  function renderHighlights() {
    const container = document.getElementById('highlight-list');
    const updated = document.getElementById('highlight-updated');
    if (!container || !updated || !window.weekendHighlights) {
      return;
    }
    updated.textContent = window.weekendHighlights.lastUpdated;
    container.innerHTML = window.weekendHighlights.items
      .map(item => `
        <div class="highlight-item">
          <strong>${item.title}</strong>
          <p>${item.sub}</p>
          <p class="small-note">${item.note}</p>
        </div>
      `)
      .join('');
  }

  function initTestimonials() {
    const quote = document.getElementById('testimonial-quote');
    const author = document.getElementById('testimonial-author');
    if (!quote || !author) {
      return;
    }
    let index = 0;
    function updateTestimonial() {
      const item = testimonials[index];
      quote.textContent = `“${item.quote}”`;
      author.textContent = item.name;
      index = (index + 1) % testimonials.length;
    }
    updateTestimonial();
    setInterval(updateTestimonial, 5500);
  }

  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        if (item) {
          item.classList.toggle('open');
        }
      });
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    renderHero();
    renderHighlights();
    initTestimonials();
    initFAQ();
  });
})();
