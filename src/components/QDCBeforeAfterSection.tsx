import React from 'react';
import { createWhatsAppUrl } from '../data/content';
import { ShieldCheck, CheckCircle2, XCircle, AlertTriangle, ArrowRight, MessageSquare, Camera } from 'lucide-react';

export const QDCBeforeAfterSection: React.FC = () => {
  return (
    <section id="antes-depois" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Segurança Residencial e Predial</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Quadro de Luz (QDC): <span className="text-yellow-400">Antes e Depois</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            Mais de 70% dos princípios de incêndio em imóveis ocorrem por disjuntores antigos ou sobrecarregados. Veja a transformação executada pela <strong>EletroPRO</strong>:
          </p>
        </div>

        {/* Comparativo Lado a Lado Minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          
          {/* Lado do Antes */}
          <div className="bg-slate-900/90 border border-red-900/40 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wide">
                  <XCircle className="w-4 h-4" />
                  <span>Antes da Reforma</span>
                </div>
                <span className="px-2.5 py-0.5 bg-red-950/80 text-red-400 text-[10px] font-bold uppercase rounded-md border border-red-800/40">
                  Risco Elevado
                </span>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
                <strong className="text-red-300 block mb-1">Diagnóstico Típico:</strong>
                Disjuntores pretos (NEMA) obsoletos, oxidados, fiação superaquecendo e desarmes frequentes.
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Sem proteção DPS (raios e oscilações queimam aparelhos).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Sem Dispositivo DR (risco gravíssimo em caso de choque).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Fios torrados e emendas sem barramento de cobre.</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-red-400 font-medium">
              ⚠️ Não compatível com a norma atual NBR 5410.
            </div>
          </div>

          {/* Lado do Depois */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between ring-1 ring-yellow-400/30">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Padrão EletroPRO</span>
                </div>
                <span className="px-2.5 py-0.5 bg-yellow-400 text-slate-950 text-[10px] font-bold uppercase rounded-md">
                  100% Seguro
                </span>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">
                <strong className="text-yellow-400 block mb-1">Solução Aplicada:</strong>
                Substituição completa por disjuntores DIN modernos, barramento pente blindado e identificação por circuito.
              </div>

              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>DPS Clamper:</strong> Protege eletrônicos caros contra surtos e raios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dispositivo DR:</strong> Proteção antichoque imediata para toda a família.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Norma NBR 5410:</strong> Balanceamento térmico e terminais crimpados.</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
              ✓ Garantia estendida e emissão de laudo técnico.
            </div>
          </div>

        </div>

        {/* Card de Conversão Rápida: Enviar Foto */}
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <Camera className="w-4 h-4 text-yellow-400" />
              <span>Envie uma foto do seu quadro no WhatsApp</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Avaliamos a foto e passamos o orçamento de reforma rapidamente e sem custo.
            </p>
          </div>

          <a
            href={createWhatsAppUrl("Olá! Gostaria de enviar a foto do meu quadro de luz para uma avaliação e orçamento de reforma.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs uppercase tracking-wide rounded-xl shadow-md transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Enviar Foto Agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
