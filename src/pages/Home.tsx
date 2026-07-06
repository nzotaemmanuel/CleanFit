import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SplineViewer from '../components/SplineViewer';

export default function Home() {
  return (
    <Layout>
      

    {/* HOME PAGE SECTION */}
    <section id="home" className="page-section active hero-section">
      <div className="section-container hero-grid">
        
        {/* Left Side Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Premium Garment Care Promise
          </div>
          <h1 className="hero-title">Professional Laundry Care for <span>Busy Professionals</span></h1>
          <p className="hero-desc">We collect, wash, press, and deliver your wardrobe in pristine condition back to your home or office in Ikorodu. Let us handle the chore while you focus on what matters.</p>
          
          <div className="hero-actions">
            <button className="btn btn-primary btn-trigger-booking">
              Book a Pickup
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <a href="https://wa.me/2347034838576" target="_blank" className="btn btn-secondary" >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.638 1.977 14.178.953 11.547.953 6.115.953 1.69 5.325 1.686 10.755c-.001 1.706.452 3.372 1.311 4.869L2.013 21.93l6.568-1.72a9.79 9.79 0 0 0-1.934 1.944zm12.315-7.115c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path></svg>
              WhatsApp Us
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">24h</div>
              <div className="stat-label">Express Turnaround</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Fabric Safety Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Doorstep Delivery</div>
            </div>
          </div>
        </div>
        
        {/* Right Side Spline 3D Scene Viewport */}
        <SplineViewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" className="hero-canvas-container" />
      </div>
    </section>

    {/* SERVICES PAGE SECTION */}
    <section id="services" className="page-section">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Our Care Specialities</span>
          <h2 className="section-title">Professional Cleaning Services</h2>
          <p className="section-subtitle">Tailored laundry procedures for every fabric, guaranteeing quality and convenience for Lagos corporate workers.</p>
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

    {/* PRICING PAGE SECTION OMITTED FROM HOME */}

    {/* HOW IT WORKS PAGE SECTION */}
    <section id="how-it-works" className="page-section">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Convenience Workflow</span>
          <h2 className="section-title">Our Step-by-Step Process</h2>
          <p className="section-subtitle">How we make premium garment care completely effortless for busy Lagos corporate clients.</p>
        </div>
        
        <div className="workflow-grid">
          {/* Step 1 */}
          <div className="workflow-card">
            <div className="workflow-num">1</div>
            <h3 className="workflow-title">Schedule</h3>
            <p className="workflow-desc">Request a pickup on our website, call us directly, or chat via WhatsApp.</p>
          </div>
          {/* Step 2 */}
          <div className="workflow-card">
            <div className="workflow-num">2</div>
            <h3 className="workflow-title">We Collect</h3>
            <p className="workflow-desc">Our courier picks up your laundry bag at your doorstep (home or corporate office).</p>
          </div>
          {/* Step 3 */}
          <div className="workflow-card">
            <div className="workflow-num">3</div>
            <h3 className="workflow-title">We Clean &amp; Check</h3>
            <p className="workflow-desc">We clean, steam press, and inspect your garments in our secure local facility.</p>
          </div>
          {/* Step 4 */}
          <div className="workflow-card">
            <div className="workflow-num">4</div>
            <h3 className="workflow-title">We Deliver</h3>
            <p className="workflow-desc">Pristine, crisp garments are returned to you in protective packaging within your timeframe.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ABOUT US PAGE SECTION */}
    <section id="about" className="page-section">
      <div className="section-container about-grid">
        
        {/* Details */}
        <div>
          <span className="section-tag">Fabric Care Experts</span>
          <h2 className="section-title" >About CleanFit Laundry</h2>
          <p >Based in Oreyo, Ikorodu, Lagos, CleanFit is a premier fabric care center founded on the principles of trust, convenience, and absolute quality. We understand the high-pressure schedule of corporate workers and business owners, which is why we designed a service that eliminates the headache of weekly laundry care.</p>
          <p >Our team utilizes industry-grade washing setups, eco-conscious fabrics cleaning agents, and precise temperature-controlled pressing systems to maintain the fit, color, and texture of your formal wardrobe.</p>
          
          <div className="about-features">
            <div className="about-feat-box">
              <h4 className="about-feat-title">Our Mission</h4>
              <p className="about-feat-desc">To save you time by offering premium, stress-free wardrobe maintenance and reliable door-to-door delivery.</p>
            </div>
            <div className="about-feat-box">
              <h4 className="about-feat-title">Our Care Standards</h4>
              <p className="about-feat-desc">Strict fabric testing, individualized treatment card instructions, and anti-shrink processes.</p>
            </div>
          </div>
        </div>
        
        {/* Mock Image wrapper */}
        <div className="about-image-wrapper">
          <div className="about-image-backdrop"></div>
          {/* Using the official logo graphic inside about section to enforce brand presence */}
          <img src="/assets/images/logo.png" alt="CleanFit Operations" className="about-image" />
        </div>
      </div>
    </section>

    {/* CORPORATE, CONTACT, FAQ, PRIVACY SECTIONS OMITTED FROM HOME */}

  
    </Layout>
  );
}