import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the ListaPaquetesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-paquetes',
  templateUrl: 'lista-paquetes.html',
})
export class ListaPaquetesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPaquetesPage');
  }
  goToLoginPage() {
	const root = this.app.getRootNav();
	root.popToRoot();
  }
}
