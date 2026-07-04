import React from 'react';
import Layout from '../components/Layout';
import SplineViewer from '../components/SplineViewer';

export default function HowItWorks() {
  return (
    <Layout>
      
{/* HOW IT WORKS PAGE SECTION */}
    <section id="how-it-works" className="page-section active">
      <div className="section-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Convenience Workflow</span>
          <h2 className="section-title">Our Step-by-Step Process</h2>
          <p className="section-subtitle">How we make premium garment care completely effortless for busy Lagos corporate clients.</p>
          {/* Page 3D Object */}
          <SplineViewer url="https://prod.spline.design/kZi5iKuD2QpILoSp/scene.splinecode" />
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

    
    </Layout>
  );
}