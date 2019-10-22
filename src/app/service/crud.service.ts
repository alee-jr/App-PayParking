import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { Park } from '../park';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private usersCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>;

  private parkCollection: AngularFirestoreCollection<Park>;
  private parks: Observable<Park[]>;

  constructor(private firestore: AngularFirestore) { 
    this.usersCollection = firestore.collection<User>('usuarios');
    
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
    return this.usersCollection.doc<User>(id).valueChanges();
  }

  updateTodo(user: User, id: string) {
    return this.usersCollection.doc(id).update(user);
  }
 
  addTodo(user: User) {
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

  read(){
    return this.firestore.collection('estacionamentos').snapshotChanges();
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
