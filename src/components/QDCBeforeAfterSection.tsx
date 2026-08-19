import React from 'react';
import { createWhatsAppUrl } from '../data/content';
import { ORIGINAL_IMAGE_PATHS } from '../data/images';
import { ImageWithFallback } from './ImageWithFallback';
import { ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, Camera } from 'lucide-react';

export const QDCBeforeAfterSection: React.FC = () => {
  return (
    <section id="antes-depois" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Segurança Contra Curto-Circuito e Sobrecarga</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Quadro de Distribuição de Circuitos (QDC): <span className="text-yellow-400">Antes e Depois Real</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            Confira a reforma executada pela <strong>EletroPRO</strong> em Brasília, substituindo disjuntores antigos NEMA pelo padrão DIN Steck em conformidade com a norma <strong>NBR 5410</strong>:
          </p>
        </div>

        {/* Comparativo Visual das Fotos Reais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Card Antes */}
          <div className="bg-slate-900 border border-red-900/40 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
            <div>
              {/* Foto Real Antes */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <ImageWithFallback
                  src={ORIGINAL_IMAGE_PATHS.qdcAntes}
                  alt="Quadro de Distribuição antigo com fiação exposta e disjuntores NEMA"
                  storageKey="qdc_antes"
                  fallbackLabel="Foto: QDC Antigo (Antes)"
                  subLabel="Disjuntores NEMA e fiação sem terminais"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow-md">
                  ❌ ANTES DA REFORMA
                </div>
              </div>

              {/* Detalhes do Antes */}
              <div className="p-5 space-y-3">
                <div className="text-xs font-bold text-red-400 uppercase tracking-wide">
                  Diagnóstico de Risco:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Disjuntores pretos NEMA obsoletos e soltos.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Fios sem terminais, superaquecendo e desarmando.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Sem proteção DPS contra raios e sem DR contra choque.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 text-[11px] text-red-400 font-medium">
              ⚠️ Risco iminente de sobrecarga e queima de aparelhos.
            </div>
          </div>

          {/* Card Depois */}
          <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between ring-1 ring-yellow-400/30">
            <div>
              {/* Foto Real Depois */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <ImageWithFallback
                  src={ORIGINAL_IMAGE_PATHS.qdcDepois}
                  alt="Quadro de Distribuição de Circuitos QDC reformado pela EletroPRO no padrão NBR 5410"
                  storageKey="qdc_depois"
                  fallbackLabel="Foto: QDC Reformado (Depois)"
                  subLabel="Disjuntores Steck DIN e barramentos identificados"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow-md">
                  ✓ DEPOIS (PADRÃO ELETROPRO)
                </div>
              </div>

              {/* Detalhes do Depois */}
              <div className="p-5 space-y-3">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                  Solução Técnica Entregue:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Disjuntores DIN Steck</strong> individuais por circuito.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Barramentos de neutro e terra</strong> protegidos e identificados.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Terminais ilhós crimpados</strong> e caixa antichama moderna.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
              ✓ 100% no padrão NBR 5410 com segurança e garantia.
            </div>
          </div>

        </div>

        {/* Card de Ação: Enviar Foto do QDC */}
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <Camera className="w-4 h-4 text-yellow-400" />
              <span>Envie uma foto do seu Quadro de Distribuição de Circuitos (QDC)</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Avaliamos a sua fiação e enviamos um orçamento de reforma sem nenhum custo.
            </p>
          </div>

          <a
            href={createWhatsAppUrl("Olá! Gostaria de enviar a foto do meu Quadro de Distribuição de Circuitos (QDC) para uma avaliação e orçamento.")}
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
