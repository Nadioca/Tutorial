import { Component } from '@angular/core';
import { AlertController } from "ionic-angular";

@Component({
    selector: 'page-nueva-ventana',
  templateUrl: 'nueva-ventana.html'
})
export class NuevaVentanaPage {

    animales: Array<{ nombre: string}>;

  constructor(public alertCtrl: AlertController) {
      this.animales = [
          { nombre: "Perro" },
          { nombre: "Gato" },
          { nombre: "Loro"}
      ]
  }

  presentAlert(nombre: string) {
      let alert = this.alertCtrl.create({
          title: nombre,
          subTitle: 'Queda un 10% de Batería',
          buttons: ['Cancelar']
      });
      alert.present();
  }

  mostrarAlerta(nombre: string) {
      this.presentAlert(nombre);
  }
}
