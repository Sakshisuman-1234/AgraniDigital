import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CTA from '../Components/CTA';

const EXPERTISE = () => {

  const capabilities = [
    {
      title: "Cloud Platforms",
      icon: (
        <svg className="w-6 h-6 text-[#05a6a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "group-hover:text-[#05a6a6]",
      bg: "bg-[#0aaeb4]",
      items: ['AWS Solutions Architect', 'Azure Cloud Design', 'GCP Infrastructure', 'Multi-cloud Strategy', 'FinOps & Cost Optimization', 'Container Orchestration']
    },
    {
      title: "Data Systems",
      icon: (
        <svg className="w-6 h-6 text-[#6d3ee8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "group-hover:text-[#6d3ee8]",
      bg: "bg-[#6d3ee8]",
      items: ['Data Warehouse Design', 'Stream Processing', 'Data Lake Architecture', 'ETL/ELT Pipelines', 'Business Intelligence', 'Data Governance']
    },
    {
      title: "AI Platforms",
      icon: (
        <svg className="w-6 h-6 text-[#e11d48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "group-hover:text-[#e11d48]",
      bg: "bg-[#e11d48]",
      items: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'MLOps Implementation', 'Generative AI', 'Responsible AI']
    },
    {
      title: "Security",
      icon: (
        <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "group-hover:text-[#0ea5e9]",
      bg: "bg-[#0ea5e9]",
      items: ['Security Architecture', 'Threat Detection', 'Identity Management', 'SOC Operations', 'Compliance Automation', 'Penetration Testing']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Top Spacer */}
      <div className="h-[120px] w-full bg-[#f8fafc]"></div>

      {/* Page Header Area */}
      <div className="w-full bg-[#f8fafc] pb-24 relative overflow-hidden">
        {/* Soft glowing orbs */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#05a6a6] opacity-[0.03] rounded-full blur-[100px]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6d3ee8] opacity-[0.03] rounded-full blur-[80px]"></div>

        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
          <div className="pt-10 mb-20 text-center lg:text-left lg:max-w-3xl">
            <h4 className="text-[12px] font-[800] tracking-[0.14em] text-[#05a6a6] uppercase mb-4">EXPERTISE</h4>
            <h1 className="text-[48px] md:text-[60px] font-[500] text-[#111827] leading-tight tracking-tight mb-6">
              Technical Capabilities
            </h1>
            <p className="text-[18px] text-gray-500 font-light leading-[1.8]">
              We deliver enterprise-grade architecture across cloud infrastructure, deep data networks, AI integrations, and zero-trust security ecosystems.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[24px] border border-gray-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  {cap.icon}
                </div>
                <h5 className={`text-[20px] font-[600] text-gray-900 mb-6 transition-colors duration-300 ${cap.color}`}>
                  {cap.title}
                </h5>
                <ul className="space-y-4">
                  {cap.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-[14.5px] text-[#64748b] font-light leading-snug">
                      <span className={`w-1.5 h-1.5 rounded-full ${cap.bg} mt-1.5 opacity-50 group-hover:opacity-100 transition-opacity shrink-0`}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Block */}
      <div className="w-full bg-white py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="w-full bg-gradient-to-br from-[#fafcfc] to-white rounded-[32px] border border-[#eff3f7] p-10 md:p-14 shadow-sm relative overflow-hidden">
            {/* Decortive backdrop for certifications */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-teal-50 opacity-50 rounded-tl-full pointer-events-none"></div>

            <h3 className="text-[28px] font-[500] text-gray-900 mb-10 relative z-10">Certifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* CLOUD */}
              <div className="flex flex-col space-y-4">
                <h5 className="text-[11px] font-[800] tracking-[0.16em] text-[#05a6a6] uppercase mb-2">CLOUD</h5>
                <ul className="space-y-4 border-l-2 border-teal-50 pl-4">
                  {['AWS Solutions Architect Pro', 'Azure Solutions Expert', 'GCP Professional Architect', 'Kubernetes Administrator'].map((cert, i) => (
                    <li key={i} className="text-[15px] text-[#475569] font-light hover:text-gray-900 transition-colors cursor-pointer">{cert}</li>
                  ))}
                </ul>
              </div>

              {/* AI/ML */}
              <div className="flex flex-col space-y-4">
                <h5 className="text-[11px] font-[800] tracking-[0.16em] text-[#05a6a6] uppercase mb-2">AI / ML</h5>
                <ul className="space-y-4 border-l-2 border-teal-50 pl-4">
                  {['TensorFlow Developer', 'AWS ML Specialty', 'Google Cloud ML Engineer', 'MLOps Professional'].map((cert, i) => (
                    <li key={i} className="text-[15px] text-[#475569] font-light hover:text-gray-900 transition-colors cursor-pointer">{cert}</li>
                  ))}
                </ul>
              </div>

              {/* SECURITY */}
              <div className="flex flex-col space-y-4">
                <h5 className="text-[11px] font-[800] tracking-[0.16em] text-[#05a6a6] uppercase mb-2">SECURITY</h5>
                <ul className="space-y-4 border-l-2 border-teal-50 pl-4">
                  {['CISSP', 'CISM', 'AWS Security Specialty', 'CompTIA Security+'].map((cert, i) => (
                    <li key={i} className="text-[15px] text-[#475569] font-light hover:text-gray-900 transition-colors cursor-pointer">{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA />
      <Footer />
    </div>
  );
};

export default EXPERTISE;
