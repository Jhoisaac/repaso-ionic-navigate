import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  producto: any = {};
  productoUrl: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.producto = this.navParams.get('parametro');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }

  regresar() {
    this.navCtrl.pop();
  }

  regresarRoot() {
    this.navCtrl.popToRoot();
  }

}
