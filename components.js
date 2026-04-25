/* =========================================
   COOLWAIR — Shared Components
   Header + Footer as JS template literals.
   Injected synchronously — no fetch, no
   parsing bugs, no race conditions.
   ========================================= */

const CW = {

  /* ---- HEADER ---- */
  header: `
  <nav class="site-nav" id="siteNav">
    <a href="index.html" class="nav-logo">
      <img src="assets/imgs/logo.png" alt="logo">
    </a>

    <!-- <a href="index.html" class="nav-logo">COOL<span>WAIR</span></a> -->
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="product.html">Product</a></li>
      <li><a href="technology.html">Technology</a></li>
      <li><a href="riders.html">For Riders</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="contact.html" class="nav-cta">Get in Touch</a>
    <button class="nav-hamburger" id="hamburger"
      aria-label="Toggle menu"><span></span><span></span><span></span></button>
  </nav>
  <div class="nav-mobile-drawer" id="mobileDrawer">
    <a href="index.html">Home</a>
    <a href="product.html">Product</a>
    <a href="technology.html">Technology</a>
    <a href="riders.html">For Riders</a>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
    <a href="contact.html" class="btn-primary" style="text-align:center;">Get in Touch</a>
  </div>`,

  /* ---- FOOTER ---- */
  footer: `
<footer class="site-footer">
  <div class="footer-grid">

    <div class="footer-brand">
      <img src="assets/imgs/logo.png" alt="Coolwairr Logo" class="nav-logo">
      <p>India's first active cooling system for motorcycle riders. Beat the heat. Ride safe.</p>
      <div class="footer-social">

        <a href="https://www.facebook.com/profile.php?id=61555035770147" target="_blank" class="social-link" aria-label="Facebook">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>

        <a href="https://www.instagram.com/coollwair/" target="_blank" class="social-link" aria-label="Instagram">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <circle cx="12" cy="12" r="4"></circle>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle>
          </svg>
        </a>

        <a href="https://www.linkedin.com/company/coolwairr/" target="_blank" class="social-link" aria-label="LinkedIn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

      </div>
    </div>

    <div class="footer-col">
      <h5>Navigation</h5>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="product.html">Product</a></li>
        <li><a href="technology.html">Technology</a></li>
        <li><a href="riders.html">For Riders</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Company</h5>
      <ul>
        <li><a href="about.html">Our Story</a></li>
        <li><a href="technology.html">Our Technology</a></li>
        <li><a href="riders.html">Daily Commuters</a></li>
        <li><a href="riders.html">Adventure Riders</a></li>
        <li><a href="contact.html">Become a Distributor</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Contact</h5>

      <div class="footer-contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <a href="https://maps.app.goo.gl/e54TD68jU2CD6Kzz8" target="_blank">Vikhroli East, Mumbai, Maharashtra.</a>
      </div>

      <div class="footer-contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.11 1.23 2 2 0 012.11.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.62-.36a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
        </svg>
        <div>
          <a href="tel:+917506595891">+91 750 659 5891</a>
        </div>
      </div>

      <div class="footer-contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <a href="mailto:vikrmchandela@gmail.com">vikrmchandela@gmail.com</a>
      </div>

    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2025 Coolwairr. All rights reserved.</p>
    <div class="footer-bottom-links">
      <a href="#">Terms &amp; Conditions</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Return Policy</a>
    </div>
  </div>
</footer>`,

  /* ---- INJECT + INIT ---- */
  init() {
    // Inject header and footer
    const headerEl = document.getElementById('header');
    const footerEl = document.getElementById('footer');
    if (headerEl) headerEl.innerHTML = this.header;
    if (footerEl) footerEl.innerHTML = this.footer;

    // Sticky nav
    const nav = document.querySelector('nav.site-nav');
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 60);
      window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
    }

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('mobileDrawer');
    if (hamburger && drawer) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        drawer.classList.toggle('open');
      });
      drawer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          hamburger.classList.remove('open');
          drawer.classList.remove('open');
        });
      });
    }

    // Active nav link
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-mobile-drawer a').forEach(a => {
      if (a.getAttribute('href') === page || (page === '' && a.getAttribute('href') === 'index.html')) {
        a.classList.add('active');
      }
    });
  }
};

/* =========================================
   MAIN.JS functionality (scroll, reveal etc)
   ========================================= */
(function () {
  'use strict';

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 70);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
  }

  function initBackToTop() {
    const btt = document.getElementById('backToTop');
    if (!btt) return;
    window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 400));
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function initContactForm() {
    const form = document.getElementById('cwContactForm');
    if (!form) return;
    const ENDPOINT = 'https://script.google.com/macros/s/AKfycbxVydg60c2rnCrkkVP82290atwYG5pWaBMd1QbhZke3UVKKadAuc8tqkIzGW48TWVrCTQ/exec';
    const btn = form.querySelector('.btn-primary');
    const msg = document.getElementById('formMessage');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (btn) { btn.textContent = 'Sending…'; btn.style.opacity = '0.7'; }
      fetch(ENDPOINT, { method: 'POST', body: new FormData(form) })
        .then(() => { if (msg) { msg.textContent = "Message sent! We'll get back to you soon."; msg.style.color = '#5EAFD4'; } form.reset(); })
        .catch(() => { if (msg) { msg.textContent = 'Something went wrong. Please email us directly.'; msg.style.color = '#FF6B1A'; } })
        .finally(() => { if (btn) { btn.textContent = 'Send Message'; btn.style.opacity = '1'; } });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Inject header + footer + init nav (all synchronous)
    CW.init();
    // Page-level init
    initReveal();
    initBackToTop();
    initContactForm();
  });

})();
