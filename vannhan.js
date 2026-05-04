/* ══════════════════════════════════════════
   LAZY LOAD – Intersection Observer
   Ảnh dùng data-src thay vì src; Observer sẽ
   gán src thực khi ảnh vào viewport.
══════════════════════════════════════════ */
(function () {
  'use strict';

  var imgObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      var img = entry.target;
      var src = img.dataset.src;
      if (!src) return;

      img.src = src;
      img.onload  = function () { img.classList.add('lazy-loaded'); };
      img.onerror = function () { img.classList.add('lazy-loaded'); }; // graceful fail
      obs.unobserve(img);
    });
  }, {
    rootMargin: '250px 0px', // bắt đầu load trước khi ảnh vào khung nhìn 250px
    threshold: 0
  });

  document.querySelectorAll('img.lazy').forEach(function (img) {
    imgObserver.observe(img);
  });
}());

/* ══════════════════════════════════════════
   AOS Init
══════════════════════════════════════════ */
AOS.init({
  duration: 700,
  easing: 'ease-out-quad',
  once: true,
  offset: 60
});

/* ══════════════════════════════════════════
   Navbar scroll
══════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
function handleScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('back-top').classList.toggle('visible', window.scrollY > 300);
}
window.addEventListener('scroll', handleScroll, { passive: true });

/* ══════════════════════════════════════════
   Mobile nav toggle
══════════════════════════════════════════ */
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  navMobile.classList.toggle('open');
  const spans = navToggle.querySelectorAll('span');
  const isOpen = navMobile.classList.contains('open');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity   = isOpen ? '0' : '';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

document.querySelectorAll('.nav-mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity = '';
    });
  });
});

/* ══════════════════════════════════════════
   GLightbox
══════════════════════════════════════════ */
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: false,
  slideEffect: 'fade'
});

/* ══════════════════════════════════════════
   Gallery Filter
══════════════════════════════════════════ */
const filterBtns  = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    galleryItems.forEach(item => {
      if (cat === 'all' || item.dataset.cat === cat) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* ══════════════════════════════════════════
   Contact Form
══════════════════════════════════════════ */
const form       = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name  = document.getElementById('fname').value.trim();
  const phone = document.getElementById('fphone').value.trim();
  if (!name || !phone) {
    alert('Vui lòng điền họ tên và số điện thoại.');
    return;
  }

  // Simulate send (replace with real API/endpoint)
  const btn = form.querySelector('.btn-submit');
  btn.disabled = true;
  btn.textContent = 'Đang gửi...';

  setTimeout(() => {
    form.style.display = 'none';
    successMsg.style.display = 'block';
  }, 900);
});
