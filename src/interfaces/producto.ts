/**
 * Created by Usuario01 on 27/07/2017.
 */
// export interface Producto {
//   nombre: string;
//   lugar: string;
//   longitud: number;
//   latitud: string;
//   categoria: string;
// }

export interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  image: number;
  categoria: string;
  id$?: string;
}
