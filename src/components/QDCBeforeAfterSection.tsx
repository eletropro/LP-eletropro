import React from 'react';
import { createWhatsAppUrl } from '../data/content';
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight, MessageSquare, Camera } from 'lucide-react';

export const QDCBeforeAfterSection: React.FC = () => {
  return (
    <section id="antes-depois" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Segurança Contra Sobrecarga & Choques</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Por que Reformar seu <span className="text-yellow-400">Quadro de Distribuição (QDC)</span>?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            Entenda a diferença entre instalações antigas e o padrão moderno normatizado pela NBR 5410:
          </p>
        </div>

        {/* Comparativo Técnico Direto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          
          {/* Card Antigo (Risco) */}
          <div className="bg-slate-900 border border-red-900/40 rounded-2xl p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-red-400 font-extrabold text-sm uppercase">
                <XCircle className="w-4 h-4" />
                <span>Quadro Antigo / Sem Proteção</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Disjuntores pretos NEMA lentos e descalibrados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Fiação desorganizada que esquenta e desarma à toa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Sem DPS: aparelhos caros queimam com raios e surtos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Sem DR: alto risco de choque elétrico perigoso.</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-red-400 font-medium">
              ⚠️ Risco de sobreaquecimento, fuga de energia e curto-circuito.
            </div>
          </div>

          {/* Card Novo (EletroPRO) */}
          <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between ring-1 ring-yellow-400/20">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Padrão Moderno EletroPRO</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Disjuntores DIN Steck</strong> rápidos e individuais.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>DPS Clamper</strong> para proteger eletrônicos e Wallbox.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dispositivo DR</strong> de proteção humana contra choques.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Barramentos pente de cobre</strong> com terminais crimpados.</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
              ✓ 100% conforme a NBR 5410 com segurança total.
            </div>
          </div>

        </div>

        {/* Card de Envio de Foto */}
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <Camera className="w-4 h-4 text-yellow-400" />
              <span>Envie uma foto do seu Quadro de Distribuição (QDC)</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Avaliamos a fiação e enviamos o orçamento sem nenhum compromisso.
            </p>
          </div>

          <a
            href={createWhatsAppUrl("Olá! Gostaria de enviar a foto do meu Quadro de Distribuição de Circuitos (QDC) para um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs uppercase tracking-wide rounded-xl shadow-md transition-all shrink-0 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Enviar Foto no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
