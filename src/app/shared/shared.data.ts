import { Item, Share, Emoji, History, Color } from './interfaces/interfaces';

// MENU
export const MENU: Item[] = [
  { name: 'Home', url: '/home' },
  { name: 'Articles', url: '/articles' },
  { name: 'Gaming', url: '/gaming' }
];

// HOME SLIDERS
export const mainSliderOpts = {
  slidesPerView: 1.3,
  spaceBetween: 5,
  breakpoints: {
    975: { slidesPerView: 1.5 },
    925: { slidesPerView: 1.3 },
    850: { slidesPerView: 1 },
    767: { slidesPerView: 1.3 },
    625: { slidesPerView: 1.5 },
    535: { slidesPerView: 1 }
  }
};

export const smallSliderOpts = {
  slidesPerView: 2.3,
  spaceBetween: 5,
  breakpoints: {
    975: { slidesPerView: 2.1 },
    925: { slidesPerView: 2.3 },
    875: { slidesPerView: 1.6 },
    850: { slidesPerView: 1.3 },
    767: { slidesPerView: 2.3 },
    625: { slidesPerView: 1.8 },
    535: { slidesPerView: 1.6 },
    500: { slidesPerView: 1.3 }
  }
};

// CATEGORIES
export const CATEGORIES: string[] = [
  'All',
  'Code',
  'Video',
  'Gaming',
  'Lifestyle',
  'Interview',
  'Review',
  'Antic'
];

export const TENDENCIES: string[] = [
  ''
];

// SOCIAL ICONS
export const SHARE: Share[] = [
  { name: 'facebook', image: 'assets/img/share/facebook.png' },
  { name: 'twitter', image: 'assets/img/share/twitter.png' },
  { name: 'share', image: 'assets/img/share/share.png' },
  { name: 'comment', image: 'assets/img/share/comment.png' },
  { name: 'reaction', image: 'assets/img/share/emoji.png' }
];

export const REACTIONS: Emoji[] = [
  { title: 'Love', height: 0, image: 'in-love.png' },
  { title: 'Laugh', height: 0, image: 'laughing.png' },
  { title: 'Wow', height: 0, image: 'surprised.png' },
  { title: 'Sad', height: 0, image: 'embarrassed.png' },
  { title: 'Angry', height: 0, image: 'angry.png' },
];

// MAIN ARTICLES
export const MAIN: string[] = [
  '5cefd7f4275e0e24b43a78d4',
  '5cf7e10d216db727d8398888'
];

// COLORS
export const COLORS: Color[] = [
  { name: 'default', color: '#e05c0f' },
  { name: 'pink', color: '#e91e63' },
  { name: 'blue', color: '#3880ff' },
  { name: 'red', color: '#b00020' },
  { name: 'cyan', color: '#03dac6' },
  { name: 'green', color: '#10dc60' },
  { name: 'yellow', color: '#ffd300' },
  { name: 'violet', color: '#7044ff' },
];

// HISTORY
export const HISTORY: History[] = [
  {
    title: 'How to get the perfect travel shot',
    type: 'Comment'
  },
  {
    title: 'How to get the perfect travel shot',
    type: 'Reaction'
  },
  {
    title: 'How to get the perfect travel shot',
    type: 'Comment'
  },
  {
    title: 'How to get the perfect travel shot',
    type: 'Reaction'
  },
  {
    title: 'How to get the perfect travel shot',
    type: 'Reaction'
  },
  {
    title: 'How to get the perfect travel shot',
    type: 'Comment'
  },
];


