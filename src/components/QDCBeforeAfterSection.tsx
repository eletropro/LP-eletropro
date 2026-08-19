import React, { useState } from 'react';
import { COMPANY_INFO, createWhatsAppUrl, BEFORE_AFTER_CASES } from '../data/content';
import { ShieldCheck, CheckCircle2, XCircle, AlertTriangle, ArrowRight, MessageSquare, Layers } from 'lucide-react';

export const QDCBeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeCase = BEFORE_AFTER_CASES[activeTab];

  return (
    <section id="antes-depois" className="py-14 md:py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engenharia e Norma NBR 5410</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Quadros de Distribuição e Luz: <span className="text-yellow-400">Antes e Depois</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Mais de 70% dos princípios de incêndio residencial têm origem em quadros elétricos antigos ou mal dimensionados. Veja a transformação real que a <strong>EletroPRO</strong> executa para proteger seu imóvel.
          </p>
        </div>

        {/* Botões de Seleção de Casos */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-yellow-400 text-slate-950 shadow-md scale-105'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Cartão de Comparação Principal */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-wide block">Estudo de Caso Real</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {activeCase.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Localização: <span className="text-slate-200 font-semibold">{activeCase.location}</span></p>
            </div>

            <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-lg border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-400">100% Norma NBR 5410 e Laudo ART</span>
            </div>
          </div>

          {/* Grid Lado a Lado: ANTES vs DEPOIS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
            
            {/* ANTES (Risco Elevado) */}
            <div className="bg-slate-950 border border-red-900/40 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                    <XCircle className="w-4 h-4" />
                    <span>Antes da Reforma (Risco Crítico)</span>
                  </div>
                  <span className="px-2 py-0.5 bg-red-950 text-red-400 text-[10px] font-extrabold uppercase tracking-wide rounded border border-red-800/40">
                    Perigo
                  </span>
                </div>

                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="text-xs font-semibold text-red-300 mb-1 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                    <span>Diagnóstico Inicial:</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    "{activeCase.beforeProblem}"
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Irregularidades Encontradas:</h4>
                  <ul className="space-y-1.5">
                    {activeCase.beforePoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-red-400 font-bold shrink-0">✕</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 text-xs text-red-400 font-semibold">
                ⚠️ Disjuntores antigos tipo NEMA oxidados, fiação superaquecendo e sem barramento blindado.
              </div>
            </div>

            {/* DEPOIS (Padrão EletroPRO) */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between ring-1 ring-yellow-400/30">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Depois da EletroPRO (Padrão Engenharia)</span>
                  </div>
                  <span className="px-2 py-0.5 bg-yellow-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wide rounded">
                    Certificado
                  </span>
                </div>

                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="text-xs font-semibold text-yellow-400 mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Solução Aplicada:</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {activeCase.afterSolution}
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Proteções Instaladas:</h4>
                  <ul className="space-y-1.5">
                    {activeCase.afterPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 text-xs text-yellow-400 font-semibold">
                🛡️ Disjuntores DIN Steck, DPS Clamper vermelho contra raios e DR contra choques.
              </div>
            </div>

          </div>

          {/* Checklist de Itens Inclusos */}
          <div className="p-5 bg-slate-950 rounded-xl border border-slate-800">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-yellow-400" />
              <span>O que está incluso na Reforma de Quadro de Luz da EletroPRO:</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                <span>Disjuntores <strong>DIN Padrão Europeu IEC</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                <span><strong>DPS Classe II (Clamper ou Steck)</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                <span><strong>Dispositivo DR 30mA (Antichoque)</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                <span><strong>Barramentos tipo pente em cobre</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                <span><strong>Terminais tubulares ilhós crimpados</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                <span><strong>Identificação e anilhas de circuitos</strong></span>
              </div>
            </div>
          </div>

          {/* Chamada para Ação */}
          <div className="mt-6 p-4 sm:p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-sm font-bold text-white">Seu quadro de luz está desarmando ou cheirando a queimado?</div>
              <p className="text-xs text-slate-400 mt-0.5">Envie uma foto do seu quadro no WhatsApp para avaliação rápida e sem custo.</p>
            </div>
            
            <a
              href={createWhatsAppUrl("Olá! Gostaria de enviar a foto do meu quadro elétrico para um orçamento de reforma.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-xs font-extrabold uppercase tracking-wide rounded-xl transition-all shrink-0 shadow-md shadow-yellow-400/20"
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
