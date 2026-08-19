import React from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { ShieldCheck, Zap, MessageSquare, CheckCircle2, Phone, Star, ArrowRight, FileCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-950 py-12 sm:py-16 lg:py-20 border-b border-slate-800/80 overflow-hidden">
      {/* Glow suave e sutil de fundo estilo Loopii */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-yellow-400/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Badge Minimalista */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
          <Zap className="w-3.5 h-3.5 fill-yellow-400" />
          <span>Eletricista Especialista em Brasília e DF</span>
        </div>

        {/* Título Principal Limpo e Direto */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Outfit',sans-serif] max-w-4xl mx-auto">
          Instalação de <span className="text-yellow-400">Wallbox</span> e Serviços Elétricos com <span className="text-yellow-400">Emissão de ART</span>
        </h1>

        {/* Subtítulo Sem Poluição */}
        <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Carregadores veiculares para casas e condomínios, modernização de quadros de luz e laudos técnicos em todo o Distrito Federal.
        </p>

        {/* Botões de Ação Imediata (Estilo Loopii) */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <a
            href={createWhatsAppUrl("Olá! Gostaria de fazer um orçamento para instalação de Wallbox / Serviços Elétricos em Brasília.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-sm uppercase tracking-wide rounded-xl shadow-lg shadow-yellow-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Faça seu Orçamento</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-bold rounded-xl border border-slate-700 hover:border-yellow-400/40 transition-colors"
          >
            <Phone className="w-4 h-4 text-yellow-400" />
            <span>(61) 99351-0110</span>
          </a>
        </div>

        {/* 3 Selos de Confiança Limpos */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">ART Oficial Inclusa</div>
              <div className="text-[11px] text-slate-400">Aprovado por síndicos</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Normas NBR 5410 & 17019</div>
              <div className="text-[11px] text-slate-400">Proteção DPS e DR</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Atendimento Rápido</div>
              <div className="text-[11px] text-slate-400">Todo o DF e Entorno</div>
            </div>
          </div>
        </div>

        {/* Marcas de Carros em Faixa Discreta */}
        <div className="pt-4">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Compatível com todas as marcas:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['BYD', 'GWM Haval & Ora', 'Volvo', 'BMW', 'Porsche', 'Audi', 'Mercedes-Benz', 'WEG / ABB'].map((marca) => (
              <span
                key={marca}
                className="px-3 py-1 text-xs font-semibold text-slate-300 bg-slate-900/90 border border-slate-800 rounded-lg"
              >
                {marca}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
