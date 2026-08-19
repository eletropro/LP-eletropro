import React from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { Zap, MessageSquare, Phone, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-950 py-12 sm:py-16 lg:py-20 border-b border-slate-800/80 overflow-hidden">
      {/* Glow suave e sutil de fundo estilo Loopii */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-yellow-400/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Badge Minimalista */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
          <Zap className="w-3.5 h-3.5 fill-yellow-400" />
          <span>Eletricista Especialista em Brasília e DF</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Outfit',sans-serif]">
          Instalação de <span className="text-yellow-400">Wallbox</span> e Reforma de <span className="text-yellow-400">Quadro de Distribuição de Circuitos (QDC)</span>
        </h1>

        {/* Subtítulo Direto */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Instalação de carregadores para <strong>GWM Haval, BYD, Volvo, BMW</strong> e modernização de Quadros de Distribuição no padrão NBR 5410/17019. <em>Emissão de ART sob solicitação com custo à parte</em>.
        </p>

        {/* Botões de Ação Imediata */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href={createWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para instalação de Wallbox / Reforma de QDC em Brasília.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wide rounded-xl shadow-lg shadow-yellow-400/20 active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Faça seu Orçamento</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs sm:text-sm font-bold rounded-xl border border-slate-700 hover:border-yellow-400/40 transition-colors"
          >
            <Phone className="w-4 h-4 text-yellow-400" />
            <span>(61) 99351-0110</span>
          </a>
        </div>

        {/* 3 Selos de Confiança Limpos */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left">
          <div className="flex items-center gap-2.5 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs text-slate-200 font-semibold">Opção de ART & Laudo</span>
          </div>
          <div className="flex items-center gap-2.5 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs text-slate-200 font-semibold">Normas NBR 5410 & 17019</span>
          </div>
          <div className="flex items-center gap-2.5 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs text-slate-200 font-semibold">Atendimento em todo o DF</span>
          </div>
        </div>

      </div>
    </section>
  );
};
