import { InjectionToken } from '@angular/core';

export interface ModuleConfig {
  KEY: string;
  TOKEN_KEY: string;
}

export interface StorageConfig extends ModuleConfig {
  TOKEN: string;
}

export const STORAGE_CONSTANTS: StorageConfig = {
  KEY: 'settings',
  TOKEN_KEY: 'token',
  TOKEN: '',
};

export let STORAGE_CONFIG = new InjectionToken<StorageConfig>('storage.config');