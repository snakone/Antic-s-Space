import { STORAGE_CONSTANTS } from '@app/core/storage/storage.config';

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

export class AppStorage {
  id?: string;
  token?: string;
  remember?: boolean;
  constructor(token: string = STORAGE_CONSTANTS.TOKEN,
              remember: boolean = false) {
    this.token = token;
    this.remember = remember;
  }
}
