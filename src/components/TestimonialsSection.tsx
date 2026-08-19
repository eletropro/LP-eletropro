import React from 'react';
import { TESTIMONIALS, createWhatsAppUrl } from '../data/content';
import { Star, Quote, CheckCircle, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <Star className="w-3.5 h-3.5 fill-yellow-400" />
            <span>Avaliações Reais de Clientes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            O que Nossos Clientes <span className="text-yellow-400">Dizem em Brasília</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Depoimentos de proprietários de veículos elétricos e síndicos atendidos pela <strong>EletroPRO</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-700" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{t.name}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </h4>
                <p className="text-xs text-yellow-400 font-medium mt-0.5">{t.car}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada para Ação */}
        <div className="text-center">
          <a
            href={createWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para o meu imóvel.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wide rounded-xl shadow-lg shadow-yellow-400/20 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Faça seu Orçamento e Tenha uma Instalação Segura</span>
          </a>
        </div>

      </div>
    </section>
  );
};
