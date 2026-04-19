import React, { useState, useEffect } from 'react';

const ContactDrawer = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset form states when drawer is opened or closed smoothly
  useEffect(() => {
    if (!isOpen) {
      // Delay resetting state until drawer finishes closing animation
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Roke ga page refresh ko
    setIsSubmitting(true);
    
    // Fake network request to simulate submission (e.g. email sending)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto close after showing success message
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-gray-900/30 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[480px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-[24px] font-[500] text-gray-900 mb-1">Initiate Contact</h2>
            <p className="text-[15px] font-light text-gray-500">Tell us about your transformation goals</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors mb-4 focus:outline-none">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form wrapped around the entire scrolling body + footer */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          
          <div className="flex-1 overflow-y-auto px-8 py-6" style={{ scrollbarWidth: 'thin' }}>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 animate-[fadeIn_0.5s_ease]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-2">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-[600] text-gray-900">Request Received!</h3>
                <p className="text-[15px] font-light text-gray-500 text-center max-w-[280px]">We'll review your transformation goals and reach out to you shortly.</p>
              </div>
            ) : (
              <div className="flex flex-col space-y-7">
                <div className="flex flex-col space-y-2.5">
                  <label className="text-[11px] font-[800] tracking-[0.1em] text-gray-900 uppercase">FULL NAME *</label>
                  <input required type="text" defaultValue="John Smith" className="w-full px-4 py-3.5 rounded-[8px] border border-[#05a6a6] focus:outline-none focus:ring-1 focus:ring-[#05a6a6] text-[15px] text-gray-900 shadow-[0_0_0_4px_rgba(5,166,166,0.1)] transition-shadow" />
                </div>

                <div className="flex flex-col space-y-2.5">
                  <label className="text-[11px] font-[800] tracking-[0.1em] text-gray-900 uppercase">EMAIL *</label>
                  <input required type="email" defaultValue="john@company.com" className="w-full px-4 py-3.5 rounded-[8px] border border-gray-200 focus:outline-none focus:border-[#05a6a6] text-[15px] text-gray-500" />
                </div>

                <div className="flex flex-col space-y-2.5">
                  <label className="text-[11px] font-[800] tracking-[0.1em] text-gray-900 uppercase">COMPANY</label>
                  <input type="text" defaultValue="Acme Corporation" className="w-full px-4 py-3.5 rounded-[8px] border border-gray-200 focus:outline-none focus:border-[#05a6a6] text-[15px] text-gray-500" />
                </div>

                <div className="flex flex-col space-y-2.5 relative">
                  <label className="text-[11px] font-[800] tracking-[0.1em] text-gray-900 uppercase">SERVICE INTEREST *</label>
                  <select required className="w-full px-4 py-3.5 rounded-[8px] border border-gray-200 focus:outline-none focus:border-[#05a6a6] text-[15px] text-gray-500 appearance-none bg-white">
                    <option value="">Select a service</option>
                    <option value="cloud">Cloud Migration</option>
                    <option value="ai">AI / Machine Learning</option>
                    <option value="security">Cybersecurity</option>
                    <option value="data">Data Engineering</option>
                  </select>
                  <div className="absolute right-4 top-[42px] pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                <div className="flex flex-col space-y-2.5 relative">
                  <label className="text-[11px] font-[800] tracking-[0.1em] text-gray-900 uppercase">TIMELINE</label>
                  <select className="w-full px-4 py-3.5 rounded-[8px] border border-gray-200 focus:outline-none focus:border-[#05a6a6] text-[15px] text-gray-500 appearance-none bg-white">
                    <option>Select timeline</option>
                    <option>Immediately</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>6+ months</option>
                  </select>
                  <div className="absolute right-4 top-[42px] pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                <div className="flex flex-col space-y-2.5">
                  <label className="text-[11px] font-[800] tracking-[0.1em] text-gray-900 uppercase">PROJECT DETAILS *</label>
                  <textarea required rows="4" placeholder="Describe your transformation goals..." className="w-full px-4 py-3.5 rounded-[8px] border border-gray-200 focus:outline-none focus:border-[#05a6a6] text-[15px] text-gray-700 resize-none"></textarea>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action Buttons */}
          <div className="p-8 border-t border-gray-100 flex gap-4 bg-white shrink-0">
            {!isSuccess ? (
              <>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 py-4 bg-gradient-to-r from-[#05a6a6] to-[#6d3ee8] rounded-[8px] text-white text-[12px] font-[700] tracking-[0.1em] uppercase hover:shadow-[0_8px_20px_rgba(109,62,232,0.25)] transition-all duration-300 flex justify-center items-center disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <span>Submit Request</span>
                  )}
                </button>
                <button 
                  type="button" 
                  onClick={onClose} 
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-white border border-gray-200 rounded-[8px] text-gray-900 text-[12px] font-[700] tracking-[0.1em] uppercase hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button 
                type="button" 
                onClick={onClose} 
                className="w-full py-4 bg-[#f1f5f9] text-gray-700 rounded-[8px] text-[12px] font-[700] tracking-[0.1em] uppercase hover:bg-[#e2e8f0] transition-colors"
              >
                Close Window
              </button>
            )}
          </div>
          
        </form>
      </div>
    </>
  );
};

export default ContactDrawer;
