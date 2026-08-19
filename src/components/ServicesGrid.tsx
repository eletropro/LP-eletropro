import React from 'react';
import { MAIN_SERVICES, createWhatsAppUrl } from '../data/content';
import { Zap, ShieldAlert, FileCheck, Building2, Sparkles, Wrench, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section id="servicos" className="py-14 md:py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <Wrench className="w-3.5 h-3.5" />
            <span>Serviços Elétricos Especializados</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Soluções Completas para <span className="text-yellow-400">Residências, Prédios e Empresas</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Atendimento técnico em todo o Distrito Federal com ferramental de precisão e conformidade com as normas vigentes.
          </p>
        </div>

        {/* Grade de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAIN_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-150 hover:border-slate-700 relative group"
            >
              {/* Selo se houver */}
              {service.badge && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-slate-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                  {service.badge}
                </div>
              )}

              <div className="space-y-4">
                {/* Ícone */}
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center font-bold">
                  {getIcon(service.iconName)}
                </div>

                {/* Título e Descrição */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Lista de Vantagens */}
                <div className="pt-2 border-t border-slate-800 space-y-1.5">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Especificações Técnicas */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="text-[11px] font-semibold text-yellow-400 mb-1.5">Especificações Técnicas:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="text-[10px] bg-slate-950 text-slate-300 border border-slate-800 px-2 py-0.5 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ação do Cartão */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href={createWhatsAppUrl(`Olá! Gostaria de solicitar um orçamento para ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-slate-950 hover:bg-yellow-400 text-slate-200 hover:text-slate-950 border border-slate-800 text-xs font-bold uppercase rounded-lg transition-all group/btn"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-yellow-400 group-hover/btn:text-slate-950 group-hover/btn:fill-slate-950" />
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
