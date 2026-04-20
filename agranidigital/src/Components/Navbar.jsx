import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { dropdownContent } from '../data/navigationData';
import agraniLogo from '../assets/agranidigital-logo.jpeg';

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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    setMenuOpen(false);
    setMobileOpenMenus({});
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.ag-nav-item')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (label) => {
    setActiveDropdown(prev => prev === label ? null : label);
  };

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
      navigate('/contact');
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  // Desktop Dropdown Component
  const DesktopDropdown = ({ label, data, isOpen }) => {
    if (!data || !isOpen) return null;
    
    // Check if it's a mega-menu dropdown (Services, Products, Industries, Case Studies, or Corporate)
    if (label === 'Services' || label === 'Products' || label === 'Industries' || label === 'Case Studies' || label === 'Corporate') {
      const isServices = label === 'Services';
      const isProducts = label === 'Products';
      const isIndustries = label === 'Industries';
      const isCaseStudies = label === 'Case Studies';
      const isCorporate = label === 'Corporate';
      return (
        <div className="ag-dropdown services-mega-page">
          {/* Scrollable Content Area */}
          <div className="ag-mega-content-scroll">
            <div className="ag-mega-columns">
               {/* Column 1: Featured Section */}
               <div className="ag-mega-col col-featured">
                  <div className="ag-mega-col-inner">
                    <h4 className="ag-mega-col-title-top">
                      {isServices ? '🏆' : isProducts ? '⭐' : isIndustries ? '🏛️' : isCaseStudies ? '💼' : '🌟'} {data.featured.title}
                    </h4>
                    <div className="ag-mega-col-benefits">
                      {data.featured.benefits.map((b, i) => (
                        <div key={i} className="ag-mega-benefit-item">
                          <span className="ag-mega-benefit-tick">✓</span>
                          {b}
                        </div>
                      ))}
                    </div>
                    <Link to={data.featured.link} className="ag-mega-featured-btn">
                      {data.featured.cta} <span>→</span>
                    </Link>
                  </div>
               </div>

               {/* Render Categories Dynamically based on structure */}
               {isServices ? (
                 <>
                   {/* Column 2: AI & Cloud */}
                   <div className="ag-mega-col col-services">
                      <div className="ag-mega-col-inner">
                        <div className="ag-mega-section">
                          <div className="ag-mega-header-wrap">
                            <h4 className="ag-mega-section-title">🤖 ARTIFICIAL INTELLIGENCE</h4>
                          </div>
                          <div className="ag-mega-services-list">
                            {data.categories[0].items.map((item, idx) => (
                              <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                <div className="ag-mega-service-text">
                                  <div className="ag-mega-service-name small">{item.name}</div>
                                  <div className="ag-mega-service-desc small">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="ag-mega-section" style={{ marginTop: '16px' }}>
                          <div className="ag-mega-header-wrap">
                            <h4 className="ag-mega-section-title">☁️ CLOUD SERVICES</h4>
                          </div>
                          <div className="ag-mega-services-list">
                            {data.categories[1].items.map((item, idx) => (
                              <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                <div className="ag-mega-service-text">
                                  <div className="ag-mega-service-name small">{item.name}</div>
                                  <div className="ag-mega-service-desc small">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                   </div>

                   {/* Column 3: DevOps & Web */}
                   <div className="ag-mega-col col-services">
                      <div className="ag-mega-col-inner">
                        <div className="ag-mega-section">
                          <div className="ag-mega-header-wrap">
                            <h4 className="ag-mega-section-title">🛠️ DEVOPS & IOT</h4>
                          </div>
                          <div className="ag-mega-services-list">
                            {data.categories[2].items.map((item, idx) => (
                              <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                <div className="ag-mega-service-text">
                                  <div className="ag-mega-service-name small">{item.name}</div>
                                  <div className="ag-mega-service-desc small">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="ag-mega-section" style={{ marginTop: '16px' }}>
                          <div className="ag-mega-header-wrap">
                            <h4 className="ag-mega-section-title">🌐 WEB DEVELOPMENT</h4>
                          </div>
                          <div className="ag-mega-services-list">
                            {data.categories[3].items.map((item, idx) => (
                              <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                <div className="ag-mega-service-text">
                                  <div className="ag-mega-service-name small">{item.name}</div>
                                  <div className="ag-mega-service-desc small">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                   </div>

                   {/* Column 4: Mobile & Enterprise */}
                   <div className="ag-mega-col col-services">
                      <div className="ag-mega-col-inner">
                        <div className="ag-mega-section">
                          <div className="ag-mega-header-wrap">
                            <h4 className="ag-mega-section-title">📱 MOBILE APP</h4>
                          </div>
                          <div className="ag-mega-services-list">
                            {data.categories[4].items.map((item, idx) => (
                              <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                <div className="ag-mega-service-text">
                                  <div className="ag-mega-service-name small">{item.name}</div>
                                  <div className="ag-mega-service-desc small">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="ag-mega-section" style={{ marginTop: '16px' }}>
                          <div className="ag-mega-header-wrap">
                            <h4 className="ag-mega-section-title">🚀 DIGITAL & ENTERPRISE</h4>
                          </div>
                          <div className="ag-mega-services-list">
                            {data.categories[5].items.map((item, idx) => (
                              <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                <div className="ag-mega-service-text">
                                  <div className="ag-mega-service-name small">{item.name}</div>
                                  <div className="ag-mega-service-desc small">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                   </div>
                 </>
               ) : (
                 /* Products and Industries Flexible Layout */
                 <>
                    {/* Column 2: First set of categories */}
                    <div className="ag-mega-col col-services">
                       <div className="ag-mega-col-inner">
                         {data.categories[0] && (
                           <div className="ag-mega-section">
                             <div className="ag-mega-header-wrap">
                               <h4 className="ag-mega-section-title">
                                 {isProducts ? '⚙️' : isIndustries ? '⚖️' : isCaseStudies ? '💼' : isCorporate ? '🌟' : '🎓'} {data.categories[0].title}
                               </h4>
                             </div>
                             <div className="ag-mega-services-list">
                               {data.categories[0].items.map((item, idx) => (
                                 <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                   <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                   <div className="ag-mega-service-text">
                                     <div className="ag-mega-service-name small">{item.name}</div>
                                     <div className="ag-mega-service-desc small">{item.description}</div>
                                   </div>
                                 </Link>
                               ))}
                             </div>
                           </div>
                         )}
                         {data.categories[1] && (
                           <div className="ag-mega-section" style={{ marginTop: '16px' }}>
                             <div className="ag-mega-header-wrap">
                               <h4 className="ag-mega-section-title">
                                 {isProducts ? '📚' : isIndustries ? '🏭' : isCaseStudies ? '💼' : isCorporate ? '🌟' : '🏭'} {data.categories[1].title}
                               </h4>
                             </div>
                             <div className="ag-mega-services-list">
                               {data.categories[1].items.map((item, idx) => (
                                 <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                   <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                   <div className="ag-mega-service-text">
                                     <div className="ag-mega-service-name small">{item.name}</div>
                                     <div className="ag-mega-service-desc small">{item.description}</div>
                                   </div>
                                 </Link>
                               ))}
                             </div>
                           </div>
                         )}
                       </div>
                    </div>

                   {/* Column 3: Second set of categories */}
                   <div className="ag-mega-col col-services">
                      <div className="ag-mega-col-inner">
                        {data.categories[2] && (
                          <div className="ag-mega-section">
                            <div className="ag-mega-header-wrap">
                              <h4 className="ag-mega-section-title">
                                {isProducts ? '🌾' : isIndustries ? '🛒' : isCaseStudies ? '💼' : isCorporate ? '🌟' : '🛒'} {data.categories[2].title}
                              </h4>
                            </div>
                            <div className="ag-mega-services-list">
                              {data.categories[2].items.map((item, idx) => (
                                <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                  <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                  <div className="ag-mega-service-text">
                                    <div className="ag-mega-service-name small">{item.name}</div>
                                    <div className="ag-mega-service-desc small">{item.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                        {data.categories[3] && (
                          <div className="ag-mega-section" style={{ marginTop: '16px' }}>
                            <div className="ag-mega-header-wrap">
                              <h4 className="ag-mega-section-title">
                                {isProducts ? '🏥' : isIndustries ? '🏢' : isCaseStudies ? '💼' : isCorporate ? '🌟' : '🏢'} {data.categories[3].title}
                              </h4>
                            </div>
                            <div className="ag-mega-services-list">
                              {data.categories[3].items.map((item, idx) => (
                                <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                  <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                  <div className="ag-mega-service-text">
                                    <div className="ag-mega-service-name small">{item.name}</div>
                                    <div className="ag-mega-service-desc small">{item.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                   </div>

                   {/* Column 4: Third set or core platforms */}
                   <div className="ag-mega-col col-services">
                      <div className="ag-mega-col-inner">
                        {data.categories[4] && (
                          <div className="ag-mega-section">
                            <div className="ag-mega-header-wrap">
                              <h4 className="ag-mega-section-title">
                                {isProducts ? '💎' : isIndustries ? '⚙️' : isCaseStudies ? '💼' : '⚙️'} {data.categories[4].title}
                              </h4>
                            </div>
                            <div className="ag-mega-services-list">
                              {data.categories[4].items.map((item, idx) => (
                                <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                  <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                  <div className="ag-mega-service-text">
                                    <div className="ag-mega-service-name small">{item.name}</div>
                                    <div className="ag-mega-service-desc small">{item.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                        {data.categories[5] && (
                          <div className="ag-mega-section" style={{ marginTop: '16px' }}>
                            <div className="ag-mega-header-wrap">
                              <h4 className="ag-mega-section-title">
                                {isProducts ? '🏗️' : isIndustries ? '🏘️' : isCaseStudies ? '💼' : '🏠'} {data.categories[5].title}
                              </h4>
                            </div>
                            <div className="ag-mega-services-list">
                              {data.categories[5].items.map((item, idx) => (
                                <Link key={idx} to={item.link} className="ag-mega-service-item compact">
                                  <span className="ag-mega-service-icon-bg small">{item.icon}</span>
                                  <div className="ag-mega-service-text">
                                    <div className="ag-mega-service-name small">{item.name}</div>
                                    <div className="ag-mega-service-desc small">{item.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                   </div>
                 </>
               )}
            </div>
          </div>

          {/* Fixed Footer Strip (Patti) */}
          <div className="ag-mega-footer-strip">
             <div className="ag-mega-footer-left">
                <span className="ag-mega-footer-icon">🎧</span>
                <div className="ag-mega-footer-text">
                  <strong>Need Expert Advice?</strong>
                  <span>Talk to our experts today</span>
                </div>
             </div>
             <div className="ag-mega-footer-right">
                <Link to="/schedule" className="ag-mega-footer-btn-outline">
                   Schedule a Call
                </Link>
                <Link to="/consultation" className="ag-mega-footer-btn-fill">
                   Free Consultation
                </Link>
             </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="ag-dropdown">
        <div className="ag-dropdown-inner">
          <div className="ag-dropdown-main">
            <div className="ag-dropdown-header">
              <h3>{data.title}</h3>
            </div>
            <div className="ag-dropdown-grid">
              {data.items.map((item, idx) => (
                <Link key={idx} to={item.link} className="ag-dropdown-item">
                  <span className="ag-dropdown-icon">{item.icon}</span>
                  <div className="ag-dropdown-item-content">
                    <div className="ag-dropdown-item-name">{item.name}</div>
                    <div className="ag-dropdown-item-desc">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
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
          position: relative; /* Base for dropdown positioning */
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
          /* Spans full height of mainbar to eliminate hover gaps */
          display: flex;
          align-items: center;
          height: 74px; /* Matches ag-mainbar min-height */
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
        
        .ag-dropdown {
          position: absolute;
          top: 74px; /* Align exactly to bottom of nav bar */
          left: 50%;
          transform: translateX(-50%);
          width: 680px;
          max-width: 95vw;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
          z-index: 1000;
          overflow: visible; /* Changed from hidden to allow bridge */
          animation: agSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Robust Bridge for regular dropdown */
        .ag-dropdown::before {
          content: '';
          position: absolute;
          top: -30px;
          left: 0;
          right: 0;
          height: 30px;
          background: transparent;
        }

        .ag-dropdown-inner {
          overflow: hidden;
          border-radius: 20px;
          background: #fff;
        }
        
        @keyframes agSlideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .services-mega-page {
          position: absolute;
          top: 74px; /* Align exactly to bottom of nav bar */
          left: 0 !important;
          width: 100% !important;
          max-width: 1400px;
          max-height: 55vh;
          display: flex;
          flex-direction: column;
          background: #fff;
          border-top: 3px solid #123b71;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
          transform: none !important;
          z-index: 1000;
        }

        /* Robust Hover Bridge for mega-menus */
        .services-mega-page::before {
          content: '';
          position: absolute;
          top: -30px;
          left: 0;
          right: 0;
          height: 30px;
          background: transparent;
        }

        .ag-mega-content-scroll {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 20px;
        }

        /* Clean scrollbar for the mega menu content */
        .ag-mega-content-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .ag-mega-content-scroll::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .ag-mega-content-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .ag-mega-content-scroll::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        .ag-mega-columns {
          display: flex;
          height: 100%;
          padding: 0 40px; /* Match navbar padding to align with logo/links */
        }

        .ag-mega-col {
          padding: 20px;
        }

        .col-featured {
          flex: 0 0 280px;
          background: linear-gradient(180deg, #f8fbff 0%, #eff6ff 100%);
          border-right: 1px solid #eef2f6;
          padding: 30px 24px;
        }

        .ag-mega-col-title-top {
          font-size: 16px;
          font-weight: 800;
          color: #123b71;
          margin: 0 0 20px 0;
          line-height: 1.3;
        }

        .ag-mega-col-benefits {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .ag-mega-benefit-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
        }

        .ag-mega-benefit-tick {
          color: #10b981;
          font-weight: 800;
        }

        .ag-mega-featured-btn {
          display: inline-block;
          background: #123b71;
          color: #fff;
          text-decoration: none;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .ag-mega-featured-btn:hover {
          background: #2357d8;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(18, 59, 113, 0.2);
        }

        .col-services {
          flex: 1;
          background: #fff;
          border-right: 1px solid #f1f5f9;
        }
        .col-services:last-child {
          border-right: none;
        }

        .ag-mega-header-wrap {
          margin-bottom: 16px;
        }

        .ag-mega-section-title {
          font-size: 13px; /* Increased from 11px */
          font-weight: 800;
          color: #123b71; /* Darker blue for intensity */
          letter-spacing: 0.05em;
          margin: 0;
          text-transform: uppercase;
        }

        .ag-mega-services-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ag-mega-service-item.compact {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 8px;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .ag-mega-service-item.compact:hover {
          background: #f8fbff;
          transform: translateX(4px);
        }

        .ag-mega-service-icon-bg.small {
          font-size: 16px;
          width: 32px;
          height: 32px;
          background: #f1f5f9;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ag-mega-service-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .ag-mega-service-name.small {
          font-size: 12px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 2px;
        }

        .ag-mega-service-desc.small {
          font-size: 10.5px;
          color: #64748b;
          line-height: 1.4;
          max-width: 220px;
          display: block;
          white-space: pre-line; /* Support multi-line descriptions */
        }

        .ag-mega-footer-strip {
          background: #f8fbff;
          border-top: 1px solid #eef2f6;
          padding: 16px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .ag-mega-footer-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ag-mega-footer-icon {
          font-size: 24px;
        }

        .ag-mega-footer-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .ag-mega-footer-text strong {
          font-size: 14px;
          color: #123b71;
        }

        .ag-mega-footer-text span {
          font-size: 11px;
          color: #64748b;
        }

        .ag-mega-footer-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ag-mega-footer-btn-outline {
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          color: #123b71;
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          background: #fff;
          transition: all 0.2s ease;
        }

        .ag-mega-footer-btn-outline:hover {
          background: #f8fbff;
          border-color: #123b71;
        }

        .ag-mega-footer-btn-fill {
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          padding: 9px 18px;
          border-radius: 8px;
          background: #2357d8;
          box-shadow: 0 4px 12px rgba(35, 87, 216, 0.2);
          transition: all 0.2s ease;
        }

        .ag-mega-footer-btn-fill:hover {
          background: #123b71;
          transform: translateY(-1px);
          box-shadow: 0 6px 15px rgba(18, 59, 113, 0.3);
        }
        .ag-dropdown-inner {
          display: flex;
          height: 100%;
        }
        .ag-dropdown-featured {
          flex: 0 0 260px;
          background: linear-gradient(165deg, #123b71 0%, #0d284d 100%);
          color: #fff;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .ag-dropdown-featured::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -20%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
        }
        .ag-featured-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .ag-featured-title {
          font-size: 18px;
          font-weight: 800;
          margin: 0 0 20px 0;
          line-height: 1.3;
          color: #fff;
        }
        .ag-featured-list {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ag-featured-item {
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
        }
        .ag-featured-tick {
          color: #10b981;
          font-weight: 800;
        }
        .ag-featured-cta {
          margin-top: auto;
          background: #fff;
          color: #123b71;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
          transition: all 0.2s ease;
        }
        .ag-featured-cta:hover {
          background: #eef4ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .ag-dropdown-main {
          flex: 1;
          padding: 24px;
        }
        .ag-dropdown.is-categorized {
          width: 1040px;
        }
        .ag-dropdown-categories {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 10px;
        }
        .ag-category-title {
          font-size: 11px;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          padding-left: 12px;
        }
        .ag-category-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ag-dropdown-icon.small {
          font-size: 18px;
          width: 32px;
          height: 32px;
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
          padding: 10px 12px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .ag-dropdown-item:hover {
          background: #f8faff;
          transform: translateX(4px);
        }
        .ag-dropdown-icon {
          font-size: 26px;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
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
        
        .ag-nav-link.active {
          background: #eef4ff;
          color: #2357d8;
        }
        .ag-nav-link.active .ag-arrow-svg {
          transform: rotate(180deg);
        }
        .ag-arrow-svg {
          transition: transform 0.2s ease;
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
        
        .ag-mobile-featured {
          background: linear-gradient(135deg, #123b71 0%, #0d284d 100%);
          margin: 10px;
          padding: 20px;
          border-radius: 16px;
          color: #fff;
        }
        .ag-mobile-featured-title {
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 15px;
        }
        .ag-mobile-featured-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        .ag-mobile-featured-item {
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.9);
        }
        .ag-mobile-featured-tick {
          color: #10b981;
          font-weight: 800;
        }
        .ag-mobile-featured-cta {
          display: block;
          background: #fff;
          color: #123b71;
          text-decoration: none;
          padding: 10px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
        }
        .ag-mobile-category-title {
          font-size: 11px;
          font-weight: 800;
          color: #64748b;
          padding: 16px 16px 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
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

          .ag-profile {
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .ag-profile:hover {
            background: #eef4ff;
            color: #123b71;
            transform: translateY(-1px);
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
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
                    <Link
                      key={item.label}
                      to="/contact"
                      className="ag-nav-link"
                    >
                      <span>{item.label}</span>
                    </Link>
                  );
                }
                const dropdownData = dropdownContent[item.label];
                
                // Construct the base category link (e.g., Services -> /services)
                const categoryPath = `/${item.label.toLowerCase().replace(/\s+/g, '-')}`;

                return (
                  <div 
                    key={item.label} 
                    className="ag-nav-item"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link 
                      to={categoryPath}
                      className={`ag-nav-link ${activeDropdown === item.label ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.label)}
                    >
                      <span>{item.label}</span>
                      {item.hasArrow && (
                        <span className="ag-arrow-svg">
                           <ArrowIcon />
                        </span>
                      )}
                    </Link>
                    {dropdownData && (
                      <DesktopDropdown 
                        label={item.label} 
                        data={dropdownData} 
                        isOpen={activeDropdown === item.label} 
                      />
                    )}
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
              aria-label="Open login" 
              onClick={handleLoginClick}
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
            <button
              className="ag-mobile-link"
              onClick={(e) => {
                handleLoginClick(e);
                setMenuOpen(false);
              }}
              style={{ background: '#123b71', color: '#fff', border: 'none' }}
            >
              <span>Member Login</span>
              <UserIcon />
            </button>

            {navItems.map((item) => {
              const dropdownData = dropdownContent[item.label];
              
              if (item.label === 'Contact') {
                return (
                  <Link
                    key={item.label}
                    to="/contact"
                    className="ag-mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <UserIcon />
                  </Link>
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
                      {dropdownData.featured && (
                        <div className="ag-mobile-featured">
                          <div className="ag-mobile-featured-title">{dropdownData.featured.title}</div>
                          <div className="ag-mobile-featured-list">
                            {dropdownData.featured.benefits.map((benefit, i) => (
                              <div key={i} className="ag-mobile-featured-item">
                                <span className="ag-mobile-featured-tick">✓</span>
                                {benefit}
                              </div>
                            ))}
                          </div>
                          <Link 
                            to={dropdownData.featured.link} 
                            className="ag-mobile-featured-cta"
                            onClick={() => setMenuOpen(false)}
                          >
                            {dropdownData.featured.cta}
                          </Link>
                        </div>
                      )}
                      {dropdownData.categories ? (
                        <div className="ag-mobile-categories">
                          {dropdownData.categories.filter(cat => cat !== null).map((cat, idx) => (
                            <div key={idx} className="ag-mobile-category">
                              <div className="ag-mobile-category-title">{cat.title}</div>
                              {cat.items.map((subItem, i) => (
                                <Link
                                  key={i}
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
                          ))}
                        </div>
                      ) : (
                        dropdownData.items.map((subItem, idx) => (
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
                        ))
                      )}
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