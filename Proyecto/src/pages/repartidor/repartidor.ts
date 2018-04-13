import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the RepartidorPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repartidor',
  templateUrl: 'repartidor.html'
})
export class RepartidorPage {

  listaPaquetesRoot = 'ListaPaquetesPage'
  entregaCursoRoot = 'EntregaCursoPage'


  constructor(public navCtrl: NavController) {}

}
