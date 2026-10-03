import type { Locale } from '@/lib/i18n'

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

export const tourTranslations: TourTranslationMap = {
  atins: {
    pt: {
      name: 'Atins',
      shortDescription:
        'Um dia completo entre dunas, lagoas e a charmosa vila de Atins.',
      description:
        'Explore Atins em uma experiência completa pelos Lençóis Maranhenses, com paisagens de dunas, lagoas e o charme de uma das regiões mais especiais do destino.',
      imageAlt:
        'Dunas e lagoas da região de Atins nos Lençóis Maranhenses',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 9 horas',
      schedule: 'Saída pela manhã',
      highlights: [
        'Dunas e lagoas',
        'Vila de Atins',
        'Paisagens naturais',
        'Dia completo de experiência',
      ],
    },
    en: {
      name: 'Atins',
      shortDescription:
        'A full day among dunes, lagoons and the charming village of Atins.',
      description:
        'Explore Atins on a full experience through Lençóis Maranhenses, surrounded by dunes, lagoons and the charm of one of the destination’s most special areas.',
      imageAlt:
        'Dunes and lagoons in the Atins region of Lençóis Maranhenses',
      priceInfo: 'per person',
      duration: 'Approximately 9 hours',
      schedule: 'Morning departure',
      highlights: [
        'Dunes and lagoons',
        'Atins village',
        'Natural landscapes',
        'Full-day experience',
      ],
    },
    es: {
      name: 'Atins',
      shortDescription:
        'Un día completo entre dunas, lagunas y el encantador pueblo de Atins.',
      description:
        'Explora Atins en una experiencia completa por los Lençóis Maranhenses, rodeado de dunas, lagunas y el encanto de una de las zonas más especiales del destino.',
      imageAlt:
        'Dunas y lagunas de la región de Atins en los Lençóis Maranhenses',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 9 horas',
      schedule: 'Salida por la mañana',
      highlights: [
        'Dunas y lagunas',
        'Pueblo de Atins',
        'Paisajes naturales',
        'Experiencia de día completo',
      ],
    },
    fr: {
      name: 'Atins',
      shortDescription:
        'Une journée complète entre dunes, lagunes et le charmant village d’Atins.',
      description:
        'Découvrez Atins lors d’une expérience complète dans les Lençóis Maranhenses, entre dunes, lagunes et le charme de l’une des régions les plus remarquables de la destination.',
      imageAlt:
        'Dunes et lagunes de la région d’Atins aux Lençóis Maranhenses',
      priceInfo: 'par personne',
      duration: 'Environ 9 heures',
      schedule: 'Départ le matin',
      highlights: [
        'Dunes et lagunes',
        'Village d’Atins',
        'Paysages naturels',
        'Expérience d’une journée complète',
      ],
    },
    it: {
      name: 'Atins',
      shortDescription:
        'Una giornata completa tra dune, lagune e l’affascinante villaggio di Atins.',
      description:
        'Scopri Atins con un’esperienza completa nei Lençóis Maranhenses, tra dune, lagune e il fascino di una delle zone più speciali della destinazione.',
      imageAlt:
        'Dune e lagune della regione di Atins nei Lençóis Maranhenses',
      priceInfo: 'a persona',
      duration: 'Circa 9 ore',
      schedule: 'Partenza al mattino',
      highlights: [
        'Dune e lagune',
        'Villaggio di Atins',
        'Paesaggi naturali',
        'Esperienza di una giornata intera',
      ],
    },
    zh: {
      name: '阿廷斯',
      shortDescription:
        '在沙丘、湖泊和迷人的阿廷斯村度过完整的一天。',
      description:
        '探索 Lençóis Maranhenses 的阿廷斯地区，在沙丘、湖泊和充满魅力的村庄之间享受完整的一日体验。',
      imageAlt:
        'Lençóis Maranhenses 阿廷斯地区的沙丘和湖泊',
      priceInfo: '每人',
      duration: '约 9 小时',
      schedule: '上午出发',
      highlights: [
        '沙丘与湖泊',
        '阿廷斯村',
        '自然景观',
        '完整的一日体验',
      ],
    },
    ja: {
      name: 'アチンス',
      shortDescription:
        '砂丘やラグーン、魅力的なアチンス村を一日かけて楽しむツアーです。',
      description:
        'レンソイス・マラニャンセスのアチンスを巡り、砂丘やラグーン、魅力的な村の風景を楽しむ充実した一日を過ごします。',
      imageAlt:
        'レンソイス・マラニャンセスのアチンス地域にある砂丘とラグーン',
      priceInfo: '1名あたり',
      duration: '約9時間',
      schedule: '午前出発',
      highlights: [
        '砂丘とラグーン',
        'アチンス村',
        '自然の景観',
        '一日たっぷり楽しめる体験',
      ],
    },
  },

  'lagoa-azul': {
    pt: {
      name: 'Lagoa Azul',
      shortDescription:
        'Uma das lagoas mais conhecidas dos Lençóis Maranhenses.',
      description:
        'Conheça a Lagoa Azul e suas águas cercadas por grandes dunas de areia branca em uma das paisagens mais marcantes dos Lençóis Maranhenses.',
      imageAlt:
        'Lagoa Azul cercada por dunas brancas nos Lençóis Maranhenses',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 4 horas',
      schedule: '8h30 às 12h30',
      highlights: [
        'Lagoa Azul',
        'Dunas de areia branca',
        'Paisagens naturais',
        'Banho na lagoa',
      ],
    },
    en: {
      name: 'Blue Lagoon',
      shortDescription:
        'One of the most famous lagoons in Lençóis Maranhenses.',
      description:
        'Discover Blue Lagoon and its waters surrounded by towering white sand dunes in one of the most iconic landscapes of Lençóis Maranhenses.',
      imageAlt:
        'Blue Lagoon surrounded by white dunes in Lençóis Maranhenses',
      priceInfo: 'per person',
      duration: 'Approximately 4 hours',
      schedule: '8:30 AM to 12:30 PM',
      highlights: [
        'Blue Lagoon',
        'White sand dunes',
        'Natural landscapes',
        'Swimming in the lagoon',
      ],
    },
    es: {
      name: 'Laguna Azul',
      shortDescription:
        'Una de las lagunas más conocidas de los Lençóis Maranhenses.',
      description:
        'Descubre la Laguna Azul y sus aguas rodeadas de grandes dunas de arena blanca en uno de los paisajes más emblemáticos de los Lençóis Maranhenses.',
      imageAlt:
        'Laguna Azul rodeada de dunas blancas en los Lençóis Maranhenses',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 4 horas',
      schedule: '8:30 a 12:30',
      highlights: [
        'Laguna Azul',
        'Dunas de arena blanca',
        'Paisajes naturales',
        'Baño en la laguna',
      ],
    },
    fr: {
      name: 'Lagon Bleu',
      shortDescription:
        'L’une des lagunes les plus connues des Lençóis Maranhenses.',
      description:
        'Découvrez le Lagon Bleu et ses eaux entourées de grandes dunes de sable blanc, dans l’un des paysages les plus emblématiques des Lençóis Maranhenses.',
      imageAlt:
        'Lagon Bleu entouré de dunes blanches aux Lençóis Maranhenses',
      priceInfo: 'par personne',
      duration: 'Environ 4 heures',
      schedule: 'De 8h30 à 12h30',
      highlights: [
        'Lagon Bleu',
        'Dunes de sable blanc',
        'Paysages naturels',
        'Baignade dans le lagon',
      ],
    },
    it: {
      name: 'Laguna Blu',
      shortDescription:
        'Una delle lagune più conosciute dei Lençóis Maranhenses.',
      description:
        'Scopri la Laguna Blu e le sue acque circondate da grandi dune di sabbia bianca, in uno dei paesaggi più iconici dei Lençóis Maranhenses.',
      imageAlt:
        'Laguna Blu circondata da dune bianche nei Lençóis Maranhenses',
      priceInfo: 'a persona',
      duration: 'Circa 4 ore',
      schedule: 'Dalle 8:30 alle 12:30',
      highlights: [
        'Laguna Blu',
        'Dune di sabbia bianca',
        'Paesaggi naturali',
        'Bagno nella laguna',
      ],
    },
    zh: {
      name: '蓝湖',
      shortDescription:
        'Lençóis Maranhenses 最著名的湖泊之一。',
      description:
        '探索蓝湖，在高耸的白色沙丘环绕下欣赏清澈湖水，感受 Lençóis Maranhenses 最具代表性的自然景观之一。',
      imageAlt:
        'Lençóis Maranhenses 白色沙丘环绕的蓝湖',
      priceInfo: '每人',
      duration: '约 4 小时',
      schedule: '8:30 至 12:30',
      highlights: [
        '蓝湖',
        '白色沙丘',
        '自然景观',
        '湖中游泳',
      ],
    },
    ja: {
      name: 'ブルーラグーン',
      shortDescription:
        'レンソイス・マラニャンセスを代表するラグーンの一つです。',
      description:
        '白い砂丘に囲まれた美しいブルーラグーンを訪れ、レンソイス・マラニャンセスを象徴する景観を楽しみます。',
      imageAlt:
        'レンソイス・マラニャンセスの白い砂丘に囲まれたブルーラグーン',
      priceInfo: '1名あたり',
      duration: '約4時間',
      schedule: '8:30〜12:30',
      highlights: [
        'ブルーラグーン',
        '白い砂丘',
        '自然の景観',
        'ラグーンでの遊泳',
      ],
    },
  },

  'lagoa-bonita': {
    pt: {
      name: 'Lagoa Bonita',
      shortDescription:
        'Dunas impressionantes e uma das vistas mais bonitas dos Lençóis.',
      description:
        'Visite a Lagoa Bonita e contemple as dunas e lagoas do alto, em uma experiência especial durante a tarde nos Lençóis Maranhenses.',
      imageAlt:
        'Lagoa Bonita e dunas dos Lençóis Maranhenses',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 6 horas',
      schedule: '13h30 às 19h30',
      highlights: [
        'Lagoa Bonita',
        'Dunas panorâmicas',
        'Pôr do sol',
        'Paisagens dos Lençóis',
      ],
    },
    en: {
      name: 'Beautiful Lagoon',
      shortDescription:
        'Impressive dunes and one of the most beautiful views in Lençóis.',
      description:
        'Visit Beautiful Lagoon and admire the dunes and lagoons from above during a special afternoon experience in Lençóis Maranhenses.',
      imageAlt:
        'Beautiful Lagoon and dunes in Lençóis Maranhenses',
      priceInfo: 'per person',
      duration: 'Approximately 6 hours',
      schedule: '1:30 PM to 7:30 PM',
      highlights: [
        'Beautiful Lagoon',
        'Panoramic dunes',
        'Sunset',
        'Lençóis landscapes',
      ],
    },
    es: {
      name: 'Laguna Bonita',
      shortDescription:
        'Dunas impresionantes y una de las vistas más bonitas de los Lençóis.',
      description:
        'Visita la Laguna Bonita y contempla las dunas y lagunas desde lo alto durante una experiencia especial por la tarde en los Lençóis Maranhenses.',
      imageAlt:
        'Laguna Bonita y dunas de los Lençóis Maranhenses',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 6 horas',
      schedule: '13:30 a 19:30',
      highlights: [
        'Laguna Bonita',
        'Dunas panorámicas',
        'Atardecer',
        'Paisajes de los Lençóis',
      ],
    },
    fr: {
      name: 'Lagon Bonita',
      shortDescription:
        'Des dunes impressionnantes et l’une des plus belles vues des Lençóis.',
      description:
        'Visitez le Lagon Bonita et admirez les dunes et les lagunes depuis les hauteurs lors d’une expérience spéciale l’après-midi aux Lençóis Maranhenses.',
      imageAlt:
        'Lagon Bonita et dunes des Lençóis Maranhenses',
      priceInfo: 'par personne',
      duration: 'Environ 6 heures',
      schedule: 'De 13h30 à 19h30',
      highlights: [
        'Lagon Bonita',
        'Dunes panoramiques',
        'Coucher de soleil',
        'Paysages des Lençóis',
      ],
    },
    it: {
      name: 'Laguna Bonita',
      shortDescription:
        'Dune spettacolari e una delle viste più belle dei Lençóis.',
      description:
        'Visita la Laguna Bonita e ammira dall’alto dune e lagune durante una speciale esperienza pomeridiana nei Lençóis Maranhenses.',
      imageAlt:
        'Laguna Bonita e dune dei Lençóis Maranhenses',
      priceInfo: 'a persona',
      duration: 'Circa 6 ore',
      schedule: 'Dalle 13:30 alle 19:30',
      highlights: [
        'Laguna Bonita',
        'Dune panoramiche',
        'Tramonto',
        'Paesaggi dei Lençóis',
      ],
    },
    zh: {
      name: '美丽湖',
      shortDescription:
        '壮观的沙丘，以及 Lençóis 最美丽的景色之一。',
      description:
        '参观美丽湖，从高处欣赏沙丘和湖泊，在下午的特别体验中感受 Lençóis Maranhenses 的壮丽景观。',
      imageAlt:
        'Lençóis Maranhenses 的美丽湖和沙丘',
      priceInfo: '每人',
      duration: '约 6 小时',
      schedule: '13:30 至 19:30',
      highlights: [
        '美丽湖',
        '全景沙丘',
        '日落',
        'Lençóis 自然景观',
      ],
    },
    ja: {
      name: 'ボニータ・ラグーン',
      shortDescription:
        '壮大な砂丘と、レンソイスを代表する美しい景色を楽しめます。',
      description:
        'ボニータ・ラグーンを訪れ、高台から砂丘とラグーンを眺めながら、午後の特別な体験を楽しみます。',
      imageAlt:
        'レンソイス・マラニャンセスのボニータ・ラグーンと砂丘',
      priceInfo: '1名あたり',
      duration: '約6時間',
      schedule: '13:30〜19:30',
      highlights: [
        'ボニータ・ラグーン',
        'パノラマの砂丘',
        '夕日',
        'レンソイスの景観',
      ],
    },
  },

  cardosa: {
    pt: {
      name: 'Cardosa',
      shortDescription:
        'Um passeio tranquilo para conhecer as belezas naturais da região.',
      description:
        'Descubra Cardosa em uma experiência cercada pela natureza, com paisagens tranquilas e contato com os cenários naturais do Maranhão.',
      imageAlt:
        'Paisagem natural da região de Cardosa, Maranhão',
      priceInfo: 'por pessoa',
      duration: 'Duração conforme roteiro',
      schedule: 'Saída conforme programação',
      highlights: [
        'Natureza',
        'Paisagens tranquilas',
        'Experiência regional',
        'Contato com a natureza',
      ],
    },
    en: {
      name: 'Cardosa',
      shortDescription:
        'A peaceful tour to discover the natural beauty of the region.',
      description:
        'Discover Cardosa in an experience surrounded by nature, peaceful landscapes and the natural scenery of Maranhão.',
      imageAlt:
        'Natural landscape in the Cardosa region, Maranhão',
      priceInfo: 'per person',
      duration: 'Duration according to itinerary',
      schedule: 'Departure according to schedule',
      highlights: [
        'Nature',
        'Peaceful landscapes',
        'Regional experience',
        'Connection with nature',
      ],
    },
    es: {
      name: 'Cardosa',
      shortDescription:
        'Un paseo tranquilo para conocer las bellezas naturales de la región.',
      description:
        'Descubre Cardosa en una experiencia rodeada de naturaleza, paisajes tranquilos y escenarios naturales de Maranhão.',
      imageAlt:
        'Paisaje natural de la región de Cardosa, Maranhão',
      priceInfo: 'por persona',
      duration: 'Duración según el itinerario',
      schedule: 'Salida según la programación',
      highlights: [
        'Naturaleza',
        'Paisajes tranquilos',
        'Experiencia regional',
        'Contacto con la naturaleza',
      ],
    },
    fr: {
      name: 'Cardosa',
      shortDescription:
        'Une excursion paisible pour découvrir les beautés naturelles de la région.',
      description:
        'Découvrez Cardosa dans une expérience entourée de nature, de paysages paisibles et des décors naturels du Maranhão.',
      imageAlt:
        'Paysage naturel de la région de Cardosa, Maranhão',
      priceInfo: 'par personne',
      duration: 'Durée selon l’itinéraire',
      schedule: 'Départ selon le programme',
      highlights: [
        'Nature',
        'Paysages paisibles',
        'Expérience régionale',
        'Contact avec la nature',
      ],
    },
    it: {
      name: 'Cardosa',
      shortDescription:
        'Un’escursione tranquilla per scoprire le bellezze naturali della regione.',
      description:
        'Scopri Cardosa in un’esperienza immersa nella natura, tra paesaggi tranquilli e gli scenari naturali del Maranhão.',
      imageAlt:
        'Paesaggio naturale della regione di Cardosa, Maranhão',
      priceInfo: 'a persona',
      duration: 'Durata secondo l’itinerario',
      schedule: 'Partenza secondo il programma',
      highlights: [
        'Natura',
        'Paesaggi tranquilli',
        'Esperienza regionale',
        'Contatto con la natura',
      ],
    },
    zh: {
      name: '卡多萨',
      shortDescription:
        '轻松惬意的旅程，探索当地自然之美。',
      description:
        '在自然环绕的环境中探索卡多萨，欣赏宁静的景观和马拉尼昂州独特的自然风光。',
      imageAlt:
        '巴西马拉尼昂州卡多萨地区的自然景观',
      priceInfo: '每人',
      duration: '根据行程安排',
      schedule: '根据行程安排出发',
      highlights: [
        '自然风光',
        '宁静景观',
        '当地体验',
        '亲近自然',
      ],
    },
    ja: {
      name: 'カルドーザ',
      shortDescription:
        '地域の美しい自然をゆったりと楽しむツアーです。',
      description:
        '自然に囲まれたカルドーザを訪れ、穏やかな景観とマラニョン州ならではの自然を楽しみます。',
      imageAlt:
        'ブラジル・マラニョン州カルドーザ地域の自然景観',
      priceInfo: '1名あたり',
      duration: '行程により異なります',
      schedule: '行程に応じて出発',
      highlights: [
        '自然',
        '穏やかな景観',
        '地域ならではの体験',
        '自然とのふれあい',
      ],
    },
  },

  'santo-amaro': {
    pt: {
      name: 'Santo Amaro',
      shortDescription:
        'Conheça uma das regiões mais preservadas dos Lençóis Maranhenses.',
      description:
        'Explore Santo Amaro e suas paisagens naturais, com dunas e lagoas que revelam uma das regiões mais especiais dos Lençóis Maranhenses.',
      imageAlt:
        'Dunas e lagoas de Santo Amaro nos Lençóis Maranhenses',
      priceInfo: 'por pessoa',
      duration: 'Aproximadamente 11 horas',
      schedule: 'Saída conforme programação',
      highlights: [
        'Santo Amaro',
        'Dunas e lagoas',
        'Paisagens preservadas',
        'Dia completo de passeio',
      ],
    },
    en: {
      name: 'Santo Amaro',
      shortDescription:
        'Discover one of the most preserved areas of Lençóis Maranhenses.',
      description:
        'Explore Santo Amaro and its natural landscapes, with dunes and lagoons revealing one of the most special areas of Lençóis Maranhenses.',
      imageAlt:
        'Dunes and lagoons of Santo Amaro in Lençóis Maranhenses',
      priceInfo: 'per person',
      duration: 'Approximately 11 hours',
      schedule: 'Departure according to schedule',
      highlights: [
        'Santo Amaro',
        'Dunes and lagoons',
        'Preserved landscapes',
        'Full-day tour',
      ],
    },
    es: {
      name: 'Santo Amaro',
      shortDescription:
        'Descubre una de las regiones mejor conservadas de los Lençóis Maranhenses.',
      description:
        'Explora Santo Amaro y sus paisajes naturales, con dunas y lagunas que revelan una de las zonas más especiales de los Lençóis Maranhenses.',
      imageAlt:
        'Dunas y lagunas de Santo Amaro en los Lençóis Maranhenses',
      priceInfo: 'por persona',
      duration: 'Aproximadamente 11 horas',
      schedule: 'Salida según la programación',
      highlights: [
        'Santo Amaro',
        'Dunas y lagunas',
        'Paisajes conservados',
        'Paseo de día completo',
      ],
    },
    fr: {
      name: 'Santo Amaro',
      shortDescription:
        'Découvrez l’une des régions les mieux préservées des Lençóis Maranhenses.',
      description:
        'Explorez Santo Amaro et ses paysages naturels, avec des dunes et des lagunes qui révèlent l’une des régions les plus remarquables des Lençóis Maranhenses.',
      imageAlt:
        'Dunes et lagunes de Santo Amaro aux Lençóis Maranhenses',
      priceInfo: 'par personne',
      duration: 'Environ 11 heures',
      schedule: 'Départ selon le programme',
      highlights: [
        'Santo Amaro',
        'Dunes et lagunes',
        'Paysages préservés',
        'Excursion d’une journée complète',
      ],
    },
    it: {
      name: 'Santo Amaro',
      shortDescription:
        'Scopri una delle zone meglio conservate dei Lençóis Maranhenses.',
      description:
        'Esplora Santo Amaro e i suoi paesaggi naturali, tra dune e lagune che caratterizzano una delle aree più speciali dei Lençóis Maranhenses.',
      imageAlt:
        'Dune e lagune di Santo Amaro nei Lençóis Maranhenses',
      priceInfo: 'a persona',
      duration: 'Circa 11 ore',
      schedule: 'Partenza secondo il programma',
      highlights: [
        'Santo Amaro',
        'Dune e lagune',
        'Paesaggi incontaminati',
        'Escursione di una giornata intera',
      ],
    },
    zh: {
      name: '圣阿马罗',
      shortDescription:
        '探索 Lençóis Maranhenses 保存最完好的地区之一。',
      description:
        '探索圣阿马罗的自然景观，在沙丘和湖泊之间感受 Lençóis Maranhenses 最特别的地区之一。',
      imageAlt:
        'Lençóis Maranhenses 圣阿马罗的沙丘和湖泊',
      priceInfo: '每人',
      duration: '约 11 小时',
      schedule: '根据行程安排出发',
      highlights: [
        '圣阿马罗',
        '沙丘与湖泊',
        '保存完好的自然景观',
        '完整一日游',
      ],
    },
    ja: {
      name: 'サント・アマロ',
      shortDescription:
        'レンソイス・マラニャンセスの中でも自然がよく残る地域を訪れます。',
      description:
        'サント・アマロを訪れ、砂丘とラグーンが広がるレンソイス・マラニャンセスの特別な自然を一日かけて楽しみます。',
      imageAlt:
        'レンソイス・マラニャンセスのサント・アマロにある砂丘とラグーン',
      priceInfo: '1名あたり',
      duration: '約11時間',
      schedule: '行程に応じて出発',
      highlights: [
        'サント・アマロ',
        '砂丘とラグーン',
        '自然が残る景観',
        '一日ツアー',
      ],
    },
  },

  cabure: {
    pt: {
      name: 'Caburé',
      shortDescription:
        'Uma experiência entre rio, dunas e mar em um único passeio.',
      description:
        'Conheça Caburé e aproveite uma experiência que combina diferentes paisagens naturais, entre dunas, rio e mar.',
      imageAlt:
        'Paisagens de Caburé entre dunas, rio e mar',
      priceInfo: 'por pessoa',
      duration: 'Duração conforme roteiro',
      schedule: 'Saída conforme programação',
      highlights: [
        'Caburé',
        'Dunas',
        'Rio',
        'Mar',
        'Almoço não incluso',
      ],
    },
    en: {
      name: 'Caburé',
      shortDescription:
        'An experience combining river, dunes and sea in one tour.',
      description:
        'Discover Caburé and enjoy an experience that combines different natural landscapes, from dunes and river to the sea.',
      imageAlt:
        'Caburé landscapes between dunes, river and sea',
      priceInfo: 'per person',
      duration: 'Duration according to itinerary',
      schedule: 'Departure according to schedule',
      highlights: [
        'Caburé',
        'Dunes',
        'River',
        'Sea',
        'Lunch not included',
      ],
    },
    es: {
      name: 'Caburé',
      shortDescription:
        'Una experiencia que combina río, dunas y mar en un solo paseo.',
      description:
        'Descubre Caburé y disfruta de una experiencia que combina diferentes paisajes naturales, entre dunas, río y mar.',
      imageAlt:
        'Paisajes de Caburé entre dunas, río y mar',
      priceInfo: 'por persona',
      duration: 'Duración según el itinerario',
      schedule: 'Salida según la programación',
      highlights: [
        'Caburé',
        'Dunas',
        'Río',
        'Mar',
        'Almuerzo no incluido',
      ],
    },
    fr: {
      name: 'Caburé',
      shortDescription:
        'Une expérience entre rivière, dunes et mer en une seule excursion.',
      description:
        'Découvrez Caburé et profitez d’une expérience réunissant différents paysages naturels, entre dunes, rivière et mer.',
      imageAlt:
        'Paysages de Caburé entre dunes, rivière et mer',
      priceInfo: 'par personne',
      duration: 'Durée selon l’itinéraire',
      schedule: 'Départ selon le programme',
      highlights: [
        'Caburé',
        'Dunes',
        'Rivière',
        'Mer',
        'Déjeuner non inclus',
      ],
    },
    it: {
      name: 'Caburé',
      shortDescription:
        'Un’esperienza che unisce fiume, dune e mare in un unico tour.',
      description:
        'Scopri Caburé e vivi un’esperienza che combina diversi paesaggi naturali, tra dune, fiume e mare.',
      imageAlt:
        'Paesaggi di Caburé tra dune, fiume e mare',
      priceInfo: 'a persona',
      duration: 'Durata secondo l’itinerario',
      schedule: 'Partenza secondo il programma',
      highlights: [
        'Caburé',
        'Dune',
        'Fiume',
        'Mare',
        'Pranzo non incluso',
      ],
    },
    zh: {
      name: '卡布雷',
      shortDescription:
        '一次体验河流、沙丘与大海的多样景观。',
      description:
        '探索卡布雷，在一次旅程中欣赏沙丘、河流和大海等不同的自然景观。',
      imageAlt:
        '卡布雷的沙丘、河流和海洋景观',
      priceInfo: '每人',
      duration: '根据行程安排',
      schedule: '根据行程安排出发',
      highlights: [
        '卡布雷',
        '沙丘',
        '河流',
        '大海',
        '不含午餐',
      ],
    },
    ja: {
      name: 'カブレ',
      shortDescription:
        '川、砂丘、海を一度に楽しめる多彩なツアーです。',
      description:
        'カブレを訪れ、砂丘、川、海という異なる自然景観を一度に楽しむことができます。',
      imageAlt:
        '砂丘、川、海が広がるカブレの景観',
      priceInfo: '1名あたり',
      duration: '行程により異なります',
      schedule: '行程に応じて出発',
      highlights: [
        'カブレ',
        '砂丘',
        '川',
        '海',
        '昼食は含まれません',
      ],
    },
  },

  'duas-lagoas': {
    pt: {
      name: 'Duas Lagoas',
      shortDescription:
        'Uma experiência para conhecer duas belas lagoas dos Lençóis.',
      description:
        'Explore duas lagoas em uma experiência especial pelos Lençóis Maranhenses, cercada por dunas e paisagens naturais.',
      imageAlt:
        'Lagoas e dunas dos Lençóis Maranhenses',
      priceInfo: 'por pessoa',
      duration: 'Duração conforme roteiro',
      schedule: 'Saída conforme programação',
      highlights: [
        'Duas lagoas',
        'Dunas',
        'Paisagens naturais',
        'Banho nas lagoas',
      ],
    },
    en: {
      name: 'Two Lagoons',
      shortDescription:
        'An experience to discover two beautiful lagoons in Lençóis.',
      description:
        'Explore two lagoons on a special experience through Lençóis Maranhenses, surrounded by dunes and natural landscapes.',
      imageAlt:
        'Lagoons and dunes of Lençóis Maranhenses',
      priceInfo: 'per person',
      duration: 'Duration according to itinerary',
      schedule: 'Departure according to schedule',
      highlights: [
        'Two lagoons',
        'Dunes',
        'Natural landscapes',
        'Swimming in the lagoons',
      ],
    },
    es: {
      name: 'Dos Lagunas',
      shortDescription:
        'Una experiencia para conocer dos hermosas lagunas de los Lençóis.',
      description:
        'Explora dos lagunas en una experiencia especial por los Lençóis Maranhenses, rodeado de dunas y paisajes naturales.',
      imageAlt:
        'Lagunas y dunas de los Lençóis Maranhenses',
      priceInfo: 'por persona',
      duration: 'Duración según el itinerario',
      schedule: 'Salida según la programación',
      highlights: [
        'Dos lagunas',
        'Dunas',
        'Paisajes naturales',
        'Baño en las lagunas',
      ],
    },
    fr: {
      name: 'Deux Lagunes',
      shortDescription:
        'Une expérience pour découvrir deux magnifiques lagunes des Lençóis.',
      description:
        'Explorez deux lagunes lors d’une expérience spéciale dans les Lençóis Maranhenses, entourée de dunes et de paysages naturels.',
      imageAlt:
        'Lagunes et dunes des Lençóis Maranhenses',
      priceInfo: 'par personne',
      duration: 'Durée selon l’itinéraire',
      schedule: 'Départ selon le programme',
      highlights: [
        'Deux lagunes',
        'Dunes',
        'Paysages naturels',
        'Baignade dans les lagunes',
      ],
    },
    it: {
      name: 'Due Lagune',
      shortDescription:
        'Un’esperienza per scoprire due splendide lagune dei Lençóis.',
      description:
        'Esplora due lagune in un’esperienza speciale nei Lençóis Maranhenses, circondata da dune e paesaggi naturali.',
      imageAlt:
        'Lagune e dune dei Lençóis Maranhenses',
      priceInfo: 'a persona',
      duration: 'Durata secondo l’itinerario',
      schedule: 'Partenza secondo il programma',
      highlights: [
        'Due lagune',
        'Dune',
        'Paesaggi naturali',
        'Bagno nelle lagune',
      ],
    },
    zh: {
      name: '双湖',
      shortDescription:
        '一次探索 Lençóis 两个美丽湖泊的特别体验。',
      description:
        '在沙丘和自然景观环绕中探索两个湖泊，感受 Lençóis Maranhenses 的独特魅力。',
      imageAlt:
        'Lençóis Maranhenses 的湖泊和沙丘',
      priceInfo: '每人',
      duration: '根据行程安排',
      schedule: '根据行程安排出发',
      highlights: [
        '两个湖泊',
        '沙丘',
        '自然景观',
        '湖中游泳',
      ],
    },
    ja: {
      name: '2つのラグーン',
      shortDescription:
        'レンソイスの美しい2つのラグーンを巡る体験です。',
      description:
        '砂丘と自然の景観に囲まれながら、レンソイス・マラニャンセスの2つのラグーンを訪れます。',
      imageAlt:
        'レンソイス・マラニャンセスのラグーンと砂丘',
      priceInfo: '1名あたり',
      duration: '行程により異なります',
      schedule: '行程に応じて出発',
      highlights: [
        '2つのラグーン',
        '砂丘',
        '自然の景観',
        'ラグーンでの遊泳',
      ],
    },
  },

  'pequenos-lencois-quadriciclo': {
    pt: {
      name: 'Pequenos Lençóis de Quadriciclo',
      shortDescription:
        'Aventura pelos Pequenos Lençóis a bordo de quadriciclo.',
      description:
        'Explore os Pequenos Lençóis de quadriciclo e descubra paisagens de dunas e natureza de uma forma mais aventureira.',
      imageAlt:
        'Quadriciclo percorrendo as dunas dos Pequenos Lençóis',
      priceInfo: 'por pessoa',
      duration: 'Duração conforme roteiro',
      schedule: 'Saída conforme programação',
      highlights: [
        'Pequenos Lençóis',
        'Passeio de quadriciclo',
        'Dunas',
        'Experiência de aventura',
        'Cada quadriciclo comporta até 2 pessoas',
      ],
    },
    en: {
      name: 'Small Lençóis by ATV',
      shortDescription:
        'An adventure through Pequenos Lençóis aboard an ATV.',
      description:
        'Explore Pequenos Lençóis by ATV and discover dunes and natural landscapes in a more adventurous way.',
      imageAlt:
        'ATV riding through the dunes of Pequenos Lençóis',
      priceInfo: 'per person',
      duration: 'Duration according to itinerary',
      schedule: 'Departure according to schedule',
      highlights: [
        'Pequenos Lençóis',
        'ATV tour',
        'Dunes',
        'Adventure experience',
        'Each ATV accommodates up to 2 people',
      ],
    },
    es: {
      name: 'Pequeños Lençóis en Quadriciclo',
      shortDescription:
        'Una aventura por los Pequeños Lençóis a bordo de un quad.',
      description:
        'Explora los Pequeños Lençóis en quad y descubre dunas y paisajes naturales de una forma más aventurera.',
      imageAlt:
        'Quad recorriendo las dunas de los Pequeños Lençóis',
      priceInfo: 'por persona',
      duration: 'Duración según el itinerario',
      schedule: 'Salida según la programación',
      highlights: [
        'Pequeños Lençóis',
        'Paseo en quad',
        'Dunas',
        'Experiencia de aventura',
        'Cada quad tiene capacidad para hasta 2 personas',
      ],
    },
    fr: {
      name: 'Petits Lençóis en Quad',
      shortDescription:
        'Une aventure à travers les Petits Lençóis en quad.',
      description:
        'Explorez les Petits Lençóis en quad et découvrez les dunes et les paysages naturels d’une manière plus aventureuse.',
      imageAlt:
        'Quad parcourant les dunes des Petits Lençóis',
      priceInfo: 'par personne',
      duration: 'Durée selon l’itinéraire',
      schedule: 'Départ selon le programme',
      highlights: [
        'Petits Lençóis',
        'Excursion en quad',
        'Dunes',
        'Expérience aventureuse',
        'Chaque quad peut accueillir jusqu’à 2 personnes',
      ],
    },
    it: {
      name: 'Piccoli Lençóis in Quad',
      shortDescription:
        'Un’avventura attraverso i Piccoli Lençóis a bordo di un quad.',
      description:
        'Esplora i Piccoli Lençóis in quad e scopri dune e paesaggi naturali in modo più avventuroso.',
      imageAlt:
        'Quad che attraversa le dune dei Piccoli Lençóis',
      priceInfo: 'a persona',
      duration: 'Durata secondo l’itinerario',
      schedule: 'Partenza secondo il programma',
      highlights: [
        'Piccoli Lençóis',
        'Tour in quad',
        'Dune',
        'Esperienza avventurosa',
        'Ogni quad può ospitare fino a 2 persone',
      ],
    },
    zh: {
      name: '小伦索伊斯沙丘四轮摩托',
      shortDescription:
        '驾驶四轮摩托探索小伦索伊斯的沙丘。',
      description:
        '乘坐四轮摩托探索小伦索伊斯，在更具冒险感的体验中欣赏沙丘和自然景观。',
      imageAlt:
        '四轮摩托穿越小伦索伊斯沙丘',
      priceInfo: '每人',
      duration: '根据行程安排',
      schedule: '根据行程安排出发',
      highlights: [
        '小伦索伊斯',
        '四轮摩托体验',
        '沙丘',
        '冒险体验',
        '每辆四轮摩托最多可乘坐 2 人',
      ],
    },
    ja: {
      name: '小レンソイス・ATVツアー',
      shortDescription:
        'ATVに乗って小レンソイスの砂丘を冒険するツアーです。',
      description:
        'ATVで小レンソイスを巡り、砂丘や自然の景観をよりアクティブに楽しみます。',
      imageAlt:
        '小レンソイスの砂丘を走るATV',
      priceInfo: '1名あたり',
      duration: '行程により異なります',
      schedule: '行程に応じて出発',
      highlights: [
        '小レンソイス',
        'ATVツアー',
        '砂丘',
        'アドベンチャー体験',
        '1台につき最大2名まで',
      ],
    },
  },

  'mirar-das-estrelas': {
    pt: {
      name: 'Mirar das Estrelas',
      shortDescription:
        'Uma experiência privativa para contemplar o céu dos Lençóis.',
      description:
        'Viva uma experiência privativa sob o céu dos Lençóis Maranhenses, com uma atmosfera especial para contemplar as estrelas e aproveitar a noite.',
      imageAlt:
        'Céu estrelado sobre os Lençóis Maranhenses',
      priceInfo: 'para até 9 pessoas',
      duration: 'Duração conforme programação',
      schedule: 'Horário conforme programação',
      highlights: [
        'Experiência privativa',
        'Céu dos Lençóis',
        'Observação das estrelas',
        'Experiência noturna',
        'Para até 9 pessoas',
      ],
    },
    en: {
      name: 'Stargazing Experience',
      shortDescription:
        'A private experience to admire the night sky over Lençóis.',
      description:
        'Enjoy a private experience under the sky of Lençóis Maranhenses, with a special atmosphere for stargazing and enjoying the night.',
      imageAlt:
        'Starry sky over Lençóis Maranhenses',
      priceInfo: 'for up to 9 people',
      duration: 'Duration according to schedule',
      schedule: 'Time according to schedule',
      highlights: [
        'Private experience',
        'Lençóis night sky',
        'Stargazing',
        'Nighttime experience',
        'For up to 9 people',
      ],
    },
    es: {
      name: 'Experiencia de Estrellas',
      shortDescription:
        'Una experiencia privada para contemplar el cielo de los Lençóis.',
      description:
        'Vive una experiencia privada bajo el cielo de los Lençóis Maranhenses, con un ambiente especial para contemplar las estrellas y disfrutar de la noche.',
      imageAlt:
        'Cielo estrellado sobre los Lençóis Maranhenses',
      priceInfo: 'para hasta 9 personas',
      duration: 'Duración según la programación',
      schedule: 'Horario según la programación',
      highlights: [
        'Experiencia privada',
        'Cielo de los Lençóis',
        'Observación de estrellas',
        'Experiencia nocturna',
        'Para hasta 9 personas',
      ],
    },
    fr: {
      name: 'Expérience sous les Étoiles',
      shortDescription:
        'Une expérience privée pour admirer le ciel des Lençóis.',
      description:
        'Vivez une expérience privée sous le ciel des Lençóis Maranhenses, dans une atmosphère spéciale pour observer les étoiles et profiter de la nuit.',
      imageAlt:
        'Ciel étoilé au-dessus des Lençóis Maranhenses',
      priceInfo: 'pour jusqu’à 9 personnes',
      duration: 'Durée selon le programme',
      schedule: 'Horaire selon le programme',
      highlights: [
        'Expérience privée',
        'Ciel des Lençóis',
        'Observation des étoiles',
        'Expérience nocturne',
        'Pour jusqu’à 9 personnes',
      ],
    },
    it: {
      name: 'Esperienza sotto le Stelle',
      shortDescription:
        'Un’esperienza privata per ammirare il cielo dei Lençóis.',
      description:
        'Vivi un’esperienza privata sotto il cielo dei Lençóis Maranhenses, in un’atmosfera speciale per osservare le stelle e goderti la notte.',
      imageAlt:
        'Cielo stellato sopra i Lençóis Maranhenses',
      priceInfo: 'fino a 9 persone',
      duration: 'Durata secondo il programma',
      schedule: 'Orario secondo il programma',
      highlights: [
        'Esperienza privata',
        'Cielo dei Lençóis',
        'Osservazione delle stelle',
        'Esperienza notturna',
        'Fino a 9 persone',
      ],
    },
    zh: {
      name: '星空体验',
      shortDescription:
        '私人夜间体验，在伦索伊斯欣赏壮丽星空。',
      description:
        '在 Lençóis Maranhenses 的夜空下享受私人体验，在特别的氛围中观赏星星，感受沙丘地区宁静的夜晚。',
      imageAlt:
        'Lençóis Maranhenses 上空的星空',
      priceInfo: '最多 9 人',
      duration: '根据行程安排',
      schedule: '根据行程安排时间',
      highlights: [
        '私人体验',
        '伦索伊斯星空',
        '观赏星星',
        '夜间体验',
        '最多 9 人',
      ],
    },
    ja: {
      name: '星空体験',
      shortDescription:
        'レンソイスの夜空を眺めるプライベート体験です。',
      description:
        'レンソイス・マラニャンセスの夜空の下で、星を眺めながら特別な夜の時間を楽しむプライベート体験です。',
      imageAlt:
        'レンソイス・マラニャンセスに広がる星空',
      priceInfo: '最大9名',
      duration: '行程に応じて設定',
      schedule: '行程に応じて設定',
      highlights: [
        'プライベート体験',
        'レンソイスの星空',
        '星空観賞',
        '夜の体験',
        '最大9名',
      ],
    },
  },

  'cafe-da-manha-nos-lencois': {
    pt: {
      name: 'Café da Manhã nos Lençóis',
      shortDescription:
        'Um café da manhã especial em meio às dunas e lagoas.',
      description:
        'Comece o dia de uma forma inesquecível com um café da manhã privativo em meio à paisagem dos Lençóis Maranhenses.',
      imageAlt:
        'Café da manhã entre as dunas dos Lençóis Maranhenses',
      priceInfo: 'para até 9 pessoas',
      duration: 'Duração conforme programação',
      schedule: 'Horário conforme programação',
      highlights: [
        'Experiência privativa',
        'Café da manhã',
        'Dunas e lagoas',
        'Paisagem exclusiva',
        'Para até 9 pessoas',
      ],
    },
    en: {
      name: 'Breakfast in Lençóis',
      shortDescription:
        'A special breakfast surrounded by dunes and lagoons.',
      description:
        'Start your day in an unforgettable way with a private breakfast surrounded by the landscapes of Lençóis Maranhenses.',
      imageAlt:
        'Breakfast among the dunes of Lençóis Maranhenses',
      priceInfo: 'for up to 9 people',
      duration: 'Duration according to schedule',
      schedule: 'Time according to schedule',
      highlights: [
        'Private experience',
        'Breakfast',
        'Dunes and lagoons',
        'Exclusive setting',
        'For up to 9 people',
      ],
    },
    es: {
      name: 'Desayuno en los Lençóis',
      shortDescription:
        'Un desayuno especial entre dunas y lagunas.',
      description:
        'Comienza el día de una manera inolvidable con un desayuno privado rodeado por los paisajes de los Lençóis Maranhenses.',
      imageAlt:
        'Desayuno entre las dunas de los Lençóis Maranhenses',
      priceInfo: 'para hasta 9 personas',
      duration: 'Duración según la programación',
      schedule: 'Horario según la programación',
      highlights: [
        'Experiencia privada',
        'Desayuno',
        'Dunas y lagunas',
        'Entorno exclusivo',
        'Para hasta 9 personas',
      ],
    },
    fr: {
      name: 'Petit-déjeuner dans les Lençóis',
      shortDescription:
        'Un petit-déjeuner spécial au milieu des dunes et des lagunes.',
      description:
        'Commencez la journée de manière inoubliable avec un petit-déjeuner privé au cœur des paysages des Lençóis Maranhenses.',
      imageAlt:
        'Petit-déjeuner au milieu des dunes des Lençóis Maranhenses',
      priceInfo: 'pour jusqu’à 9 personnes',
      duration: 'Durée selon le programme',
      schedule: 'Horaire selon le programme',
      highlights: [
        'Expérience privée',
        'Petit-déjeuner',
        'Dunes et lagunes',
        'Cadre exclusif',
        'Pour jusqu’à 9 personnes',
      ],
    },
    it: {
      name: 'Colazione nei Lençóis',
      shortDescription:
        'Una colazione speciale tra dune e lagune.',
      description:
        'Inizia la giornata in modo indimenticabile con una colazione privata immersa nei paesaggi dei Lençóis Maranhenses.',
      imageAlt:
        'Colazione tra le dune dei Lençóis Maranhenses',
      priceInfo: 'fino a 9 persone',
      duration: 'Durata secondo il programma',
      schedule: 'Orario secondo il programma',
      highlights: [
        'Esperienza privata',
        'Colazione',
        'Dune e lagune',
        'Scenario esclusivo',
        'Fino a 9 persone',
      ],
    },
    zh: {
      name: '伦索伊斯沙丘早餐',
      shortDescription:
        '在沙丘与湖泊之间享用特别的早餐。',
      description:
        '在 Lençóis Maranhenses 壮丽的自然景观中享用私人早餐，以难忘的方式开启新的一天。',
      imageAlt:
        'Lençóis Maranhenses 沙丘间的早餐',
      priceInfo: '最多 9 人',
      duration: '根据行程安排',
      schedule: '根据行程安排时间',
      highlights: [
        '私人体验',
        '早餐',
        '沙丘与湖泊',
        '独特环境',
        '最多 9 人',
      ],
    },
    ja: {
      name: 'レンソイスで朝食',
      shortDescription:
        '砂丘とラグーンに囲まれて楽しむ特別な朝食体験です。',
      description:
        'レンソイス・マラニャンセスの美しい自然の中で、プライベートな朝食を楽しみ、忘れられない一日を始めます。',
      imageAlt:
        'レンソイス・マラニャンセスの砂丘で楽しむ朝食',
      priceInfo: '最大9名',
      duration: '行程に応じて設定',
      schedule: '行程に応じて設定',
      highlights: [
        'プライベート体験',
        '朝食',
        '砂丘とラグーン',
        '特別なロケーション',
        '最大9名',
      ],
    },
  },
}

export function getTourTranslation(
  slug: string,
  locale: Locale,
): LocalizedTourContent | null {
  return (
    tourTranslations[slug]?.[locale] ||
    tourTranslations[slug]?.pt ||
    null
  )
}
