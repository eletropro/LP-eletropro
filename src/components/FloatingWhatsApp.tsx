import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Balão de Dica */}
      {showTooltip && (
        <div className="bg-slate-900 border border-slate-700 text-slate-100 p-3.5 rounded-2xl shadow-2xl max-w-xs animate-bounce duration-1000 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-white"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5 pr-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-400 text-slate-950 flex items-center justify-center font-bold shrink-0 mt-0.5">
              ⚡
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>EletroPRO Plantão</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                Orçamento rápido para <strong>Wallbox e Quadros de Luz</strong> em Brasília!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={createWhatsAppUrl("Olá! Gostaria de falar com o eletricista da EletroPRO para um orçamento.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer orçamento pelo WhatsApp"
        className="group relative flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold py-3.5 px-6 rounded-full shadow-2xl shadow-yellow-400/25 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-slate-950" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-slate-950 rounded-full animate-pulse"></span>
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold text-slate-900 leading-none">
            Atendimento Rápido
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wide leading-tight">
            Faça seu Orçamento
          </span>
        </div>
      </a>
    </div>
  );
};
