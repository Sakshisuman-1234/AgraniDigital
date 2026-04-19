import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CTA from '../Components/CTA';

const CAREERS = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Cloud Platform Architect',
      type: ['Remote', 'Full-time'],
      description: 'Design scalable cloud architectures for enterprise clients',
      tags: ['AWS', 'Kubernetes', 'Terraform']
    },
    {
      id: 2,
      title: 'Senior ML Engineer',
      type: ['Remote', 'Full-time'],
      description: 'Build and deploy production ML systems at scale',
      tags: ['Python', 'TensorFlow', 'MLOps']
    },
    {
      id: 3,
      title: 'Security Architect',
      type: ['Remote', 'Full-time'],
      description: 'Design and implement enterprise security solutions',
      tags: ['SIEM', 'Zero Trust', 'IAM']
    },
    {
      id: 4,
      title: 'Site Reliability Engineer',
      type: ['Hybrid', 'Full-time'],
      description: 'Ensure five-nines availability across our distributed systems architecture.',
      tags: ['Datadog', 'Go', 'Docker']
    }
  ];

  const benefits = [
    {
      title: "Work From Anywhere",
      desc: "Our async-first culture lets you engineer solutions from wherever you are most productive.",
      icon: (
        <svg className="w-6 h-6 text-[#05a6a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      desc: "Annual budget for certifications (AWS, GCP, CKA) and tech conferences worldwide.",
      icon: (
        <svg className="w-6 h-6 text-[#6d3ee8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Top-Tier Gear",
      desc: "Latest Apple Silicon MacBooks, high-res monitors, and everything you need to build fast.",
      icon: (
        <svg className="w-6 h-6 text-[#e11d48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Top Spacer */}
      <div className="h-[120px] w-full bg-[#fcfdfd]"></div>

      <div className="w-full flex-grow">
        
        {/* Page Header */}
        <div className="max-w-[800px] mx-auto px-6 md:px-10 pt-16 pb-16 text-center">
          <h4 className="text-[12px] font-[800] tracking-[0.14em] text-[#05a6a6] uppercase mb-4 drop-shadow-sm">
            CAREERS
          </h4>
          <h1 className="text-[48px] md:text-[60px] font-[500] text-[#111827] mb-6 tracking-tight">
            Join the Future
          </h1>
          <p className="text-[18px] md:text-[20px] text-gray-500 font-light leading-[1.8]">
            Build tomorrow's technology infrastructure today.
          </p>
        </div>

        {/* Job Openings List */}
        <div className="max-w-[900px] mx-auto px-6 md:px-10 pb-24 flex flex-col space-y-6">
          {jobOpenings.map((job) => (
            <div 
              key={job.id} 
              className="bg-white rounded-[24px] border border-[#eff3f7] p-8 md:p-10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                <h3 className="text-[24px] font-[500] text-[#111827] group-hover:text-[#05a6a6] transition-colors leading-[1.2]">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3 shrink-0">
                  {job.type.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-[16px] py-[6px] rounded-full border border-gray-200 text-[11px] font-mono tracking-wide text-gray-500 shrink-0 bg-[#fafcfc]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-[16px] text-[#64748b] font-light mb-8 max-w-2xl">
                {job.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2.5">
                  {job.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-[14px] py-[6px] rounded-full bg-[#f0fdfa] text-[#0d9488] text-[10px] font-bold tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="hidden md:flex items-center text-[12px] font-[700] text-[#6d3ee8] uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300">
                  <span>Apply Now</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Perks & Benefits Section */}
        <div className="w-full bg-[#f8fafc] border-y border-gray-100 py-24">
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[40px] font-[500] text-[#111827] mb-4">Why Build With Us?</h2>
              <p className="text-[16px] text-gray-500 font-light max-w-2xl mx-auto">We invest deeply in our engineering teams, providing the environment, tools, and culture needed to do your best work.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-[20px] font-[600] text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-[15px] text-gray-500 font-light leading-[1.6]">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <CTA />
      <Footer />
    </div>
  );
};

export default CAREERS;
