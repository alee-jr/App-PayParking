import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { CrudService, Park } from '../service/crud.service';

@Component({
  selector: 'app-info-estacionamento',
  templateUrl: './info-estacionamento.page.html',
  styleUrls: ['./info-estacionamento.page.scss'],
})
export class InfoEstacionamentoPage implements OnInit {

  park: Park = {
    email: '',
    endereco: 'rararr',
    nome: 'test',
    razao: 'lala',
    cnpj: 23424,
    responsavel: 'dasad',
    rg: '123231',
    vagas: 10,
    preco: 10,
    senha: 'asd'
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
 
    this.crud.getParks(this.todoId).subscribe(res => {
      loading.dismiss();
      this.park = res;
    });
  }
 
  async saveTodo() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
 
    if (this.todoId) {
      this.crud.updatePark(this.park, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    } else {
      this.crud.addPark(this.park).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }
}
