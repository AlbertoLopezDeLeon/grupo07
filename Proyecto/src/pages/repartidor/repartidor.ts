import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { TipoUsuario, Usuario} from '../../models/usuario';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Entrega} from '../../models/entrega';
import { ToastController } from 'ionic-angular';

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

  repartidorParams = { repartidor: this.navParams.get('repartidor')};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  }

}
