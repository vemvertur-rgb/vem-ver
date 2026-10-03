import type { Locale } from '@/lib/i18n'

export type Translation = {
  nav: {
    home: string
    about: string
    tours: string
    private: string
    contact: string
    howItWorks: string
    faq: string
    gallery: string
  }

  common: {
    whatsapp: string
    seeDetails: string
    specialOffer: string
    specialCondition: string
    consult: string
    backToTours: string
    moreExperiences: string
    otherTours: string
    duration: string
    value: string
    schedule: string
    highlights: string
  }

  hero: {
    eyebrow: string
    title: string
    description: string
    toursButton: string
    whatsappButton: string
  }

  sections: {
    about: string
    tours: string
    private: string
    contact: string
    howItWorks: string
    faq: string
    gallery: string
  }

  footer: {
    description: string
    navigation: string
    contact: string
    followUs: string
    rights: string
  }

  tour: {
    shared: string
    privateExperience: string
    moreExperiences: string
    otherTours: string
    moreExperiencesDescription: string
    contactDescription: string
  }
}

const pt: Translation = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    tours: 'Passeios',
    private: 'Privativos',
    contact: 'Contato',
    howItWorks: 'Como funciona',
    faq: 'Dúvidas',
    gallery: 'Galeria',
  },

  common: {
    whatsapp: 'Falar no WhatsApp',
    seeDetails: 'Ver detalhes',
    specialOffer: 'OFERTA ESPECIAL',
    specialCondition: 'Condição especial',
    consult: 'Consultar pelo WhatsApp',
    backToTours: 'Voltar para os passeios',
    moreExperiences: 'Mais experiências',
    otherTours: 'Conheça outros passeios',
    duration: 'Duração',
    value: 'Valor',
    schedule: 'Horário e disponibilidade',
    highlights: 'Destaques',
  },

  hero: {
    eyebrow: 'Experiências inesquecíveis',
    title: 'Viva os Lençóis Maranhenses',
    description:
      'Descubra dunas, lagoas e experiências inesquecíveis nos Lençóis Maranhenses.',
    toursButton: 'Conhecer os passeios',
    whatsappButton: 'Falar no WhatsApp',
  },

  sections: {
    about: 'Sobre',
    tours: 'Passeios',
    private: 'Experiências privativas',
    contact: 'Contato',
    howItWorks: 'Como funciona',
    faq: 'Dúvidas frequentes',
    gallery: 'Galeria',
  },

  footer: {
    description:
      'Seu próximo destino começa aqui. Descubra os Lençóis Maranhenses com a Vem Ver.',
    navigation: 'Navegação',
    contact: 'Contato',
    followUs: 'Siga a Vem Ver',
    rights: 'Todos os direitos reservados.',
  },

  tour: {
    shared: 'Passeio',
    privateExperience: 'Experiência privativa',
    moreExperiences: 'Mais experiências',
    otherTours: 'Conheça outros passeios',
    moreExperiencesDescription:
      'Encontre outras experiências para aproveitar os Lençóis Maranhenses.',
    contactDescription:
      'Consulte disponibilidade, condições e detalhes diretamente com a Vem Ver.',
  },
}

