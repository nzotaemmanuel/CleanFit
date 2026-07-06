import React from 'react';
import Layout from '../components/Layout';
import SplineViewer from '../components/SplineViewer';

export default function Corporate() {
  return (
    <Layout>
      
{/* CORPORATE SOLUTIONS PAGE SECTION */}
    <section id="corporate" className="page-section corporate-section active">
      <div className="section-container corporate-grid">
        
        {/* Left details */}
        <div>
          <span className="section-tag">Business Accounts</span>
          <h2 className="section-title">Corporate Solutions</h2>
          {/* Page 3D Object */}
          <SplineViewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
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

    
    </Layout>
  );
}