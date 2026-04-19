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
