import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Reserva } from '../reserva';
import { Park } from '../park';
import { User } from '../user';


@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.page.html',
  styleUrls: ['./gerenciamento.page.scss'],
})
export class GerenciamentoPage implements OnInit {

  reservas: Reserva[];
  parks: Park[];
  users: User[];
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.getUsers().subscribe(res => {
      this.users = res;
    });

    this.crud.getPark().subscribe(res => {
      this.parks = res;
    });
    this.crud.getReserva().subscribe(res =>{
      this.reservas = res;
    });
  }

}
