import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-login-park',
  templateUrl: './login-park.page.html',
  styleUrls: ['./login-park.page.scss'],
})
export class LoginParkPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  constructor(private crud: CrudService, private navCtrl: NavController, private auth: AuthenticationService,     private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  loginUser(value){
    this.auth.loginUser(value.email, value.password)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.navCtrl.navigateForward('/gerenciamento');
    }, err => {
      this.errorMessage = err.message;
    })
  }
  
}
