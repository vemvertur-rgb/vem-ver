export const empresa = {
  nome: "Vem Ver",
  segmento: "Turismo e passeios nos Lençóis Maranhenses",
  whatsapp: "5598985698375",
  instagram: "https://www.instagram.com/vemvertur",
  email: "",
  slogan: "Seu próximo destino começa aqui.",
}

export const textos = {
  heroTitulo: "Viva os Lençóis Maranhenses",
  heroSubtitulo:
    "Descubra dunas, lagoas e experiências inesquecíveis com a Vem Ver.",

  apresentacaoTitulo:
    "Mais do que um passeio. Uma experiência para guardar.",

  apresentacaoTexto:
    "Conheça os Lençóis Maranhenses com a Vem Ver e descubra paisagens incríveis, dunas, lagoas e experiências que tornam sua viagem inesquecível.",

  sobreTitulo: "Vem Ver os Lençóis Maranhenses com a gente",

  sobreTexto:
    "A Vem Ver nasceu com o objetivo de aproximar você das belezas dos Lençóis Maranhenses, ajudando a transformar sua viagem em uma experiência especial.",

  ofertasTitulo: "OFERTAS ESPECIAIS",

  ofertasTexto:
    "Aproveite nossas condições especiais e venha viver os Lençóis Maranhenses com a Vem Ver.",

  contatoTitulo: "Pronto para conhecer os Lençóis Maranhenses?",

  contatoTexto:
    "Fale com a Vem Ver, consulte nossos passeios e escolha sua próxima experiência.",
}

export const passeios = [
  {
    id: "atins",
    nome: "Circuito de Atins",
    descricao:
      "Conheça Atins e aproveite as belezas dos Lençóis Maranhenses.",
    precoOriginal: "R$ 250,00",
    precoPromocional: "R$ 230,50",
    tipo: "compartilhado",
    informacaoPreco: "por pessoa",
    oferta: true,
  },
  {
    id: "lagoa-azul",
    nome: "Circuito Lagoa Azul",
    descricao:
      "Explore as dunas e lagoas cristalinas dos Lençóis Maranhenses.",
    precoOriginal: "R$ 160,00",
    precoPromocional: "R$ 149,90",
    tipo: "compartilhado",
    informacaoPreco: "por pessoa",
    oferta: true,
  },
  {
    id: "lagoa-bonita",
    nome: "Circuito Lagoa Bonita",
    descricao:
      "Viva uma experiência especial entre dunas e lagoas dos Lençóis.",
    precoOriginal: "R$ 160,00",
    precoPromocional: "R$ 149,90",
    tipo: "compartilhado",
    informacaoPreco: "por pessoa",
    oferta: true,
  },
  {
    id: "cardosa",
    nome: "Percurso de Cardosa",
    descricao:
      "Descubra as belezas naturais do percurso de Cardosa.",
    precoOriginal: "R$ 150,00",
    precoPromocional: "R$ 129,90",
    tipo: "compartilhado",
    informacaoPreco: "por pessoa",
    oferta: true,
  },
  {
    id: "santo-amaro",
    nome: "Percurso de Santo Amaro",
    descricao:
      "Conheça Santo Amaro e suas paisagens incríveis nos Lençóis Maranhenses.",
    precoOriginal: "R$ 330,00",
    precoPromocional: "R$ 305,50",
    tipo: "compartilhado",
    informacaoPreco: "por pessoa",
    oferta: true,
  },
  {
    id: "cabure",
    nome: "Circuito de Caburé",
    descricao:
      "Explore Caburé e aproveite uma experiência especial na região.",
    precoOriginal: "R$ 180,00",
    precoPromocional: "R$ 159,90",
    tipo: "compartilhado",
    informacaoPreco: "por pessoa",
    oferta: true,
  },
  {
    id: "duas-lagoas",
    nome: "Circuito de Duas Lagoas",
    descricao:
      "Conheça duas belas lagoas e aproveite a paisagem dos Lençóis.",
    precoOriginal: "R$ 330,00",
    precoPromocional: "R$ 305,50",
    tipo: "compartilhado",
    informacaoPreco: "por pessoa",
    oferta: true,
  },
  {
    id: "quadriciclo",
    nome: "Pequenos Lençóis de Quadriciclo",
    descricao:
      "Explore os Pequenos Lençóis em uma experiência de quadriciclo.",
    precoOriginal: "R$ 650,00",
    precoPromocional: "R$ 599,90",
    tipo: "compartilhado",
    informacaoPreco: "por pessoa",
    oferta: true,
  },
]

export const experienciasPrivativas = [
  {
    id: "miradas-estrelas",
    nome: "Miradas Estrelas",
    descricao:
      "Experiência para admirar o céu noturno nos Lençóis Maranhenses.",
    precoOriginal: "R$ 1.400,00",
    precoPromocional: "R$ 1.250,50",
    tipo: "privativo",
    informacaoPreco: "para até 9 pessoas",
    oferta: true,
  },
  {
    id: "cafe-da-manha",
    nome: "Café da Manhã nos Lençóis Maranhenses",
    descricao:
      "Uma experiência para tomar café da manhã em meio à paisagem dos Lençóis Maranhenses.",
    precoOriginal: "R$ 1.400,00",
    precoPromocional: "R$ 1.250,50",
    tipo: "privativo",
    informacaoPreco: "para até 9 pessoas",
    oferta: true,
  },
]

export function criarMensagemWhatsApp(nomePasseio: string) {
  return `Olá! Vim pelo site da Vem Ver e tenho interesse no ${nomePasseio}. Gostaria de saber mais informações e disponibilidade.`
}

export const comoFunciona = [
  {
    numero: 1,
    titulo: "Escolha seu passeio",
    texto: "Escolha a experiência que combina com sua viagem.",
  },
  {
    numero: 2,
    titulo: "Fale com a Vem Ver",
    texto: "Entre em contato pelo WhatsApp.",
  },
  {
    numero: 3,
    titulo: "Consulte disponibilidade",
    texto: "Confira datas, detalhes e condições do passeio.",
  },
  {
    numero: 4,
    titulo: "Aproveite os Lençóis",
    texto: "Prepare-se para viver uma experiência inesquecível.",
  },
]

export const menu = [
  { nome: "Início", destino: "#inicio" },
  { nome: "Passeios", destino: "#passeios" },
  { nome: "Privativos", destino: "#privativos" },
  { nome: "Sobre", destino: "#sobre" },
  { nome: "Dúvidas", destino: "#duvidas" },
  { nome: "Contato", destino: "#contato" },
]
