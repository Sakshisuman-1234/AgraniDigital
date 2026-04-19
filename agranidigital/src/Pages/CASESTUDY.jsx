import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CTA from '../Components/CTA';

const CASESTUDY = () => {
  const caseStudiesData = [
    {
      title: 'Retail Dynamics Corp',
      tag: 'Retail',
      challenge: 'Inability to predict demand in volatile market conditions leading to massive inventory overhead.',
      solution: 'ML-powered demand forecasting with seamless real-time inventory sync across 500+ locations.',
      results: [
        '95% forecast accuracy',
        '40% reduction in waste',
        'Real-time inventory tracking'
      ],
      techStack: ['OpenAI', 'AWS', 'Tableau']
    },
    {
      title: 'Industrial Automation Ltd',
      tag: 'Manufacturing',
      challenge: 'Critical manufacturing infrastructure increasingly vulnerable to sophisticated cyber threats.',
      solution: 'Implementation of a Zero-trust security architecture monitored by an AI-driven 24/7 SOC.',
      results: [
        'Zero breaches post-deployment',
        '99% threat detection rate',
        'Automated compliance reporting'
      ],
      techStack: ['CrowdStrike', 'Splunk', 'Okta']
    },
    {
      title: 'Global Financial Services',
      tag: 'FinTech',
      challenge: 'Legacy monolithic datacenter systems blocking real-time transaction processing capabilities.',
      solution: 'Complete cloud-native migration to AWS using a modern decoupled microservices architecture.',
      results: [
        '99.99% infrastructure uptime',
        '< 50ms transaction latency',
        'Zero-downtime deployments'
      ],
      techStack: ['AWS', 'Kubernetes', 'Redis']
    },
    {
      title: 'Healthcare Network Alpha',
      tag: 'Healthcare',
      challenge: 'Highly fragmented silos of patient data across 200+ distributed medical facilities.',
      solution: 'Unified centralized data lake architecture with advanced privacy-preserving analytics.',
      results: [
        '360-degree patient data view',
        'Fully HIPAA compliant pipeline',
        '3x faster clinical reporting'
      ],
      techStack: ['GCP', 'BigQuery', 'TensorFlow']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Top Spacer */}
      <div className="h-[120px] w-full bg-[#f8fafc]"></div>

      <div className="w-full flex-grow">
        
        {/* Page Header */}
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-16 pb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="lg:w-1/2">
            <h4 className="text-[12px] font-[800] tracking-[0.15em] text-[#6d3ee8] uppercase mb-4 drop-shadow-sm">
              CASE STUDIES
            </h4>
            <h1 className="text-[48px] md:text-[60px] font-[500] text-[#111827] mb-6 tracking-tight leading-tight">
              Client Outcomes
            </h1>
            <p className="text-[18px] md:text-[20px] text-gray-500 font-light leading-[1.8] max-w-2xl">
              Transformative results across industries. See how we've helped leading enterprises modernize and secure their digital infrastructure.
            </p>
          </div>
          
          <div className="hidden lg:flex lg:w-1/2 justify-end pr-8">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05a6a6] to-[#6d3ee8] rounded-full opacity-10 blur-[60px]"></div>
              {/* Optional Data Visualization Graphic representation */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-white/20 backdrop-blur-md border border-white/50 rounded-[24px] shadow-xl flex items-end justify-center p-6 space-x-4">
                 <div className="w-8 bg-[#05a6a6] rounded-t-md h-12 animate-[pulse_2s_ease-in-out_infinite]"></div>
                 <div className="w-8 bg-[#6d3ee8] rounded-t-md h-24 animate-[pulse_2s_ease-in-out_0.5s_infinite]"></div>
                 <div className="w-8 bg-[#e11d48] rounded-t-md h-16 animate-[pulse_2s_ease-in-out_1s_infinite]"></div>
                 <div className="w-8 bg-[#0ea5e9] rounded-t-md h-28 animate-[pulse_2s_ease-in-out_1.5s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {caseStudiesData.map((study, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[24px] rounded-br-[48px] border border-[#eff3f7] p-8 md:p-12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                {/* Subtle Hover Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-10">
                    <h3 className="text-[26px] font-[600] text-gray-900 group-hover:text-[#6d3ee8] transition-colors pr-10 leading-[1.3]">
                      {study.title}
                    </h3>
                    <span className="px-[14px] py-[6px] rounded-full border border-gray-200 text-[11px] font-mono tracking-widest text-[#64748b] bg-[#fafcfc] uppercase shrink-0 self-start">
                      {study.tag}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-8 flex-grow">
                    <div>
                      <h5 className="text-[11px] font-[800] tracking-[0.15em] text-[#94a3b8] uppercase mb-3">CHALLENGE</h5>
                      <p className="text-[15.5px] text-[#64748b] font-light leading-[1.7]">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h5 className="text-[11px] font-[800] tracking-[0.15em] text-[#94a3b8] uppercase mb-3">SOLUTION</h5>
                      <p className="text-[15.5px] text-[#64748b] font-light leading-[1.7]">{study.solution}</p>
                    </div>

                    <div className="mt-4">
                      <h5 className="text-[11px] font-[800] tracking-[0.15em] text-[#94a3b8] uppercase mb-4">RESULTS</h5>
                      <ul className="space-y-3">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start space-x-3 text-[15px] text-[#05a6a6] font-[500]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#05a6a6] mt-2 shrink-0"></span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-2.5 pt-6 border-t border-gray-100">
                    {study.techStack.map((tech, i) => (
                      <span key={i} className="px-[12px] py-[4px] rounded-full bg-white border border-gray-200 text-[#475569] text-[10.5px] font-[600] tracking-widest uppercase shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CTA />
      <Footer />
    </div>
  );
};

export default CASESTUDY;
