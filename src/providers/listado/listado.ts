import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListadoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ListadoProvider {
  // urlProducto: string = 'https://pruebatp2017a-dkuran.c9users.io/producto';
  urlProducto: string = 'http://localhost:1337/api';
  products: any = [
    {
      nombre: 'Grapadora',
      codigo: '0001',
      precio: 5.76,
      url: 'https://www.officedepot.com.mx/medias/?context=bWFzdGVyfHJvb3R8MTM2NjB8aW1hZ2UvZ2lmfGhhZC9oM2YvODc5NzE0MDU0OTY2Mi5naWZ8MWJkZmRmNDM0ZmM5NDNkZWQ5M2RlNzBlY2M5OGZmNTZlNjIxYjM3OTRlNDFjZDQyYTdjNTc1ODJlNjMxMTkzZQ',
      categoria: 'Oficina',
    },
    {
      nombre: 'Laptop',
      codigo: '0006',
      precio: 565.76,
      url: '',
      categoria: 'Electronicos',
    },
    {
      nombre: 'Arroz',
      codigo: '00011',
      precio: 5.76,
      url: '',
      categoria: 'Comestibles',
    },
    {
      nombre: 'Pilsener',
      codigo: '00016',
      precio: 1.10,
      url: '',
      categoria: 'Bebidas',
    },
  ];
  results: any[] = [];

  constructor(public http: Http) {
    console.log('Hello ListadoProvider Provider');
  }

  getProductos() {
    console.log('obteniendo productos...');

    return this.http.get(`${this.urlProducto}/productos`)
      .map(
        res => {
          console.log(res.json());
          res.json() ? this.results = res.json() : this.products;

          return this.results;
        }
      );

    //return this.products;
  }
}
