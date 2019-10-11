import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userEmail;
  userSenha;
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
    
  }

  
  
  
}
