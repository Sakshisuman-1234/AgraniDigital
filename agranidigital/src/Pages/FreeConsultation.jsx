import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const FreeConsultation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    'AI & Machine Learning',
    'Cloud Services & DevOps',
    'Web Development',
    'Mobile App Development',
    'IoT Solutions',
    'Digital Transformation',
    'Enterprise Software',
    'UI/UX Design',
    'Data Analytics',
    'Cybersecurity',
    'Other'
  ];

  const companySizes = [
    '1–10 employees',
    '11–50 employees',
    '51–200 employees',
    '201–500 employees',
    '500+ employees'
  ];

  const budgets = [
    'Under ₹5 Lakh',
    '₹5–15 Lakh',
    '₹15–50 Lakh',
    '₹50 Lakh – ₹1 Crore',
    'Above ₹1 Crore',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP',
    '1–3 months',
    '3–6 months',
    '6+ months',
    'Just exploring'
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const processSteps = [
    { icon: '📋', title: 'Submit Your Request', desc: 'Fill in the form with your project details and requirements.' },
    { icon: '📞', title: 'Expert Review', desc: 'Our team reviews your submission and prepares a tailored response.' },
    { icon: '💬', title: 'Free Consultation Call', desc: 'Join a 30-45 min call with our solution architect for personalized advice.' },
    { icon: '📄', title: 'Custom Proposal', desc: 'Receive a detailed proposal with timeline, cost estimates, and roadmap.' }
  ];

  return (
    <div className="ag-consult-root">
      <Navbar />

      <main className="ag-consult-main">
        <div className={`ag-consult-container ${isVisible ? 'is-active' : ''}`}>

          {/* Breadcrumb */}
          <div className="ag-breadcrumb-wrap">
            <Link to="/" className="ag-breadcrumb-link">HOME</Link>
            <span className="ag-breadcrumb-sep">/</span>
            <span className="ag-breadcrumb">FREE CONSULTATION</span>
          </div>

          {/* Hero Section */}
          <section className="ag-consult-hero">
            <div className="ag-hero-content">
              <div className="ag-spark-badge">
                <span className="ag-spark-icon">✨</span>
                100% FREE • NO OBLIGATION
              </div>
              <h1 className="ag-hero-heading">
                Get Your Free <br />
                <span className="ag-gradient-text">Expert Consultation</span>
              </h1>
              <p className="ag-hero-description">
                Transform your business with cutting-edge technology. Our experts will analyze
                your requirements and provide a customized solution roadmap — completely free.
              </p>
              <div className="ag-trust-badges">
                <div className="ag-trust-item">
                  <span className="ag-trust-icon">🔒</span>
                  <span>100% Confidential</span>
                </div>
                <div className="ag-trust-item">
                  <span className="ag-trust-icon">⚡</span>
                  <span>Response in 24hrs</span>
                </div>
                <div className="ag-trust-item">
                  <span className="ag-trust-icon">🎯</span>
                  <span>No Strings Attached</span>
                </div>
              </div>
            </div>
            <div className="ag-hero-visual">
              <div className="ag-visual-blob"></div>
              <div className="ag-visual-inner">
                <div className="ag-consult-badge">
                  <span className="ag-badge-icon">🎧</span>
                  <div className="ag-badge-text">
                    <span className="ag-badge-title">Expert Consultation</span>
                    <span className="ag-badge-sub">Completely Free</span>
                  </div>
                </div>
                <div className="ag-consult-stats-col">
                  <div className="ag-mini-stat">
                    <span className="ag-ms-val">1000+</span>
                    <span className="ag-ms-label">Projects Delivered</span>
                  </div>
                  <div className="ag-mini-stat">
                    <span className="ag-ms-val">50+</span>
                    <span className="ag-ms-label">Industry Experts</span>
                  </div>
                  <div className="ag-mini-stat">
                    <span className="ag-ms-val">99%</span>
                    <span className="ag-ms-label">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Message */}
          {isSubmitted ? (
            <section className="ag-success-card">
              <div className="ag-success-icon">🎉</div>
              <h2>Consultation Request Submitted!</h2>
              <p>Thank you for reaching out! Our team will review your requirements and get back to you within 24 hours with a personalized consultation plan.</p>
              <div className="ag-success-details">
                <div className="ag-success-item">
                  <span className="ag-success-label">Service</span>
                  <span className="ag-success-value">{formData.service || 'General'}</span>
                </div>
                <div className="ag-success-item">
                  <span className="ag-success-label">Timeline</span>
                  <span className="ag-success-value">{formData.timeline || 'Flexible'}</span>
                </div>
                <div className="ag-success-item">
                  <span className="ag-success-label">Next Step</span>
                  <span className="ag-success-value">Expert Call</span>
                </div>
              </div>
              <div className="ag-success-actions">
                <Link to="/" className="ag-btn-outline-fc">Back to Home</Link>
                <Link to="/schedule" className="ag-btn-fill-fc">Schedule a Call</Link>
              </div>
            </section>
          ) : (
            <>
              {/* Process Section */}
              <section className="ag-process-section">
                <div className="ag-section-header">
                  <h2 className="ag-section-title">How It Works</h2>
                  <p className="ag-section-subtitle">Simple 4-step process to get started</p>
                </div>
                <div className="ag-process-grid">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="ag-process-card">
                      <div className="ag-process-num">{idx + 1}</div>
                      <div className="ag-process-icon">{step.icon}</div>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Consultation Form */}
              <section className="ag-form-section">
                <div className="ag-section-header">
                  <h2 className="ag-section-title">Tell Us About Your Project</h2>
                  <p className="ag-section-subtitle">Fill in the details and our team will reach out within 24 hours</p>
                </div>

                <form className="ag-consult-form" onSubmit={handleSubmit}>
                  {/* Personal Info */}
                  <div className="ag-form-group">
                    <h3 className="ag-group-title">
                      <span className="ag-group-icon">👤</span> Personal Information
                    </h3>
                    <div className="ag-fields-grid">
                      <div className="ag-field">
                        <label>Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                      </div>
                      <div className="ag-field">
                        <label>Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
                      </div>
                      <div className="ag-field">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                      </div>
                      <div className="ag-field">
                        <label>Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="ag-form-group">
                    <h3 className="ag-group-title">
                      <span className="ag-group-icon">💼</span> Project Details
                    </h3>
                    <div className="ag-fields-grid">
                      <div className="ag-field">
                        <label>Service Required *</label>
                        <select name="service" value={formData.service} onChange={handleChange} required>
                          <option value="">Select a service...</option>
                          {services.map((s, i) => (
                            <option key={i} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div className="ag-field">
                        <label>Company Size</label>
                        <select name="companySize" value={formData.companySize} onChange={handleChange}>
                          <option value="">Select size...</option>
                          {companySizes.map((s, i) => (
                            <option key={i} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div className="ag-field">
                        <label>Estimated Budget</label>
                        <select name="budget" value={formData.budget} onChange={handleChange}>
                          <option value="">Select budget range...</option>
                          {budgets.map((b, i) => (
                            <option key={i} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                      <div className="ag-field">
                        <label>Expected Timeline</label>
                        <select name="timeline" value={formData.timeline} onChange={handleChange}>
                          <option value="">Select timeline...</option>
                          {timelines.map((t, i) => (
                            <option key={i} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div className="ag-field full-width">
                        <label>Project Description *</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe your project requirements, goals, and any specific challenges you're facing..." rows="5" required />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="ag-submit-btn" disabled={!formData.name || !formData.email || !formData.service || !formData.message}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Get Free Consultation
                  </button>

                  <p className="ag-form-note">🔒 Your information is 100% secure and will never be shared with third parties.</p>
                </form>
              </section>

              {/* What You Get Section */}
              <section className="ag-benefits-section">
                <div className="ag-section-header">
                  <h2 className="ag-section-title">What You'll Get</h2>
                  <p className="ag-section-subtitle">Every consultation includes these deliverables</p>
                </div>
                <div className="ag-benefits-grid">
                  <div className="ag-benefit-card">
                    <div className="ag-benefit-icon">📊</div>
                    <h3>Requirements Analysis</h3>
                    <p>A thorough analysis of your business needs and technical requirements.</p>
                  </div>
                  <div className="ag-benefit-card">
                    <div className="ag-benefit-icon">🗺️</div>
                    <h3>Solution Roadmap</h3>
                    <p>A clear, actionable roadmap tailored specifically to your project goals.</p>
                  </div>
                  <div className="ag-benefit-card">
                    <div className="ag-benefit-icon">💰</div>
                    <h3>Cost Estimation</h3>
                    <p>A transparent breakdown of costs with flexible engagement models.</p>
                  </div>
                  <div className="ag-benefit-card">
                    <div className="ag-benefit-icon">⏱️</div>
                    <h3>Timeline Estimate</h3>
                    <p>Realistic project timelines with milestone-based delivery planning.</p>
                  </div>
                  <div className="ag-benefit-card">
                    <div className="ag-benefit-icon">🛠️</div>
                    <h3>Tech Stack Advice</h3>
                    <p>Expert guidance on choosing the right technologies for your project.</p>
                  </div>
                  <div className="ag-benefit-card">
                    <div className="ag-benefit-icon">🤝</div>
                    <h3>Dedicated Expert</h3>
                    <p>A senior architect assigned to your project from consultation to completion.</p>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800&display=swap');

        .ag-consult-root {
          min-height: 100vh;
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
          color: #0f172a;
          overflow-x: hidden;
        }

        .ag-consult-main {
          padding: 10px 0 80px;
          display: flex;
          justify-content: center;
        }

        .ag-consult-container {
          width: 100%;
          max-width: 1400px;
          padding: 0 40px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ag-consult-container.is-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Breadcrumb */
        .ag-breadcrumb-wrap {
          display: flex;
          justify-content: flex-start;
          margin: 0 0 40px 0;
          padding: 0 0 0 12px;
          border-left: 2px solid #2563eb;
        }
        .ag-breadcrumb-link {
          font-size: 10px; font-weight: 800; letter-spacing: 0.25em;
          color: #94a3b8; text-transform: uppercase; text-decoration: none;
          transition: color 0.2s ease;
        }
        .ag-breadcrumb-link:hover { color: #2563eb; }
        .ag-breadcrumb-sep { font-size: 10px; color: #cbd5e1; margin: 0 10px; }
        .ag-breadcrumb {
          font-size: 10px; font-weight: 800; letter-spacing: 0.25em;
          color: #1e293b; text-transform: uppercase;
        }

        /* Hero */
        .ag-consult-hero {
          display: grid;
          grid-template-columns: 1fr 420px;
          background: #fff;
          border-radius: 32px;
          box-shadow: 0 30px 100px rgba(18, 59, 113, 0.08);
          border: 1px solid rgba(18, 59, 113, 0.05);
          overflow: hidden;
          margin-bottom: 60px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .ag-consult-hero:hover {
          transform: translateY(-6px);
          box-shadow: 0 40px 120px rgba(18, 59, 113, 0.12);
        }

        .ag-hero-content {
          padding: 60px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .ag-spark-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; background: #f0fdf4; color: #16a34a;
          border-radius: 999px; font-size: 12px; font-weight: 700;
          width: fit-content; margin-bottom: 24px;
        }

        .ag-hero-heading {
          font-family: 'Outfit', sans-serif;
          font-size: 44px; font-weight: 800; line-height: 1.1;
          color: #0f172a; margin-bottom: 20px; letter-spacing: -0.04em;
        }

        .ag-gradient-text {
          background: linear-gradient(135deg, #123b71 0%, #2563eb 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .ag-hero-description {
          font-size: 16px; line-height: 1.7; color: #475569;
          margin-bottom: 32px; max-width: 520px;
        }

        .ag-trust-badges {
          display: flex; gap: 20px; flex-wrap: wrap;
        }
        .ag-trust-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600; color: #475569;
        }
        .ag-trust-icon { font-size: 16px; }

        .ag-hero-visual {
          background: linear-gradient(165deg, #123b71 0%, #0d284d 100%);
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          padding: 40px;
        }
        .ag-visual-blob {
          position: absolute; width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%);
          top: -80px; right: -80px;
        }
        .ag-visual-inner {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: center; gap: 28px;
          text-align: center;
        }

        .ag-consult-badge {
          display: flex; align-items: center; gap: 14px;
          background: rgba(255,255,255,0.1); padding: 16px 24px;
          border-radius: 16px; backdrop-filter: blur(10px);
        }
        .ag-badge-icon { font-size: 32px; }
        .ag-badge-text { display: flex; flex-direction: column; align-items: flex-start; }
        .ag-badge-title { color: #fff; font-size: 16px; font-weight: 700; }
        .ag-badge-sub { color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 500; }

        .ag-consult-stats-col { display: flex; flex-direction: column; gap: 12px; width: 100%; }
        .ag-mini-stat {
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(255,255,255,0.06); padding: 12px 20px;
          border-radius: 12px;
        }
        .ag-ms-val { font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 800; color: #fff; }
        .ag-ms-label { font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.5); }

        /* Success Card */
        .ag-success-card {
          background: #fff; border-radius: 32px; padding: 80px;
          text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.04); margin-bottom: 60px;
        }
        .ag-success-icon { font-size: 64px; margin-bottom: 24px; }
        .ag-success-card h2 {
          font-family: 'Outfit', sans-serif; font-size: 36px;
          font-weight: 800; color: #123b71; margin-bottom: 16px;
        }
        .ag-success-card > p { font-size: 16px; color: #64748b; max-width: 500px; margin: 0 auto 40px; line-height: 1.7; }
        .ag-success-details {
          display: flex; gap: 24px; justify-content: center;
          margin-bottom: 40px; flex-wrap: wrap;
        }
        .ag-success-item {
          display: flex; flex-direction: column; align-items: center;
          padding: 16px 28px; background: #f8fbff; border-radius: 16px;
          border: 1px solid #e8f0fe;
        }
        .ag-success-label { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
        .ag-success-value { font-size: 15px; font-weight: 700; color: #123b71; }
        .ag-success-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        .ag-btn-outline-fc {
          padding: 14px 32px; border-radius: 14px; font-size: 14px; font-weight: 700;
          color: #123b71; background: #fff; border: 2px solid #e2e8f0;
          text-decoration: none; transition: all 0.3s ease; cursor: pointer;
        }
        .ag-btn-outline-fc:hover { border-color: #123b71; background: #f0f7ff; }
        .ag-btn-fill-fc {
          padding: 14px 32px; border-radius: 14px; font-size: 14px; font-weight: 700;
          color: #fff; background: #123b71; border: none;
          text-decoration: none; transition: all 0.3s ease; cursor: pointer;
          box-shadow: 0 8px 20px rgba(18,59,113,0.2);
        }
        .ag-btn-fill-fc:hover { background: #0f2e58; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(18,59,113,0.3); }

        /* Process Section */
        .ag-process-section { margin-bottom: 60px; }
        .ag-section-header { text-align: center; margin-bottom: 48px; }
        .ag-section-title {
          font-family: 'Outfit', sans-serif; font-size: 36px;
          font-weight: 800; color: #0f172a; margin-bottom: 12px;
        }
        .ag-section-subtitle { font-size: 16px; color: #64748b; }

        .ag-process-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
        }
        .ag-process-card {
          background: #fff; border-radius: 24px; padding: 36px 28px;
          text-align: center; border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ag-process-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(18,59,113,0.08);
        }
        .ag-process-num {
          position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
          width: 28px; height: 28px; border-radius: 8px;
          background: #123b71; color: #fff; font-size: 13px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
        }
        .ag-process-icon { font-size: 36px; margin-bottom: 16px; margin-top: 10px; }
        .ag-process-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: #0f172a; }
        .ag-process-card p { font-size: 12px; color: #64748b; line-height: 1.6; }

        /* Form Section */
        .ag-form-section {
          background: #fff; border-radius: 32px; padding: 60px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.04); margin-bottom: 60px;
        }

        .ag-form-group {
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid #f1f5f9;
        }
        .ag-form-group:last-of-type { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

        .ag-group-title {
          display: flex; align-items: center; gap: 10px;
          font-size: 18px; font-weight: 700; color: #0f172a;
          margin-bottom: 24px;
        }
        .ag-group-icon { font-size: 20px; }

        .ag-fields-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
        }
        .ag-field { display: flex; flex-direction: column; gap: 8px; }
        .ag-field.full-width { grid-column: 1 / -1; }
        .ag-field label { font-size: 13px; font-weight: 700; color: #334155; }
        .ag-field input, .ag-field select, .ag-field textarea {
          padding: 14px 18px; border-radius: 14px; border: 2px solid #e2e8f0;
          font-size: 14px; font-family: 'Inter', sans-serif; color: #0f172a;
          background: #fff; transition: all 0.2s ease; outline: none;
          width: 100%; box-sizing: border-box;
        }
        .ag-field input:focus, .ag-field select:focus, .ag-field textarea:focus {
          border-color: #2563eb; box-shadow: 0 0 0 4px rgba(37,99,235,0.1);
        }
        .ag-field textarea { resize: vertical; min-height: 120px; }

        .ag-submit-btn {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          width: 100%; padding: 18px; border-radius: 16px;
          background: linear-gradient(135deg, #123b71 0%, #1d4fa0 100%);
          color: #fff; font-size: 16px; font-weight: 700;
          border: none; cursor: pointer; transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(18,59,113,0.2);
          margin-top: 32px;
        }
        .ag-submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(18,59,113,0.3);
        }
        .ag-submit-btn:disabled {
          opacity: 0.5; cursor: not-allowed;
        }

        .ag-form-note {
          text-align: center; font-size: 12px; color: #94a3b8;
          margin-top: 16px; font-weight: 500;
        }

        /* Benefits Section */
        .ag-benefits-section { margin-bottom: 60px; }
        .ag-benefits-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .ag-benefit-card {
          background: #fff; border-radius: 24px; padding: 36px 28px;
          text-align: center; border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ag-benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(18,59,113,0.08);
        }
        .ag-benefit-icon { font-size: 36px; margin-bottom: 18px; }
        .ag-benefit-card h3 { font-size: 16px; font-weight: 700; margin-bottom: 10px; color: #0f172a; }
        .ag-benefit-card p { font-size: 13px; color: #64748b; line-height: 1.6; }

        /* Responsive */
        @media (max-width: 1024px) {
          .ag-consult-hero { grid-template-columns: 1fr; }
          .ag-hero-visual { display: none; }
          .ag-hero-content { padding: 40px; text-align: center; align-items: center; }
          .ag-hero-heading { font-size: 32px; }
          .ag-form-section { padding: 40px 24px; }
          .ag-process-grid { grid-template-columns: repeat(2, 1fr); }
          .ag-benefits-grid { grid-template-columns: repeat(2, 1fr); }
          .ag-fields-grid { grid-template-columns: 1fr; }
          .ag-success-card { padding: 40px 24px; }
        }

        @media (max-width: 640px) {
          .ag-consult-container { padding: 0 16px; }
          .ag-hero-heading { font-size: 28px; }
          .ag-trust-badges { flex-direction: column; align-items: center; }
          .ag-process-grid { grid-template-columns: 1fr; }
          .ag-benefits-grid { grid-template-columns: 1fr; }
          .ag-success-details { flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  );
};

export default FreeConsultation;
