import React from 'react';
import Layout from '../components/Layout';
import SplineViewer from '../components/SplineViewer';

export default function Privacy() {
  return (
    <Layout>
      
{/* PRIVACY POLICY PAGE SECTION */}
    <section id="privacy" className="page-section active" >
      <div className="section-container privacy-container">
        <div className="section-title-wrapper" >
          <h2 className="section-title">Privacy Policy</h2>
          <p >Last updated: July 2026</p>
          {/* Page 3D Object */}
          <SplineViewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
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