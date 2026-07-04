import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SplineViewer from '../components/SplineViewer';

export default function Services() {
  return (
    <Layout>
      
{/* SERVICES PAGE SECTION */}
    <section id="services" className="page-section active">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Our Care Specialities</span>
          <h2 className="section-title">Professional Cleaning Services</h2>
          <p className="section-subtitle">Tailored laundry procedures for every fabric, guaranteeing quality and convenience for Lagos corporate workers.</p>
          {/* Page 3D Object */}
          <SplineViewer url="https://prod.spline.design/kZi5iKuD2QpILoSp/scene.splinecode" />
        </div>
        
        <div className="services-grid">
          
          {/* Card 1: Wash & Fold */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0"></path></svg>
            </div>
            <h3 className="service-name">Wash &amp; Fold</h3>
            <p className="service-desc">The perfect solution for your daily laundry list. Casual wear, shirts, socks, and undergarments cleaned and neatly folded.</p>
            <ul className="service-bullets">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Premium bio-safe detergents</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Categorized color sorting</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Shrinkage-free tumble dry</li>
            </ul>
            <div className="service-footer">
              <span className="service-time">24-48 Hours</span>
              <button className="btn btn-secondary btn-trigger-booking" >Request Service</button>
            </div>
          </div>
          
          {/* Card 2: Dry Cleaning */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.38 3.46L16 7.84a5 5 0 0 0-7.07 0L4.54 12.22a5 5 0 0 0 0 7.07l4.38 4.38a5 5 0 0 0 7.07 0l4.38-4.38a5 5 0 0 0 0-7.07l-2-2"></path></svg>
            </div>
            <h3 className="service-name">Dry Cleaning</h3>
            <p className="service-desc">Delicate fabric care for corporate suits, designer wear, traditional agbadas, and native gowns. Restores freshness while protecting fibers.</p>
            <ul className="service-bullets">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Suits, native wear, and silks</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Advanced stain removal systems</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Individual garment pressing</li>
            </ul>
            <div className="service-footer">
              <span className="service-time">48-72 Hours</span>
              <button className="btn btn-secondary btn-trigger-booking" >Request Service</button>
            </div>
          </div>
          
          {/* Card 3: Pressing & Ironing */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14h16"></path><path d="M12 6v14"></path></svg>
            </div>
            <h3 className="service-name">Ironing &amp; Pressing</h3>
            <p className="service-desc">Wrinkle-free steam pressing to give your shirts and trousers a sharp, crisp line. Perfect for corporate presentation day.</p>
            <ul className="service-bullets">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Professional steam tables</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Starched or soft options</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Hanger-delivered crease hold</li>
            </ul>
            <div className="service-footer">
              <span className="service-time">24 Hours</span>
              <button className="btn btn-secondary btn-trigger-booking" >Request Service</button>
            </div>
          </div>
        </div>
        
        {/* Corporate banner link inside Services */}
        <div className="corporate-banner">
          <div>
            <h3>Need bulk or corporate package wash?</h3>
            <p>We provide contract cleaning for hospitality, hotels, events, and companies with uniformed staff in Lagos with invoicing options.</p>
          </div>
          <Link to="/corporate" className="btn btn-primary">Explore Corporate Packages</Link>
        </div>
      </div>
    </section>

    
    </Layout>
  );
}