import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User;
  public userForm: FormGroup;   
  errorMessage: string = '';
  successMessage: string = ''; 
  
  constructor(private crud: CrudService, private router: Router, private auth: AuthenticationService) {
    this.userForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      telefone: new FormControl(''),
      email: new FormControl('', Validators.required),
      rg: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      placa: new FormControl('', Validators.required),
      nCartao: new FormControl('', Validators.required),
      nomeCartao: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
    
  }

  cadastrar(value){
      this.auth.registerUser(value.email, value.password).then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created. Please log in.";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      });
      this.crud.addTodo(value);
      this.router.navigateByUrl('home');
    
  
   
  }
  

}
