import React from 'react';
import { COVERAGE_AREAS, COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { MapPin, MessageSquare } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  return (
    <section className="py-14 md:py-18 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Cobertura Técnica em Todo o Distrito Federal</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Regiões Atendidas em <span className="text-yellow-400">Brasília</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            Atendimento com veículo próprio e ferramental técnico para condomínios, casas e comércios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COVERAGE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-sm font-bold text-white mb-2.5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>{area.region}</span>
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {area.neighborhoods.map((bairro, bIdx) => (
                  <span
                    key={bIdx}
                    className="text-xs bg-slate-950 text-slate-300 border border-slate-800 px-2 py-0.5 rounded"
                  >
                    {bairro}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-slate-900 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white">Mora em outra cidade do DF ou no Entorno?</div>
            <div className="text-xs text-slate-400">Atendemos também Valparaíso, Jardim Ingá, Águas Lindas e adjacências sob consulta.</div>
          </div>
          
          <a
            href={createWhatsAppUrl("Olá! Gostaria de saber se vocês atendem meu endereço no DF/Entorno.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-yellow-400 text-slate-200 hover:text-slate-950 border border-slate-800 text-xs font-bold uppercase rounded-lg transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-yellow-400" />
            <span>Consultar Meu Bairro</span>
          </a>
        </div>

      </div>
    </section>
  );
};
