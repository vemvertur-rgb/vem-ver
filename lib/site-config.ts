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

  email: 'vemvertur@gmail.com',

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
      'Uma experiência que combina as paisagens dos Lençóis Maranhenses com o charme e a cultura da vila de Atins.\n\nA saída acontece por volta das 9h em veículo 4x4. Durante o caminho, atravessamos trechos de areia, pequenas áreas alagadas e parte da região dos Lençóis Maranhenses.\n\nAo longo do percurso, fazemos paradas em lagoas para banho, descanso e contemplação da paisagem.\n\nDepois, seguimos até Atins, uma vila conhecida por sua atmosfera tranquila e forte presença da cultura local. No local, haverá tempo livre para caminhar pela vila, almoçar e aproveitar o ambiente antes de iniciar o retorno.\n\nÀ tarde, fazemos o caminho de volta para Barreirinhas, percorrendo novamente os trechos do trajeto com tranquilidade e segurança.',

    image: '/images/atins.jpg',

    imageAlt:
      'Paisagem de Atins com rio, coqueiros e dunas',

    originalPrice: 'R$ 250,00',
    price: 'R$ 230,50',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: 'Aproximadamente 9 horas',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'lagoa-azul',
    name: 'Circuito Lagoa Azul',

    shortDescription:
      'Explore as dunas e lagoas cristalinas dos Lençóis Maranhenses.',

    description:
      'Uma das experiências mais tradicionais dos Lençóis Maranhenses.\n\nO passeio começa com o embarque no local de hospedagem, seguindo em veículo 4x4. Após atravessar a ponte sobre o Rio Preguiças, seguimos por aproximadamente 40 minutos por uma trilha cercada pela vegetação até chegar às dunas dos Lençóis Maranhenses.\n\nDurante o percurso, visitamos a Lagoa Azul e outras lagoas da região, com tempo para banho, descanso e contemplação da paisagem.\n\nO guia acompanha o grupo durante todo o passeio, respeitando o ritmo dos visitantes e proporcionando uma experiência tranquila.\n\nHorário: saída às 8h30 e retorno por volta das 12h30.\n\nInclui: guia credenciado, motorista, transporte em veículo 4x4 e cooler para água e outros itens.',

    image: '/images/lagoa-azul.webp',

    imageAlt:
      'Lagoa de água azul entre as dunas dos Lençóis Maranhenses',

    originalPrice: 'R$ 160,00',
    price: 'R$ 149,90',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: 'Aproximadamente 4 horas',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'lagoa-bonita',
    name: 'Circuito Lagoa Bonita',

    shortDescription:
      'Viva uma experiência especial entre dunas e lagoas dos Lençóis.',

    description:
      'Uma experiência marcada pelas grandes dunas, pela vista panorâmica e pelo pôr do sol nos Lençóis Maranhenses.\n\nO passeio começa com o embarque no local de hospedagem em veículo 4x4. Após atravessar a ponte sobre o Rio Preguiças, seguimos por aproximadamente 1 hora por uma trilha em meio à vegetação até chegar à região das dunas.\n\nPara alcançar o alto das dunas, utilizamos uma escadaria que leva a um dos pontos de observação mais bonitos do circuito.\n\nDo alto, é possível contemplar uma ampla paisagem formada pelas dunas e lagoas, incluindo a Lagoa Bonita. Depois, fazemos uma caminhada pelo circuito, com tempo para conhecer as lagoas e aproveitar o banho.\n\nO pôr do sol é um dos grandes momentos do passeio. Conforme o sol se aproxima do horizonte, a paisagem ganha diferentes tons e o ambiente fica ainda mais tranquilo.\n\nApós o pôr do sol, descemos em direção às lagoas para um último momento de contemplação e banho antes do retorno.\n\nHorário: saída às 13h30 e retorno por volta das 19h30.\n\nInclui: guia credenciado, motorista, transporte em veículo 4x4 e cooler para água e outros itens.',

    image: '/images/lagoa-bonita.webp',

    imageAlt:
      'Vista do alto de uma duna para uma lagoa entre as dunas',

    originalPrice: 'R$ 160,00',
    price: 'R$ 149,90',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: 'Aproximadamente 6 horas',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'cardosa',
    name: 'Percurso de Cardosa',

    shortDescription:
      'Descubra as belezas naturais do percurso de Cardosa.',

    description:
      'Uma experiência mais tranquila, ideal para quem deseja aproveitar a natureza de uma maneira diferente.\n\nO percurso começa seguindo por uma estrada asfaltada até a região da Passagem do Canto. A partir daí, continuamos por uma estrada de piçarra durante aproximadamente 45 minutos até chegar a Cardosa.\n\nNo local, começa a descida pelo Rio Formiga. Durante aproximadamente 1 hora, o visitante percorre o rio utilizando boia e colete salva-vidas.\n\nA descida é tranquila e permite aproveitar o rio, a natureza e o ambiente ao redor sem exigir o mesmo esforço físico dos circuitos pelas dunas.\n\nDepois do percurso pelo rio, há tempo livre para banho, descanso, redes e para aproveitar a atmosfera da comunidade.\n\nHorário: saída às 8h30 e retorno por volta das 12h30.\n\nInclui: guia credenciado, motorista, cooler, boia para a descida do rio e colete salva-vidas.',

    image: '/images/cardosa.jpg',

    imageAlt:
      'Passeio pelas paisagens naturais da região dos Lençóis Maranhenses',

    originalPrice: 'R$ 150,00',
    price: 'R$ 129,90',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: 'Aproximadamente 4 horas',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'santo-amaro',
    name: 'Percurso de Santo Amaro',

    shortDescription:
      'Conheça Santo Amaro e suas paisagens incríveis nos Lençóis Maranhenses.',

    description:
      'Uma experiência para conhecer algumas das paisagens e lagoas mais marcantes da região de Santo Amaro.\n\nA saída de Barreirinhas acontece às 8h30. Seguimos aproximadamente 97 km por estrada asfaltada até Santo Amaro.\n\nAo chegar, embarcamos em veículo 4x4 para iniciar o percurso pelas dunas.\n\nDurante o passeio, fazemos paradas em lagoas da região, como Lagoa Andorinha, Lagoa Gaivota e Lagoa Betânia, conforme as condições do período.\n\nO passeio inclui tempo para banho, descanso e contemplação das paisagens.\n\nDepois, há uma pausa para almoço e permanência na região até o pôr do sol.\n\nApós esse momento, iniciamos o retorno para Barreirinhas.\n\nHorário: saída às 8h30 e retorno por volta das 19h30.\n\nInclui: guia credenciado, motorista, transporte em van ou micro-ônibus, guarda-sol e cadeiras.',

    image: '/images/santo-amaro-nova.jpg',

    imageAlt:
      'Lagoa de águas claras em Santo Amaro do Maranhão',

    originalPrice: 'R$ 330,00',
    price: 'R$ 305,50',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: 'Aproximadamente 11 horas',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'cabure',
    name: 'Circuito de Caburé',

    shortDescription:
      'Explore Caburé e aproveite uma experiência especial na região.',

    description:
      'Um passeio completo que combina rio, manguezais, dunas e mar em uma única experiência.\n\nO percurso é realizado em lancha voadeira e conta com três principais paradas.\n\nVassouras: a aproximadamente 45 minutos de Barreirinhas pelo Rio Preguiças, seguimos em direção à região próxima à sua foz. Em Vassouras, encontramos uma pequena estrutura com barraca de palha, bebidas e artesanatos. O local também é conhecido pela presença dos macacos-prego. Nas proximidades, há uma duna e lagoas que podem estar cheias dependendo do período do ano.\n\nMandacaru: a próxima parada é o povoado de Mandacaru, onde está localizado o farol com aproximadamente 35 metros de altura. Do alto, é possível observar uma ampla paisagem formada pelo Rio Preguiças, manguezais, mar e as dunas dos Lençóis Maranhenses.\n\nCaburé: a última parada é a Praia de Caburé. O local possui uma extensa faixa de areia e mar adequado para banho, além de restaurantes onde é possível encontrar petiscos e bebidas. Também é possível descansar nas redes e aproveitar o ambiente entre o rio e o mar.\n\nO almoço não está incluído no passeio.\n\nHorário: saída às 8h30 e retorno por volta das 15h30.',

    image: '/images/cabure.jpg',

    imageAlt:
      'Paisagem da região dos Lençóis Maranhenses',

    originalPrice: 'R$ 180,00',
    price: 'R$ 159,90',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: 'Aproximadamente 7 horas',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'duas-lagoas',
    name: 'Circuito de Duas Lagoas',

    shortDescription:
      'Conheça duas belas lagoas e aproveite a paisagem dos Lençóis.',

    description:
      'Uma opção mais completa para quem deseja explorar diferentes paisagens dos Lençóis Maranhenses em um único dia.\n\nO passeio começa às 8h30 com o embarque no local de hospedagem em veículo 4x4. Após atravessar a ponte sobre o Rio Preguiças, seguimos por aproximadamente 40 minutos até a região de acesso à Lagoa Azul.\n\nA partir do estacionamento, continuamos pelas dunas acompanhados pelo guia, que conduz o grupo pelos melhores pontos e lagoas disponíveis de acordo com as condições do período.\n\nPor volta das 11h30, retornamos ao veículo e seguimos para um restaurante local, onde haverá tempo para almoço e descanso.\n\nPor volta das 15h, seguimos para a região da Lagoa Bonita. O acesso ao circuito é feito por uma bela escadaria de madeira que leva às dunas e às lagoas.\n\nNesse segundo momento do passeio, haverá novamente tempo livre para conhecer as melhores lagoas do período e aproveitar o banho.\n\nApós o pôr do sol, iniciamos o retorno para Barreirinhas.\n\nÉ um roteiro indicado para quem deseja passar mais tempo explorando os Lençóis e conhecer diferentes paisagens em uma única experiência.\n\nHorário: saída às 8h30 e retorno por volta das 19h30.\n\nInclui: guia credenciado, motorista, transporte em veículo 4x4 e cooler para água e outros itens.',

    image: '/images/lagoa-azul.webp',

    imageAlt:
      'Lagoa entre as dunas dos Lençóis Maranhenses',

    originalPrice: 'R$ 330,00',
    price: 'R$ 305,50',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: 'Aproximadamente 11 horas',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'quadriciclo',
    name: 'Pequenos Lençóis de Quadriciclo',

    shortDescription:
      'Explore os Pequenos Lençóis em uma experiência de quadriciclo.',

    description:
      'Uma aventura pelos caminhos dos Pequenos Lençóis Maranhenses, passando por trilhas, dunas e lagoas sazonais.\n\nO percurso dura aproximadamente 3h30 e passa por diferentes ambientes da região.\n\nDurante a aventura, visitamos locais como Caeté, Alazão, Parque Eólico e Campos das Dunas, percorrendo trilhas fechadas e trechos com lama e diferentes tipos de terreno.\n\nUm dos principais momentos do passeio é a chegada à Praia de Caburé, onde existe um ponto de apoio para almoço e para aproveitar o local.\n\nPor volta das 14h30, iniciamos o caminho de retorno para Barreirinhas, com chegada prevista para o final da tarde.\n\nCada quadriciclo comporta até 2 pessoas.\n\nHorário: saída às 9h e retorno por volta das 17h.\n\nInclui: guia credenciado, quadriciclo, carro de apoio e cooler.',

    image: '/images/quadri.jpg',

    imageAlt:
      'Passeio pelas trilhas de areia dos Lençóis Maranhenses',

    originalPrice: 'R$ 650,00',
    price: 'R$ 599,90',
    priceInfo: 'por pessoa',

    type: 'compartilhado',

    duration: 'Aproximadamente 8 horas',
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
      'Uma experiência noturna para contemplar o céu dos Lençóis Maranhenses longe das luzes da cidade.\n\nA saída acontece por volta das 20h, seguindo em direção à região do Circuito Lagoa Azul para o luau.\n\nAo nos afastarmos das luzes de Barreirinhas, o céu se torna o grande protagonista da experiência.\n\nO destaque da noite é a observação das estrelas, acompanhada pela paisagem das dunas e lagoas dos Lençóis Maranhenses.\n\nO ambiente proporciona um momento tranquilo para contemplação e conexão com a natureza.\n\nApós a experiência, iniciamos o retorno para Barreirinhas.\n\nHorário: saída por volta das 20h e retorno aproximadamente à 1h.',

    image: '/images/mirar-das-estrelas-nova (2).jpg',

    imageAlt:
      'Céu sobre as dunas dos Lençóis Maranhenses',

    originalPrice: 'R$ 1.400,00',
    price: 'R$ 1.250,50',
    priceInfo: 'para até 9 pessoas',

    type: 'privativo',

    duration: 'Aproximadamente 5 horas',
    schedule: '',
    highlights: [],
  },

  {
    slug: 'cafe-da-manha',
    name: 'Café da Manhã nos Lençóis Maranhenses',

    shortDescription:
      'Uma experiência especial de café da manhã em meio à paisagem dos Lençóis.',

    description:
      'Uma experiência exclusiva para começar o dia cercado pela paisagem dos Lençóis Maranhenses.\n\nO passeio começa com o transfer até um local especialmente preparado para receber o café da manhã.\n\nA mesa conta com alimentos frescos, como pães, bolos, frutas tropicais, sucos naturais e outras delícias locais.\n\nEnquanto toma o café da manhã, você poderá apreciar a tranquilidade da natureza e a paisagem dos Lençóis Maranhenses.\n\nO nascer do sol é um dos momentos especiais da experiência, com suas cores refletidas nas lagoas cristalinas e nas dunas.\n\nUma experiência pensada para quem busca tranquilidade, exclusividade e contato com a natureza.\n\nHorário: aproximadamente das 3h30 às 6h30.',

    image: '/images/cafe-da-manha-nova.jpg',

    imageAlt:
      'Dunas de areia branca nos Lençóis Maranhenses',

    originalPrice: 'R$ 1.400,00',
    price: 'R$ 1.250,50',
    priceInfo: 'para até 9 pessoas',

    type: 'privativo',

    duration: 'Aproximadamente 3 horas',
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
    src: '/images/macaco-nova.jpg',
    alt: 'Paisagem de Atins',
    label: 'Fauna',
  },
  {
    src: '/images/santo-amaro-nova.jpg',
    alt: 'Lagoa em Santo Amaro do Maranhão',
    label: 'Santo Amaro',
  },
  {
    src: '/images/barreirinhas-nova.jpg',
    alt: 'Rio Preguiças em Barreirinhas',
    label: 'Barreirinhas',
  },
  {
    src: '/images/passeio-4x4-nova.jpg',
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
      'Preencha o formulário logo abaixo, com data e as informações necessárias para sua reserva.',
  },

  {
    question: 'Como consultar a disponibilidade?',
    answer:
      'Fale com a Vem Ver pelo WhatsApp informando a data pretendida e o passeio de interesse.',
  },

  {
    question: 'Os valores apresentados são por pessoa?',
    answer:
      'Sim, os passeios compartilhados são apresentados com valor por pessoa. As experiências privativas informam o valor para até 9 pessoas.',
  },

  {
    question: 'Quais passeios são privativos?',
    answer:
      'As experiências privativas disponíveis no site são Mirar das Estrelas, Café da Manhã nos Lençóis Maranhenses ou qualquer um dos passeios para você e/ou seu grupo.',
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
      'Como funciona o cancelamento?

Cancelamento em até 7 dias após a contratação (direito de arrependimento):
➜ Reembolso integral, desde que o serviço ainda não tenha sido realizado.

Mais de 30 dias antes do primeiro passeio:
➜ Reembolso de 80% do valor pago.

Entre 29 e 15 dias antes do passeio:
➜ Reembolso de 70% do valor pago.

Entre 14 e 7 dias antes do passeio:
➜ Reembolso de 50% do valor pago.

Com menos de 7 dias de antecedência ou em caso de não comparecimento (no-show):
➜ Não há reembolso.',
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
