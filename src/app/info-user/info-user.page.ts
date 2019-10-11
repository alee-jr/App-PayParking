import { Component, OnInit } from '@angular/core';
import { CrudService, Users } from '../service/crud.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.page.html',
  styleUrls: ['./info-user.page.scss'],
})
export class InfoUserPage implements OnInit {

  user: Users = {
    nome: 'test',
    sobrenome: 'lala',
    telefone: 23424,
    email: 'dasad',
    rg: '123231',
    senha: 'sdads',
  };
  
  todoId = null;
  
 
  constructor(private route: ActivatedRoute, private nav: NavController, private crud: CrudService, private loadingController: LoadingController) { }
 
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }
 
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    this.crud.getUser(this.todoId).subscribe(res => {
      loading.dismiss();
      this.user = res;
    });
  }
 
  async saveTodo() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
 
    if (this.todoId) {
      this.crud.updateTodo(this.user, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    } else {
      this.crud.addTodo(this.user).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }
}
