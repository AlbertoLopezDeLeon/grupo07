import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPaquetesPage } from './lista-paquetes';

@NgModule({
  declarations: [
    ListaPaquetesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPaquetesPage),
  ],
})
export class ListaPaquetesPageModule {}