const en: Translation = {
  nav: {
    home: 'Home',
    about: 'About',
    tours: 'Tours',
    private: 'Private',
    contact: 'Contact',
    howItWorks: 'How it works',
    faq: 'FAQ',
    gallery: 'Gallery',
  },

  common: {
    whatsapp: 'Chat on WhatsApp',
    seeDetails: 'View details',
    specialOffer: 'SPECIAL OFFER',
    specialCondition: 'Special condition',
    consult: 'Ask on WhatsApp',
    backToTours: 'Back to tours',
    moreExperiences: 'More experiences',
    otherTours: 'Discover other tours',
    duration: 'Duration',
    value: 'Price',
    schedule: 'Schedule and availability',
    highlights: 'Highlights',
  },

  hero: {
    eyebrow: 'Unforgettable experiences',
    title: 'Experience the Lençóis Maranhenses',
    description:
      'Discover dunes, lagoons and unforgettable experiences in the Lençóis Maranhenses.',
    toursButton: 'Explore the tours',
    whatsappButton: 'Chat on WhatsApp',
  },

  sections: {
    about: 'About',
    tours: 'Tours',
    private: 'Private experiences',
    contact: 'Contact',
    howItWorks: 'How it works',
    faq: 'Frequently asked questions',
    gallery: 'Gallery',
  },

  footer: {
    description:
      'Your next destination starts here. Discover the Lençóis Maranhenses with Vem Ver.',
    navigation: 'Navigation',
    contact: 'Contact',
    followUs: 'Follow Vem Ver',
    rights: 'All rights reserved.',
  },

  tour: {
    shared: 'Tour',
    privateExperience: 'Private experience',
    moreExperiences: 'More experiences',
    otherTours: 'Discover other tours',
    moreExperiencesDescription:
      'Find other experiences to enjoy in the Lençóis Maranhenses.',
    contactDescription:
      'Check availability, conditions and details directly with Vem Ver.',
  },
}

const es: Translation = {
  nav: {
    home: 'Inicio',
    about: 'Sobre nosotros',
    tours: 'Paseos',
    private: 'Privados',
    contact: 'Contacto',
    howItWorks: 'Cómo funciona',
    faq: 'Preguntas frecuentes',
    gallery: 'Galería',
  },

  common: {
    whatsapp: 'Hablar por WhatsApp',
    seeDetails: 'Ver detalles',
    specialOffer: 'OFERTA ESPECIAL',
    specialCondition: 'Condición especial',
    consult: 'Consultar por WhatsApp',
    backToTours: 'Volver a los paseos',
    moreExperiences: 'Más experiencias',
    otherTours: 'Descubre otros paseos',
    duration: 'Duración',
    value: 'Precio',
    schedule: 'Horario y disponibilidad',
    highlights: 'Destacados',
  },

  hero: {
    eyebrow: 'Experiencias inolvidables',
    title: 'Vive los Lençóis Maranhenses',
    description:
      'Descubre dunas, lagunas y experiencias inolvidables en los Lençóis Maranhenses.',
    toursButton: 'Conocer los paseos',
    whatsappButton: 'Hablar por WhatsApp',
  },

  sections: {
    about: 'Sobre nosotros',
    tours: 'Paseos',
    private: 'Experiencias privadas',
    contact: 'Contacto',
    howItWorks: 'Cómo funciona',
    faq: 'Preguntas frecuentes',
    gallery: 'Galería',
  },

  footer: {
    description:
      'Tu próximo destino comienza aquí. Descubre los Lençóis Maranhenses con Vem Ver.',
    navigation: 'Navegación',
    contact: 'Contacto',
    followUs: 'Sigue a Vem Ver',
    rights: 'Todos los derechos reservados.',
  },

  tour: {
    shared: 'Paseo',
    privateExperience: 'Experiencia privada',
    moreExperiences: 'Más experiencias',
    otherTours: 'Descubre otros paseos',
    moreExperiencesDescription:
      'Encuentra otras experiencias para disfrutar de los Lençóis Maranhenses.',
    contactDescription:
      'Consulta disponibilidad, condiciones y detalles directamente con Vem Ver.',
  },
}

