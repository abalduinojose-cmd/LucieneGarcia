/**
 * Fonte única da verdade do site. Todo texto, link e dado de contato vive
 * aqui; os componentes só desenham.
 *
 * Copy revisada pelo Provimento 205/2021 da OAB: linguagem informativa, sem
 * superlativos, sem promessa de resultado, sem preço e sem urgência. Antes
 * de mudar qualquer frase, reler a lista de vedações no README.
 *
 * Campos vazios (como a OAB) simplesmente não aparecem no site: basta
 * preencher aqui para entrarem no hero, no rodapé e no JSON-LD.
 */

export type IconeArea =
  | "inventario"
  | "familia"
  | "civil"
  | "consumidor"
  | "medico"
  | "cidadania";

/** Origem do contato: vai escrita na mensagem para identificar o lead. */
export type Origem =
  | "cabecalho"
  | "hero"
  | "areas"
  | "sobre"
  | "inventario"
  | "perguntas"
  | "contato"
  | "agendar"
  | "fixo";

const WHATSAPP_NUMERO = "5524974021292";

const SAUDACAO = "Olá, Dra. Luciene. Vim pelo site";

const MENSAGENS: Record<Origem, string> = {
  cabecalho: `${SAUDACAO} e gostaria de conversar sobre o meu caso.`,
  hero: `${SAUDACAO} e gostaria de conversar sobre um inventário.`,
  areas: `${SAUDACAO} e gostaria de orientação jurídica.`,
  sobre: `${SAUDACAO} e gostaria de agendar uma conversa.`,
  inventario: `${SAUDACAO}, li como funciona o inventário e gostaria de entender o meu caso.`,
  perguntas: `${SAUDACAO} e tenho uma dúvida que não encontrei nas perguntas frequentes.`,
  contato: `${SAUDACAO} e gostaria de agendar um atendimento.`,
  agendar: `${SAUDACAO} e gostaria de pré-agendar uma conversa.`,
  fixo: `${SAUDACAO} e gostaria de conversar sobre o meu caso.`,
};

