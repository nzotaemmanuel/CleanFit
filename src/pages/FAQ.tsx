import React from 'react';
import Layout from '../components/Layout';
import SplineViewer from '../components/SplineViewer';

export default function FAQ() {
  return (
    <Layout>
      
{/* FAQ PAGE SECTION */}
    <section id="faq" className="page-section active">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Help &amp; Clarifications</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find immediate answers to common questions about garment care, pickup zones, and invoicing.</p>
          {/* Page 3D Object */}
          <SplineViewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
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

    
    </Layout>
  );
}