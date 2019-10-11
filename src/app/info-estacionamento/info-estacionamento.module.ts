import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoEstacionamentoPage } from './info-estacionamento.page';

const routes: Routes = [
  {
    path: '',
    component: InfoEstacionamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoEstacionamentoPage]
})
export class InfoEstacionamentoPageModule {}
