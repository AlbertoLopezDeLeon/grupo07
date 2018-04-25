import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaRepartidoresPage');
  }
  
  goToLoginPage() {
	//this.navCtrl.setRoot(LoginPage);
	const root = this.app.getRootNav();
	root.popToRoot();
  }
}
