/**
 * ARQUIVO DE CONFIGURAÇÃO DA VEM VER
 * ----------------------------------
 * Edite este arquivo para alterar contatos, textos, passeios, imagens,
 * perguntas frequentes e depoimentos. Não é preciso mexer nos componentes.
 *
 * Imagens: coloque os arquivos em /public/images e informe o caminho
 * começando com "/images/...". Use sempre um texto alternativo (alt) descritivo.
 */

export type Tour = {
  slug: string
  name: string
  shortDescription: string
  description: string
  image: string
  imageAlt: string
  /** Deixe vazio ("") quando a informação não estiver confirmada. */
  price: string
  duration: string
  schedule: string
  highlights: string[]
}

export type Testimonial = {
  name: string
  city?: string
  text: string
}

export type GalleryImage = {
  src: string
  alt: string
  label: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const siteConfig = {
  name: 'VEM VER Turismo',
  slogan: 'Seu próximo destino começa aqui.',
  location: 'Lençóis Maranhenses, Maranhão',

  /** Número com código do país e DDD, só dígitos. Ex.: 5598912345678 */
  whatsappNumber: '5598985698375',
  whatsappMessage:
    'Olá! Vim pelo site da VEM VER Turismo e gostaria de conhecer os passeios nos Lençóis Maranhenses.',

  instagramHandle: '@vemver',
  instagramUrl: 'https://www.instagram.com/vemver',

  email: 'contato@vemver.com.br',

  /** Texto mostrado quando uma informação ainda não foi cadastrada. */
  fallbackInfo: 'Consulte informações pelo WhatsApp.',
  fallbackPrice: 'Consulte valores e disponibilidade',

  /**
   * Formulário de contato (opcional e gratuito) via Google Forms.
   * 1. Crie um Google Form com os campos: Nome, WhatsApp, Data, Pessoas, Passeio, Mensagem.
   * 2. Copie a URL de envio (termina em /formResponse) para `actionUrl`.
   * 3. Informe o "entry.XXXX" de cada campo.
   * Enquanto `actionUrl` estiver vazio, o formulário abre o WhatsApp com a mensagem preenchida.
   */
  googleForm: {
    actionUrl: '',
    fields: {
      name: 'entry.0000000001',
      whatsapp: 'entry.0000000002',
      date: 'entry.0000000003',
      people: 'entry.0000000004',
      tour: 'entry.0000000005',
      message: 'entry.0000000006',
    },
  },

  hero: {
    title: 'Viva os Lençóis Maranhenses',
    subtitle:
      'Passeios pelas dunas e lagoas com a comodidade de uma pousada para descansar. Organize sua viagem completa com a VEM VER Turismo.',
    image: '/images/hero-lencois.webp',
    imageAlt:
      'Vista aérea dos Lençóis Maranhenses com dunas de areia branca e lagoas de água azul',
  },

  about: {
    title: 'Vem ver os Lençóis Maranhenses com a gente',
    text: 'A VEM VER Turismo nasceu com o objetivo de aproximar você das belezas dos Lençóis Maranhenses, ajudando a transformar sua viagem em uma experiência especial.',
    image: '/images/dunas.webp',
    imageAlt: 'Pessoas caminhando sobre a crista das dunas de areia branca nos Lençóis Maranhenses',
  },
}

export const tours: Tour[] = [
  {
    slug: 'lagoa-azul',
    name: 'Lagoa Azul',
    shortDescription:
      'Um dos cenários mais conhecidos dos Lençóis, com águas azuis entre as dunas.',
    description:
      'Conheça a Lagoa Azul e aproveite a paisagem de dunas brancas e águas cristalinas que tornam os Lençóis Maranhenses um destino único. Fale com a VEM VER Turismo para saber mais sobre este passeio.',
    image: '/images/lagoa-azul.webp',
    imageAlt: 'Lagoa de água azul intensa cercada por dunas de areia branca',
    price: '',
    duration: '',
    schedule: '',
    highlights: [],
  },
  {
    slug: 'lagoa-bonita',
    name: 'Lagoa Bonita',
    shortDescription:
      'Vista panorâmica do alto das dunas e lagoas de tons azul e verde.',
    description:
      'A Lagoa Bonita reúne dunas altas e lagoas de cores marcantes, com uma vista que fica na memória. Consulte a VEM VER Turismo para mais detalhes sobre este passeio.',
    image: '/images/lagoa-bonita.webp',
    imageAlt: 'Vista do alto de uma duna para uma lagoa verde-azulada entre as dunas',
    price: '',
    duration: '',
    schedule: '',
    highlights: [],
  },
  {
    slug: 'atins',
    name: 'Atins',
    shortDescription:
      'Vila tranquila onde o rio encontra o mar, próxima às dunas.',
    description:
      'Atins é um povoado charmoso, com clima tranquilo e paisagens onde rio, mar e dunas se encontram. Fale com a VEM VER Turismo para consultar as opções de passeio.',
    image: '/images/atins.webp',
    imageAlt: 'Encontro do rio com o mar em Atins, com coqueiros e dunas ao fundo',
    price: '',
    duration: '',
    schedule: '',
    highlights: [],
  },
  {
    slug: 'santo-amaro',
    name: 'Santo Amaro',
    shortDescription:
      'Lagoas cristalinas e paisagens preservadas do lado oeste dos Lençóis.',
    description:
      'Santo Amaro do Maranhão oferece lagoas de águas claras e cenários naturais preservados. Consulte a VEM VER Turismo para saber mais sobre este passeio.',
    image: '/images/santo-amaro.webp',
    imageAlt: 'Lagoa de águas claras com vegetação verde na borda das dunas em Santo Amaro',
    price: '',
    duration: '',
    schedule: '',
    highlights: [],
  },
  {
    slug: 'outros-passeios',
    name: 'Outros passeios',
    shortDescription:
      'Passeios 4x4, rio Preguiças, pôr do sol e outras experiências na região.',
    description:
      'Além dos roteiros principais, a região oferece outras experiências, como passeios de 4x4, passeios pelo rio e o pôr do sol nas dunas. Fale com a VEM VER Turismo e conte o que você procura.',
    image: '/images/passeio-4x4.webp',
    imageAlt: 'Veículo 4x4 atravessando trilha de areia e água com dunas ao fundo',
    price: '',
    duration: '',
    schedule: '',
    highlights: [],
  },
]

export const gallery: GalleryImage[] = [
  {
    src: '/images/hero-lencois.webp',
    alt: 'Vista aérea dos Lençóis Maranhenses com dunas e lagoas',
    label: 'Lençóis Maranhenses',
  },
  {
    src: '/images/dunas.webp',
    alt: 'Dunas de areia branca com marcas do vento',
    label: 'Dunas',
  },
  {
    src: '/images/lagoa-azul.webp',
    alt: 'Lagoa de água azul entre as dunas',
    label: 'Lagoas',
  },
  {
    src: '/images/atins.webp',
    alt: 'Paisagem de Atins com rio, coqueiros e dunas',
    label: 'Atins',
  },
  {
    src: '/images/santo-amaro.webp',
    alt: 'Lagoa cristalina em Santo Amaro do Maranhão',
    label: 'Santo Amaro',
  },
  {
    src: '/images/barreirinhas.webp',
    alt: 'Rio Preguiças em Barreirinhas com barcos e vegetação',
    label: 'Barreirinhas',
  },
  {
    src: '/images/passeio-4x4.webp',
    alt: 'Passeio de 4x4 pelas trilhas dos Lençóis Maranhenses',
    label: 'Passeios 4x4',
  },
  {
    src: '/images/por-do-sol.webp',
    alt: 'Pôr do sol sobre as dunas e uma lagoa nos Lençóis Maranhenses',
    label: 'Pôr do sol',
  },
]

/** Adicione aqui apenas avaliações reais de clientes. */
export const testimonials: Testimonial[] = []

export const faq: FaqItem[] = [
  {
    question: 'Como faço para reservar um passeio?',
    answer:
      'Entre em contato com a VEM VER Turismo pelo WhatsApp ou pelo formulário deste site. Vamos ajudar você a escolher o passeio e informar como seguir com a reserva.',
  },
  {
    question: 'Quais passeios estão disponíveis?',
    answer:
      'Veja os passeios na seção "Passeios" deste site. Para confirmar as opções disponíveis na data da sua viagem, fale com a VEM VER Turismo pelo WhatsApp.',
  },
  {
    question: 'Como consultar os valores?',
    answer:
      'Os valores podem variar de acordo com o passeio e a data. Consulte valores e disponibilidade pelo WhatsApp.',
  },
  {
    question: 'Vocês ajudam com hospedagem em pousada?',
    answer:
      'Sim. Além dos passeios, a VEM VER Turismo orienta você sobre hospedagem em pousada na região, para que sua estadia seja confortável e prática. Consulte disponibilidade pelo WhatsApp.',
  },
  {
    question: 'Os passeios dependem das condições climáticas?',
    answer:
      'Passeios na natureza podem ser influenciados pelas condições do tempo e da região. Consulte a VEM VER Turismo para receber orientações atualizadas sobre o seu passeio.',
  },
  {
    question: 'Posso solicitar um passeio particular?',
    answer:
      'Fale com a VEM VER Turismo pelo WhatsApp e conte o que você procura. Vamos verificar as possibilidades para a sua viagem.',
  },
  {
    question: 'Como funciona o cancelamento?',
    answer:
      'As condições de cancelamento são informadas no momento da consulta. Consulte informações pelo WhatsApp.',
  },
  {
    question: 'Como entro em contato com a VEM VER Turismo?',
    answer:
      'Você pode falar com a VEM VER Turismo pelo WhatsApp, pelo Instagram, por e-mail ou pelo formulário de contato deste site.',
  },
]

export const navLinks = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Passeios', href: '/#passeios' },
  { label: 'Sobre nós', href: '/#sobre' },
  { label: 'Dúvidas', href: '/#duvidas' },
  { label: 'Contato', href: '/#contato' },
]
