import React, { useState } from 'react';
import { createWhatsAppUrl } from '../data/content';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "O condomínio pode proibir a instalação do carregador veicular na minha vaga?",
      a: "Não, desde que a instalação respeite as normas técnicas (NBR 5410 e NBR 17019), utilize disjuntores e DPS/DR dedicados e seja acompanhada pela Anotação de Responsabilidade Técnica (ART) e Memorial Descritivo assinados por profissional habilitado. Nós entregamos toda a documentação pronta para o seu síndico."
    },
    {
      q: "Por que não posso carregar meu carro elétrico em uma tomada comum?",
      a: "Tomadas comuns de 10A ou 20A não suportam a passagem contínua de alta amperagem durante 8 a 15 horas. Isso derrete tomadas, superaquece os condutores embutidos e gera risco iminente de curto-circuito e incêndio. O Wallbox com circuito exclusivo carrega até 4x mais rápido com 100% de segurança."
    },
    {
      q: "O que é a ART e por que ela é obrigatória?",
      a: "A ART (Anotação de Responsabilidade Técnica) é o documento oficial perante a lei que valida que a obra foi executada por responsável técnico qualificado. Ela garante a segurança do condomínio e é indispensável para acionar seguros prediais ou residenciais."
    },
    {
      q: "Como faço para receber um orçamento?",
      a: "Basta clicar em qualquer botão de WhatsApp nesta página ou ligar para (61) 99351-0110. Você pode enviar a foto do seu Quadro de Distribuição de Circuitos (QDC) atual ou do local da garagem para uma estimativa rápida e agendamento de vistoria."
    }
  ];

  return (
    <section id="duvidas" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Perguntas <span className="text-yellow-400">Frequentes</span>
          </h2>
        </div>

        {/* Accordion Limpo */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all duration-150 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-yellow-400/40 shadow-md'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {item.q}
                  </span>
                  <div className={`w-6 h-6 rounded-full bg-slate-950 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-yellow-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA direto no rodapé do FAQ */}
        <div className="mt-8 text-center">
          <a
            href={createWhatsAppUrl("Olá! Tenho uma dúvida sobre instalação de Wallbox / Elétrica em Brasília.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-yellow-400 text-slate-300 hover:text-slate-950 border border-slate-800 text-xs font-bold uppercase rounded-xl transition-all"
          >
            <MessageSquare className="w-4 h-4 text-yellow-400" />
            <span>Falar com o técnico no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
