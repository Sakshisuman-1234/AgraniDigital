import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import agraniLogo from '../assets/agranidigital-logo.jpeg';

// Dropdown content data for each section
const dropdownContent = {
  Services: {
    title: "Our Services",
    items: [
      { name: "AI & Machine Learning", description: "Intelligent automation and predictive analytics", icon: "🤖", link: "/services/ai-ml" },
      { name: "Cloud Solutions", description: "AWS, Azure, Google Cloud expertise", icon: "☁️", link: "/services/cloud" },
      { name: "SaaS Development", description: "Scalable software as a service platforms", icon: "📱", link: "/services/saas" },
      { name: "Digital Transformation", description: "End-to-end digital modernization", icon: "🚀", link: "/services/digital-transformation" },
      { name: "Cybersecurity", description: "Protect your business assets", icon: "🔒", link: "/services/cybersecurity" },
      { name: "Data Analytics", description: "Turn data into actionable insights", icon: "📊", link: "/services/data-analytics" }
    ]
  },
  Products: {
    title: "Our Products",
    items: [
      { name: "AgriSmart AI", description: "AI-powered farming solutions", icon: "🌾", link: "/products/agrismart" },
      { name: "FinSecure", description: "Banking & financial security suite", icon: "💰", link: "/products/finsecure" },
      { name: "HealthTrack Pro", description: "Healthcare management platform", icon: "🏥", link: "/products/healthtrack" },
      { name: "EduTech LMS", description: "Learning management system", icon: "📚", link: "/products/edutech" },
      { name: "RetailAI", description: "Smart retail analytics", icon: "🛍️", link: "/products/retailai" },
      { name: "LogiFlow", description: "Supply chain optimization", icon: "🚚", link: "/products/logiflow" }
    ]
  },
  Industries: {
    title: "Industries We Serve",
    items: [
      { name: "Banking & Finance", description: "Secure, compliant financial solutions", icon: "🏦", link: "/industries/banking" },
      { name: "Healthcare", description: "HIPAA compliant health tech", icon: "💊", link: "/industries/healthcare" },
      { name: "Retail & E-commerce", description: "Customer-first shopping experiences", icon: "🛒", link: "/industries/retail" },
      { name: "Manufacturing", description: "Industry 4.0 smart factories", icon: "🏭", link: "/industries/manufacturing" },
      { name: "Education", description: "EdTech for modern learning", icon: "🎓", link: "/industries/education" },
      { name: "Logistics", description: "Real-time tracking & optimization", icon: "📦", link: "/industries/logistics" }
    ]
  },
  "Case Studies": {
    title: "Success Stories",
    items: [
      { name: "Global Bank Digital Transformation", description: "40% efficiency increase", icon: "🏆", link: "/case-studies/bank-transformation" },
      { name: "E-commerce AI Recommendation Engine", description: "150% revenue growth", icon: "📈", link: "/case-studies/ecommerce-ai" },
      { name: "Healthcare Data Platform", description: "Patient outcomes improved by 60%", icon: "❤️", link: "/case-studies/healthcare-platform" },
      { name: "Smart City IoT Integration", description: "30% energy savings", icon: "🌆", link: "/case-studies/smart-city" },
      { name: "Retail Inventory Management", description: "Reduced waste by 45%", icon: "📊", link: "/case-studies/retail-inventory" },
      { name: "Manufacturing Predictive Maintenance", description: "Downtime reduced by 55%", icon: "⚙️", link: "/case-studies/manufacturing" }
    ]
  },
  Corporate: {
    title: "Corporate",
    items: [
      { name: "About Us", description: "Our story, mission & values", icon: "👥", link: "/about" },
      { name: "Leadership", description: "Meet our expert team", icon: "👔", link: "/leadership" },
      { name: "Careers", description: "Join our growing team", icon: "💼", link: "/careers" },
      { name: "News & Press", description: "Latest announcements", icon: "📰", link: "/news" },
      { name: "Blog", description: "Insights & updates", icon: "✍️", link: "/blog" },
      { name: "Investor Relations", description: "Financial information", icon: "📊", link: "/investors" }
    ]
  }
};

