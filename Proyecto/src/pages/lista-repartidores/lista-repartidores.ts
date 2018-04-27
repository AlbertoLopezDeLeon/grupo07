import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RepartidorDetalladoPage } from '../../pages/repartidor-detallado/repartidor-detallado';
import { TipoUsuario, Usuario} from '../../models/usuario';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Entrega} from '../../models/entrega';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ListaRepartidoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-repartidores',
  templateUrl: 'lista-repartidores.html',
})
export class ListaRepartidoresPage {
  
  listaUsuarios: any;
  id='';
	constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public dbFirebase:FirebaseDbProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaRepartidoresPage');
  }

  ionViewDidEnter(){
		this.dbFirebase.getUsuarios().subscribe(listaUsuarios=>{this.listaUsuarios=listaUsuarios;});
  }
	
  goToLoginPage() {
	//this.navCtrl.setRoot(LoginPage);
	const root = this.app.getRootNav();
	root.popToRoot();
  }
  
  goToRepDet(identificador){
	  this.navCtrl.push(RepartidorDetalladoPage,{id:identificador});
  }
  asignacionAutomaticaMensaje() {
		let toast = this.toastCtrl.create({
		  message: 'Funcionalidad no implementada',
		  duration: 3000
		});
		toast.present();
	}
  
}
