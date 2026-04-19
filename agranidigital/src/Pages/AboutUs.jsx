import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CTA from '../Components/CTA';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans overflow-x-hidden">
      {/* Include global Navbar */}
      <Navbar />
      
      {/* Top Spacer to account for absolute Navbar */}
      <div className="h-[120px] w-full bg-white"></div>

      <div className="w-full flex-grow bg-white">
        <div className="w-full max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column (About Us Story) */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="inline-block mb-6">
              <h4 className="text-[12px] font-[800] tracking-[0.18em] text-[#05a6a6] uppercase relative drop-shadow-sm">
                ABOUT US
              </h4>
            </div>
            
            <h2 className="text-[40px] md:text-[56px] font-[500] text-[#111827] mb-8 leading-tight tracking-tight">
              Agrani Digital
            </h2>
            
            <div className="text-[17px] text-gray-500 font-light leading-[1.8] space-y-6">
              <p>
                Founded on the principle that enterprises need cloud-native, scalable digital infrastructure, Agrani Digital architects resilient and high-performance technology ecosystems.
              </p>
              <p>
                Our engineering teams combine deep platform expertise with emerging technologies in cloud computing, AI/ML, and enterprise security. We are dedicated to building systems tailored for the quantum era.
              </p>
            </div>
          </div>

          {/* Right Column (Core Principles) */}
          <div className="lg:w-1/2 flex flex-col lg:pl-10">
            <h4 className="text-[12px] font-[800] tracking-[0.18em] text-[#6d3ee8] uppercase mb-10 pt-2">
              PRINCIPLES
            </h4>
            
            {/* Principles List with custom Timeline style border */}
            <div className="flex flex-col space-y-12 border-l border-gray-100 pl-8 relative">
              
              <div className="relative group hover:-translate-y-1 transition-transform duration-300">
                {/* Dot Indicator */}
                <div className="absolute -left-[36.5px] top-1.5 w-2 h-2 rounded-full bg-[#e2e8f0] group-hover:bg-[#6d3ee8] ring-4 ring-white transition-colors duration-300"></div>
                <h5 className="text-[18px] font-[600] text-gray-900 mb-2">Cloud Native</h5>
                <p className="text-[15px] text-gray-500 font-light leading-snug">Infrastructure designed strategically for scalability and resilience across diverse regions.</p>
              </div>

              <div className="relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -left-[36.5px] top-1.5 w-2 h-2 rounded-full bg-[#e2e8f0] group-hover:bg-[#05a6a6] ring-4 ring-white transition-colors duration-300"></div>
                <h5 className="text-[18px] font-[600] text-gray-900 mb-2">Automation First</h5>
                <p className="text-[15px] text-gray-500 font-light leading-snug">Self-healing, automated system architectures to reduce operational overhead.</p>
              </div>

              <div className="relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -left-[36.5px] top-1.5 w-2 h-2 rounded-full bg-[#e2e8f0] group-hover:bg-[#e11d48] ring-4 ring-white transition-colors duration-300"></div>
                <h5 className="text-[18px] font-[600] text-gray-900 mb-2">Zero Trust</h5>
                <p className="text-[15px] text-gray-500 font-light leading-snug">Identity-centric security enforced strictly at every layer of the network.</p>
              </div>

              <div className="relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -left-[36.5px] top-1.5 w-2 h-2 rounded-full bg-[#e2e8f0] group-hover:bg-[#0ea5e9] ring-4 ring-white transition-colors duration-300"></div>
                <h5 className="text-[18px] font-[600] text-gray-900 mb-2">Data Driven</h5>
                <p className="text-[15px] text-gray-500 font-light leading-snug">Insights-powered decision making integrated across all core business operations.</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Global Call to Action block before Footer */}
      <CTA />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
