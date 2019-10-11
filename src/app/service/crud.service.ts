import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Users{
  id?: string;
  nome: string;
  sobrenome: string;
  telefone: number;
  email: string;
  rg: string;
  senha: string;
}

export interface Park{
  id?: string;
  email: string;
  endereco: string;
  nome: string;
  razao: string;
  cnpj: number;
  responsavel: string;
  rg: string;
  vagas: number;
  preco: number;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private usersCollection: AngularFirestoreCollection<Users>;
  private users: Observable<Users[]>;

  private parkCollection: AngularFirestoreCollection<Park>;
  private parks: Observable<Park[]>;

  constructor(private firestore: AngularFirestore) { 
    this.usersCollection = firestore.collection<Users>('usuarios');
 
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );


    this.parkCollection = firestore.collection<Park>('estacionamentos');
    this.parks = this.parkCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  //Usuários 
  
  getUsers() {
    return this.users;
  }
 
  getUser(id) {
    return this.usersCollection.doc<Users>(id).valueChanges();
  }

  updateTodo(user: Users, id: string) {
    return this.usersCollection.doc(id).update(user);
  }
 
  addTodo(user: Users) {
    return this.usersCollection.add(user);
  }
 
  removeTodo(id) {
    return this.usersCollection.doc(id).delete();
  }

  //Estacionamentos

  getPark() {
    return this.parks;
  }
 
  getParks(id) {
    return this.parkCollection.doc<Park>(id).valueChanges();
  }

  updatePark(park: Park, id: string) {
    return this.parkCollection.doc(id).update(park);
  }
 
  addPark(park: Park) {
    return this.parkCollection.add(park);
  }
 
  removePark(id) {
    return this.parkCollection.doc(id).delete();
  }
}
