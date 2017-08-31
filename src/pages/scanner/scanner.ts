import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpModule } from '@angular/http';
import { ListadoPage } from '../index.pages';

/**
 * Generated class for the ScannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {
  listadoPage: any = ListadoPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _menuCtrl: MenuController,
              private toastCtrl: ToastController,
              private barcodeScanner: BarcodeScanner,
              private http: HttpModule) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScannerPage');
  }

  mostrarMenu() {
    console.log('mostrarMenu() ejecutado!');
    this._menuCtrl.toggle();
  }

  irListado() {
    this.navCtrl.push(this.listadoPage);
  }

  procesar() {
    console.log('Procesando ... :)');

    this.barcodeScanner.scan().then( ( res ) => {
      // Success! Barcode data is here
      this.mostrarMensaje(res.text);

    }, (err) => {
      // An error occurred
      this.mostrarMensaje(err);
    });
  }

  mostrarMensaje(mensaje: string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
    });

    toast.present();
  }

}
