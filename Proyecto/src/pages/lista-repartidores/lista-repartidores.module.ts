import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaRepartidoresPage } from './lista-repartidores';

@NgModule({
  declarations: [
    ListaRepartidoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaRepartidoresPage),
  ],
})
export class ListaRepartidoresPageModule {}
