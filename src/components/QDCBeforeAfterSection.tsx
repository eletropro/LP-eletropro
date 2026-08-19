import React from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { APP_IMAGES } from '../data/images';
import { ShieldCheck, CheckCircle2, XCircle, AlertTriangle, ArrowRight, MessageSquare, Camera } from 'lucide-react';

export const QDCBeforeAfterSection: React.FC = () => {
  return (
    <section id="antes-depois" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Enxuto */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Segurança Contra Curto-Circuito e Incêndio</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Quadros de Luz (QDC): <span className="text-yellow-400">Antes e Depois Real</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Veja a diferença de um quadro antigo e perigoso para um quadro reformado pela <strong>EletroPRO</strong> no padrão da norma <strong>NBR 5410</strong> com proteção DPS e DR.
          </p>
        </div>

        {/* Imagem de Comparação Real em Destaque */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl mb-8">
          
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 mb-6 group">
            <img
              src={APP_IMAGES.qdcBeforeAfter}
              alt="Antes e Depois de Reforma de Quadro de Distribuição em Brasília"
              className="w-full h-auto object-cover max-h-[480px] mx-auto"
            />
            
            {/* Etiquetas sobre a foto */}
            <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-sm text-white text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wide shadow-md">
              ❌ ANTES: Risco & Superaquecimento
            </div>
            <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-sm text-white text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wide shadow-md">
              ✓ DEPOIS: Padrão EletroPRO NBR 5410
            </div>
          </div>

          {/* Comparativo em 2 Colunas Diretas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            
            {/* Lado do Antes */}
            <div className="bg-slate-950 p-4 rounded-xl border border-red-900/40 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold uppercase tracking-wide text-xs">
                <XCircle className="w-4 h-4" />
                <span>Como estava antes da reforma:</span>
              </div>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Disjuntores pretos NEMA antigos e frouxos que desarmavam direto.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Fios torrados, emendas desprotegidas e sem barramento isolado.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Sem DPS contra descargas de raios e sem DR contra choques elétricos.</span>
                </li>
              </ul>
            </div>

            {/* Lado do Depois */}
            <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/40 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wide text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>Transformação executada pela EletroPRO:</span>
              </div>
              <ul className="space-y-1.5 text-slate-200">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Disjuntores DIN modernos</strong> individuais por circuito (iluminação e tomadas).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>DPS Clamper vermelho</strong> para salvar TV, geladeira e ar-condicionado de queima.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dispositivo DR antichoque</strong> para proteger crianças, idosos e animais.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Chamada para Ação Prática: Enviar Foto */}
          <div className="mt-6 p-4 sm:p-5 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                <Camera className="w-4 h-4 text-yellow-400" />
                <span>Envie uma foto do seu quadro elétrico no WhatsApp</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Nosso técnico analisa a foto e passa uma estimativa rápida de valor sem você pagar nada.
              </p>
            </div>

            <a
              href={createWhatsAppUrl("Olá! Gostaria de enviar a foto do meu quadro de luz para uma avaliação e orçamento de reforma.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs uppercase tracking-wide rounded-xl shadow-md transition-all shrink-0"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Enviar Foto no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
