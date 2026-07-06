import React from 'react';
import Layout from '../components/Layout';
import SplineViewer from '../components/SplineViewer';

export default function AboutUs() {
  return (
    <Layout>
      
{/* ABOUT US PAGE SECTION */}
    <section id="about" className="page-section active">
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
        
        {/* 3D Spline Image wrapper */}
        <SplineViewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>
    </section>

    
    </Layout>
  );
}