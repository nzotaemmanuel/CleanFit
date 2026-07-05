export function initUI() {
  // 5. Header Scroll Effect
  const header = document.querySelector('header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.removeEventListener('scroll', window._headerScrollHandler);
    window._headerScrollHandler = handleScroll;
    window.addEventListener('scroll', handleScroll);
  }

  // 6. Mobile Side Menu Controls
  const menuToggle = document.getElementById('mobile-menu-btn');
  const navDrawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    if (menuToggle) menuToggle.classList.add('open');
    if (navDrawer) navDrawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  }

  function closeDrawer() {
    if (menuToggle) menuToggle.classList.remove('open');
    if (navDrawer) navDrawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (menuToggle && navDrawer && backdrop) {
    // Remove old listeners to prevent multiple fires
    const newMenuToggle = menuToggle.cloneNode(true);
    if (menuToggle.parentNode) {
      menuToggle.parentNode.replaceChild(newMenuToggle, menuToggle);
      newMenuToggle.addEventListener('click', () => {
        if (navDrawer.classList.contains('open')) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }

    const newBackdrop = backdrop.cloneNode(true);
    if (backdrop.parentNode) {
      backdrop.parentNode.replaceChild(newBackdrop, backdrop);
      newBackdrop.addEventListener('click', closeDrawer);
    }
  }

  mobileLinks.forEach(link => {
    const newLink = link.cloneNode(true);
    if (link.parentNode) {
      link.parentNode.replaceChild(newLink, link);
      newLink.addEventListener('click', closeDrawer);
    }
  });

  // 8. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (trigger && content) {
      const newTrigger = trigger.cloneNode(true);
      if (trigger.parentNode) {
        trigger.parentNode.replaceChild(newTrigger, trigger);
        
        newTrigger.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          
          // Close other open FAQs
          faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
              const otherContent = otherItem.querySelector('.faq-content');
              if (otherContent) otherContent.style.maxHeight = '0';
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
      }
    }
  });

  // FAQ Search/Filter Logic
  const faqSearch = document.getElementById('faq-search-input');
  if (faqSearch) {
    const newSearch = faqSearch.cloneNode(true);
    if (faqSearch.parentNode) {
      faqSearch.parentNode.replaceChild(newSearch, faqSearch);
      
      newSearch.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        faqItems.forEach(item => {
          const questionEl = item.querySelector('.faq-question');
          const answerEl = item.querySelector('.faq-content-inner');
          
          if (questionEl && answerEl) {
            const question = questionEl.textContent.toLowerCase();
            const answer = answerEl.textContent.toLowerCase();
            
            if (question.includes(term) || answer.includes(term)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          }
        });
      });
    }
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
}
