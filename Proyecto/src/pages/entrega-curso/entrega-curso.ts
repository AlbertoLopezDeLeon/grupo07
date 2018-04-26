import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the EntregaCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrega-curso',
  templateUrl: 'entrega-curso.html',
})
export class EntregaCursoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntregaCursoPage');
  }

  goToLoginPage() {
	const root = this.app.getRootNav();
	root.popToRoot();
  }
}
