import React from 'react';
import { createWhatsAppUrl } from '../data/content';
import { MessageSquare, ClipboardCheck, Wrench, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Envie sua Mensagem',
      desc: 'Fale direto com o eletricista pelo WhatsApp e envie a foto do local da garagem ou do seu Quadro de Distribuição de Circuitos (QDC).'
    },
    {
      num: '02',
      icon: ClipboardCheck,
      title: 'Vistoria & Projeto',
      desc: 'Dimensionamos a fiação correta, proteções (DPS + DR) e preparamos a documentação técnica com ART.'
    },
    {
      num: '03',
      icon: Wrench,
      title: 'Instalação Homologada',
      desc: 'Execução rápida e limpa conforme a NBR 5410 / 17019, pronta para carregar seu veículo com 100% de segurança.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">
            Processo Simples & Rápido
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Como Funciona a <span className="text-yellow-400">Instalação</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Sem burocracia. Cuidamos de todo o processo técnico para você e seu condomínio.
          </p>
        </div>

        {/* 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 relative hover:border-slate-700 transition-all group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-yellow-400/40 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-yellow-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA rápido */}
        <div className="mt-8 text-center">
          <a
            href={createWhatsAppUrl("Olá! Gostaria de agendar uma vistoria técnica / solicitar orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs uppercase tracking-wide rounded-xl shadow-md transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Iniciar Atendimento no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
