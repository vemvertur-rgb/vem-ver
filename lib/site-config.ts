/**
 * CONFIGURAÇÃO DA VEM VER
 *
 * Este é o principal arquivo para alterar:
 * - contato
 * - Instagram
 * - textos
 * - passeios
 * - valores
 * - imagens
 * - perguntas frequentes
 */

export type Tour = {
  slug: string
  name: string
  shortDescription: string
  description: string
  image: string
  imageAlt: string
  price: string
  originalPrice?: string
  priceInfo: string
  type: 'compartilhado' | 'privativo'
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

/* =========================================================
   INFORMAÇÕES DA VEM VER
   ========================================================= */

export const siteConfig = {
  name: 'Vem Ver',
  slogan: 'Seu próximo destino começa aqui.',
  location: 'Lençóis Maranhenses, Maranhão',

  whatsappNumber: '5598985698375',

  whatsappMessage:
    'Olá! Vim pelo site da Vem Ver e gostaria de conhecer os passeios nos Lençóis Maranhenses.',

  instagramHandle: '@vemvertur',
  instagramUrl: 'https://www.instagram.com/vemvertur',

  email: '',

  fallbackInfo: 'Consulte informações pelo WhatsApp.',
  fallbackPrice: 'Consulte valores e disponibilidade',

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

  /* =======================================================
     HERO
     ======================================================= */

  hero: {
    title: 'Viva os Lençóis Maranhenses',

    subtitle:
      'Descubra dunas, lagoas e experiências inesquecíveis com a Vem Ver.',

    image: '/images/hero-lencois.webp',

    imageAlt:
      'Vista aérea dos Lençóis Maranhenses com dunas de areia branca e lagoas de água azul',
  },

  /* =======================================================
     APRESENTAÇÃO
     ======================================================= */

  intro: {
    title: 'Mais do que um passeio. Uma experiência para guardar.',

    text:
      'Conheça os Lençóis Maranhenses com a Vem Ver e descubra paisagens incríveis, dunas, lagoas e experiências que tornam sua viagem inesquecível.',
  },

  /* =======================================================
     SOBRE
     ======================================================= */

  about: {
    title: 'Vem Ver os Lençóis Maranhenses com a gente',

    text:
      'A Vem Ver nasceu com o objetivo de aproximar você das belezas dos Lençóis Maranhenses, ajudando a transformar sua viagem em uma experiência especial.',

    image: '/images/dunas.webp',

    imageAlt:
      'Pessoas caminhando sobre a crista das dunas de areia branca nos Lençóis Maranhenses',
  },

  /* =======================================================
     OFERTAS
     ======================================================= */

  offers: {
    title: 'OFERTAS ESPECIAIS',

    text:
      'Aproveite nossas condições especiais e venha viver os Lençóis Maranhenses com a Vem Ver.',
  },
}

/* =========================================================
   PASSEIOS
   ========================================================= */

export const tours: Tour[] = [
  {
    slug: 'atins',
    name: 'Circuito de Atins',

    shortDescription:
      'Conheça Atins e aproveite as belezas dos Lençóis Maranhenses.',

    description:
      'Conheça Atins e descubra as paisagens especiais da região dos Lençóis Maranhenses.',

    image: '/images/atins.jpg',

    imageAlt:
      'Paisagem de Atins com rio, coqueiros e dunas',

    originalPrice: 'R$ 250,00',
    price: 'R$ 230,50',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: '',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'lagoa-azul',
    name: 'Circuito Lagoa Azul',

    shortDescription:
      'Explore as dunas e lagoas cristalinas dos Lençóis Maranhenses.',

    description:
      'Conheça a Lagoa Azul e aproveite a paisagem de dunas brancas e águas cristalinas.',

    image: '/images/lagoa-azul.webp',

    imageAlt:
      'Lagoa de água azul entre as dunas dos Lençóis Maranhenses',

    originalPrice: 'R$ 160,00',
    price: 'R$ 149,90',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: '',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'lagoa-bonita',
    name: 'Circuito Lagoa Bonita',

    shortDescription:
      'Viva uma experiência especial entre dunas e lagoas dos Lençóis.',

    description:
      'Conheça a Lagoa Bonita e suas belas paisagens entre dunas e lagoas.',

    image: '/images/lagoa-bonita.webp',

    imageAlt:
      'Vista do alto de uma duna para uma lagoa entre as dunas',

    originalPrice: 'R$ 160,00',
    price: 'R$ 149,90',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: '',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'cardosa',
    name: 'Percurso de Cardosa',

    shortDescription:
      'Descubra as belezas naturais do percurso de Cardosa.',

    description:
      'Explore o percurso de Cardosa e aproveite as belezas naturais da região.',

    image: '/images/passeio-4x4.webp',

    imageAlt:
      'Passeio pelas paisagens naturais da região dos Lençóis Maranhenses',

    originalPrice: 'R$ 150,00',
    price: 'R$ 129,90',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: '',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'santo-amaro',
    name: 'Percurso de Santo Amaro',

    shortDescription:
      'Conheça Santo Amaro e suas paisagens incríveis nos Lençóis Maranhenses.',

    description:
      'Conheça Santo Amaro e suas lagoas de águas claras em meio às paisagens dos Lençóis Maranhenses.',

    image: '/images/santo-amaro.webp',

    imageAlt:
      'Lagoa de águas claras em Santo Amaro do Maranhão',

    originalPrice: 'R$ 330,00',
    price: 'R$ 305,50',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: '',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'cabure',
    name: 'Circuito de Caburé',

    shortDescription:
      'Explore Caburé e aproveite uma experiência especial na região.',

    description:
      'Conheça Caburé e aproveite as paisagens e experiências da região.',

    image: '/images/cabure.jpg',

    imageAlt:
      'Paisagem da região dos Lençóis Maranhenses',

    originalPrice: 'R$ 180,00',
    price: 'R$ 159,90',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: '',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'duas-lagoas',
    name: 'Circuito de Duas Lagoas',

    shortDescription:
      'Conheça duas belas lagoas e aproveite a paisagem dos Lençóis.',

    description:
      'Explore duas belas lagoas e aproveite as paisagens dos Lençóis Maranhenses.',

    image: '/images/lagoa-azul.webp',

    imageAlt:
      'Lagoa entre as dunas dos Lençóis Maranhenses',

    originalPrice: 'R$ 330,00',
    price: 'R$ 305,50',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: '',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'quadriciclo',
    name: 'Pequenos Lençóis de Quadriciclo',

    shortDescription:
      'Explore os Pequenos Lençóis em uma experiência de quadriciclo.',

    description:
      'Explore os Pequenos Lençóis em uma experiência de quadriciclo pelas paisagens da região.',

    image: '/images/quadri.jpg',

    imageAlt:
      'Passeio pelas trilhas de areia dos Lençóis Maranhenses',

    originalPrice: 'R$ 650,00',
    price: 'R$ 599,90',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: '',
    schedule: '',
    highlights: [],
  },
]

/* =========================================================
   EXPERIÊNCIAS PRIVATIVAS
   ========================================================= */

export const privateExperiences: Tour[] = [
  {
    slug: 'mirar-das-estrelas',
    name: 'Mirar das Estrelas',

    shortDescription:
      'Experiência para admirar o céu noturno nos Lençóis Maranhenses.',

    description:
      'Uma experiência para admirar o céu noturno e contemplar as estrelas nos Lençóis Maranhenses.',

    image: '/images/por-do-sol.webp',

    imageAlt:
      'Céu sobre as dunas dos Lençóis Maranhenses',

    originalPrice: 'R$ 1.400,00',
    price: 'R$ 1.250,50',
    priceInfo: 'para até 9 pessoas',

    type: 'privativo',

    duration: '',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'cafe-da-manha',
    name: 'Café da Manhã nos Lençóis Maranhenses',

    shortDescription:
      'Uma experiência especial de café da manhã em meio à paisagem dos Lençóis.',

    description:
      'Uma experiência para tomar café da manhã em meio à paisagem dos Lençóis Maranhenses.',

    image: '/images/dunas.webp',

    imageAlt:
      'Dunas de areia branca nos Lençóis Maranhenses',

    originalPrice: 'R$ 1.400,00',
    price: 'R$ 1.250,50',
    priceInfo: 'para até 9 pessoas',

    type: 'privativo',

    duration: '',
    schedule: '',
    highlights: [],
  },
]

/* =========================================================
   GALERIA
   ========================================================= */

export const gallery: GalleryImage[] = [
  {
    src: '/images/hero-lencois.webp',
    alt: 'Vista aérea dos Lençóis Maranhenses com dunas e lagoas',
    label: 'Lençóis Maranhenses',
  },
  {
    src: '/images/dunas.webp',
    alt: 'Dunas de areia branca nos Lençóis Maranhenses',
    label: 'Dunas',
  },
  {
    src: '/images/lagoa-azul.webp',
    alt: 'Lagoa de água azul entre as dunas',
    label: 'Lagoas',
  },
  {
    src: '/images/atins.webp',
    alt: 'Paisagem de Atins',
    label: 'Atins',
  },
  {
    src: '/images/santo-amaro.webp',
    alt: 'Lagoa em Santo Amaro do Maranhão',
    label: 'Santo Amaro',
  },
  {
    src: '/images/barreirinhas.webp',
    alt: 'Rio Preguiças em Barreirinhas',
    label: 'Barreirinhas',
  },
  {
    src: '/images/passeio-4x4.webp',
    alt: 'Passeio pelas trilhas dos Lençóis Maranhenses',
    label: 'Passeios',
  },
  {
    src: '/images/por-do-sol.webp',
    alt: 'Pôr do sol sobre as dunas',
    label: 'Pôr do sol',
  },
]

/* =========================================================
   DEPOIMENTOS
   ========================================================= */

export const testimonials: Testimonial[] = []

/* =========================================================
   PERGUNTAS FREQUENTES
   ========================================================= */

export const faq: FaqItem[] = [
  {
    question: 'Como faço para reservar um passeio?',
    answer:
      'Entre em contato com a Vem Ver pelo WhatsApp para consultar o passeio, a data e as informações necessárias para sua reserva.',
  },

  {
    question: 'Como consultar a disponibilidade?',
    answer:
      'Fale com a Vem Ver pelo WhatsApp informando a data pretendida e o passeio de interesse.',
  },

  {
    question: 'Os valores apresentados são por pessoa?',
    answer:
      'Os passeios compartilhados são apresentados com valor por pessoa. As experiências privativas informam o valor para até 9 pessoas.',
  },

  {
    question: 'Quais passeios são privativos?',
    answer:
      'As experiências privativas disponíveis no site são Miradas Estrelas e Café da Manhã nos Lençóis Maranhenses.',
  },

  {
    question: 'Quantas pessoas podem participar dos passeios privativos?',
    answer:
      'As experiências privativas apresentadas no site são para até 9 pessoas.',
  },

  {
    question: 'Como funciona o pagamento?',
    answer:
      'Fale com a Vem Ver pelo WhatsApp para consultar as formas de pagamento disponíveis.',
  },

  {
    question: 'Os passeios dependem das condições climáticas?',
    answer:
      'Passeios realizados em ambientes naturais podem depender das condições climáticas e das condições da região. Consulte a Vem Ver antes da viagem.',
  },

  {
    question: 'Como funciona o cancelamento?',
    answer:
      'As condições de cancelamento são informadas no momento da consulta. Fale com a Vem Ver pelo WhatsApp.',
  },

  {
    question: 'Como entrar em contato com a Vem Ver?',
    answer:
      'Você pode entrar em contato pelo WhatsApp ou pelo Instagram @vemvertur.',
  },
]

/* =========================================================
   COMO FUNCIONA
   ========================================================= */

export const howItWorks = [
  {
    number: 1,
    title: 'Escolha seu passeio',
    text: 'Escolha a experiência que combina com sua viagem.',
  },

  {
    number: 2,
    title: 'Fale com a Vem Ver',
    text: 'Entre em contato pelo WhatsApp.',
  },

  {
    number: 3,
    title: 'Consulte disponibilidade',
    text: 'Confira datas, detalhes e condições do passeio.',
  },

  {
    number: 4,
    title: 'Aproveite os Lençóis',
    text: 'Prepare-se para viver uma experiência inesquecível.',
  },
]

/* =========================================================
   MENU
   ========================================================= */

export const navLinks = [
  {
    label: 'Início',
    href: '/#inicio',
  },

  {
    label: 'Passeios',
    href: '/#passeios',
  },

  {
    label: 'Privativos',
    href: '/#privativos',
  },

  {
    label: 'Sobre',
    href: '/#sobre',
  },

  {
    label: 'Dúvidas',
    href: '/#duvidas',
  },

  {
    label: 'Contato',
    href: '/#contato',
  },
]
