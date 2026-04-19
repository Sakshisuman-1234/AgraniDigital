import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import CTA from '../Components/CTA';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
