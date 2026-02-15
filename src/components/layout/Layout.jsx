import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from '../ui/CookieBanner';

const Layout = () => {
  return (
    <div className="min-h-screen bg-butter font-sans text-charcoal selection:bg-gold/20 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
