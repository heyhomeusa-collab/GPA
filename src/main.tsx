import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find root element');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
      <SpeedInsights />
      <Analytics />
    </LanguageProvider>
  </React.StrictMode>
);
