import { STORAGE_CONSTANTS } from '@app/core/storage/storage.config';
import { APP_CONSTANTS } from '../../app.config';

  export interface Article {
  _id?: string;
  title?: string;
  category?: string;
  author?: string;
  created?: string;
  message?: string;
  comments?: number;
  slug?: string;
  cover?: string;
  code?: Code[];
}

export interface ArticleResponse {
  ok: boolean;
  message: string;
  articles?: Article[];
  article?: Article;
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  account: string;
  avatar?: string;
}

export interface UserResponse {
  ok: boolean;
  message: string;
  user: User;
  token?: string;
}

export interface UserInfo {
  comments?: number;
  reactions?: number;
}

export interface UserInfoResponse {
  ok: boolean;
  message: string;
  comments?: number;
  reactions?: number;
}

export interface Comment {
  _id?: string;
  author: string;
  created?: string;
  comment: string;
  user?: User;
  article?: Article;
}

export interface CommentResponse {
  ok: boolean;
  message: string;
  comment?: Comment;
  comments?: Comment[];
}

export interface Reaction {
  _id?: string;
  author: string;
  created?: string;
  reaction: string;
  user?: User;
  article?: Article;
}

export interface ReactionResponse {
  ok: boolean;
  message: string;
  reaction?: Reaction;
  reactions?: Reaction[];
}

export interface NextPrevResponse {
  ok: boolean;
  message: string;
  next?: Article;
  prev?: Article;
}

export interface Category {
  name: string;
  icon: string;
}

export interface CategorySlide {
  category: string;
  image: string;
}

export interface History {
  title: string;
  created?: string;
  type: string;
}

export interface HistoryResponse {
  ok: boolean;
  message: string;
  history: History[];
}

export interface Code {
  code: string;
  lang: string;
  tooltip: boolean;
}

export interface Media {
  logo: string;
  action: string;
  kind: string;
  people?: number;
}

export interface Emoji {
  title: string;
  height: number;
  image: string;
}

export interface Item {
  name: string;
  url: string;
}

export interface Share {
  name: string;
  image: string;
}

export interface Color {
  name: string;
  color: string;
}

export interface HttpError {
  name: string;
  status: number;
  statusText: string;
  url: string;
  author?: string;
}

// CLASSES

export class AppStorage {
  id?: string;
  token?: string;
  remember?: boolean;
  theme?: string;
  language?: string;

  constructor(token: string = STORAGE_CONSTANTS.TOKEN,
              remember: boolean = false,
              theme: string = 'default',
              language: string = APP_CONSTANTS.DEFAULT_LANGUAGE) {
    this.token = token;
    this.remember = remember;
    this.theme = theme;
    this.language = language;
  }

}

export class Counter {
  constructor(public love: number = 0,
              public laugh: number = 0,
              public wow: number = 0,
              public sad: number = 0,
              public angry: number = 0) {
    this.love = love;
    this.laugh = laugh;
    this.wow = wow;
    this.sad = sad;
    this.angry = angry;
  }

  getTotal(): number {
    return this.love + this.laugh + this.wow + this.sad + this.angry;
  }
}
