import React, { useState } from 'react';
import { COMPANY_INFO, createWhatsAppUrl, COVERAGE_AREAS } from '../data/content';
import { Calculator, MessageSquare, Send } from 'lucide-react';

export const BudgetSimulator: React.FC = () => {
  const [serviceType, setServiceType] = useState<string>('Instalação de Wallbox');
  const [artOption, setArtOption] = useState<string>('Sem ART');
  const [neighborhood, setNeighborhood] = useState<string>('Plano Piloto (Asa Sul / Asa Norte)');
  const [notes, setNotes] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*SOLICITAÇÃO DE ORÇAMENTO - ELETROPRO* ⚡\n\n` +
      `📌 *Serviço:* ${serviceType}\n` +
      `📄 *Opção de ART:* ${artOption}\n` +
      `📍 *Região em Brasília:* ${neighborhood}\n` +
      (notes.trim() ? `💬 *Observação:* ${notes.trim()}\n\n` : `\n`) +
      `Olá! Gostaria de receber um orçamento sem compromisso.`;

    const whatsappUrl = createWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="simulador" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
              <Calculator className="w-3.5 h-3.5" />
              <span>Orçamento Rápido</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
              Faça seu <span className="text-yellow-400">Orçamento no WhatsApp</span>
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm">
              Selecione as opções abaixo para iniciar o atendimento direto com o eletricista técnico:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Serviço */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1.5">
                Qual serviço você deseja orçar? *
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-400 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 font-medium"
              >
                <option value="Instalação de Wallbox em Garagem">🚗 Instalação de Wallbox em Garagem</option>
                <option value="Reforma de Quadro de Distribuição de Circuitos (QDC)">🛡️ Reforma de Quadro de Distribuição de Circuitos (QDC)</option>
                <option value="Emissão Avulsa de ART / Laudo Técnico">📄 Emissão Avulsa de ART / Laudo Técnico</option>
                <option value="Padrão de Entrada Neoenergia & Aumento de Carga">🏢 Padrão de Entrada Neoenergia & Aumento de Carga</option>
                <option value="Serviços de Elétrica em Geral / Manutenção">🔧 Serviços de Elétrica em Geral / Manutenção</option>
              </select>
            </div>

            {/* ART Opcional */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1.5">
                Necessita de Emissão de ART (Anotação de Responsabilidade Técnica)? *
              </label>
              <select
                value={artOption}
                onChange={(e) => setArtOption(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-400 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 font-medium"
              >
                <option value="Não preciso de ART (Apenas instalação padrão)">Não preciso de ART (Apenas instalação padrão)</option>
                <option value="Sim, preciso de ART e Laudo para Condomínio (Custo à parte)">Sim, preciso de ART e Laudo para Condomínio (Custo à parte)</option>
                <option value="Quero consultar o valor da ART">Quero consultar o valor da ART</option>
              </select>
            </div>

            {/* Bairro */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1.5">
                Região / Bairro no DF *
              </label>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-400 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 font-medium"
              >
                <option value="Plano Piloto (Asa Sul / Asa Norte)">Plano Piloto (Asa Sul / Asa Norte)</option>
                <option value="Lago Sul / Lago Norte / Mansões">Lago Sul / Lago Norte / Mansões</option>
                <option value="Sudoeste / Noroeste / Cruzeiro / Octogonal">Sudoeste / Noroeste / Cruzeiro / Octogonal</option>
                <option value="Águas Claras / Park Way / Arniqueiras">Águas Claras / Park Way / Arniqueiras</option>
                <option value="Jardim Botânico / Alphaville / Tororó">Jardim Botânico / Alphaville / Tororó</option>
                <option value="Guará / Taguatinga / Vicente Pires">Guará / Taguatinga / Vicente Pires</option>
                <option value="Outra Região do DF / Entorno">Outra Região do DF / Entorno</option>
              </select>
            </div>

            {/* Observações */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1.5">
                Detalhes adicionais (opcional)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Exemplo: Haval H6, BYD Dolphin, distância da garagem, etc."
                className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-400 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 placeholder:text-slate-600 font-sans"
              />
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wide rounded-xl transition-all cursor-pointer shadow-lg shadow-yellow-400/20 hover:scale-[1.01]"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Chamar no WhatsApp e Receber Orçamento</span>
              <Send className="w-3.5 h-3.5 ml-1" />
            </button>

            <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400 pt-1">
              <span className="text-yellow-400 font-semibold">✓ Atendimento sem compromisso</span>
              <span>•</span>
              <span>⚡ Retorno rápido</span>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
