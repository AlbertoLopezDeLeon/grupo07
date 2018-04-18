import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdministradorPage } from '../administrador/administrador';
import { RepartidorPage } from '../repartidor/repartidor';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario: string;
  contrasenya: string;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	login(){
		if (this.usuario.match("Cristian") && this.contrasenya.match("1234")) {
			this.navCtrl.setRoot(AdministradorPage); 
		}
		else 
		{
			this.navCtrl.setRoot(RepartidorPage); 
		}
	}

}