const fr: Translation = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    tours: 'Excursions',
    private: 'Privé',
    contact: 'Contact',
    howItWorks: 'Comment ça marche',
    faq: 'Questions fréquentes',
    gallery: 'Galerie',
  },

  common: {
    whatsapp: 'Nous contacter sur WhatsApp',
    seeDetails: 'Voir les détails',
    specialOffer: 'OFFRE SPÉCIALE',
    specialCondition: 'Condition spéciale',
    consult: 'Consulter sur WhatsApp',
    backToTours: 'Retour aux excursions',
    moreExperiences: 'Plus d’expériences',
    otherTours: 'Découvrez d’autres excursions',
    duration: 'Durée',
    value: 'Prix',
    schedule: 'Horaires et disponibilité',
    highlights: 'Points forts',
  },

  hero: {
    eyebrow: 'Des expériences inoubliables',
    title: 'Vivez les Lençóis Maranhenses',
    description:
      'Découvrez des dunes, des lagunes et des expériences inoubliables dans les Lençóis Maranhenses.',
    toursButton: 'Découvrir les excursions',
    whatsappButton: 'Nous contacter sur WhatsApp',
  },

  sections: {
    about: 'À propos',
    tours: 'Excursions',
    private: 'Expériences privées',
    contact: 'Contact',
    howItWorks: 'Comment ça marche',
    faq: 'Questions fréquentes',
    gallery: 'Galerie',
  },

  footer: {
    description:
      'Votre prochaine destination commence ici. Découvrez les Lençóis Maranhenses avec Vem Ver.',
    navigation: 'Navigation',
    contact: 'Contact',
    followUs: 'Suivez Vem Ver',
    rights: 'Tous droits réservés.',
  },

  tour: {
    shared: 'Excursion',
    privateExperience: 'Expérience privée',
    moreExperiences: 'Plus d’expériences',
    otherTours: 'Découvrez d’autres excursions',
    moreExperiencesDescription:
      'Découvrez d’autres expériences pour profiter des Lençóis Maranhenses.',
    contactDescription:
      'Consultez les disponibilités, conditions et détails directement avec Vem Ver.',
  },
}

const it: Translation = {
  nav: {
    home: 'Home',
    about: 'Chi siamo',
    tours: 'Escursioni',
    private: 'Private',
    contact: 'Contatti',
    howItWorks: 'Come funziona',
    faq: 'Domande frequenti',
    gallery: 'Galleria',
  },

  common: {
    whatsapp: 'Contattaci su WhatsApp',
    seeDetails: 'Vedi dettagli',
    specialOffer: 'OFFERTA SPECIALE',
    specialCondition: 'Condizione speciale',
    consult: 'Chiedi su WhatsApp',
    backToTours: 'Torna alle escursioni',
    moreExperiences: 'Altre esperienze',
    otherTours: 'Scopri altre escursioni',
    duration: 'Durata',
    value: 'Prezzo',
    schedule: 'Orari e disponibilità',
    highlights: 'Punti salienti',
  },

  hero: {
    eyebrow: 'Esperienze indimenticabili',
    title: 'Vivi i Lençóis Maranhenses',
    description:
      'Scopri dune, lagune ed esperienze indimenticabili nei Lençóis Maranhenses.',
    toursButton: 'Scopri le escursioni',
    whatsappButton: 'Contattaci su WhatsApp',
  },

  sections: {
    about: 'Chi siamo',
    tours: 'Escursioni',
    private: 'Esperienze private',
    contact: 'Contatti',
    howItWorks: 'Come funziona',
    faq: 'Domande frequenti',
    gallery: 'Galleria',
  },

  footer: {
    description:
      'La tua prossima destinazione inizia qui. Scopri i Lençóis Maranhenses con Vem Ver.',
    navigation: 'Navigazione',
    contact: 'Contatti',
    followUs: 'Segui Vem Ver',
    rights: 'Tutti i diritti riservati.',
  },

  tour: {
    shared: 'Escursione',
    privateExperience: 'Esperienza privata',
    moreExperiences: 'Altre esperienze',
    otherTours: 'Scopri altre escursioni',
    moreExperiencesDescription:
      'Scopri altre esperienze per vivere i Lençóis Maranhenses.',
    contactDescription:
      'Consulta disponibilità, condizioni e dettagli direttamente con Vem Ver.',
  },
}

