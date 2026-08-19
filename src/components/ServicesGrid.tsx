import React from 'react';
import { createWhatsAppUrl } from '../data/content';
import { Zap, ShieldAlert, FileCheck, Building2, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      id: 'wallbox',
      icon: Zap,
      badge: 'Principal',
      title: 'Instalação de Wallbox & Carregadores',
      desc: 'Instalação completa para residências e condomínios com quadro dedicado, disjuntor curva C, DPS Classe II, DR Tipo A/B e emissão de ART.',
      points: [
        'Aprovação garantida no condomínio com pasta técnica',
        'Compatível com BYD, GWM, Volvo, BMW, Porsche e outros',
        'Opção de medidor de KWh individual para rateio'
      ],
      cta: 'Orçar Wallbox'
    },
    {
      id: 'qdc',
      icon: ShieldAlert,
      badge: 'Segurança',
      title: 'Reforma e Modernização de Quadro (QDC)',
      desc: 'Troca de disjuntores pretos antigos (NEMA) por padrão DIN moderno, eliminando desarmes frequentes, superaquecimento e risco de incêndio.',
      points: [
        'Instalação de DPS Clamper contra queima de eletrônicos',
        'Dispositivo DR antichoque para proteção de pessoas',
        'Barramentos blindados tipo pente em cobre'
      ],
      cta: 'Orçar Quadro de Luz'
    },
    {
      id: 'art-laudos',
      icon: FileCheck,
      badge: 'Documentos',
      title: 'Emissão de ART & Laudos Técnicos',
      desc: 'Elaboração de Anotação de Responsabilidade Técnica (ART) oficial e Memorial Descritivo de Carga exigidos por síndicos e seguradoras.',
      points: [
        'Emissão rápida registrada no conselho de classe',
        'Memorial de cálculo de demanda para prédios',
        'Laudo de conformidade com normas ABNT NBR'
      ],
      cta: 'Solicitar ART / Laudo'
    },
    {
      id: 'padrao-medicao',
      icon: Building2,
      badge: 'Neoenergia',
      title: 'Padrão de Entrada & Aumento de Carga',
      desc: 'Montagem e adequação de padrões individuais e centros de medição agrupada homologados pela Neoenergia Brasília.',
      points: [
        'Adequação de monofásico para bifásico ou trifásico',
        'Caixas homologadas com visor transparente',
        'Atendimento com NR-10 e padrão no poste'
      ],
      cta: 'Orçar Padrão de Entrada'
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Serviços <span className="text-yellow-400">Especializados</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Soluções elétricas com conformidade técnica e atendimento em todo o Distrito Federal.
          </p>
        </div>

        {/* Grade de Serviços Limpa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors group shadow-lg"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-200">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <a
                    href={createWhatsAppUrl(`Olá! Gostaria de solicitar um orçamento para ${item.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-950 hover:bg-yellow-400 text-slate-200 hover:text-slate-950 border border-slate-800 text-xs font-bold uppercase tracking-wide rounded-xl transition-all group/btn"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-yellow-400 group-hover/btn:text-slate-950 group-hover/btn:fill-slate-950" />
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
