import React from 'react';
import { ShieldCheck, FileText, Zap, MapPin } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Normas NBR 5410 e 17019",
      desc: "Segurança total sem improvisos",
      tag: "Normatizado"
    },
    {
      icon: FileText,
      title: "Emissão de ART e Laudo",
      desc: "Documento oficial para condomínios",
      tag: "Oficial"
    },
    {
      icon: Zap,
      title: "Mais de 850 Obras Entregues",
      desc: "Especialista em Wallbox em Brasília",
      tag: "Experiência"
    },
    {
      icon: MapPin,
      title: "Atendimento em Todo o DF",
      desc: "Plano Piloto, Lagos e Cidades",
      tag: "Cobertura"
    }
  ];

  return (
    <section className="bg-slate-900 border-b border-slate-800 py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center gap-3.5 group hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0 text-yellow-400 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
