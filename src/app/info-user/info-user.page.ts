import { Component, OnInit } from '@angular/core';
import { CrudService} from '../service/crud.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { User } from '../user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.page.html',
  styleUrls: ['./info-user.page.scss'],
})
export class InfoUserPage implements OnInit {

  user: User = {
    nome: '',
    sobrenome: '',
    telefone: null,
    email: '',
    rg: '',
    senha: '',
  };
  
  todoId = null;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute, private nav: NavController,
     private crud: CrudService, private loadingController: LoadingController) { 
     }
 
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }
 
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Info..'
    });
    await loading.present();
 
    this.crud.getUser(this.todoId).subscribe(res => {
      loading.dismiss();
      this.user = res;
    });
  }
 
  async saveTodo() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Info..'
    });
    await loading.present();
 
    if (this.todoId) {
      this.crud.updateTodo(this.user, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }
}
