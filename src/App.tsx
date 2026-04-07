import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="bg-white font-body text-on-background min-h-screen selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Decorative grain overlay for premium feel */}
      <div className="grain-overlay"></div>
      
      <Navbar />
      
      <Home />
      
      <Footer />
    </div>
  );
}
