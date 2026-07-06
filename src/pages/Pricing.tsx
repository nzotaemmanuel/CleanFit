import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import SplineViewer from '../components/SplineViewer';
// @ts-ignore
import { PricingCalculator } from '../calculator';

export default function Pricing() {
  useEffect(() => {
    new PricingCalculator();
  }, []);

  return (
    <Layout>
      
{/* PRICING PAGE SECTION */}
    <section id="pricing" className="page-section active">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Estimates &amp; Costs</span>
          <h2 className="section-title">Transparent Price List</h2>
          <p className="section-subtitle">No hidden fees. Estimate your bill instantly with our interactive pricing calculator and book in one click.</p>
          {/* Page 3D Object */}
          <SplineViewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
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

    
    </Layout>
  );
}