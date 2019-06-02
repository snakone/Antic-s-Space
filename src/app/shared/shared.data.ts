import { Comment, Item, Media, Share, Emoji, History } from './interfaces/interfaces';

// MENU
export const MENU: Item[] = [
  { name: 'Home', url: '/home' },
  { name: 'Articles', url: '/articles' },
  { name: 'Gaming', url: '/gaming' }
];

// HOME SLIDERS
export const mainSliderOpts = {
  slidesPerView: 1,
  spaceBetween: 5
};

export const smallSliderOpts = {
  slidesPerView: 1.3,
  spaceBetween: 5
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

// LANGUAGES
export const LANGUAGES: string[] = [
  'HTML',
  'CSS',
  'SCSS',
  'Javascript',
  'Typescript',
  'Nodejs',
  'NPM'
];

// SOCIAL ICONS
export const SHARE: Share[] = [
  { name: 'facebook', image: 'assets/img/share/facebook.png' },
  { name: 'twitter', image: 'assets/img/share/twitter.png' },
  { name: 'share', image: 'assets/img/share/share.png' },
  { name: 'comment', image: 'assets/img/share/comment.png' },
  { name: 'emoji', image: 'assets/img/share/emoji.png' }
];

export const EMOJIS: Emoji[] = [
  { title: 'Love', height: '5', image: 'in-love.png' },
  { title: 'Laugh', height: '70', image: 'laughing.png' },
  { title: 'Wow', height: '50', image: 'surprised.png' },
  { title: 'Sad', height: '100', image: 'embarrassed.png' },
  { title: 'Angry', height: '25', image: 'angry.png' },
];

// MAIN ARTICLES
export const MAIN: string[] = [
  '5cefd7f4275e0e24b43a78d4'
];

// COMMENTS
export const COMMENTS: Comment[] = [
  {
    _id: '1',
    author: 'Harry George',
    created: 'Dec 1, 2017 at 11.25 pm',
    comment: 'Awesome theme. Must buy really worth it. Love it!'
  },
  {
    _id: '2',
    author: 'Sergi Martinez',
    created: 'Dec 1, 2017 at 11.25 pm',
    comment: 'Awesome theme. Must buy really worth it. Love it!'
  },
  {
    _id: '3',
    author: 'Harry George',
    created: 'Dec 1, 2017 at 11.25 pm',
    comment: 'Awesome theme. Must buy really worth it. Love it!'
  },
  {
    _id: '4',
    author: 'Harry George',
    created: 'Dec 1, 2017 at 11.25 pm',
    comment: 'Awesome theme. Must buy really worth it. Love it!'
  },
  {
    _id: '5',
    author: 'Harry George',
    created: 'Dec 1, 2017 at 11.25 pm',
    comment: 'Awesome theme. Must buy really worth it. Love it!'
  },
  {
    _id: '6',
    author: 'Harry George',
    created: 'Dec 1, 2017 at 11.25 pm',
    comment: 'Awesome theme. Must buy really worth it. Love it!'
  },
  {
    _id: '7',
    author: 'Harry George',
    created: 'Dec 1, 2017 at 11.25 pm',
    comment: 'Awesome theme. Must buy really worth it. Love it!'
  },
  {
    _id: '8',
    author: 'Harry George',
    created: 'Dec 1, 2017 at 11.25 pm',
    comment: 'Awesome theme. Must buy really worth it. Love it!'
  },
  {
    _id: '9',
    author: 'Harry George',
    created: 'Dec 1, 2017 at 11.25 pm',
    comment: 'Awesome theme. Must buy really worth it. Love it!'
  },
  {
    _id: '10',
    author: 'Harry George',
    created: 'Dec 1, 2017 at 11.25 pm',
    comment: 'Awesome theme. Must buy really worth it. Love it!'
  }
];

// HISTORY
export const HISTORY: History[] = [
  {
    article: 'How to get the perfect travel shot',
    type: 'Like'
  },
  {
    article: 'How to get the perfect travel shot',
    type: 'Comment'
  },
  {
    article: 'How to get the perfect travel shot',
    type: 'Reaction'
  },
  {
    article: 'How to get the perfect travel shot',
    type: 'Like'
  },
  {
    article: 'How to get the perfect travel shot',
    type: 'Like'
  },
  {
    article: 'How to get the perfect travel shot',
    type: 'Comment'
  },
  {
    article: 'How to get the perfect travel shot',
    type: 'Like'
  },
  {
    article: 'How to get the perfect travel shot',
    type: 'Reaction'
  },
  {
    article: 'How to get the perfect travel shot',
    type: 'Reaction'
  },
  {
    article: 'How to get the perfect travel shot',
    type: 'Like'
  },
];


