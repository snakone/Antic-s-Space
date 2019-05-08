import { STORAGE_CONSTANTS } from '@app/core/storage/storage.config';

export interface Article {
  _id?: string;
  title?: string;
  category?: string;
  author?: string;
  created?: string;
  message?: string;
  comments?: number;
  images?: string[];
}

export interface ArticleResponse {
  ok: boolean;
  message: string;
  articles?: Article[];
  article?: Article;
  page?: number;
}

export class AppStorage {
  id?: string;
  token?: string;
  constructor(token: string = STORAGE_CONSTANTS.TOKEN) {
    this.token = token;
  }
}
