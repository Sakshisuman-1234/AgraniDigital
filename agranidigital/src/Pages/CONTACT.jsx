import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const CONTACT = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after a tiny delay
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ag-contact-root">
      <Navbar />
      
      <main className="ag-contact-main">
        <div className={`ag-contact-container ${isVisible ? 'is-active' : ''}`}>
          
          {/* Breadcrumb at Top Left */}
          <div className="ag-breadcrumb-wrap">
            <Link to="/" className="ag-breadcrumb-link">HOME</Link>
            <span className="ag-breadcrumb-sep">/</span>
            <span className="ag-breadcrumb">CONTACT US</span>
          </div>

          {/* Header Section */}
          <div className="ag-contact-header">
            <h1 className="ag-contact-title">Contact Us</h1>
          </div>

          {/* The Rectangular Hero Page Card */}
          <section className="ag-hero-card">
            <div className="ag-card-inner">
              <div className="ag-card-content">
                <div className="ag-spark-badge">
                  <span className="ag-spark-icon">✨</span>
                  LEAD THE AI REVOLUTION
                </div>
                
                <h2 className="ag-hero-heading">
                  Let's Transform Your <br />
                  <span className="ag-gradient-text">Business Together</span>
                </h2>
                
                <p className="ag-hero-description">
                  Ready to automate your operations with AI? Our team is here to help you 
                  implement intelligent solutions that drive efficiency and growth.
                </p>

                <div className="ag-hero-actions">
                  <a href="mailto:contact@avyann.com" className="ag-btn-fill">
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="tel:+919263568706" className="ag-btn-outline">
                    Call Now
                    <span className="ag-btn-detail">+91 9263568706</span>
                  </a>
                </div>
              </div>

              <div className="ag-card-visual">
                <div className="ag-visual-blob"></div>
                <div className="ag-visual-content">
                  <div className="ag-stat-item">
                    <span className="ag-stat-val">24/7</span>
                    <span className="ag-stat-lbl">Global Support</span>
                  </div>
                  <div className="ag-stat-item">
                    <span className="ag-stat-val">100%</span>
                    <span className="ag-stat-lbl">Data Privacy</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get in Touch Section - Large Horizontal Row */}
          <section className="ag-get-in-touch">
            <div className="ag-section-header">
              <h2 className="ag-section-title-large">Get in Touch</h2>
              <p className="ag-section-subtitle">Choose your preferred way to connect with our team</p>
            </div>

            <div className="ag-touch-row">
              {/* Email Card - Full Box Clickable */}
              <a href="mailto:contact@avyann.com" className="ag-touch-card">
                <div className="ag-touch-icon-wrap email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="ag-touch-info">
                  <h3>Email Us</h3>
                  <p className="ag-touch-desc">For general inquiries and support</p>
                  <span className="ag-touch-value">contact@avyann.com</span>
                  <span className="ag-touch-tag">Within 24 hours</span>
                </div>
              </a>

              {/* Call Card - Full Box Clickable */}
              <a href="tel:+919263568706" className="ag-touch-card">
                <div className="ag-touch-icon-wrap call">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.21-2.21a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="ag-touch-info">
                  <h3>Call Us</h3>
                  <p className="ag-touch-desc">For urgent matters and sales</p>
                  <span className="ag-touch-value">+91 9263568706</span>
                  <span className="ag-touch-tag">Mon-Fri, 9AM-6PM IST</span>
                </div>
              </a>

              {/* Visit Card - Full Box Clickable */}
              <button onClick={() => window.open('https://maps.google.com/?q=Bangalore,India', '_blank')} className="ag-touch-card">
                <div className="ag-touch-icon-wrap visit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="ag-touch-info">
                  <h3>Visit Us</h3>
                  <p className="ag-touch-desc">Our office location</p>
                  <span className="ag-touch-value">Bangalore, India</span>
                  <span className="ag-touch-tag">By appointment</span>
                </div>
              </button>

              {/* Chat Card - Full Box Clickable */}
              <button onClick={() => alert('Starting Live Chat...')} className="ag-touch-card">
                <div className="ag-touch-icon-wrap chat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div className="ag-touch-info">
                  <h3>Live Chat</h3>
                  <p className="ag-touch-desc">Instant support</p>
                  <span className="ag-touch-value" style={{ textDecoration: 'underline' }}>Chat now</span>
                  <span className="ag-touch-tag">24/7 availability</span>
                </div>
              </button>
            </div>
          </section>

          {/* Contact Details Grid */}
          <div className="ag-details-grid">
            <a href="mailto:contact@avyann.com" className="ag-detail-card">
              <div className="ag-detail-icon">📧</div>
              <h4>Email Us</h4>
              <p>contact@avyann.com</p>
            </a>
            <button onClick={() => window.open('https://maps.google.com/?q=Bangalore,India', '_blank')} className="ag-detail-card">
              <div className="ag-detail-icon">📍</div>
              <h4>Visit Us</h4>
              <p>Bangalore, India</p>
            </button>
            <div className="ag-detail-card">
              <div className="ag-detail-icon">🕒</div>
              <h4>Office Hours</h4>
              <p>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800&display=swap');

        .ag-contact-root {
          min-height: 100vh;
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
          color: #0f172a;
          overflow-x: hidden;
        }

        .ag-contact-main {
          padding: 10px 0 80px;
          display: flex;
          justify-content: center;
        }

        .ag-contact-container {
          width: 100%;
          max-width: 1400px;
          padding: 0 40px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ag-contact-container.is-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Header */
        .ag-contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .ag-breadcrumb-wrap {
          display: flex;
          justify-content: flex-start;
          margin: 0 0 40px 0;
          padding: 0 0 0 12px;
          border-left: 2px solid #2563eb;
        }

        .ag-breadcrumb-link {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.25em;
          color: #94a3b8;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .ag-breadcrumb-link:hover {
          color: #2563eb;
        }

        .ag-breadcrumb-sep {
          font-size: 10px;
          font-weight: 400;
          color: #cbd5e1;
          margin: 0 10px;
        }

        .ag-breadcrumb {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.25em;
          color: #1e293b;
          text-transform: uppercase;
        }

        .ag-contact-title {
          font-family: 'Outfit', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: #123b71;
          letter-spacing: -0.02em;
        }

        /* The Box (Hero Card) */
        .ag-hero-card {
          width: 100%;
          background: #fff;
          border-radius: 32px;
          box-shadow: 0 30px 100px rgba(18, 59, 113, 0.1);
          border: 1px solid rgba(18, 59, 113, 0.05);
          overflow: hidden;
          position: relative;
          margin-bottom: 40px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .ag-hero-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 40px 120px rgba(18, 59, 113, 0.15);
        }

        .ag-card-inner {
          display: grid;
          grid-template-columns: 1fr 340px;
          min-height: 520px;
        }

        .ag-card-content {
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .ag-spark-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #f0f7ff;
          color: #2563eb;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          width: fit-content;
          margin-bottom: 32px;
        }

        .ag-hero-heading {
          font-family: 'Outfit', sans-serif;
          font-size: 54px;
          font-weight: 800;
          line-height: 1.1;
          color: #0f172a;
          margin-bottom: 24px;
          letter-spacing: -0.04em;
        }

        .ag-gradient-text {
          background: linear-gradient(135deg, #123b71 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ag-hero-description {
          font-size: 18px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 48px;
          max-width: 560px;
        }

        .ag-hero-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        /* Buttons */
        .ag-btn-fill {
          height: 60px;
          padding: 0 36px;
          background: #123b71;
          color: white;
          border: none;
          border-radius: 16px;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(18, 59, 113, 0.2);
          text-decoration: none;
        }

        .ag-btn-fill:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(18, 59, 113, 0.3);
          background: #0f2e58;
          color: white;
        }

        .ag-btn-outline {
          height: 60px;
          padding: 0 36px;
          background: transparent;
          color: #123b71;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .ag-btn-outline:hover {
          border-color: #123b71;
          background: #f0f7ff;
          color: #123b71;
        }

        .ag-btn-detail {
          font-size: 11px;
          font-weight: 500;
          color: #64748b;
          margin-top: 2px;
        }

        /* Side Visual */
        .ag-card-visual {
          background: #123b71;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .ag-visual-blob {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%);
          top: -100px;
          right: -100px;
        }

        .ag-visual-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        .ag-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #fff;
        }

        /* Get in Touch Section */
        .ag-get-in-touch {
          margin-bottom: 80px;
        }

        .ag-section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .ag-section-title-large {
          font-family: 'Outfit', sans-serif;
          font-size: 42px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .ag-section-subtitle {
          font-size: 18px;
          color: #64748b;
        }

        .ag-touch-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .ag-touch-card {
          background: #fff;
          padding: 40px 24px;
          border-radius: 24px;
          border: 1px solid rgba(0,0,0,0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .ag-touch-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(18, 59, 113, 0.08);
          border-color: rgba(37, 99, 235, 0.1);
        }

        .ag-touch-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }

        .ag-touch-icon-wrap svg {
          width: 32px;
          height: 32px;
        }

        .ag-touch-icon-wrap.email { background: #eff6ff; color: #2563eb; }
        .ag-touch-icon-wrap.call { background: #f0fdf4; color: #16a34a; }
        .ag-touch-icon-wrap.visit { background: #fef2f2; color: #dc2626; }
        .ag-touch-icon-wrap.chat { background: #faf5ff; color: #9333ea; }

        .ag-touch-info h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .ag-touch-desc {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 20px;
          min-height: 40px;
        }

        .ag-touch-value {
          display: block;
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          text-decoration: none;
          margin-bottom: 8px;
        }

        .ag-touch-tag {
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: #94a3b8;
        }

        .ag-touch-link-btn {
          background: transparent;
          border: none;
          color: #9333ea;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          padding: 0;
          margin-bottom: 8px;
          text-decoration: underline;
        }

        @media (max-width: 1200px) {
          .ag-touch-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .ag-touch-row {
            grid-template-columns: 1fr;
          }
          .ag-section-title-large {
            font-size: 32px;
          }
        }

        .ag-stat-val {
          font-family: 'Outfit', sans-serif;
          font-size: 42px;
          font-weight: 800;
          color: #fff;
        }

        .ag-stat-lbl {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 4px;
        }

        /* Details Grid */
        .ag-details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ag-detail-card {
          background: #fff;
          padding: 32px;
          border-radius: 24px;
          text-align: center;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ag-detail-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.05);
        }

        .ag-detail-icon {
          font-size: 32px;
          margin-bottom: 20px;
        }

        .ag-detail-card h4 {
          font-weight: 700;
          margin-bottom: 12px;
          font-size: 18px;
        }

        .ag-detail-card p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .ag-card-inner {
            grid-template-columns: 1fr;
          }
          .ag-card-visual {
            display: none;
          }
          .ag-card-content {
            padding: 40px;
            text-align: center;
            align-items: center;
          }
          .ag-hero-heading {
            font-size: 36px;
          }
           .ag-details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CONTACT;
