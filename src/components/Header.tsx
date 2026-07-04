import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  };

  const openDrawer = () => {
    document.getElementById('mobile-menu-btn')?.classList.add('open');
    document.getElementById('mobile-drawer')?.classList.add('open');
    document.getElementById('drawer-backdrop')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    document.getElementById('mobile-menu-btn')?.classList.remove('open');
    document.getElementById('mobile-drawer')?.classList.remove('open');
    document.getElementById('drawer-backdrop')?.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <>
      <div className="drawer-backdrop" id="drawer-backdrop" onClick={closeDrawer}></div>
      <header>
        <div className="header-container">
          <Link to="/" className="logo-wrapper">
            <img src="/assets/images/logo.png" alt="CleanFit Logo" className="logo-img" />
            <div className="logo-text">Clean<span>Fit</span></div>
          </Link>
          <nav className="desktop-nav">
            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
            <Link to="/pricing" className={`nav-link ${isActive('/pricing')}`}>Pricing</Link>
            <Link to="/how-it-works" className={`nav-link ${isActive('/how-it-works')}`}>How It Works</Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
            <Link to="/corporate" className={`nav-link ${isActive('/corporate')}`}>Corporate</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
            <Link to="/faq" className={`nav-link ${isActive('/faq')}`}>FAQ</Link>
          </nav>
          <div className="header-cta">
            <a href="tel:+2347034838576" className="btn btn-secondary btn-phone-header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +234 703 483 8576
            </a>
            <button className="btn btn-primary btn-trigger-booking" onClick={openModal}>Book Pickup</button>
          </div>
          <button className="mobile-menu-toggle" id="mobile-menu-btn" aria-label="Toggle Navigation" onClick={openDrawer}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <aside className="mobile-nav-drawer" id="mobile-drawer">
        <Link to="/" className="mobile-nav-link" onClick={closeDrawer}>Home</Link>
        <Link to="/services" className="mobile-nav-link" onClick={closeDrawer}>Services</Link>
        <Link to="/pricing" className="mobile-nav-link" onClick={closeDrawer}>Pricing</Link>
        <Link to="/how-it-works" className="mobile-nav-link" onClick={closeDrawer}>How It Works</Link>
        <Link to="/about" className="mobile-nav-link" onClick={closeDrawer}>About Us</Link>
        <Link to="/corporate" className="mobile-nav-link" onClick={closeDrawer}>Corporate Solutions</Link>
        <Link to="/contact" className="mobile-nav-link" onClick={closeDrawer}>Contact Us</Link>
        <Link to="/faq" className="mobile-nav-link" onClick={closeDrawer}>FAQ</Link>
        <button className="btn btn-primary btn-trigger-booking" style={{ width: '100%', marginTop: '12px' }} onClick={() => { closeDrawer(); openModal(); }}>Book Pickup</button>
      </aside>
    </>
  );
}
