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

      {/* Main footer content with optimized responsive spacing */}
      <div className="relative pb-8 pt-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr_1.3fr] xl:gap-8">
            {/* Column 1 - Brand Info */}
            <div className="sm:col-span-2 lg:col-span-4 xl:col-span-1">
              <Link to="/" className="mb-7 flex items-center gap-4 w-max">
                <img src={agraniLogo} alt="Agrani Digital" className="h-14 w-auto rounded-xl bg-white p-1 shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                <div>
                  <div className="font-['Outfit'] text-[22px] font-[800] tracking-[-0.03em] text-white">Agrani Digital</div>
                  <div className="text-[13px] font-medium text-[#7cb0ff]">Building AI-Powered Software & SaaS</div>
                </div>
              </Link>

              <p className="max-w-[320px] text-[16px] leading-relaxed text-[#e5e7eb]">
                Transforming businesses with AI, cloud engineering, automation, and custom digital platforms built for growth.
              </p>

              <div className="mt-8 max-w-[350px] rounded-[20px] border border-white/6 bg-white/[0.04] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.06]">
                <div className="mb-4 flex items-center gap-3 text-[18px] font-[800] tracking-[-0.03em] text-white">
                  <SectionIcon color="#60a5fa">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2 15 8l6 .9-4.4 4.3 1 6.1L12 16.8 6.4 21.3l1-6.1L3 8.9 9 8l3-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </SectionIcon>
                  <span>Our Progress</span>
                </div>
                <div className="space-y-3 text-[15px] text-[#dbe4f3]">
                  <div className="flex items-center justify-between">
                    <span>Projects Delivered</span>
                    <span className="text-[17px] font-[800] text-white">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Happy Clients</span>
                    <span className="text-[17px] font-[800] text-white">10+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div>
              <div className="mb-6 flex items-center gap-3 font-['Outfit'] text-[18px] font-[800] tracking-[-0.03em] text-white">
                <SectionIcon color="#60a5fa">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 0 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 0-2-2V9m0 0h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </SectionIcon>
                <span>Services</span>
              </div>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item}>
                    <Link to="/expertise" className="group flex items-center gap-3 text-[16px] text-[#dce4f2] transition-colors hover:text-[#60a5fa]">
                       <span className="text-[#60a5fa] transition-transform group-hover:translate-x-1"><Chevron color="#60a5fa" /></span>
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Products */}
            <div>
              <div className="mb-6 flex items-center gap-3 font-['Outfit'] text-[18px] font-[800] tracking-[-0.03em] text-white">
                <SectionIcon color="#4ade80">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3c2.8 0 5 2.2 5 5 0 4.6-5 10-5 10S7 12.6 7 8c0-2.8 2.2-5 5-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5.5c1.4 0 2.5 1.1 2.5 2.5S13.4 10.5 12 10.5 9.5 9.4 9.5 8 10.6 5.5 12 5.5Z" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </SectionIcon>
                <span>Products</span>
              </div>
              <ul className="space-y-3">
                {products.map((item) => (
                  <li key={item}>
                    <Link to="/solutions" className="group flex items-center gap-3 text-[16px] text-[#dce4f2] transition-colors hover:text-[#4ade80]">
                       <span className="text-[#4ade80] transition-transform group-hover:translate-x-1"><Chevron color="#4ade80" /></span>
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Company */}
            <div>
              <div className="mb-6 flex items-center gap-3 font-['Outfit'] text-[18px] font-[800] tracking-[-0.03em] text-white">
                <SectionIcon color="#c084fc">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 3h10a2 2 0 0 1 2 2v14l-3-2-2 2-2-2-2 2-3-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 8h6M9 12h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </SectionIcon>
                <span>Company</span>
              </div>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="group flex items-center gap-3 text-[16px] text-[#dce4f2] transition-colors hover:text-[#c084fc]">
                       <span className="text-[#c084fc] transition-transform group-hover:translate-x-1"><Chevron color="#c084fc" /></span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 - Contact Info */}
            <div className="sm:col-span-2 lg:col-span-1 border-t border-white/5 pt-8 sm:mt-4 lg:border-none lg:pt-0 lg:mt-0 xl:pl-4">
              <div className="mb-6 flex items-center gap-3 text-[18px] font-[800] tracking-[-0.03em] text-white">
                <SectionIcon color="#f87171">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </SectionIcon>
                <span>Contact Info</span>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#274298] text-[#9fc0ff]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s6-3.9 6-10a6 6 0 1 0-12 0c0 6.1 6 10 6 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-1 text-[16px] font-[800] text-white">Headquarters</div>
                    <p className="text-[15px] leading-relaxed text-[#dce4f2]">BM Magnolia Park, Whitefield, Bangalore, Karnataka 560066</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#175f3e] text-[#7ae1a8]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16.2v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.4 19.4 0 0 1 4 10.8 19.8 19.8 0 0 1 .8 2.2 2 2 0 0 1 2.8 0h2a2 2 0 0 1 2 1.7c.1.9.4 1.8.8 2.6A2 2 0 0 1 7 6.5L5.7 7.8a16 16 0 0 0 10.5 10.5l1.3-1.3a2 2 0 0 1 2.2-.5c.8.4 1.7.7 2.6.8A2 2 0 0 1 21 16.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-1 text-[16px] font-[800] text-white">Phone Number</div>
                    <a href="tel:+919263568706" className="text-[15px] text-[#dce4f2] transition-colors hover:text-[#7ae1a8]">+91 9263568706</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5c2490] text-[#d6a6ff]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="m5 7 7 6 7-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-1 text-[16px] font-[800] text-white">Email Address</div>
                    <a href="mailto:contact@agranidigital.com" className="text-[15px] text-[#dce4f2] transition-colors hover:text-[#d6a6ff]">contact@agranidigital.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/[0.04] p-4 backdrop-blur-sm border border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f325f] text-[#7cb0ff]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[15px] font-medium text-white">Global<br/>Delivery</span>
                  </div>
                  <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#3064ea] px-5 py-2.5 text-[15px] font-[700] text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#2557da]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-[14px] text-[#94a3b8] md:flex-row md:items-center md:justify-between">
            <p>© 2026 AGRANI DIGITAL. ALL RIGHTS RESERVED.</p>
            <p>Built for AI-led digital transformation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;