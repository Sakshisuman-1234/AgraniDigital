import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CTA from '../Components/CTA';
import ContactDrawer from '../Components/ContactDrawer';

const CONTACT = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] font-sans overflow-x-hidden">
      {/* Navbar with the ability to trigger the contact drawer globally */}
      <Navbar openContact={() => setIsContactOpen(true)} />
      
      {/* Spacer to clear the absolute Navbar height */}
      <div className="h-[90px] w-full bg-[#fafbfc]"></div>

      {/* Main Content Area focused purely on the CTA action */}
      <div className="flex-grow flex flex-col justify-center w-full relative">
        {/* We reuse the beautiful CTA component seamlessly */}
        <div className="w-full transform scale-110 md:scale-125 transition-transform duration-500 py-10">
            <CTA openContact={() => setIsContactOpen(true)} />
        </div>
        
        {/* Additional Contact Information neatly placed below */}
        <div className="w-full max-w-[800px] mx-auto text-center px-6 pb-20 mt-10">
           <p className="text-[14px] text-gray-500 font-light mb-6">Alternatively, you can reach out directly via our official channels:</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-[15px] font-[500]">
              <div className="flex items-center text-gray-700 hover:text-[#05a6a6] cursor-pointer transition-colors group">
                 <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mr-3 group-hover:shadow-md transition-all">
                    <svg className="w-5 h-5 text-[#05a6a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                 </div>
                 hello@agranidigital.com
              </div>
              <div className="flex items-center text-gray-700 hover:text-[#6d3ee8] cursor-pointer transition-colors group">
                 <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mr-3 group-hover:shadow-md transition-all">
                    <svg className="w-5 h-5 text-[#6d3ee8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                 </div>
                 +1 (555) 019-2834
              </div>
           </div>
        </div>
      </div>

      <Footer />

      {/* Reusable Contact Drawer handled cleanly using state */}
      <ContactDrawer 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};

export default CONTACT;
