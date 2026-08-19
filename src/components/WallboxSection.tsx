import React from 'react';
import { createWhatsAppUrl } from '../data/content';
import { APP_IMAGES } from '../data/images';
import { Zap, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, BatteryCharging, FileText, Check } from 'lucide-react';

export const WallboxSection: React.FC = () => {
  return (
    <section id="wallbox" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <BatteryCharging className="w-3.5 h-3.5" />
            <span>Instalação Homologada para Carros Elétricos</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Instalação de <span className="text-yellow-400">Wallbox em Condomínios e Casas</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Instalamos seu carregador com proteção total contra surtos e choques elétricos, além de entregar a pasta técnica com <strong>ART e Memorial de Carga</strong> para autorização imediata do síndico.
          </p>
        </div>

        {/* Bloco Central com Imagem do Totem em Condomínio + Checklist de Vantagens */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Foto Real de Totem / Garagem */}
            <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-slate-950">
              <img
                src={APP_IMAGES.totemCondo}
                alt="Totem de Recarga Veicular em Condomínio de Brasília"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conteúdo Prático e Direto */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-yellow-400 uppercase tracking-wide">Padrão NBR 17019</span>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-bold uppercase">
                  Aprovado em Condomínio
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white">
                O que inclui a instalação de Wallbox com a EletroPRO?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 pt-1">
                <div className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>Quadro dedicado:</strong> Disjuntor Curva C + DPS + DR Tipo A/B.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>Emissão de ART:</strong> Registrada no conselho para o síndico.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>Medidor de KWh:</strong> Individual para rateio de conta.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>Totem opcional:</strong> Estrutura metálica com chave e suporte.</span>
                </div>
              </div>

              {/* Marcas compatíveis */}
              <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Compatível:</span>
                {['BYD', 'GWM Haval/Ora', 'Volvo', 'BMW', 'Porsche', 'Audi', 'Mercedes', 'WEG/ABB'].map((m) => (
                  <span key={m} className="px-2 py-0.5 bg-slate-950 text-slate-300 rounded border border-slate-800 text-[11px]">
                    {m}
                  </span>
                ))}
              </div>

              {/* Botão de Orçamento Direto */}
              <div className="pt-3">
                <a
                  href={createWhatsAppUrl("Olá! Gostaria de um orçamento para instalar meu carregador Wallbox no meu condomínio/casa em Brasília.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs uppercase tracking-wide rounded-xl shadow-md transition-all w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Faça seu Orçamento de Wallbox</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
