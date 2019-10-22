import { Component, OnInit } from '@angular/core';
import { CrudService} from '../service/crud.service';
import { Park } from '../park';

@Component({
  selector: 'app-listar-estacionamento',
  templateUrl: './listar-estacionamento.page.html',
  styleUrls: ['./listar-estacionamento.page.scss'],
})
export class ListarEstacionamentoPage implements OnInit {

  parks: Park[];

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.getPark().subscribe(res => {
      this.parks = res;
    });
  }

  remove(item) {
    this.crud.removePark(item.id);
  }
}
