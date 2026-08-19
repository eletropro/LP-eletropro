import React from 'react';
import { createWhatsAppUrl } from '../data/content';
import { APP_IMAGES } from '../data/images';
import { Zap, ShieldAlert, FileCheck, Building2, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      id: 'wallbox',
      title: 'Instalação de Wallbox & Totem de Recarga',
      subtitle: 'Para Casas, Condomínios e Garagens no DF',
      image: APP_IMAGES.totemCondo,
      tag: 'Especialidade Principal',
      points: [
        'Circuito dedicado com DPS Classe II e DR Tipo A/B',
        'Emissão de ART e Memorial Descritivo inclusos',
        'Compatível com BYD, GWM, Volvo, BMW, Porsche e outros',
        'Opção de Totem metálico com grade e medidor KWh'
      ],
      cta: 'Orçar Instalação de Wallbox'
    },
    {
      id: 'qdc',
      title: 'Reforma e Modernização de Quadros (QDC)',
      subtitle: 'Elimine riscos de curto e quedas de disjuntor',
      image: APP_IMAGES.qdcBeforeAfter,
      tag: 'Segurança Residencial',
      points: [
        'Substituição de disjuntores pretos NEMA por padrão DIN',
        'Instalação de DPS Clamper contra queima de eletrônicos',
        'Instalação de Dispositivo DR contra choque elétrico',
        'Barramentos blindados em cobre e terminais ilhós'
      ],
      cta: 'Orçar Reforma de Quadro'
    },
    {
      id: 'art-laudos',
      title: 'Emissão de ART, Laudos & Memorial',
      subtitle: 'Aprovação Imediata em Condomínios e Vistorias',
      image: APP_IMAGES.wallbox,
      tag: 'Documentação Oficial',
      points: [
        'Anotação de Responsabilidade Técnica (ART) oficial',
        'Memorial descritivo de cálculo de carga exigido por síndicos',
        'Laudo com medição de aterramento em Ohms com terrômetro',
        'Validade legal para seguradoras e convenções'
      ],
      cta: 'Solicitar ART / Laudo'
    },
    {
      id: 'padrao-medicao',
      title: 'Padrão Neoenergia & Aumento de Carga',
      subtitle: 'Adequação Homologada para Monofásico/Trifásico',
      image: APP_IMAGES.padraoMedicao,
      tag: 'Padrão Concessionária',
      points: [
        'Centros de medição agrupada para prédios e comércios',
        'Aumento de carga para suportar ar-condicionado e carregador',
        'Caixas homologadas com visor de policarbonato',
        'Atendimento com NR-10 e padrão de entrada no poste'
      ],
      cta: 'Orçar Padrão de Entrada'
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <Zap className="w-3.5 h-3.5 fill-yellow-400" />
            <span>Serviços Especializados em Brasília</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Principais Serviços da <span className="text-yellow-400">EletroPRO</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
            Atendimento residencial, comercial e em condomínios com equipe qualificada, materiais certificados e emissão de ART.
          </p>
        </div>

        {/* Grade de 4 Cards Visuais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors group shadow-xl"
            >
              <div>
                {/* Imagem do Serviço */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/90 text-yellow-400 border border-slate-800 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                    {item.tag}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs sm:text-sm text-slate-200">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botão de Orçamento do Card */}
              <div className="p-5 pt-0">
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
          ))}
        </div>

      </div>
    </section>
  );
};
