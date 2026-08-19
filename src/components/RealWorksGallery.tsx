import React, { useState } from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/content';
import { Sparkles, ShieldCheck, Zap, BatteryCharging, Lightbulb, Building, ArrowRight, MessageSquare } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'wallbox' | 'qdc' | 'padrao' | 'led';
  title: string;
  subtitle: string;
  location: string;
  technicalBadge: string;
  features: string[];
  description: string;
}

export const RealWorksGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const galleryItems: GalleryItem[] = [
    {
      id: 'wb-abb',
      category: 'wallbox',
      title: 'Wallbox ABB com Quadro Dedicado WEG/Steck',
      subtitle: 'Circuito Exclusivo com Medidor KWh e Proteção DPS + DR',
      location: 'Lago Sul, Brasília',
      technicalBadge: 'Wallbox Residencial',
      features: ['Disjuntor Bipolar Curva C', 'DPS Classe II', 'DR Tipo A', 'Medidor de Consumo'],
      description: 'Instalação de estação de recarga ABB com quadro de comando individualizado, proteção contra descargas atmosféricas e cabo antichama dimensionado.'
    },
    {
      id: 'wb-gwm',
      category: 'wallbox',
      title: 'Estação de Recarga Wallbox GWM em Condomínio',
      subtitle: 'Infraestrutura Completa em Eletroduto com Emissão de ART',
      location: 'Sudoeste, DF',
      technicalBadge: 'Aprovado em Condomínio',
      features: ['Emissão de ART para Síndico', 'Quadro Steck com IDR', 'Eletroduto Rígido Antichama', 'Tomada Auxiliar'],
      description: 'Ponto de carregamento inteligente para GWM Haval/Ora com quadro de disjuntores dedicado no pilar da garagem e aprovação em assembleia de condomínio.'
    },
    {
      id: 'wb-totem',
      category: 'wallbox',
      title: 'Totem de Recarga Veicular com Grade de Proteção',
      subtitle: 'Estrutura Metálica Antivandalismo com Trava de Segurança',
      location: 'Brasília - DF',
      technicalBadge: 'Totem Blindado',
      features: ['Grade Metálica com Fechadura', 'Suporte Ergonômico', 'Base de Concreto Reforçada', 'Cabos Blindados'],
      description: 'Solução recomendada para áreas externas e condomínios com vaga compartilhada. Protege o carregador contra furto de cabos e intempéries.'
    },
    {
      id: 'qdc-moderno-clamper',
      category: 'qdc',
      title: 'Montagem de QDC Trifásico com DPS Clamper e DR',
      subtitle: 'Barramentos Blindados Tipo Pente e Terminais Crimpados',
      location: 'Alphaville Brasília',
      technicalBadge: 'Padrão NBR 5410',
      features: ['DPS Clamper Vermelho Classe II', 'Dispositivo DR Tetrapolar', 'Barramento Pente Cobre', 'Anilhas de Circuito'],
      description: 'Quadro elétrico montado com balanceamento rigoroso de fases, proteção contra raios para eletrodomésticos caros e proteção humana contra choques.'
    },
    {
      id: 'qdc-reforma-steck',
      category: 'qdc',
      title: 'Reforma de Quadro Antigo para Padrão DIN Steck',
      subtitle: 'Eliminação de Curto-Circuitos e Fios Superaquecidos',
      location: 'Asa Norte, Brasília',
      technicalBadge: 'Reforma de Quadro',
      features: ['Disjuntores DIN Steck', 'Substituição de Disjuntores NEMA', 'Barramentos Isolados', 'Quadro Antichama'],
      description: 'Substituição de quadro antigo oxidado por sistema moderno com disjuntores modulares e barramentos de neutro e terra independentes.'
    },
    {
      id: 'padrao-centro-medicao',
      category: 'padrao',
      title: 'Centro de Medição Agrupada (Padrão Neoenergia)',
      subtitle: 'Homologação de Caixas Transparentes em Policarbonato',
      location: 'Águas Claras / Taguatinga',
      technicalBadge: 'Homologado Concessionária',
      features: ['Caixas com Visor Homologado', 'Barramento Geral Protegido', 'Cabos 1kV Antichama', 'Aumento de Carga'],
      description: 'Execução de centro de medição múltipla para individualização de contas e aumento de carga trifásica, aprovado e lacrado pela Neoenergia Brasília.'
    },
    {
      id: 'eletricista-poste',
      category: 'padrao',
      title: 'Adequação em Padrão de Entrada Aéreo e Poste',
      subtitle: 'Adequação de Ramal de Entrada e Cabos de Força',
      location: 'Brasília - DF e Entorno',
      technicalBadge: 'Norma NR-10 e Altura',
      features: ['EPIs e Cinto Homologado', 'Cabo Concêntrico de Entrada', 'Isoladores Novos', 'Aterramento em Haste'],
      description: 'Manutenção e montagem de ramais aéreos de entrada de energia no poste, garantindo bitola adequada para novos aparelhos e ar condicionado.'
    },
    {
      id: 'iluminacao-perfil-led',
      category: 'led',
      title: 'Iluminação Linear com Perfis de LED e Sancas',
      subtitle: 'Design Luminotécnico em Forro de Gesso com Circuitos Independentes',
      location: 'Jardim Botânico, Brasília',
      technicalBadge: 'Projeto Luminotécnico',
      features: ['Perfis de Alumínio Embutidos', 'Fita LED de Alta Densidade', 'Fontes Slim Refrigeradas', 'Setorização de Circuitos'],
      description: 'Instalação de linhas contínuas de luz em perfis de alumínio e sancas invertidas de gesso, criando ambientes elegantes com iluminação indireta.'
    }
  ];

  const filteredItems = activeCategory === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'todos', label: 'Todos os Projetos', icon: Zap },
    { id: 'wallbox', label: 'Wallbox e Recarga', icon: BatteryCharging },
    { id: 'qdc', label: 'Quadros de Luz', icon: ShieldCheck },
    { id: 'padrao', label: 'Padrão e Medição', icon: Building },
    { id: 'led', label: 'Iluminação e LED', icon: Lightbulb },
  ];

  return (
    <section id="galeria" className="py-14 md:py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfólio de Obras Reais em Brasília</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Obras e <span className="text-yellow-400">Instalações Entregues</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Confira detalhes das instalações de Wallbox, reformas de quadros de distribuição, centros de medição e iluminação executados pela <strong>EletroPRO</strong>.
          </p>
        </div>

        {/* Botões de Filtro */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-yellow-400 text-slate-950 shadow-md scale-105'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grade de Obras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between transition-all duration-150 hover:border-slate-700"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                    {item.technicalBadge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-1">
                  {item.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800">
                <a
                  href={createWhatsAppUrl(`Olá! Vi o projeto "${item.title}" no site e gostaria de um orçamento parecido para o meu imóvel.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 bg-slate-950 hover:bg-yellow-400 text-slate-200 hover:text-slate-950 border border-slate-800 text-xs font-bold uppercase rounded-lg transition-all group"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-yellow-400 group-hover:text-slate-950 group-hover:fill-slate-950" />
                  <span>Pedir Orçamento</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé da Galeria */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-2">
            Gostaria de agendar uma vistoria técnica presencial no seu endereço em Brasília?
          </p>
          <a
            href={createWhatsAppUrl("Olá! Gostaria de agendar uma vistoria técnica com a EletroPRO.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-yellow-400 hover:text-yellow-300 hover:underline"
          >
            <span>Falar com o eletricista técnico pelo WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
