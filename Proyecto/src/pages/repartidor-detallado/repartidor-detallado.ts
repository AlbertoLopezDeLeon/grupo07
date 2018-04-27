import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { TipoUsuario, Usuario} from '../../models/usuario';
import { LoginPage } from '../../pages/login/login';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Entrega} from '../../models/entrega';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RepartidorDetalladoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repartidor-detallado',
  templateUrl: 'repartidor-detallado.html',
})
export class RepartidorDetalladoPage {
	listaUsuarios: any;
	id='';
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, 
				public dbFirebase:FirebaseDbProvider, public toastCtrl: ToastController) {
	this.id=navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepartidorDetalladoPage');
  }
	
  ionViewDidEnter(){
		this.dbFirebase.getUsuarios().subscribe(listaUsuarios=>{this.listaUsuarios=listaUsuarios;});
  }

  goToLoginPage() {
	const root = this.app.getRootNav();
	root.popToRoot();
  }
  
  asignacionAutomaticaMensaje() {
		let toast = this.toastCtrl.create({
		  message: 'Funcionalidad no implementada',
		  duration: 3000
		});
		toast.present();
	}
}
