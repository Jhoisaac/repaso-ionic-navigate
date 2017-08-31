import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListadoProvider } from "../../providers/listado/listado";
import { Producto } from '../../interfaces/producto';
import { ProductoPage } from '../index.pages';

/**
 * Generated class for the ListadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {
  urlProducto: string = 'https://pruebatp2017a-dkuran.c9users.io/producto';
  productos: Producto[] = [];
  products: any[] = [
    {
      nombre: 'Charizard',
      poder: 'Lanza Llamas',
    },
    {
      nombre: 'Blastoise',
      poder: 'Hidrogen',
    },
    {
      nombre: 'Venusaur',
      poder: 'Rayo Solar',
    }
  ];
  producto: string = "product1";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private listadoProvider: ListadoProvider) {
    this.obtenerProductos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

  obtenerProductos() {
    console.log('obteniendo productos...');
    console.log(this.listadoProvider.getProductos());
    this.listadoProvider.getProductos().subscribe(
      res => {
        console.log(res);
      }
    );
  }

  mostrarProducto(producto: string) {
    console.log('categoria seleccionada');
    this.navCtrl.push(ProductoPage, {'parametro': this.producto});
  }
}
