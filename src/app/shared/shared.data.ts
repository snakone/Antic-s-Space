import { Comment } from './interfaces/interfaces';

// MENU
export const MENU: Item[] = [
  { name: 'Home', url: '/home' },
  { name: 'Gaming', url: '/gaming' }
];

interface Item {
  name: string;
  url: string;
}

// HOME SLIDERS
export const mainSliderOpts = {
  slidesPerView: 1,
  spaceBetween: 5
};

export const smallSliderOpts = {
  slidesPerView: 1.3,
  spaceBetween: 5
};

// SOCIAL ICONS
export const SOCIAL: Media[] = [
  { logo: 'assets/img/facebook.png', action: 'Like', people: 21.244, kind: 'Fans' },
  { logo: 'assets/img/twitter.png', action: 'Follow', people: 9.877, kind: 'Followers' },
  { logo: 'assets/img/youtube.png', action: 'Subscribe', people: 5.422, kind: 'Subscribers' },
];

export const SHARE: any[] = [
  { name: 'facebook', image: 'assets/img/share/facebook.png' },
  { name: 'twitter', image: 'assets/img/share/twitter.png' },
  { name: 'google', image: 'assets/img/share/google+.png' },
  { name: 'share', image: 'assets/img/share/share.png' },
  { name: 'comment', image: 'assets/img/share/comment.png' },
  { name: 'emoji', image: 'assets/img/share/emoji.png' }
];

export interface Media {
  logo: string;
  action: string;
  kind: string;
  people?: number;
}

export interface Emoji {
  title: string;
  height: string;
  image: string;
}

export const EMOJIS: Emoji[] = [
  { title: 'Love', height: '5', image: 'in-love.png' },
  { title: 'Laugh', height: '70', image: 'laughing.png' },
  { title: 'Wow', height: '50', image: 'surprised.png' },
  { title: 'Sad', height: '100', image: 'embarrassed.png' },
  { title: 'Angry', height: '25', image: 'angry.png' },
]

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

