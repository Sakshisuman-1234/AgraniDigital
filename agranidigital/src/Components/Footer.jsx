import React from 'react';
import { Link } from 'react-router-dom';
import agraniLogo from '../assets/agranidigital-logo.jpeg';

const services = [
  'AI & Machine Learning',
  'Cloud Solutions',
  'Web Development',
  'Mobile App Development',
  'Generative AI',
  'LLM Integrations',
  'AWS & DevOps',
  'Digital Transformation',
  'API Development',
];

const products = [
  'Business Automation Systems',
  'Custom SaaS Platforms',
  'EdTech Solutions',
  'Analytics Dashboards',
  'Internal Admin Portals',
];

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Case Studies', to: '/casestudies' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog & Insights', to: '/blogs' },
  { label: 'Contact Us', to: '/contact' },
];

function SectionIcon({ color = '#60a5fa', children }) {
  return (
    <span
      style={{ color }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/4"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function Chevron({ color = 'currentColor' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3.5 10.5 8 6 12.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#111827] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(147,51,234,0.10),_transparent_24%)]" />

      {/* Main footer content with generous 2-inch side gaps for a high-end 'boxed' layout */}
      <div className="relative pb-8 pt-20">
        <div className="mx-auto max-w-[1400px] px-8 sm:px-14 lg:px-24 xl:px-[192px]">
          <div className="grid grid-cols-1 gap-14 xl:grid-cols-[1.2fr_1fr_0.95fr_0.95fr_1.1fr]">
            {/* Column 1 - Brand Info */}
            <div>
              <Link to="/" className="mb-7 flex items-center gap-4 w-max">
                <img src={agraniLogo} alt="Agrani Digital" className="h-16 w-auto rounded-2xl bg-white p-1.5 shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                <div>
                  <div className="font-['Outfit'] text-[22px] font-[800] tracking-[-0.03em] text-white">Agrani Digital</div>
                  <div className="text-[14px] font-medium text-[#7cb0ff]">Building AI-Powered Software & SaaS</div>
                </div>
              </Link>

              <p className="max-w-[320px] text-[17px] leading-10 text-[#e5e7eb]">
                Transforming businesses with AI, cloud engineering, automation, and custom digital platforms built for growth.
              </p>

              <div className="mt-10 max-w-[420px] rounded-[24px] border border-white/6 bg-white/[0.06] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
                <div className="mb-5 flex items-center gap-3 text-[20px] font-[800] tracking-[-0.03em] text-white">
                  <SectionIcon color="#60a5fa">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2 15 8l6 .9-4.4 4.3 1 6.1L12 16.8 6.4 21.3l1-6.1L3 8.9 9 8l3-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </SectionIcon>
                  <span>Our Progress</span>
                </div>
                <div className="space-y-4 text-[16px] text-[#dbe4f3]">
                  <div className="flex items-center justify-between">
                    <span>Projects Delivered</span>
                    <span className="text-[18px] font-[800] text-white">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Happy Clients</span>
                    <span className="text-[18px] font-[800] text-white">10+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div>
              <div className="mb-7 flex items-center gap-3 font-['Outfit'] text-[20px] font-[800] tracking-[-0.03em] text-white">
                <SectionIcon color="#60a5fa">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 0 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 0-2-2V9m0 0h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </SectionIcon>
                <span>Services</span>
              </div>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item}>
                    <Link to="/expertise" className="group flex items-start gap-3 text-[17px] text-[#dce4f2] transition-colors hover:text-[#60a5fa]">
                      <span className="mt-1 text-[#60a5fa] transition-transform group-hover:translate-x-1"><Chevron color="#60a5fa" /></span>
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Products */}
            <div>
              <div className="mb-7 flex items-center gap-3 font-['Outfit'] text-[20px] font-[800] tracking-[-0.03em] text-white">
                <SectionIcon color="#4ade80">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3c2.8 0 5 2.2 5 5 0 4.6-5 10-5 10S7 12.6 7 8c0-2.8 2.2-5 5-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5.5c1.4 0 2.5 1.1 2.5 2.5S13.4 10.5 12 10.5 9.5 9.4 9.5 8 10.6 5.5 12 5.5Z" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </SectionIcon>
                <span>Products</span>
              </div>
              <ul className="space-y-4">
                {products.map((item) => (
                  <li key={item}>
                    <Link to="/solutions" className="group flex items-start gap-3 text-[17px] text-[#dce4f2] transition-colors hover:text-[#4ade80]">
                      <span className="mt-1 text-[#4ade80] transition-transform group-hover:translate-x-1"><Chevron color="#4ade80" /></span>
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Company */}
            <div>
              <div className="mb-7 flex items-center gap-3 font-['Outfit'] text-[20px] font-[800] tracking-[-0.03em] text-white">
                <SectionIcon color="#c084fc">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 3h10a2 2 0 0 1 2 2v14l-3-2-2 2-2-2-2 2-3-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 8h6M9 12h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </SectionIcon>
                <span>Company</span>
              </div>
              <ul className="space-y-4">
                {company.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="group flex items-start gap-3 text-[17px] text-[#dce4f2] transition-colors hover:text-[#c084fc]">
                      <span className="mt-1 text-[#c084fc] transition-transform group-hover:translate-x-1"><Chevron color="#c084fc" /></span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 - Contact Info */}
            <div>
              <div className="mb-7 flex items-center gap-3 text-[20px] font-[800] tracking-[-0.03em] text-white">
                <SectionIcon color="#f87171">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </SectionIcon>
                <span>Contact Info</span>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#274298] text-[#9fc0ff]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s6-3.9 6-10a6 6 0 1 0-12 0c0 6.1 6 10 6 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-2 text-[18px] font-[800] text-white">Headquarters</div>
                    <p className="text-[16px] leading-9 text-[#dce4f2]">BM Magnolia Park, Whitefield, Bangalore, Karnataka 560066</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#175f3e] text-[#7ae1a8]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16.2v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.4 19.4 0 0 1 4 10.8 19.8 19.8 0 0 1 .8 2.2 2 2 0 0 1 2.8 0h2a2 2 0 0 1 2 1.7c.1.9.4 1.8.8 2.6A2 2 0 0 1 7 6.5L5.7 7.8a16 16 0 0 0 10.5 10.5l1.3-1.3a2 2 0 0 1 2.2-.5c.8.4 1.7.7 2.6.8A2 2 0 0 1 21 16.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-2 text-[18px] font-[800] text-white">Phone Number</div>
                    <a href="tel:+919263568706" className="text-[16px] text-[#dce4f2] transition-colors hover:text-[#7ae1a8]">+91 9263568706</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5c2490] text-[#d6a6ff]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="m5 7 7 6 7-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-2 text-[18px] font-[800] text-white">Email Address</div>
                    <a href="mailto:contact@agranidigital.com" className="text-[16px] text-[#dce4f2] transition-colors hover:text-[#d6a6ff]">contact@agranidigital.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/8 pt-7">
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] bg-white/[0.05] px-5 py-4">
                  <div className="flex items-center gap-3 text-[16px] text-white">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1f325f] text-[#7cb0ff]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Global Delivery</span>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#3064ea] px-6 py-3 text-[16px] font-[700] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#2557da]">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Get Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-6 text-[13px] text-[#94a3b8] md:flex-row md:items-center md:justify-between">
            <p>© 2026 AGRANI DIGITAL. ALL RIGHTS RESERVED.</p>
            <p>Built for AI-led digital transformation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;