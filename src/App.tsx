import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Legal } from './pages/Legal';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <Router>
      <div className="bg-white font-body text-on-background min-h-screen selection:bg-secondary-container selection:text-on-secondary-container">
        {/* Decorative grain overlay for premium feel */}
        <div className="grain-overlay"></div>
        
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/terms" element={<Legal />} />
          <Route path="/privacy" element={<Legal />} />
        </Routes>
      </div>
    </Router>
  );
}
