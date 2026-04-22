import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import EXPERTISE from './Pages/EXPERTISE'
import SOLUTION from './Pages/SOLUTION'
import CASESTUDY from './Pages/CASESTUDY'
import CAREERS from './Pages/CAREERS'
import BLOGS from './Pages/BLOGS'
import CONTACT from './Pages/CONTACT'
import Login from './Pages/Login'
import ScheduleCall from './Pages/ScheduleCall'
import FreeConsultation from './Pages/FreeConsultation'
import SolutionDetail from './Pages/SolutionDetail'
import ContactDrawer from './Components/ContactDrawer'
import './App.css'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Since we built the pages as complete standalone pages that include their own Navbar and Footer,
  // we will just route them directly here.
  // Note: To make global ContactDrawer work everywhere without refactoring all pages, 
  // we keep the ContactDrawer at the global app level. Since they include their own <Navbar>, 
  // clicking "CONTACT" won't natively open this drawer unless we pass the prop or use Context.
  // However, the user has a full /contact route now anyway! Let's ensure Navbar navigates to /contact.

  return (
    <div className="w-full relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/expertise" element={<EXPERTISE />} />
        <Route path="/solutions" element={<SOLUTION />} />
        <Route path="/casestudies" element={<CASESTUDY />} />
        <Route path="/careers" element={<CAREERS />} />
        <Route path="/blogs" element={<BLOGS />} />
        <Route path="/contact" element={<CONTACT />} />
        <Route path="/login" element={<Login />} />
        <Route path="/schedule" element={<ScheduleCall />} />
        <Route path="/consultation" element={<FreeConsultation />} />
        
        {/* Dynamic Detail Routes */}
        <Route path="/services/:id" element={<SolutionDetail />} />
        <Route path="/products/:id" element={<SolutionDetail />} />
        <Route path="/industries/:id" element={<SolutionDetail />} />
        <Route path="/case-studies/:id" element={<SolutionDetail />} />
        
        {/* Landing Page Routes (Clicking the main labels) */}
        <Route path="/services" element={<EXPERTISE />} />
        <Route path="/products" element={<SOLUTION />} />
        <Route path="/industries" element={<SolutionDetail />} />
        <Route path="/corporate" element={<AboutUs />} />
        
        {/* Corporate & Misc Routes mapped to Dynamic View */}
        <Route path="/mission" element={<SolutionDetail />} />
        <Route path="/leadership" element={<SolutionDetail />} />
        <Route path="/values" element={<SolutionDetail />} />
        <Route path="/life" element={<SolutionDetail />} />
        <Route path="/internships" element={<SolutionDetail />} />
        <Route path="/demo" element={<SolutionDetail />} />
        <Route path="/contact/sales" element={<SolutionDetail />} />
      </Routes>
      
      {/* Global Contact Drawer mapping (optional fallback if needed) */}
      <ContactDrawer 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  )
}

export default App
