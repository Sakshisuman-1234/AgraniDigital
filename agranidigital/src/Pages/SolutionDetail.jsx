import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { dropdownContent } from '../data/navigationData';

const SolutionDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [content, setContent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    // Detect category from pathname (e.g., /services/gen-ai -> services)
    const pathParts = location.pathname.split('/').filter(Boolean);
    const categoryFromPath = pathParts[0] || '';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveCategory(categoryFromPath);

    const path = location.pathname;
    
    // Normalize category key for lookup (e.g., 'services' -> 'Services')
    const categoryKey = Object.keys(dropdownContent).find(
      key => key.toLowerCase() === categoryFromPath.toLowerCase().replace('-', ' ')
    );
    const categoryData = categoryKey ? dropdownContent[categoryKey] : null;

    let foundItem = null;
    if (categoryData && categoryData.categories) {
      categoryData.categories.forEach(cat => {
        if (cat && cat.items) {
          const item = cat.items.find(i => i.link === path);
          if (item) foundItem = item;
        }
      });
    }

    // Fallback search if title keys don't match perfectly
    if (!foundItem) {
      Object.keys(dropdownContent).forEach(key => {
        const catGroup = dropdownContent[key];
        if (catGroup.categories) {
          catGroup.categories.forEach(cat => {
            if (cat && cat.items) {
              const item = cat.items.find(i => i.link === path);
              if (item) foundItem = item;
            }
          });
        }
      });
    }

    setContent(foundItem);
    window.scrollTo(0, 0);
  }, [id, location.pathname]);

  if (!content) {
    return (
      <div className="ag-detail-root">
        <Navbar />
        <div className="ag-error-container">
          <h2>Page Not Found</h2>
          <p>The solution you are looking for might have been moved or renamed.</p>
          <Link to="/" className="ag-back-btn">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="ag-detail-root">
      <Navbar />
      
      {/* Hero Section */}
      <section className="ag-hero-section">
        <div className="ag-container">
          <div className="ag-hero-content">
            <span className="ag-category-badge">{activeCategory.toUpperCase()}</span>
            <h1 className="ag-hero-title">{content.icon} {content.name}</h1>
            <p className="ag-hero-desc">{content.description}</p>
            <div className="ag-hero-actions">
              <Link to="/contact" className="ag-btn-primary">Get Started</Link>
              <Link to="/contact" className="ag-btn-secondary">Request Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="ag-content-section">
        <div className="ag-container">
          <div className="ag-grid">
            <div className="ag-main-copy">
              <h2>Overview</h2>
              <p>
                As a leading provider in the **{activeCategory}** space, Agrani Digital delivers state-of-the-art 
                solutions tailored for **{content.name}**. Our approach combines technological excellence 
                with deep domain expertise to drive measurable results.
              </p>
              
              <div className="ag-features-grid">
                <div className="ag-feature-card">
                  <div className="ag-feature-icon">🚀</div>
                  <h4>Rapid Deployment</h4>
                  <p>Get up and running faster with our pre-built modules and agile workflows.</p>
                </div>
                <div className="ag-feature-card">
                  <div className="ag-feature-icon">🛡️</div>
                  <h4>Secure by Design</h4>
                  <p>Enterprise-grade security and compliance built into every layer of the solution.</p>
                </div>
                <div className="ag-feature-card">
                  <div className="ag-feature-icon">📈</div>
                  <h4>Scalable Architecture</h4>
                  <p>Built to grow with your business, from startup to global enterprise.</p>
                </div>
              </div>

              <div className="ag-info-box">
                <h3>Want to learn more about {content.name}?</h3>
                <p>Schedule a call with our technical experts to discuss how we can help you implement this solution.</p>
                <Link to="/contact" className="ag-link-btn">Schedule Consultation →</Link>
              </div>
            </div>

            <div className="ag-sidebar-form">
              <div className="ag-form-card">
                <h3>Inquiry Form</h3>
                <p>Connect with our {activeCategory} experts.</p>
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your interest! Our team will contact you shortly.'); }}>
                  <div className="ag-form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="ag-form-group">
                    <label>Email ID</label>
                    <input type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="ag-form-group">
                    <label>How can we help?</label>
                    <textarea placeholder="Tell us about your requirements..."></textarea>
                  </div>
                  <button type="submit" className="ag-form-submit">Submit Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="ag-detail-footer">
        <div className="ag-container">
          <p>© 2026 Agrani Digital. All Rights Reserved.</p>
        </div>
      </footer>

      <style>{`
        .ag-detail-root {
          min-height: 100vh;
          background: #fff;
          color: #0f172a;
          font-family: 'Inter', sans-serif;
        }

        .ag-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero */
        .ag-hero-section {
          padding: 140px 0 100px;
          background: radial-gradient(circle at top right, #f0f7ff 0%, #ffffff 100%);
          border-bottom: 1px solid rgba(226, 232, 240, 0.6);
          position: relative;
          overflow: hidden;
        }

        .ag-hero-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%);
          border-radius: 50%;
        }

        .ag-hero-content {
          max-width: 850px;
          position: relative;
          z-index: 2;
        }

        .ag-category-badge {
          display: inline-block;
          padding: 6px 16px;
          background: #eef4ff;
          color: #2563eb;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
          border: 1px solid rgba(37, 99, 235, 0.1);
          text-transform: uppercase;
        }

        .ag-hero-title {
          font-size: 56px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .ag-hero-desc {
          font-size: 20px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 40px;
          white-space: pre-line;
          max-width: 700px;
        }

        .ag-hero-actions {
          display: flex;
          gap: 16px;
        }

        /* Content */
        .ag-content-section {
          padding: 80px 0;
        }

        .ag-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 64px;
        }

        .ag-main-copy h2 {
          font-size: 32px;
          font-weight: 800;
          color: #123b71;
          margin-bottom: 24px;
        }

        .ag-main-copy p {
          font-size: 17px;
          line-height: 1.8;
          color: #334155;
          margin-bottom: 32px;
        }

        .ag-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin: 48px 0;
        }

        .ag-feature-card {
          padding: 24px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .ag-feature-card:hover {
          border-color: #2563eb;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1);
        }

        .ag-feature-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .ag-feature-card h4 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1e293b;
        }

        .ag-feature-card p {
          font-size: 14px;
          margin-bottom: 0;
          line-height: 1.5;
        }

        .ag-info-box {
          background: linear-gradient(135deg, #123b71 0%, #1e40af 100%);
          padding: 48px;
          border-radius: 32px;
          color: white;
          margin-top: 64px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(18, 59, 113, 0.2);
        }

        .ag-info-box::after {
          content: '';
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        .ag-info-box h3 {
          color: white;
          margin-top: 0;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .ag-info-box p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 18px;
          margin-bottom: 32px;
        }

        /* Sidebar Form */
        .ag-form-card {
          position: sticky;
          top: 100px;
          background: #fff;
          padding: 32px;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .ag-form-group {
          margin-bottom: 20px;
        }

        .ag-form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .ag-form-group input, .ag-form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-family: inherit;
        }

        .ag-form-submit {
          width: 100%;
          padding: 14px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        /* Buttons */
        .ag-btn-primary {
          padding: 14px 28px;
          background: #123b71;
          color: white;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
        }

        .ag-btn-secondary {
          padding: 14px 28px;
          border: 2.5px solid #123b71;
          color: #123b71;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
        }

        .ag-link-btn {
          color: #60a5fa;
          text-decoration: none;
          font-weight: 700;
        }

        .ag-detail-footer {
          padding: 40px 0;
          border-top: 1px solid #e2e8f0;
          text-align: center;
          color: #64748b;
          font-size: 14px;
        }

        @media (max-width: 1024px) {
          .ag-grid {
            grid-template-columns: 1fr;
          }
          .ag-sidebar-form {
            display: none;
          }
           .ag-features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default SolutionDetail;
