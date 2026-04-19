import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [expandedBox, setExpandedBox] = useState(null);
  const [activeTab, setActiveTab] = useState('whatsapp');

  const capabilities = [
    { id: 1, title: 'Core Capabilities', subtitle: 'AI & ML', description: 'Intelligent automation & analytics.', icon: '🧠', iconBg: '#e0e7ff' },
    { id: 2, title: 'Core Capabilities', subtitle: 'Cloud Solutions', description: 'Scalable & secure infrastructure.', icon: '☁️', iconBg: '#d1fae5' },
    { id: 3, title: 'Core Capabilities', subtitle: 'Web & Mobile', description: 'High-performance applications.', icon: '📱', iconBg: '#fed7aa' },
    { id: 4, title: 'Core Capabilities', subtitle: 'DevOps', description: 'Continuous innovation & deployment.', icon: '⚙️', iconBg: '#e0e7ff' }
  ];

  const stats = [
    { id: 1, value: '100%', label: 'Future-Focused', icon: '🎯', color: '#4f46e5' },
    { id: 2, value: '20+', label: 'Expert Team', icon: '👥', color: '#059669' },
    { id: 3, value: '24/7', label: 'Dedicated Support', icon: '🛡️', color: '#d97706' }
  ];

  const toggleExpand = (id) => {
    setExpandedBox(expandedBox === id ? null : id);
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        /* Main Container */
        .ag-main-container {
          width: 100%;
          background: #ffffff;
        }
        
        /* Hero Section */
        .ag-hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        
        .ag-hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }
        
        .ag-hero-bg::before {
          content: '';
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: radial-gradient(circle at 30% 50%, rgba(79, 70, 229, 0.03) 0%, transparent 50%);
          animation: agPulse 8s ease-in-out infinite;
        }
        
        @keyframes agPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        .ag-hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 60px 80px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }
        
        .ag-hero-left { flex: 1; }
        
        .ag-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #eef2ff;
          border: 1px solid #c7d2fe;
          border-radius: 100px;
          padding: 8px 20px 8px 14px;
          margin-bottom: 32px;
        }
        
        .ag-hero-badge-dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          animation: agPulseDot 1.5s ease-in-out infinite;
        }
        
        @keyframes agPulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        
        .ag-hero-badge span {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.3px;
          color: #4f46e5;
        }
        
        .ag-hero-title { margin-bottom: 24px; }
        .ag-hero-title-line { display: block; font-size: 56px; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; }
        .ag-hero-title-gradient { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%); -webkit-background-clip: text; background-clip: text; color: transparent; font-size: 64px; font-weight: 900; }
        .ag-hero-title-bold { color: #1e293b; font-size: 64px; font-weight: 900; }
        .ag-hero-title-sub { color: #334155; font-size: 52px; font-weight: 800; }
        .ag-hero-description { font-size: 18px; line-height: 1.6; color: #475569; margin-bottom: 32px; }
        
        .ag-hero-buttons { display: flex; gap: 20px; margin-bottom: 40px; }
        .ag-btn-primary {
          display: inline-flex; align-items: center; gap: 12px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white; font-weight: 700; font-size: 16px; padding: 14px 32px;
          border-radius: 60px; border: none; cursor: pointer;
          box-shadow: 0 10px 25px rgba(79, 70, 229, 0.2);
          transition: all 0.3s ease;
        }
        .ag-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 20px 35px rgba(79, 70, 229, 0.3); }
        .ag-btn-secondary {
          display: inline-flex; align-items: center; gap: 12px;
          background: white; color: #4f46e5; font-weight: 700; font-size: 16px;
          padding: 14px 32px; border-radius: 60px; border: 2px solid #e2e8f0;
          cursor: pointer; transition: all 0.3s ease;
        }
        .ag-btn-secondary:hover { border-color: #4f46e5; background: #f8fafc; transform: translateY(-3px); }
        .ag-btn-icon { transition: transform 0.3s ease; }
        .ag-btn-primary:hover .ag-btn-icon, .ag-btn-secondary:hover .ag-btn-icon { transform: translateX(5px); }
        
        .ag-stats-row { display: flex; gap: 40px; margin-bottom: 48px; flex-wrap: wrap; }
        .ag-stat-item { display: flex; align-items: center; gap: 10px; }
        .ag-stat-icon { font-size: 32px; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: #f8fafc; border-radius: 16px; }
        .ag-stat-value { font-size: 28px; font-weight: 800; line-height: 1.2; }
        .ag-stat-label { font-size: 13px; font-weight: 500; color: #64748b; }
        
        .ag-hero-trust { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
        .ag-hero-trust-text { font-size: 13px; color: #64748b; font-weight: 500; }
        .ag-hero-trust-icons { display: flex; gap: 20px; }
        .ag-hero-trust-icons span { font-size: 28px; opacity: 0.7; cursor: pointer; transition: opacity 0.3s ease; }
        .ag-hero-trust-icons span:hover { opacity: 1; }
        
        .ag-hero-right { flex: 1; position: relative; }
        .ag-large-square-box { background: #f8fafc; border-radius: 32px; padding: 28px; box-shadow: 0 20px 35px -10px rgba(0,0,0,0.05); border: 1px solid #eef2f6; }
        .ag-square-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .ag-square-card { background: white; border-radius: 24px; padding: 24px 20px; text-align: center; cursor: pointer; border: 1px solid #eef2f6; transition: all 0.3s ease; }
        .ag-square-card:hover { transform: translateY(-5px); border-color: #c7d2fe; box-shadow: 0 15px 30px -12px rgba(79,70,229,0.15); }
        .ag-square-icon-wrapper { width: 70px; height: 70px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; border-radius: 20px; transition: all 0.3s ease; }
        .ag-square-card:hover .ag-square-icon-wrapper { transform: scale(1.05); }
        .ag-square-icon { font-size: 38px; }
        .ag-square-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #4f46e5; margin-bottom: 8px; }
        .ag-square-subtitle { font-size: 18px; font-weight: 800; color: #1e293b; margin-bottom: 8px; }
        .ag-square-description { font-size: 12px; color: #64748b; }
        
        .ag-attached-box-wrapper { position: absolute; bottom: -28px; left: -20px; z-index: 20; }
        .ag-long-rectangle { display: inline-flex; align-items: center; gap: 10px; background: white; border: 1px solid #e2e8f0; border-radius: 60px; padding: 10px 22px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); }
        .ag-long-text { font-size: 14px; font-weight: 600; color: #000000; }
        .ag-long-text-highlight { background: linear-gradient(135deg, #4f46e5, #7c3aed); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .ag-curved-zigzag { width: 26px; height: 18px; animation: zigzagMove 1.2s ease-in-out infinite; }
        @keyframes zigzagMove { 0%,100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
        
        /* Section Styles */
        .ag-section { width: 100%; max-width: 1400px; margin: 0 auto; padding: 60px; }
        .ag-section-title { font-size: 42px; font-weight: 800; text-align: center; margin-bottom: 40px; color: #1e293b; }
        .ag-two-column { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
        .ag-service-list { list-style: none; padding: 0; }
        .ag-service-list li { padding: 12px 0; border-bottom: 1px solid #eef2f6; display: flex; align-items: center; gap: 12px; font-size: 16px; color: #475569; }
        .ag-service-list li::before { content: "•"; color: #4f46e5; font-size: 20px; font-weight: bold; }
        
        /* WhatsApp Platform Section */
        .ag-whatsapp-section { background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 32px; padding: 50px; margin: 40px auto; max-width: 1400px; }
        .ag-whatsapp-header { text-align: center; margin-bottom: 40px; }
        .ag-whatsapp-header h2 { font-size: 36px; font-weight: 800; color: #065f46; margin-bottom: 15px; }
        .ag-whatsapp-header p { font-size: 18px; color: #047857; max-width: 700px; margin: 0 auto; }
        .ag-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 40px; }
        .ag-feature-card { background: white; border-radius: 24px; padding: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
        .ag-feature-icon { font-size: 48px; margin-bottom: 15px; }
        .ag-feature-title { font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 10px; }
        .ag-feature-desc { font-size: 14px; color: #64748b; }
        .ag-stats-mini { display: flex; justify-content: center; gap: 40px; margin: 30px 0; flex-wrap: wrap; }
        .ag-stat-mini { text-align: center; }
        .ag-stat-mini-value { font-size: 32px; font-weight: 800; color: #059669; }
        .ag-stat-mini-label { font-size: 13px; color: #64748b; }
        .ag-btn-green { background: #059669; color: white; padding: 14px 32px; border-radius: 60px; border: none; font-weight: 600; cursor: pointer; display: inline-block; margin-top: 20px; }
        
        /* Why Choose Avyann Section */
        .ag-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin: 40px 0; }
        .ag-why-card { background: #f8fafc; border-radius: 24px; padding: 30px; text-align: center; }
        .ag-why-icon { font-size: 40px; margin-bottom: 15px; }
        .ag-why-card h4 { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
        .ag-why-card p { font-size: 14px; color: #64748b; }
        
        /* Services Grid */
        .ag-services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin: 40px 0; }
        .ag-service-card { background: white; border-radius: 24px; padding: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eef2f6; transition: all 0.3s ease; }
        .ag-service-card:hover { transform: translateY(-5px); box-shadow: 0 20px 35px rgba(0,0,0,0.1); }
        .ag-service-icon { font-size: 48px; margin-bottom: 15px; }
        .ag-service-card h4 { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
        .ag-service-card p { font-size: 14px; color: #64748b; margin-bottom: 15px; }
        .ag-service-link { color: #4f46e5; text-decoration: none; font-weight: 600; font-size: 14px; }
        
        /* Tech Stack */
        .ag-tech-stack { background: #f8fafc; border-radius: 32px; padding: 50px; margin: 40px auto; max-width: 1400px; text-align: center; }
        .ag-tech-icons { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-top: 30px; }
        .ag-tech-badge { background: white; padding: 10px 20px; border-radius: 40px; font-size: 14px; font-weight: 500; color: #1e293b; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        
        @media (max-width: 992px) {
          .ag-hero-content { flex-direction: column; padding: 100px 40px; text-align: center; }
          .ag-stats-row, .ag-hero-buttons, .ag-hero-trust { justify-content: center; }
          .ag-two-column { grid-template-columns: 1fr; }
          .ag-features-grid, .ag-why-grid, .ag-services-grid { grid-template-columns: 1fr; }
          .ag-section { padding: 40px 20px; }
          .ag-whatsapp-section { padding: 30px 20px; margin: 20px; }
        }
        
        @media (max-width: 640px) {
          .ag-hero-title-gradient, .ag-hero-title-bold { font-size: 32px; }
          .ag-hero-title-sub { font-size: 28px; }
          .ag-section-title { font-size: 28px; }
          .ag-hero-content { padding: 80px 20px; }
          .ag-section { padding: 30px 20px; }
        }
      `}</style>
      
      <div className="ag-main-container">
        {/* Hero Section */}
        <section className="ag-hero">
          <div className="ag-hero-bg"></div>
          <div className="ag-hero-content">
            <div className="ag-hero-left">
              <div className="ag-hero-badge"><div className="ag-hero-badge-dot"></div><span>✨ AI-Powered Digital Transformation ✨</span></div>
              <div className="ag-hero-title">
                <span className="ag-hero-title-line"><span className="ag-hero-title-gradient">Agrani</span></span>
                <span className="ag-hero-title-line"><span className="ag-hero-title-bold">Digital</span></span>
                <span className="ag-hero-title-line"><span className="ag-hero-title-sub">Building Future-Ready</span></span>
                <span className="ag-hero-title-line"><span className="ag-hero-title-gradient">AI & Cloud Solutions</span></span>
              </div>
              <p className="ag-hero-description">Agrani Digital is India's leading technology partner for enterprises and startups. We deliver AI-powered solutions, cloud infrastructure, and modern software development to help businesses scale faster, automate smarter, and innovate continuously.</p>
              <div className="ag-hero-buttons">
                <button className="ag-btn-primary">Get Started <span className="ag-btn-icon">→</span></button>
                <button className="ag-btn-secondary">View Services <span className="ag-btn-icon">→</span></button>
              </div>
              <div className="ag-stats-row">
                {stats.map(stat => (<div key={stat.id} className="ag-stat-item"><div className="ag-stat-icon">{stat.icon}</div><div className="ag-stat-content"><span className="ag-stat-value" style={{ color: stat.color }}>{stat.value}</span><span className="ag-stat-label">{stat.label}</span></div></div>))}
              </div>
              <div className="ag-hero-trust"><span className="ag-hero-trust-text">Trusted by innovative companies</span><div className="ag-hero-trust-icons"><span>🏦</span><span>🏭</span><span>🏫</span><span>🛍️</span><span>💊</span><span>🚚</span></div></div>
            </div>
            <div className="ag-hero-right">
              <div className="ag-large-square-box"><div className="ag-square-grid">{capabilities.map(cap => (<div key={cap.id} className="ag-square-card"><div className="ag-square-icon-wrapper" style={{ background: cap.iconBg }}><div className="ag-square-icon">{cap.icon}</div></div><div className="ag-square-title">{cap.title}</div><div className="ag-square-subtitle">{cap.subtitle}</div><div className="ag-square-description">{cap.description}</div></div>))}</div></div>
              <div className="ag-attached-box-wrapper"><div className="ag-long-rectangle"><span className="ag-long-text">Crafted for <span className="ag-long-text-highlight">startups & growing teams</span></span><svg className="ag-curved-zigzag" viewBox="0 0 28 18" fill="none"><path d="M2 9 L7 4 L12 9 L17 4 L22 9" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 9 L25 9" stroke="#4f46e5" strokeWidth="2"/><path d="M23.5 6 L26 9 L23.5 12" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div>
            </div>
          </div>
        </section>
        
        {/* Our Expertise Across Industries */}
        <div className="ag-section">
          <h2 className="ag-section-title">Our Expertise Across Industries</h2>
          <div className="ag-two-column">
            <div><h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Core Services</h3><ul className="ag-service-list"><li>Mobile app development (Android, iOS, React Native, Flutter)</li><li>Web application development & custom website development</li><li>AI development & machine learning solutions</li><li>SaaS application development & platform building</li></ul></div>
            <div><h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Enterprise Solutions</h3><ul className="ag-service-list"><li>CRM & ERP software development & implementation</li><li>AI chatbot development & conversational AI solutions</li><li>WhatsApp automation software & marketing automation tools</li><li>Digital transformation & cloud application development</li></ul></div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '16px', color: '#475569', padding: '20px', background: '#f8fafc', borderRadius: '16px' }}>Whether you're a startup looking for affordable web development or an enterprise seeking a custom CRM/ERP solution, Agrani Digital is your ideal technology partner.</p>
        </div>
        
        {/* WhatsApp Business Platform */}
        <div className="ag-whatsapp-section">
          <div className="ag-whatsapp-header"><h2>📱 WhatsApp Business Platform</h2><p>Automate, Engage & Convert Customers on WhatsApp</p></div>
          <div className="ag-features-grid">
            <div className="ag-feature-card"><div className="ag-feature-icon">📨</div><h3 className="ag-feature-title">Campaign Management</h3><p className="ag-feature-desc">Send bulk and personalized WhatsApp campaigns with delivery and read tracking.</p></div>
            <div className="ag-feature-card"><div className="ag-feature-icon">🤖</div><h3 className="ag-feature-title">Chatbot Automation</h3><p className="ag-feature-desc">Automate FAQs, lead capture, order updates, and support with AI.</p></div>
            <div className="ag-feature-card"><div className="ag-feature-icon">📊</div><h3 className="ag-feature-title">Analytics & Insights</h3><p className="ag-feature-desc">Monitor engagement, conversions, and campaign performance in real-time.</p></div>
            <div className="ag-feature-card"><div className="ag-feature-icon">☁️</div><h3 className="ag-feature-title">Official Cloud API</h3><p className="ag-feature-desc">Secure and scalable Meta-hosted WhatsApp Cloud API integration.</p></div>
            <div className="ag-feature-card"><div className="ag-feature-icon">🔒</div><h3 className="ag-feature-title">Security & Compliance</h3><p className="ag-feature-desc">End-to-end encrypted messaging with enterprise-grade security.</p></div>
            <div className="ag-feature-card"><div className="ag-feature-icon">🔄</div><h3 className="ag-feature-title">Omnichannel</h3><p className="ag-feature-desc">Integrate with email, SMS, and more for seamless communication.</p></div>
          </div>
          <div className="ag-stats-mini"><div className="ag-stat-mini"><div className="ag-stat-mini-value">98%</div><div className="ag-stat-mini-label">Delivery Rate</div></div><div className="ag-stat-mini"><div className="ag-stat-mini-value">24/7</div><div className="ag-stat-mini-label">Customer Support</div></div><div className="ag-stat-mini"><div className="ag-stat-mini-value">10K+</div><div className="ag-stat-mini-label">Messages/Day</div></div><div className="ag-stat-mini"><div className="ag-stat-mini-value">99.9%</div><div className="ag-stat-mini-label">Uptime</div></div></div>
          <div style={{ textAlign: 'center' }}><button className="ag-btn-green">Request Live Demo →</button><p style={{ marginTop: '20px', fontSize: '13px', color: '#047857' }}>Quick Setup: Get started in 24 hours with our ready-to-use WhatsApp Business solutions. Includes free onboarding and training.</p></div>
        </div>
        
        {/* Why Choose Avyann */}
        <div className="ag-section">
          <h2 className="ag-section-title">Built for Scale, Security, and Growth</h2>
          <div className="ag-why-grid">
            <div className="ag-why-card"><div className="ag-why-icon">✅</div><h4>Official WhatsApp API Support</h4><p>Built on the official WhatsApp Business Platform for secure, reliable, and scalable messaging.</p></div>
            <div className="ag-why-card"><div className="ag-why-icon">⚡</div><h4>Fast Onboarding</h4><p>Go live in days, not weeks, with guided setup and expert onboarding support.</p></div>
            <div className="ag-why-card"><div className="ag-why-icon">🧠</div><h4>Custom Chatbot Logic</h4><p>Design intelligent chatbots tailored to your business workflows and customer journeys.</p></div>
            <div className="ag-why-card"><div className="ag-why-icon">🌍</div><h4>Indian & Global Compliance</h4><p>Fully compliant with WhatsApp policies, data privacy laws, and international regulations.</p></div>
            <div className="ag-why-card"><div className="ag-why-icon">🛡️</div><h4>Dedicated Support Team</h4><p>Get priority support from real experts who understand your business and goals.</p></div>
            <div className="ag-why-card"><div className="ag-why-icon">🔐</div><h4>Enterprise Security</h4><p>Secure, compliant, and scalable solutions for your business needs.</p></div>
          </div>
        </div>
        
        {/* OUR SERVICES */}
        <div className="ag-section">
          <h2 className="ag-section-title">Technology Solutions That Drive Growth</h2>
          <div className="ag-services-grid">
            <div className="ag-service-card"><div className="ag-service-icon">🧠</div><h4>AI & Machine Learning</h4><p>Design and implement practical AI solutions that turn data into actionable insights.</p><a href="#" className="ag-service-link">Learn more →</a></div>
            <div className="ag-service-card"><div className="ag-service-icon">☁️</div><h4>Cloud Solutions</h4><p>Cloud-native architectures built for scalability, security, and long-term growth.</p><a href="#" className="ag-service-link">Learn more →</a></div>
            <div className="ag-service-card"><div className="ag-service-icon">📱</div><h4>Web & Mobile Apps</h4><p>Modern web and mobile applications built for performance and great user experience.</p><a href="#" className="ag-service-link">Learn more →</a></div>
            <div className="ag-service-card"><div className="ag-service-icon">🏢</div><h4>Enterprise Software</h4><p>Custom software solutions tailored for growing and enterprise-ready organizations.</p><a href="#" className="ag-service-link">Learn more →</a></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px', flexWrap: 'wrap' }}><span style={{ background: '#eef2ff', padding: '8px 20px', borderRadius: '40px', fontSize: '14px', fontWeight: '500' }}>🤖 AI-First Technology Stack</span><span style={{ background: '#eef2ff', padding: '8px 20px', borderRadius: '40px', fontSize: '14px', fontWeight: '500' }}>☁️ Scalable Cloud Architecture</span><span style={{ background: '#eef2ff', padding: '8px 20px', borderRadius: '40px', fontSize: '14px', fontWeight: '500' }}>⚡ Agile Delivery Model</span><span style={{ background: '#eef2ff', padding: '8px 20px', borderRadius: '40px', fontSize: '14px', fontWeight: '500' }}>🔒 Secure By Design</span></div>
        </div>
        
        {/* CTA Section */}
        <div className="ag-section" style={{ background: '#f8fafc', borderRadius: '32px', margin: '40px auto' }}>
          <div style={{ textAlign: 'center', padding: '40px' }}><h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '15px' }}>Ready to Start Your Project?</h2><p style={{ color: '#475569', marginBottom: '25px' }}>Let's explore how we can help you design, build, and launch your next digital product.</p><div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}><button className="ag-btn-primary">Get Free Consultation →</button><button className="ag-btn-secondary">View All Services →</button></div></div>
        </div>
        
        {/* Technology Ecosystem */}
        <div className="ag-tech-stack">
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Our Technology Stack</h2>
          <p style={{ color: '#64748b', marginBottom: '30px' }}>We leverage cutting-edge technologies to build scalable, performant, and secure solutions.</p>
          <div className="ag-tech-icons">
            {['React/Next.js', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'TensorFlow', 'PyTorch', 'GraphQL', 'REST API'].map(tech => <span key={tech} className="ag-tech-badge">{tech}</span>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;