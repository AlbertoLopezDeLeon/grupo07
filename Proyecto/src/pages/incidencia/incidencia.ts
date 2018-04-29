import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { TipoUsuario, Usuario} from '../../models/usuario';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Entrega} from '../../models/entrega';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the IncidenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incidencia',
  templateUrl: 'incidencia.html',
})
export class IncidenciaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public dbFirebase:FirebaseDbProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncidenciaPage');
  }
  
  goToLoginPage() {
	const root = this.app.getRootNav();
	root.popToRoot();
  }

}
