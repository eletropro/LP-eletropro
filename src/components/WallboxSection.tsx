import React, { useState } from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { Zap, ShieldCheck, FileCheck, CheckCircle2, MessageSquare, AlertTriangle, BatteryCharging, Gauge, ArrowRight } from 'lucide-react';

export const WallboxSection: React.FC = () => {
  const [selectedPower, setSelectedPower] = useState<'7.4' | '11' | '22'>('7.4');

  const powerDetails = {
    '7.4': {
      title: '7.4 kW (Monofásico / Bifásico 220V)',
      typicalTime: '4 a 6 horas (0 a 100%)',
      idealFor: 'BYD Dolphin, Song Plus, GWM Haval H6, Ora 03, Volvo XC40, híbridos plug-in e a grande maioria das garagens residenciais em Brasília.',
      infra: 'Disjuntor Bipolar 40A Curva C + DPS + DR Tipo A + Cabos de 6mm² a 10mm²',
      highlight: 'Mais indicado para casas e apartamentos no DF'
    },
    '11': {
      title: '11 kW (Trifásico 220V/380V)',
      typicalTime: '3 a 4 horas (0 a 100%)',
      idealFor: 'BYD Seal, Volvo EX30, BMW iX, Audi e-tron, Porsche Taycan e veículos com carregador interno trifásico.',
      infra: 'Disjuntor Tripolar 20A a 25A + DPS Quadripolar + DR Tipo B + Cabos de 4mm² a 6mm²',
      highlight: 'Alta velocidade para veículos 100% elétricos'
    },
    '22': {
      title: '22 kW (Trifásico Alta Potência)',
      typicalTime: '1.5 a 2.5 horas (0 a 100%)',
      idealFor: 'Frotas comerciais, condomínios com vaga compartilhada, estabelecimentos comerciais e veículos com recarga ultra-rápida.',
      infra: 'Disjuntor Tripolar 40A + Quadro Blindado + DPS + DR Tipo B + Cabos de 10mm² a 16mm²',
      highlight: 'Potência máxima e carregamento ultra-rápido'
    }
  };

  return (
    <section id="wallbox" className="py-14 md:py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <Zap className="w-3.5 h-3.5 fill-yellow-400" />
            <span>Mobilidade Elétrica e Segurança</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Instalação de <span className="text-yellow-400">Estações de Recarga Wallbox</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Não arrisque a rede elétrica da sua casa nem a bateria do seu veículo. A <strong>EletroPRO</strong> realiza a instalação completa conforme a norma <strong>NBR 17019</strong> com quadro dedicado, laudo e <strong>emissão de ART inclusa</strong>.
          </p>
        </div>

        {/* Comparativo: Tomada Comum vs Padrão EletroPRO */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Cartão de Risco: Tomada Convencional */}
          <div className="bg-slate-900/60 border border-red-900/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h3 className="text-base font-bold text-white">Tomada Comum (Sem Norma Técnica)</h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-900/60 px-2 py-0.5 rounded">
                  Risco de Incêndio
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Carregar o veículo elétrico em tomadas residenciais de 10A ou 20A submete a fiação a corrente máxima por muitas horas seguidas:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2 text-red-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Superaquecimento e derretimento</strong> de fiações e tomadas embutidas.</span>
                </li>
                <li className="flex items-start gap-2 text-red-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Sem proteção contra surtos (DPS)</strong>: oscilações queimam o inversor do veículo.</span>
                </li>
                <li className="flex items-start gap-2 text-red-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Sem DR Tipo A/B</strong>: risco gravíssimo de choque por fuga de corrente contínua.</span>
                </li>
                <li className="flex items-start gap-2 text-red-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Recusa do condomínio</strong> e risco de perda de cobertura de seguradoras.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-red-400 font-medium">
              ⚠️ Não utilize tomadas convencionais para a recarga diária do seu veículo.
            </div>
          </div>

          {/* Cartão de Excelência: Padrão EletroPRO */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between ring-1 ring-yellow-400/30">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BatteryCharging className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-base font-bold text-white">Instalação Técnica EletroPRO</h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-950 bg-yellow-400 px-2 py-0.5 rounded">
                  Padrão NBR 17019
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Circuito 100% exclusivo do quadro geral até a vaga com proteção pericial e materiais homologados:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Quadro dedicado</strong> com Disjuntor Curva C + DPS Classe II + DR Tipo A/B.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Medidor de consumo em KWh</strong> individual (ideal para prestação de contas no condomínio).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Emissão de ART e Memorial Descritivo</strong> assinados para autorização do síndico.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Opção de Totem metálico</strong> com grade de proteção antivandalismo e suporte de cabo.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={createWhatsAppUrl("Olá! Gostaria de agendar uma vistoria/orçamento para instalar meu Wallbox em Brasília.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wide rounded-xl shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Faça seu Orçamento de Wallbox</span>
              </a>
            </div>
          </div>

        </div>

        {/* Seletor de Potência e Tempo de Carga */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Gauge className="w-5 h-5 text-yellow-400" />
                <span>Comparativo de Potência e Tempo de Recarga</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Selecione a potência desejada para conferir as especificações de infraestrutura:
              </p>
            </div>

            {/* Botões de Potência */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
              {(['7.4', '11', '22'] as const).map((power) => (
                <button
                  key={power}
                  onClick={() => setSelectedPower(power)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    selectedPower === power
                      ? 'bg-yellow-400 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {power} kW
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider">Potência e Tensão</span>
              <h4 className="text-sm font-bold text-white">{powerDetails[selectedPower].title}</h4>
              <p className="text-xs text-yellow-400/90 font-medium pt-1">⚡ {powerDetails[selectedPower].highlight}</p>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider">Tempo Médio (0 a 100%)</span>
              <h4 className="text-sm font-bold text-white">{powerDetails[selectedPower].typicalTime}</h4>
              <p className="text-xs text-slate-400 pt-1">Recarga segura com monitoramento térmico</p>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider">Veículos Compatíveis</span>
              <p className="text-xs text-slate-300 leading-relaxed">{powerDetails[selectedPower].idealFor}</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-slate-300">
              <strong className="text-white">Infraestrutura Necessária:</strong> {powerDetails[selectedPower].infra}
            </div>
            <a
              href={createWhatsAppUrl(`Olá! Gostaria de um orçamento para instalar Wallbox de ${selectedPower} kW em Brasília.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-yellow-400 hover:text-yellow-300 uppercase tracking-wider flex items-center gap-1 shrink-0"
            >
              <span>Pedir orçamento para {selectedPower} kW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Etapas do Processo */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit',sans-serif]">
            Como Funciona o Atendimento da EletroPRO?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Processo ágil, seguro e 100% documentado do início ao fim
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'Vistoria e Orçamento', desc: 'Análise técnica da capacidade do quadro de luz, distância de cabos e infraestrutura existente.' },
            { step: '02', title: 'Laudo e ART', desc: 'Elaboração do Memorial Descritivo de Carga e emissão da ART para autorização do condomínio.' },
            { step: '03', title: 'Instalação Técnica', desc: 'Montagem do quadro dedicado com disjuntor, DPS, DR Tipo A/B e passagem de cabos antichama.' },
            { step: '04', title: 'Testes e Entrega', desc: 'Medição de aterramento com terrômetro, teste de recarga no veículo e entrega da ART assinada.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 relative group hover:border-yellow-400/40 transition-colors">
              <div className="text-2xl font-black text-yellow-400 font-mono mb-2">{item.step}</div>
              <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