const zh: Translation = {
  nav: {
    home: '首页',
    about: '关于我们',
    tours: '旅游项目',
    private: '私人体验',
    contact: '联系我们',
    howItWorks: '预订流程',
    faq: '常见问题',
    gallery: '图库',
  },

  common: {
    whatsapp: '通过 WhatsApp 联系',
    seeDetails: '查看详情',
    specialOffer: '特别优惠',
    specialCondition: '特别条件',
    consult: '通过 WhatsApp 咨询',
    backToTours: '返回旅游项目',
    moreExperiences: '更多体验',
    otherTours: '探索其他旅游项目',
    duration: '时长',
    value: '价格',
    schedule: '时间与可用情况',
    highlights: '特色',
  },

  hero: {
    eyebrow: '难忘的旅行体验',
    title: '探索马拉尼昂州的蓝湖沙丘',
    description:
      '探索沙丘、泻湖以及马拉尼昂州国家公园令人难忘的旅行体验。',
    toursButton: '探索旅游项目',
    whatsappButton: '通过 WhatsApp 联系',
  },

  sections: {
    about: '关于我们',
    tours: '旅游项目',
    private: '私人体验',
    contact: '联系我们',
    howItWorks: '预订流程',
    faq: '常见问题',
    gallery: '图库',
  },

  footer: {
    description:
      '您的下一段旅程从这里开始。与 Vem Ver 一起探索马拉尼昂州国家公园。',
    navigation: '导航',
    contact: '联系方式',
    followUs: '关注 Vem Ver',
    rights: '版权所有。',
  },

  tour: {
    shared: '旅游项目',
    privateExperience: '私人体验',
    moreExperiences: '更多体验',
    otherTours: '探索其他旅游项目',
    moreExperiencesDescription:
      '探索更多马拉尼昂州国家公园的旅行体验。',
    contactDescription:
      '直接向 Vem Ver 咨询可用日期、条件和详细信息。',
  },
}

const ja: Translation = {
  nav: {
    home: 'ホーム',
    about: '私たちについて',
    tours: 'ツアー',
    private: 'プライベート',
    contact: 'お問い合わせ',
    howItWorks: 'ご利用の流れ',
    faq: 'よくある質問',
    gallery: 'ギャラリー',
  },

  common: {
    whatsapp: 'WhatsAppで問い合わせる',
    seeDetails: '詳細を見る',
    specialOffer: '特別オファー',
    specialCondition: '特別条件',
    consult: 'WhatsAppで相談する',
    backToTours: 'ツアーに戻る',
    moreExperiences: 'その他の体験',
    otherTours: 'その他のツアーを見る',
    duration: '所要時間',
    value: '料金',
    schedule: '時間と空き状況',
    highlights: 'おすすめポイント',
  },

  hero: {
    eyebrow: '忘れられない体験',
    title: 'レンソイス・マラニャンセスを体験',
    description:
      '砂丘、ラグーン、そしてレンソイス・マラニャンセスで忘れられない体験をお楽しみください。',
    toursButton: 'ツアーを見る',
    whatsappButton: 'WhatsAppで問い合わせる',
  },

  sections: {
    about: '私たちについて',
    tours: 'ツアー',
    private: 'プライベート体験',
    contact: 'お問い合わせ',
    howItWorks: 'ご利用の流れ',
    faq: 'よくある質問',
    gallery: 'ギャラリー',
  },

  footer: {
    description:
      '次の旅はここから始まります。Vem Verと一緒にレンソイス・マラニャンセスを探索しましょう。',
    navigation: 'ナビゲーション',
    contact: 'お問い合わせ',
    followUs: 'Vem Verをフォロー',
    rights: 'All rights reserved.',
  },

  tour: {
    shared: 'ツアー',
    privateExperience: 'プライベート体験',
    moreExperiences: 'その他の体験',
    otherTours: 'その他のツアーを見る',
    moreExperiencesDescription:
      'レンソイス・マラニャンセスを楽しめるその他の体験をご覧ください。',
    contactDescription:
      '空き状況、条件、詳細についてはVem Verまで直接お問い合わせください。',
  },
}

export const translations: Record<
  Locale,
  Translation
> = {
  pt,
  en,
  es,
  fr,
  it,
  zh,
  ja,
}

export function getTranslations(
  locale: Locale,
): Translation {
  return translations[locale] ?? translations.pt
}