const navItems = [
  { label: 'Services', hasArrow: true },
  { label: 'Products', hasArrow: true },
  { label: 'Industries', hasArrow: true },
  { label: 'Case Studies', hasArrow: true },
  { label: 'Corporate', hasArrow: true },
  { label: 'Contact', hasArrow: false },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6.5 8 10l4-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return open ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const Navbar = ({ openContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setMobileOpenMenus({});
  }, [location.pathname]);

  const toggleMobileSubmenu = (label) => {
    setMobileOpenMenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (openContact && typeof openContact === 'function') {
      openContact();
    } else {
      console.log('Contact button clicked - you can connect this to a modal');
    }
  };

  // Desktop Dropdown Component
  const DesktopDropdown = ({ label, data }) => {
    if (!data) return null;
    
    return (
      <div className="ag-dropdown">
        <div className="ag-dropdown-inner">
          <div className="ag-dropdown-header">
            <h3>{data.title}</h3>
            <Link to={`/${label.toLowerCase().replace(/\s+/g, '')}`} className="ag-dropdown-view-all">
              View All <span>→</span>
            </Link>
          </div>
          <div className="ag-dropdown-grid">
            {data.items.map((item, idx) => (
              <Link key={idx} to={item.link} className="ag-dropdown-item">
                <span className="ag-dropdown-icon">{item.icon}</span>
                <div className="ag-dropdown-item-content">
                  <div className="ag-dropdown-item-name">{item.name}</div>
                  <div className="ag-dropdown-item-desc">{item.description}</div>
                </div>
                <span className="ag-dropdown-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        .ag-navbar-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(18px);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        .ag-nav-spacer {
          height: 74px;
        }
        
        .ag-mainbar {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          min-height: 74px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }
        
        .ag-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .ag-logo {
          width: 52px;
          height: auto;
          display: block;
          object-fit: contain;
        }
        .ag-brand-copy {
          display: flex;
          flex-direction: column;
          gap: 2px;
          line-height: 1.1;
        }
        .ag-brand-title {
          font-size: 14px;
          font-weight: 800;
          color: #123b71;
          letter-spacing: -0.02em;
        }
        .ag-brand-subtitle {
          font-size: 10px;
          color: #6b7280;
          font-weight: 500;
          white-space: nowrap;
        }
        
        /* Desktop Navigation - Centered */
        .ag-desktop {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ag-nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .ag-nav-item {
          position: relative;
        }
        .ag-nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          color: #344256;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: color 0.2s ease, background 0.2s ease;
          cursor: pointer;
          background: transparent;
          border: none;
          font-family: inherit;
        }
        .ag-nav-link:hover {
          color: #2357d8;
          background: #eef4ff;
        }
        
        /* Login Button - Right Aligned */
        .ag-profile-wrapper {
          flex-shrink: 0;
        }
        .ag-profile {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid #d6dfed;
          background: #fff;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .ag-profile:hover {
          transform: translateY(-1px);
          color: #2357d8;
          border-color: #2357d8;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
        }
        
        /* Desktop Dropdown Styles */
        .ag-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          width: 680px;
          max-width: 90vw;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
          z-index: 1000;
          pointer-events: none;
        }
        .ag-nav-item:hover .ag-dropdown {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .ag-dropdown-inner {
          padding: 20px;
        }
        .ag-dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #eef2f6;
        }
        .ag-dropdown-header h3 {
          font-size: 16px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        .ag-dropdown-view-all {
          font-size: 13px;
          color: #2357d8;
          text-decoration: none;
          font-weight: 600;
        }
        .ag-dropdown-view-all:hover {
          text-decoration: underline;
        }
        .ag-dropdown-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .ag-dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .ag-dropdown-item:hover {
          background: #f8faff;
        }
        .ag-dropdown-icon {
          font-size: 26px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f4fe;
          border-radius: 12px;
        }
        .ag-dropdown-item-content {
          flex: 1;
        }
        .ag-dropdown-item-name {
          font-size: 14px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .ag-dropdown-item-desc {
          font-size: 11px;
          color: #6b7280;
        }
        .ag-dropdown-arrow {
          color: #9ca3af;
          font-size: 16px;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .ag-dropdown-item:hover .ag-dropdown-arrow {
          opacity: 1;
          transform: translateX(4px);
        }

        .ag-mobile-toggle {
          width: 40px;
          height: 40px;
          display: none;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid #d6dfed;
          background: #fff;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .ag-mobile-toggle:hover {
          color: #2357d8;
          border-color: #2357d8;
        }
        
        /* Mobile Styles */
        .ag-mobile-panel {
          display: none;
        }
        
        .ag-mobile-submenu {
          margin-top: 8px;
          margin-left: 16px;
          padding-left: 12px;
          border-left: 2px solid #e0e7ff;
          display: none;
        }
        .ag-mobile-submenu.open {
          display: block;
        }
        .ag-mobile-subitem {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          text-decoration: none;
          border-radius: 12px;
          margin-bottom: 4px;
        }
        .ag-mobile-subitem:hover {
          background: #f0f4fe;
        }
        .ag-mobile-subitem-icon {
          font-size: 22px;
        }
        .ag-mobile-subitem-content {
          flex: 1;
        }
        .ag-mobile-subitem-name {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
        }
        .ag-mobile-subitem-desc {
          font-size: 11px;
          color: #6b7280;
        }
        .ag-mobile-arrow {
          transition: transform 0.2s ease;
          display: inline-flex;
        }
        .ag-mobile-arrow.rotated {
          transform: rotate(180deg);
        }

        @media (max-width: 1080px) {
          .ag-nav-spacer {
            height: 68px;
          }
          .ag-desktop {
            display: none;
          }
          .ag-mobile-toggle {
            display: inline-flex;
          }
          .ag-mainbar {
            min-height: 68px;
            gap: 16px;
            padding: 0 20px;
          }
          .ag-mobile-panel {
            display: block;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height 0.28s ease, opacity 0.2s ease;
            background: #fff;
          }
          .ag-mobile-panel.open {
            max-height: 600px;
            opacity: 1;
            border-top: 1px solid rgba(148, 163, 184, 0.18);
            overflow-y: auto;
          }
          .ag-mobile-links {
            padding: 16px 20px 22px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .ag-mobile-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 52px;
            padding: 0 16px;
            border-radius: 16px;
            border: 1px solid #e6edf7;
            background: #f8fbff;
            text-decoration: none;
            color: #1f2937;
            font-size: 15px;
            font-weight: 700;
            transition: all 0.2s ease;
            cursor: pointer;
            width: 100%;
            text-align: left;
          }
          .ag-mobile-link:hover {
            background: #eef4ff;
            border-color: #bfd4ff;
          }
        }
        @media (max-width: 640px) {
          .ag-nav-spacer {
            height: 64px;
          }
          .ag-mainbar {
            padding-left: 16px;
            padding-right: 16px;
          }
          .ag-mobile-links {
            padding-left: 16px;
            padding-right: 16px;
          }
          .ag-logo {
            width: 42px;
          }
          .ag-brand-title {
            font-size: 12px;
          }
          .ag-brand-subtitle {
            font-size: 9px;
            white-space: normal;
          }
        }
      `}</style>

      <header className="ag-navbar-wrap">
        <div className="ag-mainbar">
          <Link to="/" className="ag-brand" aria-label="Agrani Digital home">
            <img src={agraniLogo} alt="Agrani Digital" className="ag-logo" />
            <div className="ag-brand-copy">
              <span className="ag-brand-title">Agrani Digital</span>
              <span className="ag-brand-subtitle">Building AI-Powered Software & SaaS</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="ag-desktop">
            <nav className="ag-nav-links" aria-label="Primary navigation">
              {navItems.map((item) => {
                if (item.label === 'Contact') {
                  return (
                    <button
                      key={item.label}
                      className="ag-nav-link"
                      onClick={handleContactClick}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                }
                const dropdownData = dropdownContent[item.label];
                return (
                  <div key={item.label} className="ag-nav-item">
                    <button className="ag-nav-link">
                      <span>{item.label}</span>
                      {item.hasArrow && <ArrowIcon />}
                    </button>
                    {dropdownData && <DesktopDropdown label={item.label} data={dropdownData} />}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Login Button - Right Aligned */}
          <div className="ag-profile-wrapper">
            <button 
              type="button" 
              className="ag-profile" 
              aria-label="Open contact" 
              onClick={handleContactClick}
            >
              <UserIcon />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            type="button" 
            className="ag-mobile-toggle" 
            aria-label="Toggle navigation menu" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <div className={`ag-mobile-panel${menuOpen ? ' open' : ''}`}>
          <div className="ag-mobile-links">
            {navItems.map((item) => {
              const dropdownData = dropdownContent[item.label];
              
              if (item.label === 'Contact') {
                return (
                  <button
                    key={item.label}
                    className="ag-mobile-link"
                    onClick={(e) => {
                      handleContactClick(e);
                      setMenuOpen(false);
                    }}
                  >
                    <span>{item.label}</span>
                    <UserIcon />
                  </button>
                );
              }
              
              if (dropdownData) {
                const isOpen = mobileOpenMenus[item.label] || false;
                return (
                  <div key={item.label}>
                    <button
                      className="ag-mobile-link"
                      onClick={() => toggleMobileSubmenu(item.label)}
                    >
                      <span>{item.label}</span>
                      <span className={`ag-mobile-arrow ${isOpen ? 'rotated' : ''}`}>
                        <ArrowIcon />
                      </span>
                    </button>
                    <div className={`ag-mobile-submenu ${isOpen ? 'open' : ''}`}>
                      {dropdownData.items.map((subItem, idx) => (
                        <Link
                          key={idx}
                          to={subItem.link}
                          className="ag-mobile-subitem"
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="ag-mobile-subitem-icon">{subItem.icon}</span>
                          <div className="ag-mobile-subitem-content">
                            <div className="ag-mobile-subitem-name">{subItem.name}</div>
                            <div className="ag-mobile-subitem-desc">{subItem.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.label}
                  to={`/${item.label.toLowerCase().replace(/\s+/g, '')}`}
                  className="ag-mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.hasArrow ? <ArrowIcon /> : null}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      <div className="ag-nav-spacer" />
    </>
  );
};

export default Navbar;