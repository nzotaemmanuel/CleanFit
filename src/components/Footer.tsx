import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Column 1: Brand & About */}
        <div>
          <div className="logo-wrapper" style={{ marginBottom: '16px' }}>
            <div className="logo-text">Clean<span>Fit</span></div>
          </div>
          <p style={{ color: 'var(--neutral-400)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Delivering pristine, hassle-free laundry and dry cleaning services for professionals and families across Ikorodu.
          </p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
            {/* Social Icons Placeholder */}
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
          </div>
        </div>
        
        {/* Column 2: Quick Links */}
        <div>
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing Estimator</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        
        {/* Column 3: Services details */}
        <div>
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Wash & Fold</Link></li>
            <li><Link to="/services">Dry Cleaning</Link></li>
            <li><Link to="/services">Steam Pressing</Link></li>
            <li><Link to="/corporate">Corporate Invoicing</Link></li>
            <li><Link to="/pricing">Pricing Guide</Link></li>
          </ul>
        </div>
        
        {/* Column 4: Contact details */}
        <div>
          <h4 className="footer-title">Contact & Area</h4>
          <ul className="footer-contact-info">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Oreyo, Ikorodu, Lagos, Nigeria.</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+234 703 483 8576</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><polyline points="22 3 12 11 2 3"/></svg>
              <span>enquiries@cleanfitlaundry.com</span>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">&copy; 2026 CleanFit. All rights reserved. Professional Laundry Services in Lagos.</div>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}