import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerIncidenciasPage } from './ver-incidencias';

@NgModule({
  declarations: [
    VerIncidenciasPage,
  ],
  imports: [
    IonicPageModule.forChild(VerIncidenciasPage),
  ],
})
export class VerIncidenciasPageModule {}
