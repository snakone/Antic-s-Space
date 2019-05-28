import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppStorage } from '@app/shared/interfaces/interfaces';
import { STORAGE_CONSTANTS } from './storage.config';

@Injectable()

export class StorageService {

  data: AppStorage = new AppStorage();

  constructor(private storage: Storage) {
    console.log('StorageService');
  }

  public async load(): Promise<any> {
    const settings: AppStorage = await this.storage.get(STORAGE_CONSTANTS.KEY);
    settings ? this.data = settings : this.save();
  }

  public async save(key?: string, value?: any): Promise<any> {
    if (key) { this.data[key] = value; }
    await this.storage.set(STORAGE_CONSTANTS.KEY, this.data);
  }

  // GET
  public get(): AppStorage {
    return this.data;
  }

  public getToken(): string {
    return this.data.token;
  }

  public getId(): string {
    return this.data.id;
  }

  public getTheme(): string {
    return this.data.theme;
  }

  public getLanguage(): string {
    return this.data.language;
  }

  public getRemember(): boolean {
    return this.data.remember;
  }

  // SET
  public setToken(token: string): void {
    if (!token) { return; }
    this.data.token = token;
    this.save();
  }

  public setId(id: string): void {
    this.data.id = id;
    this.save();
  }

  public setLanguage(lang: string) {
    this.data.language = lang;
    this.save();
  }

  // CLEAR
  public async clear(): Promise<void> {
    this.save(STORAGE_CONSTANTS.TOKEN_KEY, '');
  }

  public async reset(): Promise<void> {
    this.data = new AppStorage();
    await this.storage.clear();
  }

}
