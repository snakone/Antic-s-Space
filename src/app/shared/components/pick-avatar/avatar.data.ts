export const AVATARS: Avatar[] = [
  { img: 'avatar-1.png', selected: true, index: 1 },
  { img: 'avatar-2.png', selected: false, index: 2 },
  { img: 'avatar-3.png', selected: false, index: 3 },
  { img: 'avatar-4.png', selected: false, index: 4 },
  { img: 'avatar-5.png', selected: false, index: 5 },
  { img: 'avatar-6.png', selected: false, index: 6 },
  { img: 'avatar-7.png', selected: false, index: 7 },
  { img: 'avatar-8.png', selected: false, index: 8 },
  { img: 'avatar-9.png', selected: false, index: 9 },
  { img: 'avatar-10.png', selected: false, index: 10 },
  { img: 'avatar-11.png', selected: false, index: 11 },
  { img: 'avatar-12.png', selected: false, index: 12 },
  { img: 'avatar-13.png', selected: false, index: 13 },
  { img: 'avatar-14.png', selected: false, index: 14 },
  { img: 'avatar-15.png', selected: false, index: 15 },
  { img: 'avatar-16.png', selected: false, index: 16 },
  { img: 'avatar-17.png', selected: false, index: 17 },
  { img: 'avatar-18.png', selected: false, index: 18 },
];

export const SliderAvatarOpts = {
  effect: 'flip',
  zoom: false,
  noSwiping: false,
  breakpoints: {
    800: {
      slidesPerView: 3.8,
      spaceBetween: 10
    },
    1920: {
      slidesPerView: 4.8,
      spaceBetween: 10
    }
  }
};

export interface Avatar {
  img: string;
  selected: boolean;
  index: number;
}


