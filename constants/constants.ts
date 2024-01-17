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
};

export const PORTFOLIO_CARDS: Array<CardPProps> = [
  {
    title: `Libroverse`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab1.svg',
  },
  // {
  //   title: `Calathea`,
  //   desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //    Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit
  //    amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
  //   src: '/tab2.svg',
  // },
  {
    title: `We smart`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab3.svg',
  },
  {
    title: `Eat Wise`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab4.svg',
  },

  {
    title: `Dashboard`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab5.svg',
  },

  {
    title: `Toolkeeper app `,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab7.svg',
  },
  {
    title: `Prime Pay`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab6.svg',
  },

  {
    title: `Toolkeeper  `,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab11.svg',
  },
  {
    title: `To-do app`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab9.svg',
  },
  {
    title: `Statistic map`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab8.svg',
  },

  {
    title: `Movies`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab10.svg',
  },
];

type LabelProps = {
  name: string;
};
export const LABELS_PORTFOLIO: Array<LabelProps> = [
  {name: 'Landing Page'},
  {name: 'Product Design'},
  {name: 'Animation'},
  {name: 'Glassmorphism'},
  {name: 'Cards'},
];
