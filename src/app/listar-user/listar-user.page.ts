import { Component, OnInit } from '@angular/core';
import { CrudService, Users } from '../service/crud.service';

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.page.html',
  styleUrls: ['./listar-user.page.scss'],
})
export class ListarUserPage implements OnInit {
  
  users: Users[];

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  remove(item) {
    this.crud.removeTodo(item.id);
  }
  
}
