import React from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { ShieldCheck, Zap, MessageSquare, CheckCircle2, Star, ArrowRight, FileCheck, PhoneCall, BatteryCharging, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 border-b border-slate-800 py-12 md:py-16">
      {/* Luz ambiente suave de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-yellow-400/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna Esquerda: Texto Comercial e Botões de Conversão */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Selo de Localização e Especialidade */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span>Eletricista Especialista em Brasília e todo o Distrito Federal</span>
            </div>

            {/* Título Principal Profissional e Equilibrado */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Outfit',sans-serif]">
              Instalação Especializada de <br className="hidden sm:inline" />
              <span className="text-yellow-400">
                Carregadores Wallbox
              </span>{' '}
              e Serviços Elétricos
            </h1>

            {/* Subtítulo Técnico e Seguro */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Garanta a segurança da sua residência, condomínio ou empresa. Executamos instalações de estações de recarga veicular com <strong>quadro de proteção dedicado (DPS + DR)</strong>, modernização de quadros de luz e <strong>emissão de ART, laudos técnicos e memorial descritivo</strong>.
            </p>

            {/* Lista de Diferenciais Técnicos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 text-left pt-1">
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200"><strong>Emissão de ART</strong> para condomínios</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200">Normas <strong>NBR 5410 e NBR 17019</strong></span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200">Proteção <strong>DPS e DR Tipo A/B</strong></span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200">Atendimento ágil em <strong>todo o DF</strong></span>
              </div>
            </div>

            {/* Botões de Ação Imediata */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href={createWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para instalação de Wallbox / Serviços Elétricos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-sm uppercase tracking-wide rounded-xl shadow-lg shadow-yellow-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 group"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 group-hover:scale-110 transition-transform" />
                <span>Faça seu Orçamento Grátis</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#antes-depois"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs sm:text-sm font-bold rounded-xl border border-slate-700 hover:border-yellow-400/50 transition-colors"
              >
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Ver Quadros: Antes e Depois</span>
              </a>
            </div>

            {/* Indicador de Confiança do Google Ads */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1 text-yellow-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-white ml-1">5.0 estrelas</span>
                <span className="text-slate-400">(Avaliações no Google em Brasília)</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <div className="flex items-center gap-1 text-slate-300 font-medium">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Retorno no WhatsApp em até 15 minutos</span>
              </div>
            </div>

          </div>

          {/* Coluna Direita: Cartão Técnico de Apresentação de Alto Padrão */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              
              {/* Topo do Cartão */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                    <BatteryCharging className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Padrão de Engenharia EletroPRO</h2>
                    <p className="text-[11px] text-emerald-400 font-semibold">Instalação 100% Segura e Aprovada</p>
                  </div>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                  ART Inclusa
                </span>
              </div>

              {/* Itens do Padrão */}
              <div className="py-4 space-y-3">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    01
                  </div>
                  <div className="text-xs">
                    <strong className="text-white block font-semibold">Quadro de Proteção Exclusivo</strong>
                    <span className="text-slate-400">Disjuntor Bipolar/Tripolar + DPS Classe II + DR Tipo A/B sensível a fuga de corrente contínua.</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    02
                  </div>
                  <div className="text-xs">
                    <strong className="text-white block font-semibold">Aprovação Completa em Condomínios</strong>
                    <span className="text-slate-400">Entrega de pasta técnica com ART oficial, Memorial Descritivo de Carga e Laudo de Conformidade.</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    03
                  </div>
                  <div className="text-xs">
                    <strong className="text-white block font-semibold">Medição Individual e Totem Blindado</strong>
                    <span className="text-slate-400">Medidor de energia em KWh para rateio no condomínio e opção de totem com grade e trava.</span>
                  </div>
                </div>
              </div>

              {/* Compatibilidade de Veículos */}
              <div className="pt-3 border-t border-slate-800">
                <p className="text-[11px] font-semibold text-slate-400 mb-2 text-center uppercase tracking-wide">
                  Compatível com todas as montadoras:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {['BYD', 'GWM', 'Volvo', 'BMW', 'Porsche', 'Audi', 'Mercedes-Benz', 'WEG', 'ABB'].map((marca) => (
                    <span
                      key={marca}
                      className="px-2.5 py-1 text-[11px] font-bold text-slate-300 bg-slate-950 border border-slate-800 rounded hover:border-yellow-400 hover:text-white transition-colors"
                    >
                      {marca}
                    </span>
                  ))}
                </div>
              </div>

              {/* Chamada Direta no WhatsApp */}
              <div className="mt-4 pt-3 bg-slate-950 rounded-xl p-3 border border-slate-800 text-center">
                <p className="text-xs text-slate-300">
                  Precisa de orçamento imediato para o seu veículo ou condomínio?
                </p>
                <a
                  href={createWhatsAppUrl("Olá EletroPRO! Preciso de um orçamento rápido para Wallbox/QDC.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <span>Chamar no WhatsApp: {COMPANY_INFO.formattedPhone}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
