import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
