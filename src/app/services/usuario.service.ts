import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable, Observer } from 'rxjs';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore) { }

  addPersona(per: Persona) {
    const personaRef = collection(this.firestore, 'persona');
    return addDoc(personaRef, per)
  }

  getPersona(): Observable<Persona[]> {
    const personaRef = collection(this.firestore, 'persona');
    return collectionData(personaRef, { idField: 'id' }) as Observable<Persona[]>
  }


}
