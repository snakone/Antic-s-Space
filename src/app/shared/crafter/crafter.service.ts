import { Injectable } from '@angular/core';
import {
  AlertController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ComponentRef } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})

export class CrafterService {

    constructor(private alertCtrl: AlertController,
                private toastCtrl: ToastController,
                private popOverCtrl: PopoverController,
                private translate: TranslateService,
                private modalCtrl: ModalController) {
      console.log('CrafterService');
  }

  public close(): void {
    this.popOverCtrl.dismiss();
  }

  public async alert(message: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Antic\'s Space',
      message: this.translateMessage(message),
      buttons: ['OK']
    });
    await alert.present();
  }

  public async toast(message: string): Promise<void> {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      color: 'light',
      position: 'top',
      cssClass: 'toast-sheet'
    });
    await toast.present();
  }

  public async modal(component: ComponentRef, data?: any): Promise<void> {
    if (this.modalCtrl.getTop()) { return; }
    const modal = await this.modalCtrl.create({
      component,
      componentProps: data
    });
    return await modal.present();
  }

  public async popOver(component: ComponentRef, data?: any): Promise<void> {
    const popover = await this.popOverCtrl.create({
      component: component,
      componentProps: data
    });
    return await popover.present();
  }

  private translateMessage(msg: string): string {
    const message = this.translate.instant(msg);
    return message;
  }

}

