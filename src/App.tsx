/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { WallboxSection } from './components/WallboxSection';
import { QDCBeforeAfterSection } from './components/QDCBeforeAfterSection';
import { ArtLaudosSection } from './components/ArtLaudosSection';
import { ServicesGrid } from './components/ServicesGrid';
import { RealWorksGallery } from './components/RealWorksGallery';
import { BudgetSimulator } from './components/BudgetSimulator';
import { LocationsSection } from './components/LocationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-500 selection:text-black">
      {/* Top Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <WallboxSection />
        <QDCBeforeAfterSection />
        <ArtLaudosSection />
        <ServicesGrid />
        <RealWorksGallery />
        <BudgetSimulator />
        <LocationsSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast WhatsApp Conversion Pill */}
      <FloatingWhatsApp />
    </div>
  );
}
