export const COMPANY_INFO = {
  name: "EletroPRO",
  legalName: "EletroPRO Soluções & Engenharia Elétrica",
  slogan: "Especialista em Wallbox, QDC e Laudos Elétricos em Brasília",
  phone: "61 993510110",
  formattedPhone: "(61) 99351-0110",
  phoneRaw: "5561993510110",
  email: "contato@eletroprodf.com.br",
  city: "Brasília - DF",
  coverage: "Atendimento em todo o Distrito Federal e Entorno",
  workingHours: "Segunda a Sábado das 07h às 20h | Plantão para Emergências",
  experienceYears: "10+",
  completedProjects: "850+",
  satisfactionRate: "99.8%",
};

export const createWhatsAppUrl = (customText?: string) => {
  const defaultText = "Olá! Vim pelo site da EletroPRO e gostaria de solicitar um orçamento sem compromisso.";
  const text = encodeURIComponent(customText || defaultText);
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`;
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  iconName: string;
  benefits: string[];
  specs: string[];
  ctaText: string;
}

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: "wallbox",
    title: "Instalação de WallBox & Carregadores Veiculares",
    shortDesc: "Instalação segura e certificada de estações de recarga para carros elétricos e híbridos plug-in com proteção completa NBR 17019.",
    fullDesc: "Dimensionamento e instalação completa de carregadores de 7.4kW a 22kW. Inclui quadro de proteção dedicado com DPS Classe II, Disjuntor Curva C e DR Tipo A/B, cabeamento antichama e totem antivandalismo sob medida.",
    badge: "Especialidade Principal",
    iconName: "Zap",
    benefits: [
      "Opção de emissão de ART e Laudo para condomínio (sob demanda)",
      "Proteção total para o veículo contra picos e descargas atmosféricas",
      "Instalação residencial, prédios, vagas rotativas e frotas",
      "Compatível com BYD, GWM Haval/Ora, Volvo, BMW, Porsche, Audi e outros"
    ],
    specs: [
      "Disjuntor Bipolar/Tripolar Curva C",
      "DPS Clamper / Steck Classe II",
      "DR / IDR Tipo A ou B (Sensível a CC)",
      "Aterramento dedicado com laudo de medição"
    ],
    ctaText: "Orçar Instalação de Wallbox"
  },
  {
    id: "qdc-reforma",
    title: "Reforma de Quadro de Distribuição de Circuitos (QDC)",
    shortDesc: "Eliminação total de curto-circuitos, superaquecimentos e riscos de incêndio com troca de disjuntores antigos para o padrão DIN NBR 5410.",
    fullDesc: "Substituição de quadros obsoletos com disjuntores pretos NEMA por quadros modernos em policarbonato antichama com barramentos tipo pente blindados, terminais crimpados, anilhamento e identificação de circuitos.",
    badge: "Segurança Residencial",
    iconName: "ShieldAlert",
    benefits: [
      "Redução imediata no consumo por fuga de corrente",
      "Proteção contra choques elétricos graves com instalação de DR",
      "Proteção de eletrodomésticos e eletrônicos caros com DPS",
      "Organização estética impecável com identificação de cada cômodo"
    ],
    specs: [
      "Barramento Tipo Pente em Cobre Eletrolítico",
      "Terminais Tubulares Ilhós Crimpados",
      "Disjuntores DIN Norma IEC 60898",
      "Balanceamento milimétrico de fases"
    ],
    ctaText: "Orçar Reforma de QDC"
  },
  {
    id: "art-laudos",
    title: "Emissão de ART, Laudos Técnicos & Projetos",
    shortDesc: "Documentação técnica oficial assinada por profissional habilitado exigida por condomínios, Neoenergia e seguradoras (serviço sob demanda).",
    fullDesc: "Elaboração de Anotação de Responsabilidade Técnica (ART), Memorial Descritivo de Carga, Laudo de Conformidade das Instalações e Projetos Elétricos completos para obras e reformas.",
    badge: "Documentação Oficial",
    iconName: "FileCheck",
    benefits: [
      "Aprovação rápida na administração do condomínio",
      "Respaldo jurídico e pericial para sua segurança",
      "Exigência de seguradoras para cobertura de sinistros",
      "Memorial de cálculo exato de demanda e potência"
    ],
    specs: [
      "ART registrada no órgão de classe",
      "Relatório fotográfico e checklist normativo",
      "Memorial descritivo detalhado de materiais e bitolas",
      "Laudo de aterramento e continuidade ôhmica"
    ],
    ctaText: "Solicitar ART ou Laudo Técnico"
  },
  {
    id: "padrao-neoenergia",
    title: "Padrão de Entrada Neoenergia & Centros de Medição",
    shortDesc: "Montagem, aumento de carga e adequação de padrões de entrada individuais e centros de medição agrupada para edifícios e condomínios.",
    fullDesc: "Execução rigorosa segundo os padrões técnicos da Neoenergia Brasília. Mudança de monofásico para bifásico/trifásico, caixas de medição transparentes e cabos de entrada homologados.",
    badge: "Homologação Concessionária",
    iconName: "Building2",
    benefits: [
      "Adequação rápida para suportar novos ar-condicionados e carregadores",
      "Quadros de medição agrupada com barramentos protegidos",
      "Trabalho em postes com total segurança e EPI homologado",
      "Evita cortes de energia e multas por irregularidades"
    ],
    specs: [
      "Caixas homologadas com visor de policarbonato",
      "Cabos de cobre 750V/1kV antichama",
      "Hastes de aterramento em alta condutividade",
      "Padrão NBR e critérios técnicos locais"
    ],
    ctaText: "Orçar Padrão de Entrada"
  }
];

export const COVERAGE_AREAS = [
  { region: "Plano Piloto", neighborhoods: ["Asa Sul", "Asa Norte", "Vila Planalto"] },
  { region: "Lagos & Mansões", neighborhoods: ["Lago Sul", "Lago Norte", "Setor de Mansões"] },
  { region: "Sudoeste & Noroeste", neighborhoods: ["Sudoeste", "Noroeste", "Octogonal", "Cruzeiro"] },
  { region: "Águas Claras & Park Way", neighborhoods: ["Águas Claras", "Park Way (Todas as Quadras)", "Arniqueiras"] },
  { region: "Condomínios Fechados", neighborhoods: ["Jardim Botânico", "Alphaville Brasília", "Tororó", "Solar de Brasília"] },
  { region: "Cidades DF", neighborhoods: ["Guará I e II", "Vicente Pires", "Taguatinga", "Sobradinho", "Ceilândia", "Samambaia"] }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Rodrigo Alencar",
    car: "Proprietário BYD Seal - Lago Sul",
    text: "Excelente atendimento da EletroPRO! Instalaram meu Wallbox com um quadro de proteção dedicado impecável. Solicitei a ART para apresentar no condomínio e foi emitida rapidamente. Recomendo de olhos fechados.",
    rating: 5
  },
  {
    name: "Mariana Fontes",
    car: "Proprietária GWM Haval H6 - Sudoeste",
    text: "Contratei a EletroPRO para instalar o carregador Wallbox do meu GWM Haval H6 na garagem do condomínio e fazer a modernização do Quadro de Distribuição de Circuitos (QDC). O serviço foi rápido, limpo e seguro!",
    rating: 5
  },
  {
    name: "Eng. Carlos Eduardo",
    car: "Síndico Residencial - Águas Claras",
    text: "Contratamos a EletroPRO para a adequação dos pontos de recarga veicular nas garagens do prédio e laudo técnico do centro de medição. Profissionalismo exemplar, pontualidade e conhecimento profundo das normas NBR 5410 e NBR 17019.",
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    q: "A ART já vem inclusa na instalação do Wallbox?",
    a: "Não. A instalação elétrica é orçada separadamente e a emissão de ART (Anotação de Responsabilidade Técnica) é um serviço técnico opcional contratado à parte, caso o seu condomínio ou seguradora exijam o documento assinado por responsável habilitado."
  },
  {
    q: "Por que não posso carregar o carro elétrico em uma tomada comum da garagem?",
    a: "Tomadas residenciais comuns (10A ou 20A) não foram projetadas para suportar cargas contínuas de alta amperagem durante 8 a 20 horas consecutivas. Isso causa superaquecimento dos condutores, derretimento de plugues e alto risco de curto-circuito e incêndio. Um Wallbox com circuito dedicado e proteção DPS + DR garante recarga até 4x mais rápida com 100% de segurança."
  },
  {
    q: "O condomínio pode proibir a instalação do meu carregador veicular?",
    a: "Não, desde que a instalação siga as normas técnicas (NBR 5410 e NBR 17019), utilize medidor de consumo individual e, se exigido pelo síndico, seja acompanhada por Anotação de Responsabilidade Técnica (ART) e Memorial Descritivo assinados. Nós realizamos todo o serviço conforme a norma."
  },
  {
    q: "Qual a diferença do disjuntor moderno DIN para o antigo disjuntor preto (NEMA)?",
    a: "Os disjuntores pretos antigos (padrão NEMA) possuem curva de disparo lenta e mecânica imprecisa, além de não aceitarem barramentos blindados tipo pente nem proteção contra choques (DR). Os disjuntores DIN modernos (padrão IEC) desarmam com precisão milimétrica, aceitam barramentos isolados e garantem que sua fiação não sofra superaquecimento."
  },
  {
    q: "Quanto tempo demora para fazer a instalação do Wallbox ou a reforma do Quadro de Distribuição de Circuitos (QDC)?",
    a: "A maioria das instalações de WallBox residencial ou reformas completas de Quadro de Distribuição de Circuitos (QDC) são executadas em apenas 1 dia útil, com teste de carga e entrega técnica imediata para uso seguro."
  },
  {
    q: "Como solicito um orçamento?",
    a: "Basta clicar no botão de WhatsApp aqui na página ou ligar para (61) 99351-0110. Você pode nos enviar fotos do seu Quadro de Distribuição de Circuitos (QDC) atual ou do local da garagem para receber uma estimativa rápida e agendar a vistoria técnica."
  }
];
