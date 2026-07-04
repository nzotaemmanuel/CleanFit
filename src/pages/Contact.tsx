import React from 'react';
import Layout from '../components/Layout';
import SplineViewer from '../components/SplineViewer';

export default function Contact() {
  return (
    <Layout>
      
{/* CONTACT US PAGE SECTION */}
    <section id="contact" className="page-section active">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Direct Enquiries</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have questions or want to request custom logistics? Drop us a line or visit our Oreyo office.</p>
          {/* Page 3D Object */}
          <SplineViewer url="https://prod.spline.design/6Wq1Q7YGyMVMtgO8/scene.splinecode" />
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

    
    </Layout>
  );
}