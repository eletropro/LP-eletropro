import React from 'react';
import { ORIGINAL_IMAGE_PATHS } from '../data/images';
import { ImageWithFallback } from './ImageWithFallback';
import { createWhatsAppUrl } from '../data/content';
import { Camera, ArrowRight, MessageSquare } from 'lucide-react';

export const RealWorksGallery: React.FC = () => {
  const works = [
    {
      img: ORIGINAL_IMAGE_PATHS.wallboxGwm,
      key: 'wallbox_gwm_galeria',
      fallbackLabel: 'Wallbox GWM Haval',
      subLabel: 'Quadro dedicado com DPS Clamper e DR',
      tag: 'Wallbox GWM Haval',
      title: 'Estação de Recarga em Garagem',
      desc: 'Quadro dedicado com DPS Clamper e DR para veículos elétricos e híbridos.'
    },
    {
      img: ORIGINAL_IMAGE_PATHS.totemGrade,
      key: 'totem_grade_galeria',
      fallbackLabel: 'Totem de Recarga com Grade',
      subLabel: 'Proteção metálica pesada antivandalismo',
      tag: 'Totem de Recarga Comercial',
      title: 'Totem Antivandalismo com Grade',
      desc: 'Proteção metálica pesada para carregador veicular externo.'
    },
    {
      img: ORIGINAL_IMAGE_PATHS.padraoMedidores,
      key: 'padrao_medidores_galeria',
      fallbackLabel: 'Padrão Neoenergia',
      subLabel: 'Centro de Medição Agrupada',
      tag: 'Padrão Neoenergia',
      title: 'Centro de Medição Agrupada',
      desc: 'Caixas de policarbonato transparentes com barramentos protegidos.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <Camera className="w-3.5 h-3.5" />
            <span>Portfólio Real</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Instalações <span className="text-yellow-400">em Brasília</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Obras e serviços executados com conformidade técnica.
          </p>
        </div>

        {/* Grade de 3 Fotos Reais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl group hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <ImageWithFallback
                  src={work.img}
                  alt={work.title}
                  storageKey={work.key}
                  fallbackLabel={work.fallbackLabel}
                  subLabel={work.subLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-sm border border-slate-800 text-yellow-400 text-[11px] font-bold px-2.5 py-0.5 rounded-md pointer-events-none">
                  {work.tag}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {work.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {work.desc}
                </p>
              </div>

              <div className="p-4 pt-0">
                <a
                  href={createWhatsAppUrl(`Olá! Vi a foto de "${work.title}" no site e gostaria de um orçamento parecido.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 bg-slate-950 hover:bg-yellow-400 text-slate-300 hover:text-slate-950 border border-slate-800 text-xs font-bold uppercase rounded-xl transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Quero um Igual</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
