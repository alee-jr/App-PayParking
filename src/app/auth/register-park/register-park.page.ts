import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService} from 'src/app/service/crud.service';
import { Park } from 'src/app/park';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-register-park',
  templateUrl: './register-park.page.html',
  styleUrls: ['./register-park.page.scss'],
})
export class RegisterParkPage implements OnInit {

  park: Park;
  public parkForm: FormGroup
  errorMessage: string = '';
  successMessage: string = ''; 
  
  constructor(private crud: CrudService, private router: Router, private auth: AuthenticationService) {
      this.parkForm = new FormGroup({
        email: new FormControl('', Validators.required),
        endereco: new FormControl('', Validators.required),
        nome: new FormControl('', Validators.required),
        razao: new FormControl('', Validators.required),
        cnpj: new FormControl('', Validators.required),
        responsavel: new FormControl('', Validators.required),
        rg: new FormControl('', Validators.required),
        vagas: new FormControl('', Validators.required),
        preco: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
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
    this.crud.addPark(value);
    this.router.navigateByUrl('gerenciamento');
  }
  
}
