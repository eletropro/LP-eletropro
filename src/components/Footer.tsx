import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { Phone, MessageSquare, ShieldCheck, MapPin, Clock, ArrowUp, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative">
      {/* Banner de Ação Imediata no Rodapé */}
      <div className="bg-yellow-400 text-slate-950 py-8 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col">
            <span className="text-slate-950 font-black text-2xl sm:text-3xl font-mono leading-none tracking-tight">
              {COMPANY_INFO.formattedPhone}
            </span>
            <span className="text-slate-900 font-bold text-xs mt-1">
              Atendimento Técnico Especializado em Brasília e Distrito Federal via WhatsApp
            </span>
          </div>

          <a
            href={createWhatsAppUrl("Olá! Gostaria de solicitar um orçamento grátis com a EletroPRO.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-950 text-white px-7 py-3.5 rounded-xl font-extrabold uppercase tracking-wide text-xs sm:text-sm hover:translate-y-[-2px] transition-transform shadow-xl group"
          >
            <span className="text-yellow-400">Solicitar</span>
            <span>Orçamento Grátis</span>
            <MessageSquare className="w-4 h-4 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Grid Principal de Informações */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Coluna 1: Marca e Apresentação */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-xs leading-relaxed">
              {COMPANY_INFO.legalName}. Especialista em mobilidade elétrica, instalação de Wallbox com emissão de ART, modernização de quadros de distribuição e projetos elétricos em Brasília - DF.
            </p>
            <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Normas NBR 5410 e NBR 17019</span>
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Serviços Técnicos</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#wallbox" className="hover:text-yellow-400 transition-colors">Instalação de Wallbox e Totens</a></li>
              <li><a href="#antes-depois" className="hover:text-yellow-400 transition-colors">Reforma de Quadros de Distribuição</a></li>
              <li><a href="#art-laudos" className="hover:text-yellow-400 transition-colors">Emissão de ART e Laudos Técnicos</a></li>
              <li><a href="#servicos" className="hover:text-yellow-400 transition-colors">Padrão de Entrada e Centros de Medição</a></li>
              <li><a href="#servicos" className="hover:text-yellow-400 transition-colors">Projetos de Iluminação e Fitas LED</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contato e Plantão</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white text-xs">{COMPANY_INFO.formattedPhone}</span>
                  <span className="text-[11px] text-slate-400">Atendimento WhatsApp e Ligações</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-xs">{COMPANY_INFO.coverage}</span>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-xs">{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Garantia */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Garantia e Rigor</h4>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                <span>Profissional Habilitado</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Todas as instalações acompanham emissão de ART oficial, ferramental isolado 1000V e testes com instrumentos de precisão calibrados.
              </p>
            </div>
          </div>

        </div>

        {/* Rodapé Final */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-slate-400 text-xs">
              © {new Date().getFullYear()} {COMPANY_INFO.name} ({COMPANY_INFO.legalName}) - Brasília / DF.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Página oficial otimizada para Google Ads • Eletricista em Brasília • Wallbox • ART • QDC
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-yellow-400 transition-colors flex items-center gap-1 text-xs font-bold"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
