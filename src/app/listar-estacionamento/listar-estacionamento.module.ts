import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarEstacionamentoPage } from './listar-estacionamento.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEstacionamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarEstacionamentoPage]
})
export class ListarEstacionamentoPageModule {}
