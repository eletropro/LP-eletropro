import React, { useState } from 'react';
import { COMPANY_INFO, createWhatsAppUrl, COVERAGE_AREAS } from '../data/content';
import { APP_IMAGES } from '../data/images';
import { ShieldCheck, Zap, MessageSquare, CheckCircle2, Star, ArrowRight, PhoneCall, Send, FileCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [service, setService] = useState('Instalação de Wallbox');
  const [location, setLocation] = useState('Plano Piloto / Lago Sul / Sudoeste');

  const handleQuickLead = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*SOLICITAÇÃO DE ORÇAMENTO RÁPIDO* ⚡\n\n` +
      `📌 *Serviço:* ${service}\n` +
      `📍 *Região em Brasília:* ${location}\n\n` +
      `Olá! Gostaria de receber um orçamento sem compromisso e tirar dúvidas com o eletricista técnico.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <section className="relative bg-slate-950 border-b border-slate-800 py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Luz de fundo sutil */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-400/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Coluna Esquerda: Texto Direto e Chamadas Rápidas (7 colunas) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Tag de Destaque */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span>Atendimento em Brasília e todo o DF • Resposta Rápida</span>
            </div>

            {/* Título Principal de Alta Conversão */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Outfit',sans-serif]">
              Eletricista Especialista em <br className="hidden sm:inline" />
              <span className="text-yellow-400">Wallbox, Quadros de Luz e ART</span> em Brasília
            </h1>

            {/* Subtítulo Curto e Prático */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Instalação segura de carregadores veiculares para <strong>BYD, GWM, Volvo, BMW</strong> e outras marcas com emissão de <strong>ART oficial para condomínios</strong> e modernização de quadros elétricos.
            </p>

            {/* 3 Benefícios Diretos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">Emissão de ART em 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">Norma NBR 5410 & 17019</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">Orçamento sem Custo</span>
              </div>
            </div>

            {/* Mini Formulário de Captura Rápida de Lead */}
            <form onSubmit={handleQuickLead} className="p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-3">
              <div className="text-xs font-bold text-slate-200 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-yellow-400">
                  <Zap className="w-3.5 h-3.5 fill-yellow-400" />
                  Orçamento Rápido no WhatsApp:
                </span>
                <span className="text-[11px] text-slate-400 font-normal">Sem compromisso</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] text-slate-400 font-medium mb-1">Qual serviço você precisa?</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg p-2.5 text-xs focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="Instalação de Wallbox em Condomínio (com ART)">Instalação de Wallbox em Condomínio (com ART)</option>
                    <option value="Instalação de Wallbox em Casa">Instalação de Wallbox em Casa</option>
                    <option value="Reforma de Quadro de Luz (QDC)">Reforma de Quadro de Luz (QDC)</option>
                    <option value="Emissão de ART e Laudo Técnico">Emissão de ART e Laudo Técnico</option>
                    <option value="Padrão Neoenergia e Outros Serviços">Padrão Neoenergia e Outros Serviços</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 font-medium mb-1">Sua Região no DF:</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg p-2.5 text-xs focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="Plano Piloto (Asa Sul / Asa Norte)">Plano Piloto (Asa Sul / Asa Norte)</option>
                    <option value="Lago Sul / Lago Norte / Mansões">Lago Sul / Lago Norte / Mansões</option>
                    <option value="Sudoeste / Noroeste / Cruzeiro">Sudoeste / Noroeste / Cruzeiro</option>
                    <option value="Águas Claras / Park Way">Águas Claras / Park Way</option>
                    <option value="Jardim Botânico / Alphaville">Jardim Botânico / Alphaville</option>
                    <option value="Outra Região do DF">Outra Região do DF</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wide rounded-xl shadow-lg shadow-yellow-400/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Solicitar Orçamento no WhatsApp Agora</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Avaliação e Contato Direto */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1 text-yellow-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-white ml-1">5.0</span>
                <span className="text-slate-400">(Brasília - DF)</span>
              </div>
              <span className="text-slate-700">•</span>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-slate-300 hover:text-yellow-400 font-semibold flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>{COMPANY_INFO.formattedPhone}</span>
              </a>
            </div>

          </div>

          {/* Coluna Direita: Imagem Real de Instalação com Selos Práticos (5 colunas) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              {/* Imagem Real de Instalação de WallBox */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={APP_IMAGES.wallbox}
                  alt="Instalação de Wallbox Carregador Veicular em Brasília pela EletroPRO"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tag Flutuante no Topo da Imagem */}
              <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-sm border border-slate-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-yellow-400" />
                <span>Obra Real Entregue em Brasília</span>
              </div>

              {/* Legenda Prática Inferior */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-white">Instalação de Wallbox com Quadro Dedicado</h3>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-bold uppercase">
                    ART Inclusa
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-tight">
                  Quadro com DPS Clamper, Dispositivo DR Tipo A e medidor de consumo em KWh aprovado por condomínios do DF.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-yellow-400 font-bold border-t border-slate-800/80">
                  <span>BYD • GWM • Volvo • BMW • Porsche</span>
                  <a
                    href={createWhatsAppUrl("Olá! Gostaria de um orçamento para instalar meu Wallbox em Brasília.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1 text-slate-200 hover:text-white"
                  >
                    <span>Orçar este serviço</span>
                    <ArrowRight className="w-3 h-3 text-yellow-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
