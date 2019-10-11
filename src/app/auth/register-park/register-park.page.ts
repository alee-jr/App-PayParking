import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService, Park } from 'src/app/service/crud.service';

@Component({
  selector: 'app-register-park',
  templateUrl: './register-park.page.html',
  styleUrls: ['./register-park.page.scss'],
})
export class RegisterParkPage implements OnInit {


  park: Park = {
    email: '',
    endereco: '',
    nome: '',
    razao: '',
    cnpj: 123123,
    responsavel: '',
    rg: '',
    vagas: 123,
    preco: 12312,
    senha: ''
  };

  constructor(private crud: CrudService, private  router:  Router) { }

  ngOnInit() {
  }

  cadastrar(){
    this.crud.addPark(this.park);
    console.log('ok');
    this.router.navigateByUrl('gerenciamento');
  }
  
}