/** Link do WhatsApp com a mensagem da seção de origem. */
export function whatsapp(origem: Origem, assunto?: string): string {
  const texto = assunto
    ? `${SAUDACAO} e gostaria de orientação sobre ${assunto}.`
    : MENSAGENS[origem];
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

export const SITE = {
  /** Trocar pelo domínio definitivo quando a cliente registrar. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lugarciaadv.com.br",
  nome: "Luciene Garcia Advocacia",
  titulo: "Luciene Garcia Advocacia | Inventário e Sucessões em Resende-RJ",
  descricao:
    "Advocacia em inventários, planejamento sucessório e direito de família. Atendimento presencial em Resende-RJ e online para todo o Brasil, com orientação clara em cada etapa.",
  palavrasChave: [
    "advogada inventário Resende",
    "inventário extrajudicial Resende RJ",
    "planejamento sucessório",
    "advogada direito de família Resende",
    "inventário em cartório",
    "cidadania italiana advogada",
  ],
  locale: "pt_BR",
  ogAlt: "Monograma LG de Luciene Garcia Advocacia sobre fundo preto",
} as const;

export const ADVOGADA = {
  nome: "Luciene Garcia",
  nomeCompleto: "Luciene Garcia",
  titulo: "Advogada",
  /**
   * Ex.: "OAB/RJ 123.456". Vazio, não aparece. O Provimento 205/2021 pede o
   * número de inscrição visível: preencher assim que a cliente enviar.
   */
  oab: "",
  experiencia: "Mais de 10 anos de advocacia",
} as const;

export const CONTATO = {
  whatsappExibicao: "(24) 97402-1292",
  telefone: "+55-24-97402-1292",
  instagram: "https://www.instagram.com/lucienegarciaadvogada/",
  instagramUsuario: "@lucienegarciaadvogada",
  facebook: "https://www.facebook.com/people/Luciene-Garcia-Advogada/100035373262188/",
  google: "https://share.google/mVhdPKBW0pq8Mqwdi",
  googleAvaliacoes: "https://share.google/Ywsrvtu2h9yMtWUV7",
  linkedin: "https://br.linkedin.com/in/luciene-garcia-789884149",
  cidade: "Resende",
  estado: "RJ",
  pais: "BR",
  atendimento: "Presencial em Resende-RJ e online em todo o Brasil",
  /** Dados do Perfil da Empresa no Google (placeId ChIJY9vZufl_ngAR90WycmJfAQ8). */
  endereco: {
    rua: "Av. Augusto de Carvalho, 163, sala 4",
    bairro: "Terras Alpha",
    cep: "27516-540",
    linha: "Av. Augusto de Carvalho, 163, sala 4, Terras Alpha, Resende-RJ",
  },
  geo: { latitude: -22.4831574, longitude: -44.4667165 },
  horario: "Segunda a sexta, das 8h às 18h",
  mapa: "https://www.google.com/maps/search/?api=1&query=Luciene%20Garcia%20%7C%20Advocacia%20em%20Resende&query_place_id=ChIJY9vZufl_ngAR90WycmJfAQ8",
} as const;

export const NAV = [
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#areas", rotulo: "Áreas" },
  { href: "#videos", rotulo: "Vídeos" },
  { href: "#avaliacoes", rotulo: "Avaliações" },
  { href: "#inventario", rotulo: "Inventário" },
  { href: "#perguntas", rotulo: "Dúvidas" },
  { href: "#agendar", rotulo: "Agendar" },
] as const;

export const A11Y = {
  pularConteudo: "Pular para o conteúdo",
  inicio: "Luciene Garcia Advocacia, voltar ao início",
  navPrincipal: "Navegação principal",
  navCelular: "Navegação do site",
  abrirMenu: "Abrir menu",
  fecharMenu: "Fechar menu",
  whatsappFixo: "Conversar com a Dra. Luciene pelo WhatsApp",
  anterior: "Avaliações anteriores",
  proxima: "Próximas avaliações",
  trilhoAvaliacoes: "Avaliações de clientes no Google",
} as const;

export const ACOES = {
  whatsapp: "Conversar pelo WhatsApp",
  whatsappCurto: "WhatsApp",
} as const;

export const HERO = {
  /** Chip do topo: foto, nome e a especialidade, como um cartão de visita. */
  chipNome: ADVOGADA.nome,
  chipDetalhe: [ADVOGADA.titulo, ADVOGADA.oab].filter(Boolean).join(" · "),
  /**
   * Linha de especialidade, pedida pelo usuário em 02/10. ATENÇÃO OAB: o
   * Código de Ética só admite "especialista" com título de especialização
   * na área. Sem o título, trocar por "Atuação em Inventários e ...".
   */
  especialidade: "Especialista em Inventários e Planejamento Sucessório da Família",
  titulo: "Inventário sem que sua família precise atravessar isso",
  tituloDestaque: "sozinha",
  /** Abertura em duas vozes: a frase-chave em destaque e o apoio mais leve. */
  subtituloDestaque: "Do primeiro contato à partilha, sem complicação.",
  subtitulo: "Cada etapa do inventário explicada em linguagem simples, para a sua família decidir com calma e segurança.",
  local: CONTATO.atendimento,
  cta: "Conversar sobre o inventário",
  ctaSecundario: "Entender como funciona",
  /** Faixa do pé do hero: um dado forte + um complemento curto, com ícone. */
  selos: [
    { icone: "estrela", valor: "5,0 no Google", detalhe: "160 avaliações" },
    { icone: "relogio", valor: "+10 anos", detalhe: "de advocacia" },
    { icone: "local", valor: "Presencial", detalhe: "em Resende-RJ" },
    { icone: "online", valor: "Online", detalhe: "em todo o Brasil" },
  ],
  retratoAlt: "Retrato da advogada Luciene Garcia",
} as const;

export type Area = {
  readonly id: string;
  readonly icone: IconeArea;
  readonly titulo: string;
  readonly descricao: string;
  /** Usado na mensagem do WhatsApp: "gostaria de orientação sobre ..." */
  readonly assunto: string;
  readonly topicos?: readonly string[];
};

export const AREAS = {
  id: "areas",
  rotulo: "Áreas de atuação",
  titulo: "Orientação jurídica para as questões que tocam a família",
  lead: "O foco do escritório é o inventário e o planejamento sucessório. As demais áreas complementam esse cuidado com o patrimônio e com as relações familiares.",
  destaqueRotulo: "Área principal",
  saibaMais: "Conversar sobre este tema",
  itens: [
    {
      id: "inventarios",
      icone: "inventario",
      titulo: "Inventários e Sucessões",
      descricao:
        "Inventário judicial e extrajudicial, partilha de bens, testamentos e planejamento sucessório para organizar a transmissão do patrimônio com previsibilidade.",
      assunto: "inventário e sucessões",
      topicos: [
        "Inventário em cartório ou na Justiça",
        "Partilha entre herdeiros",
        "Testamento e doação em vida",
        "Planejamento sucessório",
      ],
    },
    {
      id: "familia",
      icone: "familia",
      titulo: "Direito de Família",
      descricao:
        "Divórcio, união estável, guarda, convivência e pensão alimentícia, conduzidos com respeito ao momento de cada pessoa envolvida.",
      assunto: "direito de família",
    },
    {
      id: "civil",
      icone: "civil",
      titulo: "Direito Civil",
      descricao:
        "Contratos, posse e propriedade, cobranças e responsabilidade civil, com análise cuidadosa dos documentos antes de qualquer decisão.",
      assunto: "direito civil",
    },
    {
      id: "consumidor",
      icone: "consumidor",
      titulo: "Direito do Consumidor",
      descricao:
        "Cobranças indevidas, produtos e serviços com defeito, negativação e contratos bancários, com orientação sobre os caminhos possíveis.",
      assunto: "direito do consumidor",
    },
    {
      id: "medico",
      icone: "medico",
      titulo: "Direito Médico",
      descricao:
        "Negativas de plano de saúde, acesso a tratamentos e medicamentos e questões entre pacientes, profissionais e instituições de saúde.",
      assunto: "direito médico",
    },
    {
      id: "cidadania",
      icone: "cidadania",
      titulo: "Cidadania Italiana",
      descricao:
        "Análise da linha de descendência, organização de documentos e acompanhamento do pedido de reconhecimento da cidadania.",
      assunto: "cidadania italiana",
    },
  ] satisfies readonly Area[],
} as const;

export const SOBRE = {
  id: "sobre",
  rotulo: "Sobre a advogada",
  titulo: "Escuta antes de qualquer orientação",
  frase: "Por trás de todo inventário existe uma família. O primeiro passo é ouvir.",
  paragrafos: [
    `Sou Luciene Garcia, advogada há mais de 10 anos. Atendo em Resende-RJ e, de forma online, famílias de todo o Brasil. Ao longo desse tempo, aprendi que um inventário não é só um processo: é uma família tentando se reorganizar depois de uma perda.`,
    `Por isso o atendimento começa com uma conversa sem pressa. Explico o que a lei prevê, quais são os caminhos possíveis e o que cada um exige, para que as decisões sejam tomadas com informação e tranquilidade.`,
  ],
  fotoAlt: "Retrato da advogada Luciene Garcia",
  chips: [
    { rotulo: ADVOGADA.experiencia, icone: "relogio" },
    { rotulo: "Inventário e sucessões", icone: "inventario" },
    { rotulo: "Escritório em Resende-RJ", icone: "local" },
    { rotulo: "Online em todo o Brasil", icone: "online" },
  ],
  cta: "Agendar uma conversa",
} as const;

/** Faixa de números logo abaixo do hero. Todos verificáveis no Google. */
export const PROVA = {
  numeros: [
    { icone: "estrela", valor: "5,0", sufixo: "", rotulo: "Nota no Google" },
    { icone: "conversa", valor: "160", sufixo: "", rotulo: "Avaliações no Google" },
    { icone: "relogio", valor: "+10", sufixo: "anos", rotulo: "De advocacia" },
    { icone: "online", valor: "Brasil", sufixo: "", rotulo: "Atendimento online" },
  ],
  selo: "Atendimento presencial em Resende-RJ e online para famílias de todo o país.",
} as const;

/** Full-bleed poético (o "mar de nuvens" do Cabana), com trechos reais do Google. */
export const FRASE = {
  poetico: "Ninguém escolhe o momento de uma perda.",
  apoio: "Mas a família pode escolher não atravessar o inventário sozinha.",
  fotoAlt: "Estátua da Justiça com a balança, ao lado de um martelo e de livros de Direito",
  citacoes: [
    { texto: "nos acalmou, nos mostrou o caminho", autor: "Duda Costa" },
    { texto: "informações claras sobre as etapas", autor: "Raphael Felix de Cicco" },
    { texto: "atendimento humanizado e honesto", autor: "Pimenta Bruno" },
  ],
  nota: "Trechos de avaliações publicadas no Perfil da Empresa no Google.",
} as const;

export const DIFERENCIAIS = {
  rotulo: "Como é o atendimento",
  itens: [
    {
      icone: "conversa",
      titulo: "Uma conversa de cada vez",
      descricao:
        "Você conta a sua história no seu tempo. A orientação vem depois de entender a família, os bens e o que preocupa cada herdeiro.",
    },
    {
      icone: "inventario",
      titulo: "Linguagem clara",
      descricao:
        "Termos jurídicos são traduzidos para o dia a dia. Você sabe o que está assinando e por que cada documento é pedido.",
    },
    {
      icone: "relogio",
      titulo: "Acompanhamento em cada etapa",
      descricao:
        "Você recebe notícias do andamento pelo canal que preferir, sem precisar correr atrás de informação.",
    },
  ],
} as const;

export const PROCESSO = {
  id: "inventario",
  rotulo: "Como funciona o inventário",
  titulo: "Quatro etapas, explicadas antes de começar",
  lead: "Saber o que vem pela frente diminui a ansiedade. Este é o caminho de um inventário, do primeiro contato até a partilha.",
  passos: [
    {
      titulo: "Conversa inicial",
      descricao:
        "Entendo a situação da família: quem faleceu, quem são os herdeiros, quais bens existem e se há testamento. Tiro as primeiras dúvidas e explico os próximos passos.",
    },
    {
      titulo: "Levantamento de documentos",
      descricao:
        "Envio uma lista organizada do que é necessário: certidões, documentos dos herdeiros e dos bens. Ajudo a localizar o que estiver faltando.",
    },
    {
      titulo: "Escolha da via",
      descricao:
        "Quando todos os herdeiros concordam e os requisitos legais são atendidos, o inventário pode ser feito em cartório, de forma extrajudicial. Nos demais casos, segue pela via judicial. Explico as diferenças para a escolha ser consciente.",
    },
    {
      titulo: "Conclusão e partilha",
      descricao:
        "Acompanho o recolhimento do imposto, a escritura ou a sentença e o registro da partilha, até cada herdeiro ter os bens regularizados em seu nome.",
    },
  ],
  nota: "O tempo de cada etapa depende da documentação, do número de herdeiros e da via escolhida. Na conversa inicial, explico o que esperar no seu caso.",
  cta: "Conversar sobre o meu caso",
} as const;

export type Pergunta = {
  readonly id: string;
  readonly pergunta: string;
  readonly resposta: string;
};

export const PERGUNTAS = {
  id: "perguntas",
  rotulo: "Perguntas frequentes",
  titulo: "Dúvidas comuns sobre inventário",
  lead: "Se a sua pergunta não estiver aqui, envie pelo WhatsApp. A resposta vem com calma e sem compromisso de contratação.",
  cta: "Enviar minha dúvida",
  itens: [
    {
      id: "tempo",
      pergunta: "Quanto tempo leva um inventário?",
      resposta:
        "Depende da via e da documentação. O inventário extrajudicial, feito em cartório, costuma ser mais rápido, porque não depende do andamento da Justiça. O judicial varia conforme o número de herdeiros, os bens envolvidos e a existência de discordâncias. Na conversa inicial, explico o que é razoável esperar no seu caso.",
    },
    {
      id: "documentos",
      pergunta: "Quais documentos são necessários?",
      resposta:
        "Em geral: certidão de óbito, documentos pessoais da pessoa falecida e dos herdeiros, certidão de casamento ou de união estável, e documentos dos bens, como matrícula de imóveis, documentos de veículos e extratos bancários. Você recebe uma lista organizada e ajuda para localizar o que estiver faltando.",
    },
    {
      id: "cartorio",
      pergunta: "Dá para fazer o inventário em cartório?",
      resposta:
        "Sim, quando os herdeiros estão de acordo com a partilha e os requisitos legais são atendidos. A presença de advogado é obrigatória também no cartório. Mesmo havendo herdeiro menor ou testamento, há situações em que a via extrajudicial é possível; isso é analisado caso a caso.",
    },
    {
      id: "desacordo",
      pergunta: "E se os herdeiros não concordarem?",
      resposta:
        "Nesse caso, o inventário segue pela via judicial, e o juiz decide os pontos em que não há acordo. Muitas vezes, uma conversa bem conduzida aproxima as partes e evita desgaste. O objetivo é buscar a solução adequada preservando, quando possível, a relação entre a família.",
    },
    {
      id: "custo",
      pergunta: "Quanto custa um inventário?",
      resposta:
        "Não existe um valor único. O custo envolve o imposto sobre a herança (ITCMD), as taxas de cartório ou custas judiciais e os honorários advocatícios, que seguem a tabela da OAB e dependem da complexidade do caso. Depois de entender a situação, apresento uma proposta clara e por escrito.",
    },
    {
      id: "prazo",
      pergunta: "Existe prazo para abrir o inventário?",
      resposta:
        "Sim. A lei prevê a abertura em até 2 meses a partir do falecimento. Passado esse prazo, o inventário ainda pode ser feito, mas o estado pode aplicar multa sobre o imposto. Por isso vale buscar orientação assim que a família se sentir em condições.",
    },
    {
      id: "fora",
      pergunta: "Você atende fora de Resende?",
      resposta:
        "Sim. Além do atendimento presencial em Resende-RJ, atendo online famílias de todo o Brasil, por videochamada e WhatsApp. A maior parte dos documentos pode ser enviada em formato digital.",
    },
  ] satisfies readonly Pergunta[],
} as const;

export type Canal = {
  readonly id: "whatsapp" | "instagram" | "facebook" | "linkedin" | "google";
  readonly rotulo: string;
  readonly valor: string;
  readonly href: string;
};

export const CONTATO_SECAO = {
  id: "contato",
  rotulo: "Contato",
  titulo: "Quando a família estiver pronta para conversar, estou aqui",
  lead: "O primeiro contato pode ser pelo WhatsApp. Conte brevemente a situação e combinamos o melhor formato de atendimento, presencial ou online.",
  cta: ACOES.whatsapp,
  canais: [
    {
      id: "whatsapp",
      rotulo: "WhatsApp",
      valor: CONTATO.whatsappExibicao,
      href: whatsapp("contato"),
    },
    {
      id: "instagram",
      rotulo: "Instagram",
      valor: CONTATO.instagramUsuario,
      href: CONTATO.instagram,
    },
    {
      id: "facebook",
      rotulo: "Facebook",
      valor: "Luciene Garcia Advogada",
      href: CONTATO.facebook,
    },
    {
      id: "linkedin",
      rotulo: "LinkedIn",
      valor: "Luciene Garcia",
      href: CONTATO.linkedin,
    },
    {
      id: "google",
      rotulo: "Perfil no Google",
      valor: "Ver no Google",
      href: CONTATO.google,
    },
  ] satisfies readonly Canal[],
  atendimentoRotulo: "Área de atendimento",
  atendimento: [
    "Presencial em Resende-RJ e região do Sul Fluminense",
    "Online para todo o Brasil, por videochamada",
  ],
  escritorioRotulo: "Escritório",
  comoChegar: "Abrir no mapa",
} as const;

export const RODAPE = {
  aviso:
    "Conteúdo de caráter exclusivamente informativo, em conformidade com o Código de Ética e Disciplina da OAB e o Provimento 205/2021. As informações deste site não substituem a análise individual de cada caso.",
  direitos: "Todos os direitos reservados.",
  navTitulo: "Mapa do site",
} as const;

export type Video = {
  readonly slug: "perda" | "cafe-juridico" | "uniao-estavel";
  readonly titulo: string;
  readonly descricao: string;
  readonly duracao: string;
};

export const VIDEOS = {
  id: "videos",
  rotulo: "Orientação em vídeo",
  titulo: "Conversas curtas sobre perda, prazos e direitos",
  lead: "Vídeos publicados no Instagram, com explicações sobre temas que costumam gerar dúvidas nas famílias.",
  play: "Assistir ao vídeo",
  instagram: "Mais vídeos no Instagram",
  instagramTitulo: "Orientação jurídica no feed",
  instagramTexto:
    "Toda semana, temas de família, inventário e sucessões explicados em vídeos curtos e em linguagem simples.",
  instagramCta: "Seguir no Instagram",
  itens: [
    {
      slug: "perda",
      titulo: "Falar sobre perda não é fácil",
      descricao: "Por que o inventário pede cuidado com prazos, documentos e decisões em um momento de fragilidade.",
      duracao: "0:54",
    },
    {
      slug: "cafe-juridico",
      titulo: "Passou o prazo de 60 dias. E agora?",
      descricao: "No Café Jurídico, o que acontece quando o inventário não é aberto dentro do prazo legal.",
      duracao: "0:47",
    },
    {
      slug: "uniao-estavel",
      titulo: "União estável e os direitos após a morte",
      descricao: "Um caso analisado pelo STJ e a importância de formalizar a união e planejar a sucessão em vida.",
      duracao: "1:18",
    },
  ] satisfies readonly Video[],
} as const;

export type Avaliacao = {
  /** Nome do arquivo em src/assets/avaliacoes. */
  readonly foto: string;
  readonly nome: string;
  /** Texto verbatim do Google. Trechos cortados levam [...]. */
  readonly texto: string;
  readonly data: string;
};

/**
 * 16 avaliações reais do Perfil no Google, raspadas em 02/10/2026.
 *
 * Seleção pelo Provimento 205/2021: ficaram de fora as que falam em ganhar
 * causa, em "sucesso no processo" ou em "a melhor advogada". Duas aparecem
 * em trecho, sem alterar nenhuma palavra.
 */
export const AVALIACOES = {
  id: "avaliacoes",
  rotulo: "Avaliações no Google",
  titulo: "O que dizem as pessoas atendidas",
  nota: "5,0",
  total: 160,
  resumo: "160 avaliações no Google",
  verTodas: "Ler as 160 avaliações no Google",
  resumoTitulo: "Avaliação no Google",
  resumoTexto:
    "Nota máxima no Perfil da Empresa no Google, dada por clientes do escritório ao longo dos últimos anos.",
  via: "Avaliação no Google",
  itens: [
    {
      foto: "robson-garske",
      nome: "Robson Garske",
      data: "agosto de 2026",
      texto:
        "Nem sempre é fácil encontrar um profissional que transmita confiança e segurança em momentos tão importantes da vida. Minha sincera gratidão à Dra. Luciene Garcia pela competência, dedicação, atenção e humanidade em cada etapa do processo. Seu comprometimento fez toda a diferença. Recomendo seu trabalho de coração a todos que procuram uma advogada ética, preparada e verdadeiramente comprometida com seus clientes.",
    },
    {
      foto: "duda-costa",
      nome: "Duda Costa",
      data: "maio de 2026",
      texto:
        "Em um momento de fragilidade buscamos alguém que seja inteligente, extremamente profissional, preparado tecnicamente mas que não esqueça o lado humano da situação. [...] Ela possui um lado humano sensacional, que nos abraça nos momentos de fragilidade e nós dá forças para suportar o processo. [...] No primeiro momento ela nos acalmou, nos mostrou o caminho.",
    },
    {
      foto: "raphael-felix-de-cicco",
      nome: "Raphael Felix de Cicco",
      data: "fevereiro de 2026",
      texto:
        "Fomos muito bem atendidos e a abordagem a nós foi de forma leve, humanizada. Tudo muito bem conduzido e com informações claras sobre as etapas, procedimentos e recursos cabíveis ao processo. Atendimento muito profissional!",
    },
    {
      foto: "tatiane-ribeiro",
      nome: "Tatiane N. F. Ribeiro",
      data: "junho de 2024",
      texto:
        "Advogada competente, atenciosa, prestativa! Uma profissional excelente no que faz eu recomendo de olhos fechados para quem tem a necessidade de processos familiar e inventário.",
    },
    {
      foto: "andrea-correa",
      nome: "Andrea Correa",
      data: "fevereiro de 2026",
      texto:
        "Tive uma ótima experiência com Luciene Garcia. Profissional extremamente competente, segura e estratégica. Explica com clareza, cumpre prazos e transmite muita confiança. Recomendo para quem busca seriedade e excelência técnica.",
    },
    {
      foto: "luisa-costa",
      nome: "Luísa Costa",
      data: "agosto de 2024",
      texto:
        "Advogada ímpar, humana e amiga! Esclarece a todas as dúvidas e faz com que nos sintamos confortáveis em dividir o que nos levou a precisar de ajuda. Super recomendo!!",
    },
    {
      foto: "rita-ritton",
      nome: "Rita Ritton",
      data: "fevereiro de 2026",
      texto:
        "A Luciene é uma profissional muito competente, acolhedora, interessada em resolver os problemas apresentados. Ela nos esclareceu todas as dúvidas necessárias. Ficamos muito satisfeitos e recomendamos os serviços da Dra Luciene.",
    },
    {
      foto: "kleber-willer",
      nome: "Kleber Willer",
      data: "junho de 2024",
      texto: "Profissional fora da curva! Em especial sucessão e família! Super recomendo!",
    },
    {
      foto: "alice-quirino",
      nome: "Alice Quirino",
      data: "novembro de 2025",
      texto:
        "Advogada excelente! Competente, sensível, acolhedora, sempre muito clara nas orientações e dedicada pra resolver qualquer situação. Eu super indico a Dra. Luciene!",
    },
    {
      foto: "wilclan-leal",
      nome: "Wilclan Leal",
      data: "julho de 2024",
      texto:
        "Foi muito boa, ela é bastante atuante nas causas e procura sempre agilizar dentro do possível e também me mantendo informado, recomendo!!",
    },
    {
      foto: "cirom-alves",
      nome: "Cirom Alves",
      data: "agosto de 2026",
      texto:
        "Excelente profissional, atenciosa, competente, humana e dedicada. Agradeço a profissional e sua equipe pela acolhida generosa e a expertise dedicada a causa.",
    },
    {
      foto: "sandra-botelho",
      nome: "Sandra Helena Salgueiro Botelho",
      data: "setembro de 2024",
      texto:
        "Luciene nos atendeu de forma muito atenciosa e demonstrou bastante conhecimento na área em que atua.",
    },
    {
      foto: "sabrina-miraglia",
      nome: "Sabrina Miraglia",
      data: "agosto de 2024",
      texto:
        "Já precisei utilizar os serviços da Dra. Luciene Garcia e fui surpreendida positivamente! Atendimento diferenciado, profissional super capacitada e humana. Indico de olhos fechados.",
    },
    {
      foto: "liliane-macedo",
      nome: "Liliane Macedo",
      data: "novembro de 2025",
      texto: "Atendimento impecável, transmite confiança e segurança em cada detalhe.",
    },
    {
      foto: "pimenta-bruno",
      nome: "Pimenta Bruno",
      data: "junho de 2024",
      texto: "Competente ao extremo e excelente profissional. Atendimento humanizado e honesto.",
    },
    {
      foto: "barbara-carneiro",
      nome: "Barbara Carneiro",
      data: "setembro de 2024",
      texto: "Advogada excelente, atenciosa, competente, amiga e sempre de prontidão!",
    },
  ] satisfies readonly Avaliacao[],
} as const;

/** O lugar da "Localização" do Cabana. */
export const ESCRITORIO = {
  id: "escritorio",
  rotulo: "Escritório",
  titulo: "Em Resende, no Terras Alpha. E online para todo o Brasil.",
  lead: "O primeiro contato costuma ser pelo WhatsApp. Depois, você escolhe: uma conversa no escritório ou por videochamada, de onde estiver.",
  mapaTitulo: "Mapa do escritório de Luciene Garcia em Resende-RJ",
  mapaPino: "Luciene Garcia Advocacia",
  mapaBairro: "Terras Alpha · Resende-RJ",
  mapaLegenda: CONTATO.endereco.linha,
  mapaAbrir: "Abrir no Google Maps",
  cartaoTitulo: "Como atendemos",
  itens: [
    { icone: "local", texto: CONTATO.endereco.linha },
    { icone: "relogio", texto: CONTATO.horario },
    { icone: "online", texto: "Videochamada para quem está em outra cidade ou estado" },
    { icone: "inventario", texto: "Documentos podem ser enviados em formato digital" },
  ],
  nota: "Atendimento com hora marcada, para que a conversa aconteça sem pressa.",
} as const;

export const FINAL = {
  titulo: "Ninguém precisa atravessar isso sozinho.",
  cta: "Conversar pelo WhatsApp",
  apoio: `Ou ligue: ${CONTATO.whatsappExibicao}`,
  fotoAlt: "Luciene Garcia em conversa no Café Jurídico, em Resende",
} as const;

export const FLUTUANTE = {
  rotulo: "Conversar com a Dra. Luciene pelo WhatsApp",
  dica: "Fale com a Dra. Luciene",
} as const;

/** Pré-agendamento: o formulário monta a mensagem e abre o WhatsApp. */
export const AGENDAR = {
  id: "agendar",
  rotulo: "Pré-agendamento",
  titulo: "Pré-agende sua primeira conversa",
  lead: "Escolha o assunto e o formato. A mensagem chega pronta no WhatsApp da Dra. Luciene, e a equipe confirma o dia e o horário com você.",
  passosTitulo: "Como funciona",
  passos: [
    { titulo: "Você preenche", texto: "Nome, assunto, formato e o melhor período. Leva menos de um minuto." },
    { titulo: "O WhatsApp abre", texto: "A mensagem aparece pronta no seu WhatsApp. É só tocar em enviar." },
    { titulo: "A equipe confirma", texto: "Em horário comercial, combinamos o dia e o horário da conversa." },
  ],
  horario: CONTATO.horario,
  privacidade: "Nenhum dado fica salvo no site: tudo vai direto para o seu WhatsApp. Sem compromisso de contratação.",
  campos: {
    nome: "Seu nome",
    nomePlaceholder: "Como podemos te chamar?",
    nomeErro: "Conte seu nome para a Dra. Luciene saber com quem está falando.",
    assunto: "Assunto",
    formato: "Formato do atendimento",
    periodo: "Melhor período",
    mensagem: "Quer adiantar algo? (opcional)",
    mensagemPlaceholder: "Por exemplo: inventário do meu pai, somos três irmãos, há um imóvel.",
  },
  assuntos: [
    "Inventário",
    "Planejamento sucessório",
    "Testamento",
    "Direito de Família",
    "Direito Civil",
    "Direito do Consumidor",
    "Direito Médico",
    "Cidadania Italiana",
    "Outro assunto",
  ],
  formatos: ["Presencial em Resende-RJ", "Online por videochamada"],
  periodos: ["Manhã", "Tarde", "Tanto faz"],
  enviar: "Enviar pelo WhatsApp",
  /** Monta o texto que vai para o WhatsApp. O detalhe só entra se escrito. */
  mensagem(dados: {
    readonly nome: string;
    readonly assunto: string;
    readonly formato: string;
    readonly periodo: string;
    readonly detalhe: string;
  }): string {
    const detalhe = dados.detalhe.trim();
    return [
      "Olá, Dra. Luciene. Vim pelo site e gostaria de pré-agendar uma conversa.",
      "",
      `Nome: ${dados.nome.trim() || "..."}`,
      `Assunto: ${dados.assunto}`,
      `Formato: ${dados.formato}`,
      `Melhor período: ${dados.periodo}`,
      ...(detalhe ? ["", detalhe] : []),
    ].join("\n");
  },
  link(texto: string): string {
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
  },
} as const;
