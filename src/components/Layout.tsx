import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
// @ts-ignore
import { initForms } from '../forms';
// @ts-ignore
import { initUI } from '../ui';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    initForms();
    initUI();
  }, []);

  return (
    <>
      <Header />
      <main id="app">
        {children}
      </main>
      <Footer />

      {/* MOBILE FLOATING ACTION BUTTONS */}
      <div className="mobile-floating-bar">
        <a href="tel:+2347034838576" className="btn btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Us
        </a>
        <a href="https://wa.me/2347034838576" target="_blank" className="btn btn-primary" style={{ backgroundColor: '#25D366', borderColor: '#25D366', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)' }} rel="noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.638 1.977 14.178.953 11.547.953 6.115.953 1.69 5.325 1.686 10.755c-.001 1.706.452 3.372 1.311 4.869L2.013 21.93l6.568-1.72a9.79 9.79 0 0 0-1.934 1.944zm12.315-7.115c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
          WhatsApp
        </a>
      </div>

      {/* BOOKING MODAL */}
      <div className="modal-overlay" id="booking-modal">
        <div className="modal-container">
          <button className="modal-close-btn" id="close-booking-modal" aria-label="Close Modal">&times;</button>
          
          <div className="modal-header">
            <h3 className="modal-title">Book a Laundry Pickup</h3>
            <p className="modal-subtitle">Provide your contact details and scheduled time. We collect and deliver at your doorstep.</p>
          </div>
          
          <div className="modal-body">
            <div className="booking-summary-box" id="modal-booking-summary-box" style={{ display: 'none' }}>
              <div className="booking-summary-title">Estimate Details</div>
              <div className="booking-summary-items"></div>
              <div className="booking-summary-total">Total Estimate: ₦<span>0</span></div>
            </div>
            
            <form id="booking-form" noValidate>
              <input type="hidden" id="booking-estimate-details" name="estimate_details" value="General Pickup Request" />
              <input type="hidden" id="booking-estimate-total" name="estimate_total" value="0" />
              
              <div className="form-group">
                <label htmlFor="pickup-name" className="form-label">Full Name</label>
                <input type="text" id="pickup-name" className="form-control" placeholder="e.g. Kolawole Davies" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="pickup-phone" className="form-label">Phone Number</label>
                <input type="tel" id="pickup-phone" className="form-control" placeholder="e.g. 080XXXXXXXX" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="pickup-address" className="form-label">Pickup Address in Ikorodu</label>
                <textarea id="pickup-address" className="form-control" placeholder="House/Office Number, Street, Area, Ikorodu Lagos" required></textarea>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="pickup-date" className="form-label">Preferred Pickup Date</label>
                  <input type="date" id="pickup-date" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="pickup-time" className="form-label">Preferred Time Slot</label>
                  <select id="pickup-time" className="form-control">
                    <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="pickup-notes" className="form-label">Garment Care Instructions (Optional)</label>
                <input type="text" id="pickup-notes" className="form-control" placeholder="e.g. Starch shirts heavily, separate whites" />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Confirm Pickup Booking</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
