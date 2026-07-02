/* Main Application Entry & Orchestrator */
import { Router } from './router.js';
import { PricingCalculator } from './calculator.js';
import { initForms } from './forms.js';
import { initSpline } from './spline.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize SPA Router
  const routes = [
    '#home', 
    '#services', 
    '#pricing', 
    '#how-it-works', 
    '#about', 
    '#corporate', 
    '#contact', 
    '#faq',
    '#privacy'
  ];
  const router = new Router(routes);

  // 2. Initialize Pricing Calculator
  const calculator = new PricingCalculator();

  // 3. Initialize Forms Logic
  initForms();

  // 4. Initialize Spline 3D Scene
  initSpline();

  // 5. Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 6. Mobile Side Menu Controls
  const menuToggle = document.getElementById('mobile-menu-btn');
  const navDrawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    menuToggle.classList.add('open');
    navDrawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  }

  function closeDrawer() {
    menuToggle.classList.remove('open');
    navDrawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (menuToggle && navDrawer && backdrop) {
    menuToggle.addEventListener('click', () => {
      if (navDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    backdrop.addEventListener('click', closeDrawer);
    mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));
  }

  // 7. Booking Modal Controls
  const bookingModal = document.getElementById('booking-modal');
  const openModalBtns = document.querySelectorAll('.btn-trigger-booking');
  const closeModalBtn = document.getElementById('close-booking-modal');

  function openModal(estimateData = null) {
    if (!bookingModal) return;
    
    const summaryBox = document.getElementById('modal-booking-summary-box');
    const hiddenDetails = document.getElementById('booking-estimate-details');
    const hiddenTotal = document.getElementById('booking-estimate-total');

    if (estimateData && summaryBox) {
      // User booked from calculator
      summaryBox.style.display = 'block';
      summaryBox.querySelector('.booking-summary-items').innerHTML = estimateData.summary;
      summaryBox.querySelector('.booking-summary-total span').textContent = estimateData.total.toLocaleString();
      
      // Store in hidden fields for submission
      if (hiddenDetails) hiddenDetails.value = estimateData.summary;
      if (hiddenTotal) hiddenTotal.value = estimateData.total.toString();
    } else {
      // General booking
      if (summaryBox) summaryBox.style.display = 'none';
      if (hiddenDetails) hiddenDetails.value = 'General Pickup Request';
      if (hiddenTotal) hiddenTotal.value = '0';
    }

    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!bookingModal) return;
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => openModal());
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeModal();
    });
  }

  // Listen to pricing calculator booking trigger
  window.addEventListener('openBookingModal', (e) => {
    openModal(e.detail);
  });

  // Listen to clear calculator event from successful form submits
  window.addEventListener('clearCalculator', () => {
    calculator.selectedItems = {};
    calculator.renderCategoryItems();
    calculator.updateSummary();
  });

  // 8. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other open FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-content').style.maxHeight = '0';
        }
      });

      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = '0';
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // FAQ Search/Filter Logic
  const faqSearch = document.getElementById('faq-search-input');
  if (faqSearch) {
    faqSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        const answer = item.querySelector('.faq-content-inner').textContent.toLowerCase();
        
        if (question.includes(term) || answer.includes(term)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // 9. Intersection Observer for Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  // Targets to animate
  const animateTargets = document.querySelectorAll('.service-card, .workflow-card, .contact-card, .calc-item-card, .corporate-features-list li');
  animateTargets.forEach(target => {
    // Hide initially via styling placeholder helper, then reveal with class
    target.style.opacity = '0';
    revealObserver.observe(target);
  });
});
