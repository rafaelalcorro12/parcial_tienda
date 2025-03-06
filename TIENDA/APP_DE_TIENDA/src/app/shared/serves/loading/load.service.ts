import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  private loading: HTMLIonLoadingElement | null = null;

  constructor(private readonly loadControl: LoadingController) { }

  async show(message: string = 'Cargando...') {
    this.loading = await this.loadControl.create({
      message,
      spinner: 'bubbles',
      duration: 3000
    });
    await this.loading.present();
  }

  async dismiss() {
    if(this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
}
