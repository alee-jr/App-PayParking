import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Park } from '../park';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Reserva } from '../reserva';
import { User } from '../user';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  parks: Park[];
  users: User[];

  reserva: Reserva;
  email: any;
  endereco: any;
  valor: any;
  valor2: any;
  public reservaForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private crud: CrudService, private route: ActivatedRoute, private auth: AuthenticationService) {
    if (this.auth.userDetails()) {
      this.email = this.auth.userDetails().email;
    }
    this.endereco = this.route.snapshot.params['id'];
    this.carregar();
    
  }

  ngOnInit() {
    this.endereco = this.route.snapshot.params['id'];

    if (this.auth.userDetails()) {
      this.email = this.auth.userDetails().email;
    }
    
  }

  carregar() {
    
    this.reservaForm = new FormGroup({
      data: new FormControl('', Validators.required),
      horario: new FormControl('', Validators.required),
      userId: new FormControl(this.email),
      parkId: new FormControl(this.endereco)
    });
  }

  async reservar(value) {
    this.crud.addReserva(value);
  }

}
