// menu items
export const menu_items = [
  {
    label: 'Início',
    path: '#home',
    offset: '70',
  },
  {
    label: 'Serviços',
    path: '#how-to',
    offset: '70',
  },
  {
    label: 'Depoimentos',
    path: '#testimonials',
    offset: '70',
  },
  {
    label: 'Blog',
    path: '#newsfeed',
    offset: '70',
  },
];

// service section
import pegado from 'common/assets/image/saasAppDark/clients/pegado.webp';
import pensarclube from 'common/assets/image/saasAppDark/clients/pensarclube-web.webp';
import smart from 'common/assets/image/saasAppDark/clients/smartwebp.webp';
import headphone from 'common/assets/image/saasAppDark/icons/headphone.svg';
// monitoring section
import rocket from 'common/assets/image/saasAppDark/icons/rocket.svg';
// service section
import service1 from 'common/assets/image/saasAppDark/icons/service1.svg';
import service2 from 'common/assets/image/saasAppDark/icons/service2.svg';
import service3 from 'common/assets/image/saasAppDark/icons/service3.svg';
import service4 from 'common/assets/image/saasAppDark/icons/service4.svg';
import service5 from 'common/assets/image/saasAppDark/icons/service5.svg';
// footer section
import siteLogo from 'common/assets/image/bchat.svg';
// news feed section
import post1 from 'common/assets/image/saasAppDark/post1.png';
import post2 from 'common/assets/image/saasAppDark/post2.png';
import post3 from 'common/assets/image/saasAppDark/post3.png';
// testimonials section
import logo1 from 'common/assets/image/saasAppDark/tm-logo1.svg';
import logo2 from 'common/assets/image/saasAppDark/tm-logo2.svg';
import logo3 from 'common/assets/image/saasAppDark/tm-logo3.svg';
export const clients = [pensarclube,smart,pegado];


export const services = [
  {
    id: 1,
    title: 'Alto Desempenho',
    icon: service1,
  },
  {
    id: 2,
    title: 'Personalização de Usuário',
    icon: service2,
  },
  {
    id: 3,
    title: 'Modificação de Estrutura',
    icon: service3,
  },
  {
    id: 4,
    title: 'Análise de Cliente',
    icon: service4,
  },
  {
    id: 5,
    title: 'Suporte Instantâneo',
    icon: service5,
  },
];


export const monitoringFeatures = [
  {
    id: 1,
    icon: rocket,
    title: 'Análise de dados diária',
    desc: `Acompanhe seu desempenho e mantenha-se em contato com o que está acontecendo pelas últimas atualizações de interface`,
  },
  {
    id: 2,
    icon: headphone,
    title: 'Comunicação Rápida',
    desc: `Fique por cima de suas listas de tarefas e mantenha-se em contato com o que está acontecendo e o que está fora.`,
  },
];

// stats counter section
export const statsCounter = {
  blockTitle: {
    subtitle: 'Pontos de venda',
    title: `Pontos de venda chave`,
    text: 'O BChat SE torna sua equipe mais produtiva, ágil e capaz de colaborar sem precisar alternar entre aplicativos.',
    button: {
      link: '#',
      label: 'Saiba mais',
    },
  },
  posts: [
    {
      count: '80',
      title: 'Up to',
      text: 'Customer Response',
      symbol: '%',
    },
    {
      count: '99',
      title: 'Consistent',
      text: 'Performance Score',
      symbol: '%',
    },
    {
      count: '3.5',
      title: 'Down to',
      text: 'Response Time',
      symbol: 'S',
    },
    {
      count: '5x',
      title: 'Up to',
      text: 'Faster then others',
      symbol: '',
    },
  ],
};
// video intro section
export const videoIntro = {
  features: [
    {
      id: 1,
      title: 'Chat ao vivo',
      desc: 'Interação em tempo real',
    },
    {
      id: 2,
      title: 'Widget de chat',
      desc: 'Widget que complemente sua identidade visual.',
    },
    {
      id: 3,
        title: 'Atendimento ao cliente',
      desc: 'Ofereça um chat ao vivo que combina com sua marca.',
    },
  ],
};

export const posts = [
  {
    id: 1,
    date: 'June 3, 2020',
    image: post1,
    title: 'The three Fundamental Rules to Keep Your Website Goal Orientated',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 2,
    date: 'Dec 8, 2020',
    image: post2,
    title: 'Five Common Mistakes Teams Make When Tracking Performance',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 3,
    date: 'Dec 8, 2020',
    image: post3,
    title: `Why You Might Want to Reconsider with Tracking First Meaningful Paint`,
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
];

export const testimonials = [
  {
    id: 3,
    logo: logo3,
    author: 'Dave Thackeray',
    designation: 'CEO',
    quote: `Estou totalmente apaixonado pelo BChat SE. O suporte ao cliente é impecável e essa plataforma de código aberto supera facilmente concorrentes como o Zendesk.`,
  },
  {
    id: 2,
    logo: logo2,
    author: 'Adam Compton',
    designation: 'Executivo de Captção de Recursos',
    quote: `O BChat SE é uma ferramenta essencial que nos ajuda a ter conversas em tempo real com nossos doadores e a responder perguntas que não apenas melhoram a satisfação, mas também o engajamento.`,
  },
  {
    id: 1,
    logo: logo1,
    author: 'Dennis Henry',
    designation: 'Tech Lead',
    quote: `O BChat SE nos permite personalizar a experiência omnichannel da maneira que queremos, diferente de outras soluções. Além disso, a equipe do BChat SE está sempre pronta para ajudar. Basta enviar uma mensagem e eles respondem prontamente a todas as dúvidas que temos.`,
  },
];

export const footer = {
  about: {
    logo: siteLogo,
    text: `Centralize toda a comunicação da sua empresa em um só lugar.`,
  },
  widgets: [
    {
      id: 1,
      title: 'Links Úteis',
      list: [
        {
          id: 1,
          title: 'Suporte ao Cliente',
          link: '#',
        },
        {
          id: 2,
          title: 'Sobre',
          link: '#',
        },
        {
          id: 3,
          title: 'Política de Privacidade',
          link: '#',
        },
      ],
    },
  ],
  contactInfo: {
    email: 'contato@bolt360.com.br',
    address: 'Rua Tereza Bezerra Salustino 1902, Lagoa Nova, Natal/RN',
    social: {
      instagram: 'https://www.instagram.com/bolt360assessoria/',
      linkedin: 'https://www.linkedin.com/company/bolt-360/posts/?feedView=all',
      facebook: 'https://www.facebook.com/bolt360assessoria'
    }
  },
};
