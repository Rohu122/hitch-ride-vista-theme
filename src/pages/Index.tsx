
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LoginSection from '@/components/LoginSection';
import ReserveSection from '@/components/ReserveSection';
import DriverSection from '@/components/DriverSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <LoginSection />
        <ReserveSection />
        <DriverSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
