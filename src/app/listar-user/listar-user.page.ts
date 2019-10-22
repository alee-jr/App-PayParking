import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { User } from '../user';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { Park } from '../park';

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.page.html',
  styleUrls: ['./listar-user.page.scss'],
})
export class ListarUserPage implements OnInit {
  
  users: User[];
  email: string;
  parks: Park[];

  constructor(private router: Router, private auth: AuthenticationService, private crud: CrudService) { }

  ngOnInit() {
    this.crud.getUsers().subscribe(res => {
      this.users = res;
    });

    this.crud.getPark().subscribe(res => {
      this.parks = res;
    });
    
    if(this.auth.userDetails()){
      this.email = this.auth.userDetails().email;
    }
  }

  remove(item) {
    this.crud.removeTodo(item.id);
    this.router.navigateByUrl('/login');
  }
  remover(item) {
    this.crud.removeTodo(item.id);
    this.router.navigateByUrl('/login-park');
  }
}
