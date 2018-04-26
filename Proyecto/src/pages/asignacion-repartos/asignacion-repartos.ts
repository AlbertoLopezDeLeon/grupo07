import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';


/**
 * Generated class for the AsignacionRepartosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asignacion-repartos',
  templateUrl: 'asignacion-repartos.html',
})
export class AsignacionRepartosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsignacionRepartosPage');
  }

  goToLoginPage() {
	const root = this.app.getRootNav();
	root.popToRoot();
  }
  
}
