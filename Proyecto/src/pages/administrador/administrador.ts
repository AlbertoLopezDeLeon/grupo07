import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AdministradorPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administrador',
  templateUrl: 'administrador.html'
})
export class AdministradorPage {

  asignacionRepartosRoot = 'AsignacionRepartosPage'
  listaRepartidoresRoot = 'ListaRepartidoresPage'
  verIncidenciasRoot = 'VerIncidenciasPage'


  constructor(public navCtrl: NavController) {}

}
