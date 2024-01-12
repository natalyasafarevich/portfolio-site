type HeaderLinksProps = {
  title: string;
  id: string;
};
export const HEADER_LINKS: Array<HeaderLinksProps> = [
  {
    title: 'Home',
    id: '#preview',
  },
  {
    title: 'About',
    id: '#about',
  },
  {
    title: 'Service',
    id: '#service',
  },

  {
    title: 'Resume',
    id: '#resume',
  },
  {
    title: 'Project',
    id: '#project',
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
  {
    title: `Calathea`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/tab2.svg',
  },
  {
    title: `Calathea`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/test-bg.svg',
  },
  {
    title: `Calathea`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/test-bg.svg',
  },
  {
    title: `Calathea`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit 
     amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.`,
    src: '/test-bg.svg',
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
