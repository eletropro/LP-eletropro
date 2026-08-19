import React from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { USER_PHOTOS } from '../data/images';
import { ShieldCheck, Zap, MessageSquare, Phone, Star, ArrowRight, FileCheck, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-950 py-10 sm:py-14 lg:py-18 border-b border-slate-800/80 overflow-hidden">
      {/* Glow suave e sutil de fundo estilo Loopii */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-yellow-400/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Texto (7 colunas) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Badge Minimalista */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
              <Zap className="w-3.5 h-3.5 fill-yellow-400" />
              <span>Eletricista Especialista em Brasília e DF</span>
            </div>

            {/* Título Principal com a terminologia exata solicitada */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Outfit',sans-serif]">
              Instalação de <span className="text-yellow-400">Wallbox</span> e Reforma de <span className="text-yellow-400">Quadro de Distribuição de Circuitos (QDC)</span>
            </h1>

            {/* Subtítulo Sem Poluição */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Instalação de carregadores veiculares para <strong>GWM Haval, BYD, Volvo, BMW</strong> e modernização de Quadros de Distribuição com emissão de <strong>ART oficial</strong> para condomínios.
            </p>

            {/* Botões de Ação Imediata (Estilo Loopii) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 max-w-md mx-auto lg:mx-0">
              <a
                href={createWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para instalação de Wallbox / Reforma de QDC em Brasília.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wide rounded-xl shadow-lg shadow-yellow-400/20 active:scale-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Faça seu Orçamento</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs sm:text-sm font-bold rounded-xl border border-slate-700 hover:border-yellow-400/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>(61) 99351-0110</span>
              </a>
            </div>

            {/* 3 Selos de Confiança Limpos */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">ART Oficial em 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">NBR 5410 & 17019</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">Atendimento em todo DF</span>
              </div>
            </div>

          </div>

          {/* Coluna Visual: Foto Real do Wallbox GWM da EletroPRO (5 colunas) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <div className="aspect-[3/4] sm:aspect-[4/5] max-h-[460px] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={USER_PHOTOS.wallboxGwm}
                  alt="Instalação real de Wallbox GWM em Brasília pela EletroPRO"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              {/* Tag de Obra Real */}
              <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-sm border border-slate-800 text-white text-[11px] font-bold px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                <span>Instalação Real em Brasília</span>
              </div>

              <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">Wallbox GWM + Quadro Dedicado</div>
                  <div className="text-[11px] text-slate-400">Proteção DPS Clamper e Dispositivo DR</div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-bold uppercase">
                  ART Inclusa
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
