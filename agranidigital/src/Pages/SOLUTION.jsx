import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CTA from '../Components/CTA';

const SOLUTION = () => {

  const solutionsData = [
    {
      id: 1,
      title: "Digital Transformation",
      description: "Modern cloud architecture for scalable enterprise solutions",
      icon: (
        <svg className="w-6 h-6 text-[#05a6a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      iconBg: "bg-[#e6f6f6]",
      features: [
        "Cloud-native infrastructure design",
        "Edge computing deployment",
        "CI/CD pipeline automation",
        "Microservices architecture",
        "API ecosystem development",
        "Legacy system modernization"
      ]
    },
    {
      id: 2,
      title: "Data & AI Engineering",
      description: "Unlocking enterprise intelligence through scalable data and machine learning architectures",
      icon: (
        <svg className="w-6 h-6 text-[#6d3ee8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      iconBg: "bg-[#f3f0fd]",
      features: [
        "Real-time streaming pipelines",
        "Predictive analytics engines",
        "Centralized data lakes & warehouses",
        "Computer vision systems",
        "Generative AI integrations",
        "Automated data governance"
      ]
    },
    {
      id: 3,
      title: "Enterprise Security Architecture",
      description: "Identity-centric zero-trust networks designed for a borderless operational environment",
      icon: (
        <svg className="w-6 h-6 text-[#e11d48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconBg: "bg-[#fce8ed]",
      features: [
        "Zero-trust network deployments",
        "24/7 automated SOC operations",
        "Advanced threat hunting algorithms",
        "Identity & Access Management (IAM)",
        "Compliance automation pipelines",
        "Cloud security posture management"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Top Spacer */}
      <div className="h-[120px] w-full bg-white"></div>

      <div className="w-full flex-grow relative overflow-hidden pb-32">
        {/* Subtle grid background for the overarching enterprise feel */}
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>

        {/* Page Header */}
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-16 pb-20 relative z-10 text-center lg:text-left">
          <h4 className="text-[12px] font-[800] tracking-[0.2em] text-[#05a6a6] uppercase mb-5">CAPABILITIES</h4>
          
          <h1 className="text-[52px] md:text-[68px] font-[500] text-[#111827] mb-6 tracking-tight leading-tight relative inline-block">
             Solutions
             <span className="absolute -right-6 top-2 h-10 w-[2px] bg-[#05a6a6] animate-[pulse_1s_infinite]"></span>
          </h1>
          
          <p className="text-[18px] md:text-[22px] text-gray-500 font-light max-w-2xl leading-[1.7] mt-2">
            Enterprise-grade technology solutions designed for modern businesses.
          </p>
        </div>

        {/* Solutions Mega Cards */}
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 flex flex-col space-y-16 relative z-10">
          {solutionsData.map((solution) => (
            <div 
              key={solution.id} 
              className="w-full bg-[#fcfdfd] border border-[#eff3f7] rounded-[32px] p-8 md:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              
              <div className="mb-10">
                <div className={`w-14 h-14 rounded-[16px] ${solution.iconBg} flex items-center justify-center mb-6`}>
                  {solution.icon}
                </div>
                <h2 className="text-[32px] md:text-[38px] font-[600] text-gray-900 mb-3 tracking-tight">
                  {solution.title}
                </h2>
                <p className="text-[17px] text-gray-500 font-light leading-[1.6]">
                  {solution.description}
                </p>
              </div>

              {/* 2-Column Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#05a6a6] shrink-0"></span>
                     <span className="text-[15.5px] text-[#475569] font-light">{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      <CTA />
      <Footer />
    </div>
  );
};

export default SOLUTION;
