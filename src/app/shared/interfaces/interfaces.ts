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
  code?: string[];
  images?: string[];
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

export interface Comment {
  _id?: string;
  author: string;
  created: string;
  comment: string;
  user?: User;
}

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

export interface Item {
  name: string;
  url: string;
}

export interface Share {
  name: string;
  image: string;
}

export interface History {
  article: string;
  type: string;
}

export interface HttpError {
  name: string;
  status: number;
  statusText: string;
  url: string;
  author?: string;
}

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
