import {Link} from 'react-scroll';
type HeaderLinksProps = {
  title: string;
  id: string;
};
export const HEADER_LINKS: Array<HeaderLinksProps> = [
  {
    title: 'Home',
    id: '#home',
  },
  {
    title: 'About',
    id: '#about',
  },
  {
    title: 'Skills',
    id: '#skills',
  },
  {
    title: 'Experience',
    id: '#experience',
  },

  {
    title: 'Projects',
    id: '#projects',
  },
  {
    title: 'Contact',
    id: '#contact',
  },
];

export type CardProps = {
  title: string;
  items: Array<{src: string}>;
};
export const PROJECT_CARDS: Array<CardProps> = [
  {
    title: 'Frontend',
    items: [
      {src: '/typescript-svgrepo-com.svg'},
      {src: '/brand_js_icon_158838.svg'},

      {src: '/html_icon_187944.svg'},
      {src: '/CSS_icon.svg'},
      {src: '/Sass_Logo_Color.svg'},
    ],
  },
  {
    title: 'Frameworks & libraries',
    items: [
      {src: '/ReactLogo.svg'},
      {src: '/nextjs.svg'},
      {src: '/redux.svg'},
      {src: '/material-ui.svg'},

      {src: '/bootstrap-logo.svg'},
    ],
  },
  {
    title: 'Other',
    items: [
      {src: '/graphql-ar21.svg'},
      {src: '/Firebase_Logo.svg'},
      {src: '/Git-Logo-White.svg'},
      {src: '/github-svgrepo-com.svg'},
    ],
  },
];
export type CardPProps = {
  title: string;
  desc: string;
  src: string;
  link: string;
};

export const PORTFOLIO_CARDS: Array<CardPProps> = [
  {
    title: `Libroverse`,
    desc: `The website built using React, providing access to over 7,000 books in English with the option to register and
    download books.`,
    src: '/tab1.svg',
    link: 'https://your-books-ns.netlify.app/',
  },
  {
    title: `Caravan`,
    desc: `Trailer booking site`,
    src: '/taaabs.png',
    link: 'https://www.dreamcaravans.co.il',
  },
  {
    title: `We smart`,
    desc: ` The website is designed for tracking and predicting traffic jams on roads using artificial intelligence`,
    src: '/tab3.svg',
    link: 'https://wesmart.org.il/',
  },

  // {
  //   title: `Eat Wise`,
  //   desc: `(*in the process*) The website is designed for searching products based on nutritional value and tracking consumed calories per day.`,
  //   src: '/tab4.svg',
  //   link: 'https://github.com/natalyasafarevich/eat-wist',
  // },

  {
    title: `Dashboard`,
    desc: `(*in the process*) Platform for tracking traffic jams and providing local settings for authorized users.`,
    src: '/tab5.svg',
    link: 'https://65a90736e538ce6f6657e18a--cozy-sprinkles-ccdeb3.netlify.app/',
  },

  {
    title: `Toolkeeper app `,
    desc: `An application for inventory management of goods and materials designed for construction companies, restaurants, hotels, and any businesses dealing with tangible assets.`,
    src: '/tab7.svg',
    link: 'https://apps.apple.com/ru/app/%D1%82%D1%83%D0%BB%D0%BA%D0%B8%D0%BF%D0%B5%D1%80-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D1%83%D1%87%D0%B5%D1%82-%D1%82%D0%BC%D1%86/id1502033731',
  },
  {
    title: `Prime Pay`,
    desc: `Layout implemented with Next.js. Landing page designed for a banking application.`,
    src: '/tab6.svg',
    link: 'https://prime-pay.vercel.app/',
  },

  {
    title: `Toolkeeper  `,
    desc: `A website for automated accounting of goods and materials for construction companies, restaurants, hotels, and various types of businesses that deal with tangible assets.`,
    src: '/tab11.svg',
    link: 'https://toolkeeper.io/',
  },
  {
    title: `To-do app`,
    desc: `A website designed for efficient task management and organizing daily activities. It provides a simple and intuitive interface, allowing users to create, track, and complete tasks.`,
    src: '/tab9.svg',
    link: 'https://natalya-safarevich-to-do.netlify.app/',
  },
  {
    title: `Statistic map`,
    desc: `Game statistics map for RMAA Group, created using HTML, CSS, and JavaScript`,
    src: '/tab8.svg',
    link: 'https://65a90890d04dd16f587a5cb7--inquisitive-kulfi-ff391e.netlify.app/',
  },

  // {
  //   title: `Movies`,
  //   desc: 'Layout design with a request for fetching movie trailers from YouTube.',
  //   src: '/tab10.svg',
  //   link: '',
  // },
];

type LabelProps = {
  name: string;
};
export const LABELS_PORTFOLIO: Array<LabelProps> = [
  {name: 'Landing Page'},
  {name: 'AI'},
  {name: 'Animation'},
  {name: 'App'},
  {name: 'Multilingual'},
];
