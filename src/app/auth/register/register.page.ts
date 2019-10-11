import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService, Users, Park } from 'src/app/service/crud.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: Users;
  public userForm: FormGroup;    
  
  constructor(private crud: CrudService, private router: Router) {
    this.userForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      telefone: new FormControl(''),
      email: new FormControl('', Validators.required),
      rg: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
    
  }

  cadastrar(){
    if(this.userForm.valid){
      this.user = (
        this.userForm.controls['nome'].value,
          this.userForm.controls['sobrenome'].value,
          this.userForm.controls['telefone'].value,
          this.userForm.controls['email'].value,
          this.userForm.controls['rg'].value,
          this.userForm.controls['senha'].value
      )
      this.crud.addTodo(this.user);
      this.router.navigateByUrl('home');
    }
  
   
  }
  

}
