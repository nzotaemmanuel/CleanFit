/* Client-side Router for SPA Navigation */

export class Router {
  constructor(routes) {
    this.routes = routes;
    this.defaultRoute = '#home';
    this.activeSection = null;
    
    // Bind event listeners
    window.addEventListener('hashchange', () => this.handleRouteChange());
    window.addEventListener('load', () => this.handleRouteChange());
  }

  handleRouteChange() {
    const rawHash = window.location.hash;
    const hash = this.routes.includes(rawHash) ? rawHash : this.defaultRoute;
    
    // Update hash in URL if it was empty or invalid
    if (window.location.hash !== hash) {
      window.location.hash = hash;
      return;
    }

    this.navigateTo(hash);
  }

  navigateTo(hash) {
    const targetId = hash.substring(1); // Remove '#'
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    // Scroll to top of window instantly before transition
    window.scrollTo(0, 0);

    // Hide active section
    if (this.activeSection) {
      this.activeSection.classList.remove('active');
    }

    // Show target section with fade transition
    targetSection.classList.add('active');
    this.activeSection = targetSection;

    // Update active nav links
    this.updateActiveNavLinks(hash);
    
    // Dispatch custom route changed event
    window.dispatchEvent(new CustomEvent('routeChanged', { detail: { route: hash } }));
  }

  updateActiveNavLinks(hash) {
    // Desktop links
    const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
    desktopLinks.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Mobile links
    const mobileLinks = document.querySelectorAll('.mobile-nav-drawer .mobile-nav-link');
    mobileLinks.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
