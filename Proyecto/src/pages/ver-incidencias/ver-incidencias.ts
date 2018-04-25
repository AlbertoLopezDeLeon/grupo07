import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the VerIncidenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-incidencias',
  templateUrl: 'ver-incidencias.html',
})
export class VerIncidenciasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerIncidenciasPage');
  }

  goToLoginPage() {
	//this.navCtrl.setRoot(LoginPage);
	const root = this.app.getRootNav();
	root.popToRoot();
  }
}
