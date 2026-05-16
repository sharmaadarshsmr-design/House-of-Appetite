/* ============================================
   HOUSE OF APPETITE — main.js
   ============================================ */

// ---- NAV scroll effect ----
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ---- Mobile hamburger ----
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    const cta = document.querySelector('.nav-cta');
    if (links) {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'var(--cream)';
      links.style.padding = '1rem 2rem';
      links.style.borderRadius = '0 0 16px 16px';
      links.style.borderTop = '1px solid rgba(196,154,108,0.2)';
    }
  });
}

// ---- Float badge click → menu ----
const floatBadge = document.getElementById('float-badge');
if (floatBadge) {
  floatBadge.addEventListener('click', () => {
    window.location.href = 'menu.html';
  });
  floatBadge.style.cursor = 'pointer';
}

// ---- Reveal on scroll (Intersection Observer) ----
const revealEls = document.querySelectorAll('.cat-card, .dish-item, .av-card, .cd-row, .stat');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = entry.target.classList.contains('dish-item')
            ? 'translateX(0)' : 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    if (el.classList.contains('dish-item')) {
      el.style.transform = 'translateX(-20px)';
    } else {
      el.style.transform = 'translateY(20px)';
    }
    observer.observe(el);
  });
}

// ---- Menu page tab switching ----
const tabBtns = document.querySelectorAll('.tab-btn');
const menuSections = document.querySelectorAll('.menu-section');

if (tabBtns.length) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      menuSections.forEach(s => s.classList.remove('active'));

      btn.classList.add('active');
      const targetSection = document.getElementById(target);
      if (targetSection) {
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Hash-based tab activation (from #burgers etc)
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const matchBtn = document.querySelector(`[data-tab="${hash}"]`);
    if (matchBtn) matchBtn.click();
  }
}

// ---- Smooth anchor scrolling ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ---- Menu card hover antigravity ----
document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-6px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
