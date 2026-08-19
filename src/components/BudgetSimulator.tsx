import React, { useState } from 'react';
import { COMPANY_INFO, createWhatsAppUrl, COVERAGE_AREAS } from '../data/content';
import { Calculator, MessageSquare, Send, ShieldCheck, PhoneCall } from 'lucide-react';

export const BudgetSimulator: React.FC = () => {
  const [serviceType, setServiceType] = useState<string>('wallbox-condominio');
  const [propertyType, setPropertyType] = useState<string>('apartamento');
  const [vehicleBrand, setVehicleBrand] = useState<string>('BYD');
  const [neighborhood, setNeighborhood] = useState<string>('Lago Sul');
  const [urgency, setUrgency] = useState<string>('esta-semana');
  const [notes, setNotes] = useState<string>('');

  const handleGenerateWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabels: Record<string, string> = {
      'wallbox-condominio': 'Instalação de Wallbox em Condomínio (com ART inclusa)',
      'wallbox-casa': 'Instalação de Wallbox em Casa / Sobrado',
      'reforma-qdc': 'Reforma / Modernização de Quadro de Luz (DPS + DR)',
      'art-laudo': 'Emissão de ART e Laudo Técnico para Síndico',
      'padrao-neoenergia': 'Padrão de Entrada / Aumento de Carga Neoenergia',
      'iluminacao-led': 'Projeto de Iluminação / Perfis de LED e Sancas',
      'eletrica-geral': 'Serviços de Elétrica em Geral / Manutenção'
    };

    const propertyLabels: Record<string, string> = {
      'apartamento': 'Apartamento / Prédio com Garagem',
      'casa-condominio': 'Casa em Condomínio Fechado',
      'casa-rua': 'Casa de Rua',
      'comercio': 'Comércio / Empresa'
    };

    const urgencyLabels: Record<string, string> = {
      'urgente': 'Urgente (Hoje ou Amanhã)',
      'esta-semana': 'Nesta semana',
      'planejamento': 'Planejando orçamento'
    };

    const message = `*SOLICITAÇÃO DE ORÇAMENTO - SITE ELETROPRO* ⚡\n\n` +
      `📋 *Serviço:* ${serviceLabels[serviceType] || serviceType}\n` +
      `🏢 *Tipo de Imóvel:* ${propertyLabels[propertyType] || propertyType}\n` +
      `🚗 *Veículo / Carregador:* ${vehicleBrand}\n` +
      `📍 *Bairro em Brasília:* ${neighborhood}\n` +
      `⏱️ *Prazo Desejado:* ${urgencyLabels[urgency] || urgency}\n` +
      (notes.trim() ? `💬 *Observações:* ${notes.trim()}\n\n` : `\n`) +
      `Olá! Gostaria de receber valores e verificar disponibilidade para atendimento.`;

    const whatsappUrl = createWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  const allNeighborhoods = COVERAGE_AREAS.flatMap(r => r.neighborhoods);

  return (
    <section id="simulador" className="py-14 md:py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cartão do Formulário */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulador de Orçamento Imediato</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
              Solicite seu <span className="text-yellow-400">Orçamento sem Compromisso</span>
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm">
              Preencha os campos abaixo para ser direcionado ao WhatsApp do eletricista com os detalhes do seu projeto:
            </p>
          </div>

          <form onSubmit={handleGenerateWhatsApp} className="space-y-4">
            
            {/* Campo 1: Serviço */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1.5">
                1. Qual serviço você precisa? *
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-400 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 font-medium"
              >
                <option value="wallbox-condominio">🚗 Instalação de Wallbox em Condomínio (com ART inclusa)</option>
                <option value="wallbox-casa">⚡ Instalação de Wallbox em Casa / Sobrado</option>
                <option value="reforma-qdc">🛡️ Reforma e Modernização de Quadro de Luz (DPS + DR)</option>
                <option value="art-laudo">📄 Emissão de ART e Laudo Técnico para Síndico / CEB</option>
                <option value="padrao-neoenergia">🏢 Padrão de Entrada / Centro de Medição Neoenergia</option>
                <option value="iluminacao-led">✨ Projeto de Iluminação / Perfis de LED e Sancas</option>
                <option value="eletrica-geral">🔧 Serviços de Elétrica em Geral / Manutenção</option>
              </select>
            </div>

            {/* Grid 2: Imóvel e Veículo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  2. Tipo do Imóvel *
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-400 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 font-medium"
                >
                  <option value="apartamento">Apartamento / Edifício com Garagem</option>
                  <option value="casa-condominio">Casa em Condomínio Fechado</option>
                  <option value="casa-rua">Casa de Rua / Mansão</option>
                  <option value="comercio">Comércio / Empresa / Indústria</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  3. Veículo / Marca do Carregador
                </label>
                <select
                  value={vehicleBrand}
                  onChange={(e) => setVehicleBrand(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-400 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 font-medium"
                >
                  <option value="BYD (Dolphin / Seal / Song / Yuan)">BYD (Dolphin, Seal, Song Plus, Yuan, Shark)</option>
                  <option value="GWM (Haval H6 / Ora 03)">GWM (Haval H6, Ora 03 GT)</option>
                  <option value="Volvo (XC40 / EX30 / XC60)">Volvo (XC40, EX30, XC60)</option>
                  <option value="BMW (iX1 / iX3 / i4 / 330e)">BMW (iX1, iX3, i4, 330e, X5)</option>
                  <option value="Porsche / Audi / Mercedes">Porsche / Audi / Mercedes-Benz</option>
                  <option value="Carregador WEG / ABB / Steck">Carregador WEG / ABB / Steck</option>
                  <option value="Outro / Não é Wallbox">Outro modelo / Outro serviço</option>
                </select>
              </div>
            </div>

            {/* Grid 3: Localização e Prazo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  4. Bairro em Brasília / DF *
                </label>
                <select
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-400 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 font-medium"
                >
                  {allNeighborhoods.map((bairro, idx) => (
                    <option key={idx} value={bairro}>{bairro}</option>
                  ))}
                  <option value="Outro Bairro do DF / Entorno">Outro Bairro do DF / Entorno</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  5. Prazo Desejado *
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-400 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 font-medium"
                >
                  <option value="urgente">⚡ Urgente (Atendimento hoje ou amanhã)</option>
                  <option value="esta-semana">📅 Nesta semana</option>
                  <option value="planejamento">📋 Planejando para os próximos dias</option>
                </select>
              </div>
            </div>

            {/* Campo 4: Observações Opcionais */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1.5">
                6. Observações Adicionais (opcional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Exemplo: Distância aproximada da vaga até o relógio, quadro de luz antigo, etc."
                rows={2}
                className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-400 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 placeholder:text-slate-600 font-sans"
              />
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wide rounded-xl transition-all duration-150 cursor-pointer shadow-lg shadow-yellow-400/20 hover:scale-[1.01]"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Gerar Orçamento no WhatsApp Agora</span>
              <Send className="w-4 h-4 ml-1" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 pt-1">
              <span className="text-yellow-400 font-semibold">✓ Sem compromisso</span>
              <span>•</span>
              <span>⚡ Resposta ágil</span>
              <span>•</span>
              <span className="text-slate-300">📞 Contato direto com o profissional</span>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
