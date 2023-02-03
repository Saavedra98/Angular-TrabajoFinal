import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore, docData } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {

  constructor(private firestore: Firestore) { }

  addProducto(producto: Producto){
    const productoRef = collection(this.firestore, 'producto');
    return addDoc(productoRef, producto)
  }

  getProductos(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'producto');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  deletedProducto(producto: Producto) {
    const productoRef = doc(this.firestore, `producto/${producto.id}`)
    return deleteDoc(productoRef);
  }

  getProdOnly(prod:string):Observable<Producto>{
    const productoRef=doc(this.firestore, `producto/${prod}`)
    return docData(productoRef) as Observable<Producto>
  }


}
