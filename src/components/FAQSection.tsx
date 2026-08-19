import React, { useState } from 'react';
import { FAQ_ITEMS, COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-14 md:py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Perguntas <span className="text-yellow-400">Frequentes</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            Esclarecimentos sobre normas técnicas, ART, Wallbox e condomínios em Brasília.
          </p>
        </div>

        {/* Lista Sanfonada (Accordion) */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all duration-150 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-yellow-400/40 shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {item.q}
                  </span>
                  <div className={`w-6 h-6 rounded-full bg-slate-950 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-yellow-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ainda tem dúvidas? */}
        <div className="mt-8 p-5 bg-slate-900 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">Ainda tem alguma dúvida específica sobre o seu projeto?</div>
            <div className="text-xs text-slate-400">Fale diretamente com o profissional técnico pelo WhatsApp.</div>
          </div>
          
          <a
            href={createWhatsAppUrl("Olá! Tenho uma dúvida sobre instalação de Wallbox/quadro elétrico.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-xs font-extrabold uppercase rounded-lg transition-all shrink-0 shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
