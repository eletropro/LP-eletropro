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
    fullDesc: "Dimensionamento e instalação completa de carregadores de 7.4kW (monofásico/bifásico) a 22kW (trifásico). Inclui quadro de proteção dedicado com DPS Classe II, Disjuntor Curva C e DR Tipo A/B, cabeamento antichama e totem antivandalismo sob medida.",
    badge: "Especialidade Principal",
    iconName: "Zap",
    benefits: [
      "Emissão de ART e Laudo para aprovação em condomínios",
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
    title: "Reforma & Modernização de QDC (Quadro Elétrico)",
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
    ctaText: "Orçar Reforma de Quadro Elétrico"
  },
  {
    id: "art-laudos",
    title: "Emissão de ART, Laudos Técnicos & Projetos",
    shortDesc: "Documentação técnica oficial assinada por profissional habilitado exigida por condomínios, Neoenergia e seguradoras.",
    fullDesc: "Elaboração de Anotação de Responsabilidade Técnica (ART), Memorial Descritivo de Carga, Laudo de Conformidade das Instalações e Projetos Elétricos completos para obras e reformas.",
    badge: "Documentação Oficial",
    iconName: "FileCheck",
    benefits: [
      "Aprovação imediata na administração do condomínio",
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
  },
  {
    id: "iluminacao-led",
    title: "Projetos de Iluminação & Perfis de LED Sofisticados",
    shortDesc: "Instalação elegante de sancas de gesso, perfis de LED de sobrepor e embutir, pendentes e automação luminotécnica.",
    fullDesc: "Transforme ambientes com iluminação indireta moderna, drivers de alta durabilidade sem oscilações e cortes de fita milimétricos com circuitos independentes.",
    badge: "Design & Sofisticação",
    iconName: "Sparkles",
    benefits: [
      "Acabamento limpo sem fiação aparente",
      "Fontes chaveadas protegidas e bem refrigeradas",
      "Setorização inteligente de luz quente (3000K) e neutra (4000K)",
      "Instalação segura que não sobrecarrega a rede"
    ],
    specs: [
      "Perfis de alumínio anodizado com difusor leitoso",
      "Fontes Slim com proteção contra sobretensão",
      "Dimmer e interruptores inteligentes compatíveis",
      "Conexões estanques e isolação classe A"
    ],
    ctaText: "Orçar Projeto Luminotécnico"
  },
  {
    id: "eletrica-geral",
    title: "Serviços de Elétrica em Geral & Manutenção",
    shortDesc: "Instalações pesadas em eletrodutos galvanizados, tomadas industriais, pressurizadores, bombas e manutenções comerciais.",
    fullDesc: "Soluções completas para residências de alto padrão, comércio e indústrias em Brasília. Instalações aparentes tipo industrial, circuitos para ar condicionado e passagem de cabos.",
    badge: "Completo",
    iconName: "Wrench",
    benefits: [
      "Ferramental de precisão e testes com terrômetro e multímetro digital",
      "Atendimento pontual com horário agendado",
      "Garantia estendida em todos os serviços executados",
      "Ambiente sempre limpo e organizado pós-obra"
    ],
    specs: [
      "Eletrodutos rígidos e conduletes blindados",
      "Circuitos dedicados para fornos, cooktops e aquecedores",
      "Infraestrutura para no-breaks e geradores",
      "Manutenção preventiva de motores e painéis"
    ],
    ctaText: "Falar com Eletricista Geral"
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "qdc-reforma-1",
    title: "Modernização Completa de QDC Residencial",
    location: "Asa Sul - Brasília",
    beforeProblem: "Quadro antigo de ferro embutido com disjuntores pretos tipo NEMA frouxos, sem DPS contra raios, sem DR contra choque e com fios emendados aquecendo.",
    afterSolution: "Novo quadro antichama com barramento tipo pente de cobre, DPS Clamper vermelho classe II, DR geral para proteção contra choques e disjuntores Steck DIN individuais por circuito.",
    beforePoints: [
      "Alto risco de curto-circuito e princípio de incêndio",
      "Disjuntores descalibrados que desarmavam sem motivo",
      "Sem dispositivo DR (risco mortal em caso de choque)",
      "Cabos torrados e emendas sem terminais"
    ],
    afterPoints: [
      "Total conformidade com a norma NBR 5410",
      "Proteção DPS contra queima de eletrônicos por surtos",
      "Dispositivo DR para proteção humana e de animais",
      "Balanceamento térmico e identificação em cada disjuntor"
    ],
    imageType: "qdc-reforma"
  },
  {
    id: "wallbox-instalacao",
    title: "Estação de Recarga WallBox Residencial & Condomínio",
    location: "Lago Sul / Condomínios DF",
    beforeProblem: "Carregamento perigoso em tomada comum 10A/20A que superaquecia o circuito da garagem e demorava mais de 18 horas para recarregar o carro.",
    afterSolution: "Instalação de Wallbox de 7.4kW com quadro dedicado blindado, disjuntor bipolar curva C, DPS, DR Tipo A/B e infraestrutura em eletroduto galvanizado.",
    beforePoints: [
      "Tempo excessivo de recarga (18h a 24h na tomada comum)",
      "Risco iminente de derretimento da tomada e fiação da casa",
      "Sem comunicação inteligente com o veículo",
      "Rejeição da administração do condomínio sem laudo"
    ],
    afterPoints: [
      "Recarga rápida e segura (3h a 6h para carga completa)",
      "Quadro de proteção exclusivo e medidor de consumo KWh",
      "Emissão de ART e Memorial Descritivo para o condomínio",
      "Totem antivandalismo e acabamento de alto padrão"
    ],
    imageType: "wallbox-totem"
  },
  {
    id: "centro-medicao",
    title: "Centro de Medição Agrupada (Padrão Neoenergia)",
    location: "Águas Claras / Taguatinga",
    beforeProblem: "Padrão de entrada precário com caixas danificadas, cabeamento subdimensionado e problemas para aprovação de aumento de carga.",
    afterSolution: "Montagem completa de Centro de Medição Agrupada com caixas de policarbonato transparentes, barramentos de cobre protegidos e homologação rápida.",
    beforePoints: [
      "Risco de corte e reprovação pela concessionária",
      "Falta de espaço para individualização de relógios",
      "Barramentos expostos e perigosos"
    ],
    afterPoints: [
      "Homologação imediata no padrão Neoenergia Brasília",
      "Caixas com visor transparente e lacre de segurança",
      "Capacidade para futura expansão e aumento de carga"
    ],
    imageType: "centro-medicao"
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

export const WALLBOX_BRANDS = [
  { name: "BYD", models: "Dolphin, Seal, Song Plus, Yuan Plus, King, Shark" },
  { name: "GWM", models: "Haval H6 PHEV, Ora 03 Skin / GT" },
  { name: "Volvo", models: "XC40 Recharge, EX30, XC60 T8, XC90" },
  { name: "BMW", models: "iX1, iX3, i4, iX, 330e, X5 xDrive" },
  { name: "Porsche", models: "Taycan, Macan Electric, Cayenne E-Hybrid" },
  { name: "Audi", models: "e-tron, Q8 e-tron, RS e-tron GT" },
  { name: "Mercedes-Benz", models: "EQA, EQB, EQC, EQE, EQS" },
  { name: "WEG / ABB / Steck", models: "Carregadores homologados nacionais e importados" }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Rodrigo Alencar",
    car: "Proprietário BYD Seal - Lago Sul",
    text: "Excelente atendimento da EletroPRO! Instalaram meu Wallbox com um quadro de proteção impecável e emitiram a ART no mesmo dia. A administração do condomínio aprovou sem nenhuma ressalva. Recomendo de olhos fechados.",
    rating: 5
  },
  {
    name: "Mariana Fontes",
    car: "Proprietária GWM Haval H6 - Sudoeste",
    text: "Meu quadro elétrico antigo estava cheirando a queimado. A equipe da EletroPRO veio com urgência, trocou todos os disjuntores velhos por peças modernas com DPS e DR. Trabalho super limpo e profissional.",
    rating: 5
  },
  {
    name: "Eng. Carlos Eduardo",
    car: "Síndico Residencial - Águas Claras",
    text: "Contratamos a EletroPRO para a adequação dos pontos de recarga veicular nas garagens do prédio e laudo do centro de medição. Profissionalismo exemplar, pontualidade e conhecimento profundo das normas técnicas.",
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    q: "Por que não posso carregar o carro elétrico em uma tomada comum da garagem?",
    a: "Tomadas residenciais comuns (10A ou 20A) não foram projetadas para suportar cargas contínuas de alta amperagem durante 8 a 20 horas consecutivas. Isso causa superaquecimento dos condutores, derretimento de plugues e alto risco de curto-circuito e incêndio. Um Wallbox com circuito dedicado e proteção DPS + DR garante recarga em até 4x mais rápida com 100% de segurança."
  },
  {
    q: "O condomínio pode proibir a instalação do meu carregador veicular?",
    a: "Não, desde que a instalação siga as normas técnicas (NBR 5410 e NBR 17019), utilize medidor de consumo individual e seja acompanhada por Anotação de Responsabilidade Técnica (ART) e Memorial Descritivo assinados por engenheiro/responsável técnico habilitado. Nós fornecemos todo o pacote documental pronto para o síndico."
  },
  {
    q: "O que é a ART e por que ela é tão importante?",
    a: "A ART (Anotação de Responsabilidade Técnica) é o documento legal que comprova a responsabilidade técnica do profissional perante o Conselho de Classe (CREA/CFT) e a lei. Ela é exigida por condomínios, prefeituras, concessionária de energia e seguradoras para garantir a validade de apólices em caso de sinistros."
  },
  {
    q: "Qual a diferença do disjuntor moderno DIN para o antigo disjuntor preto (NEMA)?",
    a: "Os disjuntores pretos antigos (padrão norte-americano NEMA) possuem curva de disparo lenta e mecânica imprecisa, além de não aceitarem barramentos blindados tipo pente nem proteção contra choques (DR). Os disjuntores DIN modernos (padrão europeu IEC) desarmam com precisão milimétrica, aceitam barramentos isolados e garantem que sua fiação não sofra superaquecimento."
  },
  {
    q: "Quanto tempo demora para fazer a instalação do Wallbox ou a reforma do quadro?",
    a: "A maioria das instalações de WallBox residencial ou reformas completas de QDC são executadas em apenas 1 dia útil, com teste de carga e entrega técnica imediata para que você possa utilizar no mesmo dia."
  },
  {
    q: "Como solicito um orçamento?",
    a: "Basta clicar no botão de WhatsApp aqui na página ou ligar para (61) 99351-0110. Você pode nos enviar fotos do seu quadro de luz atual ou do local da garagem para receber uma estimativa rápida e agendar a vistoria técnica gratuita."
  }
];
