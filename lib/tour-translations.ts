import type { Locale } from '@/lib/i18n'

import {
  tours,
  privateExperiences,
} from '@/lib/site-config'

export type LocalizedTourContent = {
  name: string
  shortDescription: string
  description: string
  imageAlt: string
  priceInfo: string
  duration: string
  schedule: string
  highlights: string[]
}

type TourTranslationMap = Record<
  string,
  Record<Locale, LocalizedTourContent>
>

/*
 * As descrições completas dos passeios continuam
 * centralizadas no site-config.ts.
 *
 * Isso evita duplicar os textos completos aqui e,
 * principalmente, evita que uma descrição resumida
 * substitua a descrição original.
 */

const allTours = [
  ...tours,
  ...privateExperiences,
]

function getOriginalDescription(
  slug: string,
): string {
  const tour = allTours.find(
    (item) => item.slug === slug,
  )

  return tour?.description || ''
}

const translatedContent: TourTranslationMap = {
  atins: {
    pt: {
      name: 'Atins',
      shortDescription:
        'Um dia completo entre dunas, lagoas e a charmosa vila de Atins.',
      description: '',
      imageAlt:
        'Dunas e lagoas da região de Atins nos Lençóis Maranhenses',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 9 horas',
      schedule:
        'Saída por volta das 9h e retorno à tarde.',
      highlights: [],
    },

    en: {
      name: 'Atins',
      shortDescription:
        'A full day among dunes, lagoons and the charming village of Atins.',
      description: '',
      imageAlt:
        'Dunes and lagoons in the Atins region of Lençóis Maranhenses',
      priceInfo: 'per person',
      duration: 'Approximately 9 hours',
      schedule:
        'Departure around 9 AM and return in the afternoon.',
      highlights: [],
    },

    es: {
      name: 'Atins',
      shortDescription:
        'Un día completo entre dunas, lagunas y el encantador pueblo de Atins.',
      description: '',
      imageAlt:
        'Dunas y lagunas de la región de Atins en los Lençóis Maranhenses',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 9 horas',
      schedule:
        'Salida alrededor de las 9:00 y regreso por la tarde.',
      highlights: [],
    },

    fr: {
      name: 'Atins',
      shortDescription:
        'Une journée complète entre dunes, lagunes et le charmant village d’Atins.',
      description: '',
      imageAlt:
        'Dunes et lagunes de la région d’Atins aux Lençóis Maranhenses',
      priceInfo: 'par personne',
      duration: 'Environ 9 heures',
      schedule:
        'Départ vers 9h et retour dans l’après-midi.',
      highlights: [],
    },

    it: {
      name: 'Atins',
      shortDescription:
        'Una giornata completa tra dune, lagune e l’affascinante villaggio di Atins.',
      description: '',
      imageAlt:
        'Dune e lagune della regione di Atins nei Lençóis Maranhenses',
      priceInfo: 'a persona',
      duration: 'Circa 9 ore',
      schedule:
        'Partenza intorno alle 9:00 e ritorno nel pomeriggio.',
      highlights: [],
    },

    zh: {
      name: '阿廷斯',
      shortDescription:
        '在沙丘、湖泊和迷人的阿廷斯村度过完整的一天。',
      description: '',
      imageAlt:
        'Lençóis Maranhenses 阿廷斯地区的沙丘和湖泊',
      priceInfo: '每人',
      duration: '约 9 小时',
      schedule:
        '约上午 9 点出发，下午返回。',
      highlights: [],
    },

    ja: {
      name: 'アチンス',
      shortDescription:
        '砂丘やラグーン、魅力的なアチンス村を一日かけて楽しむツアーです。',
      description: '',
      imageAlt:
        'レンソイス・マラニャンセスのアチンス地域にある砂丘とラグーン',
      priceInfo: '1名あたり',
      duration: '約9時間',
      schedule:
        '9時頃出発、午後に戻ります。',
      highlights: [],
    },
  },

  'lagoa-azul': {
    pt: {
      name: 'Lagoa Azul',
      shortDescription:
        'Uma das lagoas mais conhecidas dos Lençóis Maranhenses.',
      description: '',
      imageAlt:
        'Lagoa Azul cercada por dunas brancas nos Lençóis Maranhenses',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 4 horas',
      schedule: '8h30 às 12h30',
      highlights: [],
    },

    en: {
      name: 'Blue Lagoon',
      shortDescription:
        'One of the most famous lagoons in Lençóis Maranhenses.',
      description: '',
      imageAlt:
        'Blue Lagoon surrounded by white dunes in Lençóis Maranhenses',
      priceInfo: 'per person',
      duration: 'Approximately 4 hours',
      schedule: '8:30 AM to 12:30 PM',
      highlights: [],
    },

    es: {
      name: 'Laguna Azul',
      shortDescription:
        'Una de las lagunas más conocidas de los Lençóis Maranhenses.',
      description: '',
      imageAlt:
        'Laguna Azul rodeada de dunas blancas en los Lençóis Maranhenses',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 4 horas',
      schedule: '8:30 a 12:30',
      highlights: [],
    },

    fr: {
      name: 'Lagon Bleu',
      shortDescription:
        'L’une des lagunes les plus connues des Lençóis Maranhenses.',
      description: '',
      imageAlt:
        'Lagon Bleu entouré de dunes blanches aux Lençóis Maranhenses',
      priceInfo: 'par personne',
      duration: 'Environ 4 heures',
      schedule: 'De 8h30 à 12h30',
      highlights: [],
    },

    it: {
      name: 'Laguna Blu',
      shortDescription:
        'Una delle lagune più conosciute dei Lençóis Maranhenses.',
      description: '',
      imageAlt:
        'Laguna Blu circondata da dune bianche nei Lençóis Maranhenses',
      priceInfo: 'a persona',
      duration: 'Circa 4 ore',
      schedule: 'Dalle 8:30 alle 12:30',
      highlights: [],
    },

    zh: {
      name: '蓝湖',
      shortDescription:
        'Lençóis Maranhenses 最著名的湖泊之一。',
      description: '',
      imageAlt:
        'Lençóis Maranhenses 白色沙丘环绕的蓝湖',
      priceInfo: '每人',
      duration: '约 4 小时',
      schedule: '8:30 至 12:30',
      highlights: [],
    },

    ja: {
      name: 'ブルーラグーン',
      shortDescription:
        'レンソイス・マラニャンセスを代表するラグーンの一つです。',
      description: '',
      imageAlt:
        'レンソイス・マラニャンセスの白い砂丘に囲まれたブルーラグーン',
      priceInfo: '1名あたり',
      duration: '約4時間',
      schedule: '8:30〜12:30',
      highlights: [],
    },
  },

  'lagoa-bonita': {
    pt: {
      name: 'Lagoa Bonita',
      shortDescription:
        'Dunas impressionantes e uma das vistas mais bonitas dos Lençóis.',
      description: '',
      imageAlt:
        'Lagoa Bonita e dunas dos Lençóis Maranhenses',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 6 horas',
      schedule: '13h30 às 19h30',
      highlights: [],
    },

    en: {
      name: 'Beautiful Lagoon',
      shortDescription:
        'Impressive dunes and one of the most beautiful views in Lençóis.',
      description: '',
      imageAlt:
        'Beautiful Lagoon and dunes in Lençóis Maranhenses',
      priceInfo: 'per person',
      duration: 'Approximately 6 hours',
      schedule: '1:30 PM to 7:30 PM',
      highlights: [],
    },

    es: {
      name: 'Laguna Bonita',
      shortDescription:
        'Dunas impresionantes y una de las vistas más bonitas de los Lençóis.',
      description: '',
      imageAlt:
        'Laguna Bonita y dunas de los Lençóis Maranhenses',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 6 horas',
      schedule: '13:30 a 19:30',
      highlights: [],
    },

    fr: {
      name: 'Lagon Bonita',
      shortDescription:
        'Des dunes impressionnantes et l’une des plus belles vues des Lençóis.',
      description: '',
      imageAlt:
        'Lagon Bonita et dunes des Lençóis Maranhenses',
      priceInfo: 'par personne',
      duration: 'Environ 6 heures',
      schedule: 'De 13h30 à 19h30',
      highlights: [],
    },

    it: {
      name: 'Laguna Bonita',
      shortDescription:
        'Dune spettacolari e una delle viste più belle dei Lençóis.',
      description: '',
      imageAlt:
        'Laguna Bonita e dune dei Lençóis Maranhenses',
      priceInfo: 'a persona',
      duration: 'Circa 6 ore',
      schedule: 'Dalle 13:30 alle 19:30',
      highlights: [],
    },

    zh: {
      name: '美丽湖',
      shortDescription:
        '壮观的沙丘，以及 Lençóis 最美丽的景色之一。',
      description: '',
      imageAlt:
        'Lençóis Maranhenses 的美丽湖和沙丘',
      priceInfo: '每人',
      duration: '约 6 小时',
      schedule: '13:30 至 19:30',
      highlights: [],
    },

    ja: {
      name: 'ボニータ・ラグーン',
      shortDescription:
        '壮大な砂丘と、レンソイスを代表する美しい景色を楽しめます。',
      description: '',
      imageAlt:
        'レンソイス・マラニャンセスのボニータ・ラグーンと砂丘',
      priceInfo: '1名あたり',
      duration: '約6時間',
      schedule: '13:30〜19:30',
      highlights: [],
    },
  },

  cardosa: {
    pt: {
      name: 'Cardosa',
      shortDescription:
        'Um passeio tranquilo para conhecer as belezas naturais da região.',
      description: '',
      imageAlt:
        'Paisagem natural da região de Cardosa, Maranhão',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 4 horas',
      schedule: '8h30 às 12h30',
      highlights: [],
    },

    en: {
      name: 'Cardosa',
      shortDescription:
        'A peaceful tour to discover the natural beauty of the region.',
      description: '',
      imageAlt:
        'Natural landscape in the Cardosa region, Maranhão',
      priceInfo: 'per person',
      duration: 'Approximately 4 hours',
      schedule: '8:30 AM to 12:30 PM',
      highlights: [],
    },

    es: {
      name: 'Cardosa',
      shortDescription:
        'Un paseo tranquilo para conocer las bellezas naturales de la región.',
      description: '',
      imageAlt:
        'Paisaje natural de la región de Cardosa, Maranhão',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 4 horas',
      schedule: '8:30 a 12:30',
      highlights: [],
    },

    fr: {
      name: 'Cardosa',
      shortDescription:
        'Une excursion paisible pour découvrir les beautés naturelles de la région.',
      description: '',
      imageAlt:
        'Paysage naturel de la région de Cardosa, Maranhão',
      priceInfo: 'par personne',
      duration: 'Environ 4 heures',
      schedule: 'De 8h30 à 12h30',
      highlights: [],
    },

    it: {
      name: 'Cardosa',
      shortDescription:
        'Un’escursione tranquilla per scoprire le bellezze naturali della regione.',
      description: '',
      imageAlt:
        'Paesaggio naturale della regione di Cardosa, Maranhão',
      priceInfo: 'a persona',
      duration: 'Circa 4 ore',
      schedule: 'Dalle 8:30 alle 12:30',
      highlights: [],
    },

    zh: {
      name: '卡多萨',
      shortDescription:
        '轻松惬意的旅程，探索当地自然之美。',
      description: '',
      imageAlt:
        '巴西马拉尼昂州卡多萨地区的自然景观',
      priceInfo: '每人',
      duration: '约 4 小时',
      schedule: '8:30 至 12:30',
      highlights: [],
    },

    ja: {
      name: 'カルドーザ',
      shortDescription:
        '地域の美しい自然をゆったりと楽しむツアーです。',
      description: '',
      imageAlt:
        'ブラジル・マラニョン州カルドーザ地域の自然景観',
      priceInfo: '1名あたり',
      duration: '約4時間',
      schedule: '8:30〜12:30',
      highlights: [],
    },
  },

  'santo-amaro': {
    pt: {
      name: 'Santo Amaro',
      shortDescription:
        'Conheça uma das regiões mais preservadas dos Lençóis Maranhenses.',
      description: '',
      imageAlt:
        'Dunas e lagoas de Santo Amaro nos Lençóis Maranhenses',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 11 horas',
      schedule: '8h30 às 19h30',
      highlights: [],
    },

    en: {
      name: 'Santo Amaro',
      shortDescription:
        'Discover one of the most preserved areas of Lençóis Maranhenses.',
      description: '',
      imageAlt:
        'Dunes and lagoons of Santo Amaro in Lençóis Maranhenses',
      priceInfo: 'per person',
      duration: 'Approximately 11 hours',
      schedule: '8:30 AM to 7:30 PM',
      highlights: [],
    },

    es: {
      name: 'Santo Amaro',
      shortDescription:
        'Descubre una de las regiones mejor conservadas de los Lençóis Maranhenses.',
      description: '',
      imageAlt:
        'Dunas y lagunas de Santo Amaro en los Lençóis Maranhenses',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 11 horas',
      schedule: '8:30 a 19:30',
      highlights: [],
    },

    fr: {
      name: 'Santo Amaro',
      shortDescription:
        'Découvrez l’une des régions les mieux préservées des Lençóis Maranhenses.',
      description: '',
      imageAlt:
        'Dunes et lagunes de Santo Amaro aux Lençóis Maranhenses',
      priceInfo: 'par personne',
      duration: 'Environ 11 heures',
      schedule: 'De 8h30 à 19h30',
      highlights: [],
    },

    it: {
      name: 'Santo Amaro',
      shortDescription:
        'Scopri una delle zone meglio conservate dei Lençóis Maranhenses.',
      description: '',
      imageAlt:
        'Dune e lagune di Santo Amaro nei Lençóis Maranhenses',
      priceInfo: 'a persona',
      duration: 'Circa 11 ore',
      schedule: 'Dalle 8:30 alle 19:30',
      highlights: [],
    },

    zh: {
      name: '圣阿马罗',
      shortDescription:
        '探索 Lençóis Maranhenses 保存最完好的地区之一。',
      description: '',
      imageAlt:
        'Lençóis Maranhenses 圣阿马罗的沙丘和湖泊',
      priceInfo: '每人',
      duration: '约 11 小时',
      schedule: '8:30 至 19:30',
      highlights: [],
    },

    ja: {
      name: 'サント・アマロ',
      shortDescription:
        'レンソイス・マラニャンセスの中でも自然がよく残る地域を訪れます。',
      description: '',
      imageAlt:
        'レンソイス・マラニャンセスのサント・アマロにある砂丘とラグーン',
      priceInfo: '1名あたり',
      duration: '約11時間',
      schedule: '8:30〜19:30',
      highlights: [],
    },
  },

  cabure: {
    pt: {
      name: 'Caburé',
      shortDescription:
        'Uma experiência entre rio, dunas e mar em um único passeio.',
      description: '',
      imageAlt:
        'Paisagens de Caburé entre dunas, rio e mar',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 7 horas',
      schedule: '8h30 às 15h30',
      highlights: [],
    },

    en: {
      name: 'Caburé',
      shortDescription:
        'An experience combining river, dunes and sea in one tour.',
      description: '',
      imageAlt:
        'Caburé landscapes between dunes, river and sea',
      priceInfo: 'per person',
      duration: 'Approximately 7 hours',
      schedule: '8:30 AM to 3:30 PM',
      highlights: [],
    },

    es: {
      name: 'Caburé',
      shortDescription:
        'Una experiencia que combina río, dunas y mar en un solo paseo.',
      description: '',
      imageAlt:
        'Paisajes de Caburé entre dunas, río y mar',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 7 horas',
      schedule: '8:30 a 15:30',
      highlights: [],
    },

    fr: {
      name: 'Caburé',
      shortDescription:
        'Une expérience entre rivière, dunes et mer en une seule excursion.',
      description: '',
      imageAlt:
        'Paysages de Caburé entre dunes, rivière et mer',
      priceInfo: 'par personne',
      duration: 'Environ 7 heures',
      schedule: 'De 8h30 à 15h30',
      highlights: [],
    },

    it: {
      name: 'Caburé',
      shortDescription:
        'Un’esperienza che unisce fiume, dune e mare in un unico tour.',
      description: '',
      imageAlt:
        'Paesaggi di Caburé tra dune, fiume e mare',
      priceInfo: 'a persona',
      duration: 'Circa 7 ore',
      schedule: 'Dalle 8:30 alle 15:30',
      highlights: [],
    },

    zh: {
      name: '卡布雷',
      shortDescription:
        '一次体验河流、沙丘与大海的多样景观。',
      description: '',
      imageAlt:
        '卡布雷的沙丘、河流和海洋景观',
      priceInfo: '每人',
      duration: '约 7 小时',
      schedule: '8:30 至 15:30',
      highlights: [],
    },

    ja: {
      name: 'カブレ',
      shortDescription:
        '川、砂丘、海を一度に楽しめる多彩なツアーです。',
      description: '',
      imageAlt:
        '砂丘、川、海が広がるカブレの景観',
      priceInfo: '1名あたり',
      duration: '約7時間',
      schedule: '8:30〜15:30',
      highlights: [],
    },
  },

  'duas-lagoas': {
    pt: {
      name: 'Duas Lagoas',
      shortDescription:
        'Uma experiência para conhecer duas belas lagoas dos Lençóis.',
      description: '',
      imageAlt:
        'Lagoas e dunas dos Lençóis Maranhenses',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 11 horas',
      schedule: '8h30 às 19h30',
      highlights: [],
    },

    en: {
      name: 'Two Lagoons',
      shortDescription:
        'An experience to discover two beautiful lagoons in Lençóis.',
      description: '',
      imageAlt:
        'Lagoons and dunes of Lençóis Maranhenses',
      priceInfo: 'per person',
      duration: 'Approximately 11 hours',
      schedule: '8:30 AM to 7:30 PM',
      highlights: [],
    },

    es: {
      name: 'Dos Lagunas',
      shortDescription:
        'Una experiencia para conocer dos hermosas lagunas de los Lençóis.',
      description: '',
      imageAlt:
        'Lagunas y dunas de los Lençóis Maranhenses',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 11 horas',
      schedule: '8:30 a 19:30',
      highlights: [],
    },

    fr: {
      name: 'Deux Lagunes',
      shortDescription:
        'Une expérience pour découvrir deux magnifiques lagunes des Lençóis.',
      description: '',
      imageAlt:
        'Lagunes et dunes des Lençóis Maranhenses',
      priceInfo: 'par personne',
      duration: 'Environ 11 heures',
      schedule: 'De 8h30 à 19h30',
      highlights: [],
    },

    it: {
      name: 'Due Lagune',
      shortDescription:
        'Un’esperienza per scoprire due splendide lagune dei Lençóis.',
      description: '',
      imageAlt:
        'Lagune e dune dei Lençóis Maranhenses',
      priceInfo: 'a persona',
      duration: 'Circa 11 ore',
      schedule: 'Dalle 8:30 alle 19:30',
      highlights: [],
    },

    zh: {
      name: '双湖',
      shortDescription:
        '一次探索 Lençóis 两个美丽湖泊的特别体验。',
      description: '',
      imageAlt:
        'Lençóis Maranhenses 的湖泊和沙丘',
      priceInfo: '每人',
      duration: '约 11 小时',
      schedule: '8:30 至 19:30',
      highlights: [],
    },

    ja: {
      name: '2つのラグーン',
      shortDescription:
        'レンソイスの美しい2つのラグーンを巡る体験です。',
      description: '',
      imageAlt:
        'レンソイス・マラニャンセスのラグーンと砂丘',
      priceInfo: '1名あたり',
      duration: '約11時間',
      schedule: '8:30〜19:30',
      highlights: [],
    },
  },

  quadriciclo: {
    pt: {
      name: 'Pequenos Lençóis de Quadriciclo',
      shortDescription:
        'Aventura pelos Pequenos Lençóis a bordo de quadriciclo.',
      description: '',
      imageAlt:
        'Quadriciclo percorrendo as dunas dos Pequenos Lençóis',
      priceInfo: 'para até 2 pessoas',
      duration: 'Aproximadamente 8 horas',
      schedule: '9h às 17h',
      highlights: [],
    },

    en: {
      name: 'Small Lençóis by ATV',
      shortDescription:
        'An adventure through Pequenos Lençóis aboard an ATV.',
      description: '',
      imageAlt:
        'ATV riding through the dunes of Pequenos Lençóis',
      priceInfo: 'for up to 2 people',
      duration: 'Approximately 8 hours',
      schedule: '9 AM to 5 PM',
      highlights: [],
    },

    es: {
      name: 'Pequeños Lençóis en Quadriciclo',
      shortDescription:
        'Una aventura por los Pequeños Lençóis a bordo de un quad.',
      description: '',
      imageAlt:
        'Quad recorriendo las dunas de los Pequeños Lençóis',
      priceInfo: 'para hasta 2 personas',
      duration: 'Aproximadamente 8 horas',
      schedule: '9:00 a 17:00',
      highlights: [],
    },

    fr: {
      name: 'Petits Lençóis en Quad',
      shortDescription:
        'Une aventure à travers les Petits Lençóis en quad.',
      description: '',
      imageAlt:
        'Quad parcourant les dunes des Petits Lençóis',
      priceInfo: 'pour jusqu’à 2 personnes',
      duration: 'Environ 8 heures',
      schedule: 'De 9h à 17h',
      highlights: [],
    },

    it: {
      name: 'Piccoli Lençóis in Quad',
      shortDescription:
        'Un’avventura attraverso i Piccoli Lençóis a bordo di un quad.',
      description: '',
      imageAlt:
        'Quad che attraversa le dune dei Piccoli Lençóis',
      priceInfo: 'fino a 2 persone',
      duration: 'Circa 8 ore',
      schedule: 'Dalle 9:00 alle 17:00',
      highlights: [],
    },

    zh: {
      name: '小伦索伊斯沙丘四轮摩托',
      shortDescription:
        '驾驶四轮摩托探索小伦索伊斯的沙丘。',
      description: '',
      imageAlt:
        '四轮摩托穿越小伦索伊斯沙丘',
      priceInfo: '最多 2 人',
      duration: '约 8 小时',
      schedule: '9:00 至 17:00',
      highlights: [],
    },

    ja: {
      name: '小レンソイス・ATVツアー',
      shortDescription:
        'ATVに乗って小レンソイスの砂丘を冒険するツアーです。',
      description: '',
      imageAlt:
        '小レンソイスの砂丘を走るATV',
      priceInfo: '最大2名',
      duration: '約8時間',
      schedule: '9:00〜17:00',
      highlights: [],
    },
  },

  'mirar-das-estrelas': {
    pt: {
      name: 'Mirar das Estrelas',
      shortDescription:
        'Uma experiência privativa para contemplar o céu dos Lençóis.',
      description: '',
      imageAlt:
        'Céu estrelado sobre os Lençóis Maranhenses',
      priceInfo: 'para até 9 pessoas',
      duration: 'Aproximadamente 5 horas',
      schedule: '20h às 1h',
      highlights: [],
    },

    en: {
      name: 'Stargazing Experience',
      shortDescription:
        'A private experience to admire the night sky over Lençóis.',
      description: '',
      imageAlt:
        'Starry sky over Lençóis Maranhenses',
      priceInfo: 'for up to 9 people',
      duration: 'Approximately 5 hours',
      schedule: '8 PM to 1 AM',
      highlights: [],
    },

    es: {
      name: 'Experiencia de Estrellas',
      shortDescription:
        'Una experiencia privada para contemplar el cielo de los Lençóis.',
      description: '',
      imageAlt:
        'Cielo estrellado sobre los Lençóis Maranhenses',
      priceInfo: 'para hasta 9 personas',
      duration: 'Aproximadamente 5 horas',
      schedule: '20:00 a 1:00',
      highlights: [],
    },

    fr: {
      name: 'Expérience sous les Étoiles',
      shortDescription:
        'Une expérience privée pour admirer le ciel des Lençóis.',
      description: '',
      imageAlt:
        'Ciel étoilé au-dessus des Lençóis Maranhenses',
      priceInfo: 'pour jusqu’à 9 personnes',
      duration: 'Environ 5 heures',
      schedule: 'De 20h à 1h',
      highlights: [],
    },

    it: {
      name: 'Esperienza sotto le Stelle',
      shortDescription:
        'Un’esperienza privata per ammirare il cielo dei Lençóis.',
      description: '',
      imageAlt:
        'Cielo stellato sopra i Lençóis Maranhenses',
      priceInfo: 'fino a 9 persone',
      duration: 'Circa 5 ore',
      schedule: 'Dalle 20:00 all’1:00',
      highlights: [],
    },

    zh: {
      name: '星空体验',
      shortDescription:
        '私人夜间体验，在伦索伊斯欣赏壮丽星空。',
      description: '',
      imageAlt:
        'Lençóis Maranhenses 上空的星空',
      priceInfo: '最多 9 人',
      duration: '约 5 小时',
      schedule: '20:00 至凌晨 1:00',
      highlights: [],
    },

    ja: {
      name: '星空体験',
      shortDescription:
        'レンソイスの夜空を眺めるプライベート体験です。',
      description: '',
      imageAlt:
        'レンソイス・マラニャンセスに広がる星空',
      priceInfo: '最大9名',
      duration: '約5時間',
      schedule: '20:00〜翌1:00',
      highlights: [],
    },
  },

  'cafe-da-manha': {
    pt: {
      name: 'Café da Manhã nos Lençóis',
      shortDescription:
        'Um café da manhã especial em meio às dunas e lagoas.',
      description: '',
      imageAlt:
        'Café da manhã entre as dunas dos Lençóis Maranhenses',
      priceInfo: 'para até 9 pessoas',
      duration: 'Aproximadamente 3 horas',
      schedule: '3h30 às 6h30',
      highlights: [],
    },

    en: {
      name: 'Breakfast in Lençóis',
      shortDescription:
        'A special breakfast surrounded by dunes and lagoons.',
      description: '',
      imageAlt:
        'Breakfast among the dunes of Lençóis Maranhenses',
      priceInfo: 'for up to 9 people',
      duration: 'Approximately 3 hours',
      schedule: '3:30 AM to 6:30 AM',
      highlights: [],
    },

    es: {
      name: 'Desayuno en los Lençóis',
      shortDescription:
        'Un desayuno especial entre dunas y lagunas.',
      description: '',
      imageAlt:
        'Desayuno entre las dunas de los Lençóis Maranhenses',
      priceInfo: 'para hasta 9 personas',
      duration: 'Aproximadamente 3 horas',
      schedule: '3:30 a 6:30',
      highlights: [],
    },

    fr: {
      name: 'Petit-déjeuner dans les Lençóis',
      shortDescription:
        'Un petit-déjeuner spécial au milieu des dunes et des lagunes.',
      description: '',
      imageAlt:
        'Petit-déjeuner au milieu des dunes des Lençóis Maranhenses',
      priceInfo: 'pour jusqu’à 9 personnes',
      duration: 'Environ 3 heures',
      schedule: 'De 3h30 à 6h30',
      highlights: [],
    },

    it: {
      name: 'Colazione nei Lençóis',
      shortDescription:
        'Una colazione speciale tra dune e lagune.',
      description: '',
      imageAlt:
        'Colazione tra le dune dei Lençóis Maranhenses',
      priceInfo: 'fino a 9 persone',
      duration: 'Circa 3 ore',
      schedule: 'Dalle 3:30 alle 6:30',
      highlights: [],
    },

    zh: {
      name: '伦索伊斯沙丘早餐',
      shortDescription:
        '在沙丘与湖泊之间享用特别的早餐。',
      description: '',
      imageAlt:
        'Lençóis Maranhenses 沙丘间的早餐',
      priceInfo: '最多 9 人',
      duration: '约 3 小时',
      schedule: '3:30 至 6:30',
      highlights: [],
    },

    ja: {
      name: 'レンソイスで朝食',
      shortDescription:
        '砂丘とラグーンに囲まれて楽しむ特別な朝食体験です。',
      description: '',
      imageAlt:
        'レンソイス・マラニャンセスの砂丘で楽しむ朝食',
      priceInfo: '最大9名',
      duration: '約3時間',
      schedule: '3:30〜6:30',
      highlights: [],
    },
  },
}

export const tourTranslations: TourTranslationMap =
  translatedContent

export function getTourTranslation(
  slug: string,
  locale: Locale,
): LocalizedTourContent | null {
  const translation =
    tourTranslations[slug]?.[locale] ||
    tourTranslations[slug]?.pt

  if (!translation) {
    return null
  }

  /*
   * IMPORTANTE:
   *
   * A descrição exibida no site vem sempre do
   * texto completo original cadastrado no
   * site-config.ts.
   *
   * Assim, nenhuma tradução resumida consegue
   * substituir a descrição completa.
   */
  return {
    ...translation,
    description:
      getOriginalDescription(slug) ||
      translation.description,
  }
}
