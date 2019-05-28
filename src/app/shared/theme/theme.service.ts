import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { StorageService } from '@core/storage/storage.service';

@Injectable()

export class ThemeService {

  renderer: Renderer2;
  theme: string;

  constructor(rendererFactory: RendererFactory2,
              private storage: StorageService) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setDefault(): void {
    this.renderer.addClass(document.body, 'default');
  }

  getTheme(): string {
    if (!this.theme) {
      return this.storage.getTheme();
    }
    return this.theme;
  }

  async setTheme(color: string): Promise<void> {
    await this.storage.save('theme', color);
    this.theme = color;
  }

  addBodyClass(bodyClass: string): void {
    this.renderer.addClass(document.body, bodyClass);
  }

  removeBodyClass(bodyClass: string): void {
    this.renderer.removeClass(document.body, bodyClass);
  }

}
