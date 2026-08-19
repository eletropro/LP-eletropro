import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ServicesGrid } from './components/ServicesGrid';
import { QDCBeforeAfterSection } from './components/QDCBeforeAfterSection';
import { CleanPhotoGallery } from './components/CleanPhotoGallery';
import { BudgetSimulator } from './components/BudgetSimulator';
import { LocationsSection } from './components/LocationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-yellow-400 selection:text-black">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo Principal Otimizado no Padrão Loopii */}
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <ServicesGrid />
        <QDCBeforeAfterSection />
        <CleanPhotoGallery />
        <BudgetSimulator />
        <LocationsSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
