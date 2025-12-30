import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduccion from './components/Introduccion';
import FeatureShowcase from './components/FeatureShowcase';
import FaqSection from './components/FaqSection';
import FooterCTA from './components/FooterCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-white selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Introduccion />
        <FeatureShowcase />
        <FaqSection />
        <FooterCTA />
      </main>
    </div>
  );
};

export default App;