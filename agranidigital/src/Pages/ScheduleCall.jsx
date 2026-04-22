import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ScheduleCall = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM'
  ];

  const topics = [
    'AI & Machine Learning Solutions',
    'Cloud Migration & DevOps',
    'Web & Mobile Development',
    'Digital Transformation',
    'IoT Solutions',
    'Enterprise Software',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Generate next 14 available dates (weekdays only)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let d = new Date(today);
    d.setDate(d.getDate() + 1); // start from tomorrow
    while (dates.length < 14) {
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        dates.push(new Date(d));
      }
      d.setDate(d.getDate() + 1);
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const formatDateValue = (date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="ag-schedule-root">
      <Navbar />

      <main className="ag-schedule-main">
        <div className={`ag-schedule-container ${isVisible ? 'is-active' : ''}`}>

          {/* Breadcrumb */}
          <div className="ag-breadcrumb-wrap">
            <Link to="/" className="ag-breadcrumb-link">HOME</Link>
            <span className="ag-breadcrumb-sep">/</span>
            <span className="ag-breadcrumb">SCHEDULE A CALL</span>
          </div>

          {/* Hero Section */}
          <section className="ag-schedule-hero">
            <div className="ag-hero-content">
              <div className="ag-spark-badge">
                <span className="ag-spark-icon">📅</span>
                BOOK YOUR SESSION
              </div>
              <h1 className="ag-hero-heading">
                Schedule a Call with <br />
                <span className="ag-gradient-text">Our Experts</span>
              </h1>
              <p className="ag-hero-description">
                Book a personalized one-on-one session with our technology experts.
                Get tailored advice on your digital transformation journey.
              </p>
              <div className="ag-hero-stats">
                <div className="ag-stat-pill">
                  <span className="ag-stat-num">500+</span>
                  <span className="ag-stat-label">Calls Completed</span>
                </div>
                <div className="ag-stat-pill">
                  <span className="ag-stat-num">98%</span>
                  <span className="ag-stat-label">Satisfaction Rate</span>
                </div>
                <div className="ag-stat-pill">
                  <span className="ag-stat-num">30min</span>
                  <span className="ag-stat-label">Avg. Session</span>
                </div>
              </div>
            </div>
            <div className="ag-hero-visual">
              <div className="ag-visual-blob"></div>
              <div className="ag-visual-inner">
                <div className="ag-call-icon-wrap">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.21-2.21a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="ag-visual-text">Expert Consultation</p>
                <p className="ag-visual-sub">Free • No Obligation</p>
              </div>
            </div>
          </section>

          {/* Success Message */}
          {isSubmitted ? (
            <section className="ag-success-card">
              <div className="ag-success-icon">✅</div>
              <h2>Call Scheduled Successfully!</h2>
              <p>We've received your scheduling request. Our team will confirm the call details via email within 2 hours.</p>
              <div className="ag-success-details">
                <div className="ag-success-item">
                  <span className="ag-success-label">Date</span>
                  <span className="ag-success-value">{selectedDate}</span>
                </div>
                <div className="ag-success-item">
                  <span className="ag-success-label">Time</span>
                  <span className="ag-success-value">{selectedTime} IST</span>
                </div>
                <div className="ag-success-item">
                  <span className="ag-success-label">Topic</span>
                  <span className="ag-success-value">{formData.topic || 'General Consultation'}</span>
                </div>
              </div>
              <div className="ag-success-actions">
                <Link to="/" className="ag-btn-outline-sc">Back to Home</Link>
                <Link to="/contact" className="ag-btn-fill-sc">Contact Us</Link>
              </div>
            </section>
          ) : (
            <>
              {/* Booking Form Section */}
              <section className="ag-booking-section">
                <div className="ag-section-header">
                  <h2 className="ag-section-title">Pick Your Slot</h2>
                  <p className="ag-section-subtitle">Choose a convenient date and time for your call</p>
                </div>

                <form className="ag-booking-form" onSubmit={handleSubmit}>
                  {/* Step 1: Date Selection */}
                  <div className="ag-form-step">
                    <div className="ag-step-header">
                      <span className="ag-step-num">1</span>
                      <h3>Select Date</h3>
                    </div>
                    <div className="ag-date-grid">
                      {availableDates.map((date, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`ag-date-chip ${selectedDate === formatDateValue(date) ? 'active' : ''}`}
                          onClick={() => setSelectedDate(formatDateValue(date))}
                        >
                          <span className="ag-date-day">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                          <span className="ag-date-num">{date.getDate()}</span>
                          <span className="ag-date-mon">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Time Selection */}
                  <div className="ag-form-step">
                    <div className="ag-step-header">
                      <span className="ag-step-num">2</span>
                      <h3>Select Time (IST)</h3>
                    </div>
                    <div className="ag-time-grid">
                      {timeSlots.map((time, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`ag-time-chip ${selectedTime === time ? 'active' : ''}`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Your Details */}
                  <div className="ag-form-step">
                    <div className="ag-step-header">
                      <span className="ag-step-num">3</span>
                      <h3>Your Details</h3>
                    </div>
                    <div className="ag-fields-grid">
                      <div className="ag-field">
                        <label>Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                      </div>
                      <div className="ag-field">
                        <label>Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required />
                      </div>
                      <div className="ag-field">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                      </div>
                      <div className="ag-field">
                        <label>Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
                      </div>
                      <div className="ag-field full-width">
                        <label>Discussion Topic *</label>
                        <select name="topic" value={formData.topic} onChange={handleChange} required>
                          <option value="">Select a topic...</option>
                          {topics.map((t, i) => (
                            <option key={i} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div className="ag-field full-width">
                        <label>Additional Notes</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about what you'd like to discuss..." rows="4" />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="ag-submit-btn" disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.topic}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.21-2.21a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Schedule My Call
                  </button>
                </form>
              </section>

              {/* Why Schedule Section */}
              <section className="ag-why-section">
                <h2 className="ag-section-title">Why Schedule a Call?</h2>
                <div className="ag-why-grid">
                  <div className="ag-why-card">
                    <div className="ag-why-icon">🎯</div>
                    <h3>Personalized Guidance</h3>
                    <p>Get tailored recommendations specific to your business needs and challenges.</p>
                  </div>
                  <div className="ag-why-card">
                    <div className="ag-why-icon">💡</div>
                    <h3>Expert Insights</h3>
                    <p>Learn from industry veterans with 10+ years of experience in digital transformation.</p>
                  </div>
                  <div className="ag-why-card">
                    <div className="ag-why-icon">🚀</div>
                    <h3>Actionable Roadmap</h3>
                    <p>Walk away with a clear plan and next steps for your project or digital initiative.</p>
                  </div>
                  <div className="ag-why-card">
                    <div className="ag-why-icon">🔒</div>
                    <h3>100% Confidential</h3>
                    <p>All discussions are covered by NDA. Your business ideas stay completely safe.</p>
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

        .ag-schedule-root {
          min-height: 100vh;
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
          color: #0f172a;
          overflow-x: hidden;
        }

        .ag-schedule-main {
          padding: 10px 0 80px;
          display: flex;
          justify-content: center;
        }

        .ag-schedule-container {
          width: 100%;
          max-width: 1400px;
          padding: 0 40px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ag-schedule-container.is-active {
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
        .ag-schedule-hero {
          display: grid;
          grid-template-columns: 1fr 380px;
          background: #fff;
          border-radius: 32px;
          box-shadow: 0 30px 100px rgba(18, 59, 113, 0.08);
          border: 1px solid rgba(18, 59, 113, 0.05);
          overflow: hidden;
          margin-bottom: 60px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .ag-schedule-hero:hover {
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
          padding: 8px 16px; background: #f0f7ff; color: #2563eb;
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

        .ag-hero-stats {
          display: flex; gap: 16px; flex-wrap: wrap;
        }

        .ag-stat-pill {
          display: flex; flex-direction: column; align-items: center;
          padding: 12px 20px; background: #f8fbff;
          border: 1px solid #e8f0fe; border-radius: 16px;
          min-width: 100px;
        }
        .ag-stat-num { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 800; color: #123b71; }
        .ag-stat-label { font-size: 10px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 2px; }

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
          display: flex; flex-direction: column; align-items: center;
          text-align: center;
        }
        .ag-call-icon-wrap {
          width: 100px; height: 100px; border-radius: 28px;
          background: rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #fff; margin-bottom: 20px;
          animation: agPulse 2s ease-in-out infinite;
        }
        @keyframes agPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0.2); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(255,255,255,0); }
        }
        .ag-visual-text { color: #fff; font-size: 18px; font-weight: 700; margin-bottom: 4px; }
        .ag-visual-sub { color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }

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

        .ag-btn-outline-sc {
          padding: 14px 32px; border-radius: 14px; font-size: 14px; font-weight: 700;
          color: #123b71; background: #fff; border: 2px solid #e2e8f0;
          text-decoration: none; transition: all 0.3s ease; cursor: pointer;
        }
        .ag-btn-outline-sc:hover { border-color: #123b71; background: #f0f7ff; }
        .ag-btn-fill-sc {
          padding: 14px 32px; border-radius: 14px; font-size: 14px; font-weight: 700;
          color: #fff; background: #123b71; border: none;
          text-decoration: none; transition: all 0.3s ease; cursor: pointer;
          box-shadow: 0 8px 20px rgba(18,59,113,0.2);
        }
        .ag-btn-fill-sc:hover { background: #0f2e58; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(18,59,113,0.3); }

        /* Booking Section */
        .ag-booking-section {
          background: #fff; border-radius: 32px; padding: 60px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.04); margin-bottom: 60px;
        }

        .ag-section-header { text-align: center; margin-bottom: 48px; }
        .ag-section-title {
          font-family: 'Outfit', sans-serif; font-size: 36px;
          font-weight: 800; color: #0f172a; margin-bottom: 12px;
        }
        .ag-section-subtitle { font-size: 16px; color: #64748b; }

        .ag-form-step {
          margin-bottom: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid #f1f5f9;
        }
        .ag-form-step:last-of-type { border-bottom: none; }

        .ag-step-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 24px;
        }
        .ag-step-num {
          width: 36px; height: 36px; border-radius: 12px;
          background: #123b71; color: #fff; display: flex;
          align-items: center; justify-content: center;
          font-size: 15px; font-weight: 800; flex-shrink: 0;
        }
        .ag-step-header h3 { font-size: 20px; font-weight: 700; color: #0f172a; margin: 0; }

        /* Date Grid */
        .ag-date-grid {
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .ag-date-chip {
          display: flex; flex-direction: column; align-items: center;
          padding: 12px 16px; border-radius: 14px;
          background: #f8fafc; border: 2px solid #e2e8f0;
          cursor: pointer; transition: all 0.2s ease;
          min-width: 72px;
        }
        .ag-date-chip:hover { border-color: #2563eb; background: #f0f7ff; }
        .ag-date-chip.active {
          background: #123b71; border-color: #123b71; color: #fff;
        }
        .ag-date-day { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; }
        .ag-date-num { font-size: 22px; font-weight: 800; line-height: 1.2; }
        .ag-date-mon { font-size: 10px; font-weight: 600; opacity: 0.7; }
        .ag-date-chip.active .ag-date-day,
        .ag-date-chip.active .ag-date-mon { color: rgba(255,255,255,0.8); }

        /* Time Grid */
        .ag-time-grid {
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .ag-time-chip {
          padding: 10px 20px; border-radius: 12px;
          background: #f8fafc; border: 2px solid #e2e8f0;
          font-size: 13px; font-weight: 600; color: #334155;
          cursor: pointer; transition: all 0.2s ease;
        }
        .ag-time-chip:hover { border-color: #2563eb; background: #f0f7ff; color: #2563eb; }
        .ag-time-chip.active {
          background: #123b71; border-color: #123b71; color: #fff;
        }

        /* Fields Grid */
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
        .ag-field textarea { resize: vertical; min-height: 100px; }

        /* Submit Button */
        .ag-submit-btn {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          width: 100%; padding: 18px; border-radius: 16px;
          background: linear-gradient(135deg, #123b71 0%, #1d4fa0 100%);
          color: #fff; font-size: 16px; font-weight: 700;
          border: none; cursor: pointer; transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(18,59,113,0.2);
          margin-top: 16px;
        }
        .ag-submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(18,59,113,0.3);
        }
        .ag-submit-btn:disabled {
          opacity: 0.5; cursor: not-allowed;
        }

        /* Why Section */
        .ag-why-section {
          margin-bottom: 60px;
        }
        .ag-why-section .ag-section-title {
          text-align: center; margin-bottom: 40px;
        }
        .ag-why-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
        }
        .ag-why-card {
          background: #fff; border-radius: 24px; padding: 36px 28px;
          text-align: center; border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ag-why-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(18,59,113,0.08);
        }
        .ag-why-icon { font-size: 36px; margin-bottom: 18px; }
        .ag-why-card h3 { font-size: 16px; font-weight: 700; margin-bottom: 10px; color: #0f172a; }
        .ag-why-card p { font-size: 13px; color: #64748b; line-height: 1.6; }

        /* Responsive */
        @media (max-width: 1024px) {
          .ag-schedule-hero { grid-template-columns: 1fr; }
          .ag-hero-visual { display: none; }
          .ag-hero-content { padding: 40px; text-align: center; align-items: center; }
          .ag-hero-heading { font-size: 32px; }
          .ag-booking-section { padding: 40px 24px; }
          .ag-why-grid { grid-template-columns: repeat(2, 1fr); }
          .ag-fields-grid { grid-template-columns: 1fr; }
          .ag-success-card { padding: 40px 24px; }
        }

        @media (max-width: 640px) {
          .ag-schedule-container { padding: 0 16px; }
          .ag-hero-heading { font-size: 28px; }
          .ag-hero-stats { flex-direction: column; align-items: center; }
          .ag-why-grid { grid-template-columns: 1fr; }
          .ag-date-grid { justify-content: center; }
          .ag-time-grid { justify-content: center; }
          .ag-success-details { flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  );
};

export default ScheduleCall;
