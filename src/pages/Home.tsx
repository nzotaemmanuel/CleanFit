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
        <SplineViewer url="https://prod.spline.design/6Wq1Q7YGyMVMtgO8/scene.splinecode" className="hero-canvas-container" />
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

    {/* PRICING PAGE SECTION */}
    <section id="pricing" className="page-section">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Estimates &amp; Costs</span>
          <h2 className="section-title">Transparent Price List</h2>
          <p className="section-subtitle">No hidden fees. Estimate your bill instantly with our interactive pricing calculator and book in one click.</p>
        </div>
        
        {/* Interactive Pricing Calculator */}
        <div className="calculator-card">
          {/* Items and controls */}
          <div className="calc-items-section">
            <div className="calc-category-tabs" id="calc-tabs">
              {/* Tabs dynamically generated in JS */}
            </div>
            
            <div className="calc-items-grid" id="calc-items-grid">
              {/* Cards dynamically generated in JS */}
            </div>
          </div>
          
          {/* Estimate calculation side card */}
          <div className="calc-summary-section" id="calc-summary-container">
            {/* Summary list generated dynamically in JS */}
          </div>
        </div>
        
        {/* Extra info card */}
        <div >
          <div >
            <h4 >Delivery Logistics</h4>
            <p >Free pickup &amp; delivery within Oreyo and central Ikorodu for orders above ₦15,000. Standard courier charges apply for smaller packages.</p>
          </div>
          <div >
            <h4 >Special Fabrics</h4>
            <p >Delicate embellishments, custom bridal gowns, and heavy velvet native wear require specialized procedures. Contact us directly for a custom quote.</p>
          </div>
        </div>
      </div>
    </section>

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

    {/* CORPORATE SOLUTIONS PAGE SECTION */}
    <section id="corporate" className="page-section corporate-section">
      <div className="section-container corporate-grid">
        
        {/* Left details */}
        <div>
          <span className="section-tag">Business Accounts</span>
          <h2 className="section-title">Corporate Solutions</h2>
          <p >Consistent, professional laundry partnerships for companies, hospitality venues, hotels, event planners, and teams with uniformed staff. We offer tailored schedules and structured monthly invoicing.</p>
          
          <ul className="corporate-features-list">
            <li>
              <div className="corp-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
              </div>
              <div>
                <h4 className="corp-feature-title">Monthly Invoicing &amp; Ledger</h4>
                <p className="corp-feature-desc">Manage expenses easily. Get compiled monthly statements and payment schedules instead of pay-per-item checkout.</p>
              </div>
            </li>
            <li>
              <div className="corp-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <div>
                <h4 className="corp-feature-title">Structured Pickup &amp; Delivery</h4>
                <p className="corp-feature-desc">Dedicated routes. We collect from your corporate headquarters or event spaces on pre-agreed days weekly.</p>
              </div>
            </li>
            <li>
              <div className="corp-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <h4 className="corp-feature-title">Account Liaison Manager</h4>
                <p className="corp-feature-desc">Direct business line. A dedicated account manager handles your scheduling, preferences, and urgent needs.</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Right side corporate request form */}
        <div className="corporate-form-card">
          <h3 className="corporate-form-title">Request Corporate Account</h3>
          <p className="corporate-form-subtitle">Submit details about your business and estimated monthly volume. Our account liaison will contact you within 24 hours.</p>
          
          <form id="corporate-form" noValidate>
            <div className="form-group">
              <label htmlFor="corp-company" className="form-label">Company Name</label>
              <input type="text" id="corp-company" className="form-control" placeholder="e.g. Lagos Event Space Ltd" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="corp-contact" className="form-label">Contact Person Name</label>
              <input type="text" id="corp-contact" className="form-control" placeholder="e.g. Ngozi Adewale" required />
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="corp-email" className="form-label">Business Email</label>
                <input type="email" id="corp-email" className="form-control" placeholder="ngozi@company.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="corp-phone" className="form-label">Business Phone</label>
                <input type="tel" id="corp-phone" className="form-control" placeholder="080XXXXXXXX" required />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="corp-volume" className="form-label">Estimated Monthly Volume</label>
              <select id="corp-volume" className="form-control">
                <option value="low">Under 50 garments / month</option>
                <option value="medium">50 - 200 garments / month</option>
                <option value="high">200 - 500 garments / month</option>
                <option value="bulk">Over 500 garments / bulk packages</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary" >Submit Application</button>
          </form>
        </div>
      </div>
    </section>

    {/* CONTACT US PAGE SECTION */}
    <section id="contact" className="page-section">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Direct Enquiries</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have questions or want to request custom logistics? Drop us a line or visit our Oreyo office.</p>
        </div>
        
        <div className="contact-grid">
          {/* Information sidebar */}
          <div>
            <div className="contact-info-cards">
              
              {/* Address Card */}
              <div className="contact-card">
                <div className="contact-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="contact-card-title">CleanFit Office</h4>
                  <p className="contact-card-value">Oreyo, Ikorodu, Lagos, Nigeria</p>
                  <p >Serving Ikorodu central and surroundings.</p>
                </div>
              </div>
              
              {/* Phone / WhatsApp Card */}
              <div className="contact-card">
                <div className="contact-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="contact-card-title">Call &amp; WhatsApp</h4>
                  <p className="contact-card-value">+234 703 483 8576</p>
                  <p >Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <a href="tel:+2347034838576" className="contact-card-link">
                    Call Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map box */}
            <div className="contact-map-mock">
              {/* embedded Google Maps iframe for Oreyo, Ikorodu, Lagos */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.340277340026!2d3.513511874229618!3d6.667362086431969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bef5c4c4786d7%3A0xe13bdfc9c223c6f2!2sOreyo%2C%20Ikorodu!5e0!3m2!1sen!2sng!4v1719846200000!5m2!1sen!2sng" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-card">
            <h3 >Send a Message</h3>
            <p >Fill out this form and we'll reply to your email or call you directly to discuss garment care.</p>
            
            <form id="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Full Name</label>
                <input type="text" id="contact-name" className="form-control" placeholder="e.g. Tunde Balogun" required />
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email Address</label>
                  <input type="email" id="contact-email" className="form-control" placeholder="tunde@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                  <input type="tel" id="contact-phone" className="form-control" placeholder="e.g. 080XXXXXXXX" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message / Details of Request</label>
                <textarea id="contact-message" className="form-control" placeholder="Please specify items, special fabric instructions, or any general laundry queries..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" >Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ PAGE SECTION */}
    <section id="faq" className="page-section">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Help &amp; Clarifications</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find immediate answers to common questions about garment care, pickup zones, and invoicing.</p>
        </div>
        
        {/* Accordion Search Input */}
        <div className="faq-search-wrapper">
          <input type="text" id="faq-search-input" className="faq-search-input" placeholder="Search FAQs (e.g. pricing, delivery, suits)..." />
          <div className="faq-search-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        </div>
        
        {/* FAQ Accordion List */}
        <div className="faq-list">
          {/* Item 1 */}
          <div className="faq-item">
            <button className="faq-trigger">
              <span className="faq-question">What areas in Lagos do you cover?</span>
              <div className="faq-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                We are based in Oreyo, Ikorodu. We provide daily doorstep pickup and delivery services within Oreyo, Ikorodu Central, Benson, Ebute, Ogolonto, and surrounding areas. For bulk packages or business accounts, we also cover offices in major commercial districts in Lagos on scheduled days.
              </div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="faq-item">
            <button className="faq-trigger">
              <span className="faq-question">What is your turnaround time?</span>
              <div className="faq-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                Our standard turnaround is 24 to 48 hours for Wash &amp; Fold and pressing services. Dry cleaning for corporate suits, bridal gowns, or delicate fabrics takes 48 to 72 hours. We also offer same-day express service for orders placed before 9:00 AM (surcharge applies).
              </div>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="faq-item">
            <button className="faq-trigger">
              <span className="faq-question">Do you offer invoicing for corporate accounts?</span>
              <div className="faq-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                Yes! We offer monthly invoicing, detailed ledger tracking, and credit options for approved corporate accounts and business owners who sign up for recurring laundry contract packages. General retail users pay upon delivery or pickup.
              </div>
            </div>
          </div>
          
          {/* Item 4 */}
          <div className="faq-item">
            <button className="faq-trigger">
              <span className="faq-question">How do you ensure fabric safety?</span>
              <div className="faq-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                Our laundry specialists examine every item's care tag. We categorize garments by color and fabric type, perform stain testing, and apply temperature-controlled steam pressing to avoid heat damage or shrinkage.
              </div>
            </div>
          </div>
          
          {/* Item 5 */}
          <div className="faq-item">
            <button className="faq-trigger">
              <span className="faq-question">What payment methods do you accept?</span>
              <div className="faq-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                We accept bank transfers, POS payments at the point of delivery, and secure online payments via Paystack/Flutterwave link. We do not store credit card details directly, conforming to PCI-DSS compliance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PRIVACY POLICY PAGE SECTION */}
    <section id="privacy" className="page-section" >
      <div className="section-container privacy-container">
        <div className="section-title-wrapper" >
          <h2 className="section-title">Privacy Policy</h2>
          <p >Last updated: July 2026</p>
        </div>
        
        <div className="privacy-content">
          <p>CleanFit ("we," "us," or "our") values your privacy. This policy outlines how we collect, store, and process your personal data in accordance with the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> when you use our website, book a laundry pickup, or register a corporate account.</p>
          
          <h3>1. Data We Collect</h3>
          <p>We only collect personal information required to execute our cleaning and delivery services:</p>
          <ul>
            <li><strong>Personal details:</strong> Full Name, company name (for corporate packages).</li>
            <li><strong>Contact details:</strong> Phone number, email address, physical address for pickup/delivery.</li>
            <li><strong>Order details:</strong> Estimator quantities, payment status, and special fabric care instructions.</li>
          </ul>
          
          <h3>2. How We Use Your Data</h3>
          <p>Your details are processed to manage logistics, confirm bookings, validate enquiries, issue invoicing, and respond to customer support requests. We do not sell or share your data with third-party advertisers.</p>
          
          <h3>3. Data Retention &amp; Protection</h3>
          <ul>
            <li><strong>Security:</strong> All communication between your browser and our servers is encrypted in transit using Secure Socket Layer (SSL/HTTPS) certificates.</li>
            <li><strong>Storage:</strong> Customer details are stored in access-controlled databases. We do not store sensitive payment card information directly; all financial transactions are processed through secure, PCI-DSS compliant payment gateways.</li>
            <li><strong>Retention:</strong> We retain your order history only for as long as necessary to complete services and satisfy accounting requirements.</li>
          </ul>
          
          <h3>4. Your Rights</h3>
          <p>Under the NDPA 2023, you have the right to access your stored data, request corrections, or ask for the deletion of your customer record. For enquiries regarding data privacy, please contact us at <strong>+234 703 483 8576</strong>.</p>
        </div>
      </div>
    </section>

  
    </Layout>
  );
}