import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { Phone, MessageSquare, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Carregadores Wallbox', href: '#wallbox' },
    { label: 'Quadros de Luz (Antes e Depois)', href: '#antes-depois' },
    { label: 'Laudos e ART', href: '#art-laudos' },
    { label: 'Serviços Elétricos', href: '#servicos' },
    { label: 'Obras Realizadas', href: '#galeria' },
    { label: 'Simular Orçamento', href: '#simulador' },
    { label: 'Dúvidas Frequentes', href: '#duvidas' },
  ];

  return (
    <>
      {/* Barra de Aviso Superior */}
      <div className="bg-slate-950 border-b border-slate-800 text-xs py-2 px-4 sm:px-6 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 truncate">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-yellow-400 text-slate-950 text-[11px] font-extrabold uppercase tracking-wide rounded">
              Brasília e Entorno
            </span>
            <span className="text-slate-300 font-medium text-xs hidden md:inline">
              Eletricista Especialista: Instalação de Wallbox com ART, Reforma de Quadros de Luz e Laudos Técnicos
            </span>
            <span className="text-slate-300 font-medium text-xs md:hidden truncate">
              Eletricista Especialista em Brasília - DF
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-yellow-400 font-bold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-400" />
              <span>{COMPANY_INFO.formattedPhone}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-0.5 rounded">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span>Orçamento Rápido</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cabeçalho Principal Fixo */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-3'
            : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logotipo Oficial */}
          <a href="#" className="focus:outline-none focus:ring-1 focus:ring-yellow-400 rounded">
            <Logo size="md" />
          </a>

          {/* Links de Navegação */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-slate-300 hover:text-yellow-400 px-3 py-2 rounded transition-colors hover:bg-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão de Orçamento no WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={createWhatsAppUrl("Olá! Gostaria de solicitar um orçamento com a EletroPRO.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs uppercase tracking-wide px-5 py-2.5 rounded-lg transition-all duration-150 hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95 group"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950 group-hover:scale-110 transition-transform" />
              <span>Faça seu Orçamento</span>
            </a>
          </div>

          {/* Botão do Menu Mobile */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={createWhatsAppUrl("Olá! Gostaria de um orçamento rápido da EletroPRO.")}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden flex items-center gap-1.5 px-3 py-2 bg-yellow-400 text-slate-950 text-xs font-bold uppercase rounded"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
              <span>Orçamento</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              className="p-2 text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded focus:outline-none focus:ring-1 focus:ring-yellow-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-yellow-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Lateral / Gaveta */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden bg-slate-950/95 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <Logo size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded"
              >
                <X className="w-6 h-6 text-yellow-400" />
              </button>
            </div>

            <div className="py-6 flex-1 overflow-y-auto space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-slate-200 hover:text-yellow-400 p-3 rounded hover:bg-slate-900 border-b border-slate-900 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-yellow-400" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-yellow-400" />
                <span>Atendimento com ART e Laudo em todo o DF</span>
              </div>

              <a
                href={createWhatsAppUrl("Olá! Gostaria de solicitar um orçamento pelo WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-yellow-400 text-slate-950 font-extrabold uppercase text-xs rounded-lg shadow-lg hover:bg-yellow-300"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Faça seu Orçamento no WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-yellow-400 border border-slate-800 font-bold text-xs rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar: {COMPANY_INFO.formattedPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
