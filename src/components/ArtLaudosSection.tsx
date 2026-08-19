import React from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { FileCheck, ShieldCheck, CheckCircle2, FileText, Landmark, Scale, ArrowRight, MessageSquare, Award } from 'lucide-react';

export const ArtLaudosSection: React.FC = () => {
  const documents = [
    {
      icon: FileCheck,
      title: "ART (Anotação de Responsabilidade Técnica)",
      desc: "Documento oficial registrado no conselho de classe que valida a responsabilidade técnica do profissional perante a lei e normas da ABNT.",
      tags: ["Condomínios", "Neoenergia", "Seguradoras"],
      points: [
        "Aprovação imediata para instalação de Wallbox em garagens de condomínios",
        "Validade jurídica em caso de vistorias e apólices de seguro",
        "Garantia formal de execução conforme normas NBR 5410 e NBR 17019"
      ]
    },
    {
      icon: FileText,
      title: "Memorial Descritivo e Dimensionamento",
      desc: "Cálculo detalhado de demanda energética que comprova que a instalação não causará sobrecarga no transformador do prédio.",
      tags: ["Cálculo de Demanda", "Bitola de Cabos", "Queda de Tensão"],
      points: [
        "Detalhamento de materiais, disjuntores e cabeamento antichama",
        "Cálculo de corrente nominal e capacidade de curto-circuito",
        "Documentação obrigatória solicitada por síndicos e administradoras"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Laudo de Conformidade e Aterramento",
      desc: "Relatório de inspeção técnica com termografia e medição de resistência do sistema de aterramento em Ohms com terrômetro digital calibrado.",
      tags: ["Termografia", "Terrômetro", "Inspeção NBR"],
      points: [
        "Comprovação de aterramento eficiente para proteção do veículo e casa",
        "Identificação preventiva de aquecimentos anormais e fugas de energia",
        "Relatório com fotos e checklist minucioso de conformidade"
      ]
    },
    {
      icon: Landmark,
      title: "Projetos Elétricos Executivos",
      desc: "Plantas baixas completas, diagramas unifilares e trifilares, quadros de cargas e especificações técnicas para obras e reformas.",
      tags: ["Residencial", "Comercial", "Predial"],
      points: [
        "Diagramas unifilares e multifilares detalhados",
        "Setorização correta de iluminação, tomadas e circuitos de força",
        "Economia de materiais e execução sem retrabalho"
      ]
    }
  ];

  return (
    <section id="art-laudos" className="py-14 md:py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>Documentação Oficial e Engenharia</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Emissão de <span className="text-yellow-400">ART, Laudos Técnicos</span> e Memorial
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Precisa de autorização do síndico para o seu carregador veicular ou vai realizar reformas elétricas? Entregamos a pasta técnica completa assinada por profissional habilitado em Brasília.
          </p>
        </div>

        {/* 4 Cartões de Documentação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {documents.map((doc, idx) => {
            const IconComp = doc.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-slate-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {doc.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-bold bg-slate-950 text-slate-300 border border-slate-800 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 space-y-1.5">
                    {doc.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Emissão ágil em Brasília</span>
                  <a
                    href={createWhatsAppUrl(`Olá! Preciso de ${doc.title} para o meu condomínio/obra.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-yellow-400 hover:text-yellow-300"
                  >
                    <span>Solicitar documento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloco Condomínios */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-bold text-yellow-400 uppercase tracking-wide">
              <Scale className="w-4 h-4" />
              <span>Segurança Jurídica e Responsabilidade Técnica</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-['Outfit',sans-serif]">
              O síndico exigiu ART e Memorial Descritivo?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Nossa documentação atende 100% das normas das convenções condominiais do DF (Plano Piloto, Noroeste, Sudoeste, Águas Claras e Park Way).
            </p>
          </div>

          <a
            href={createWhatsAppUrl("Olá! O síndico do meu prédio está solicitando ART e Memorial Descritivo para instalação de Wallbox. Vocês podem me ajudar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold uppercase text-xs rounded-xl shadow-md transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Falar com Responsável Técnico</span>
          </a>
        </div>

      </div>
    </section>
  );
};
