import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { NuevaVentanaPage } from "../nueva-ventana/nueva-ventana";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }

  irALaNuevaVentana() {
      this.navCtrl.push(NuevaVentanaPage);
  }

}
