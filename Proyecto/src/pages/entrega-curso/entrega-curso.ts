import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { TipoUsuario, Usuario} from '../../models/usuario';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Entrega} from '../../models/entrega';
import { ToastController } from 'ionic-angular';

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

	listaEntregas: any;
	
	repartidor:string;
	entregaEnCurso: any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public dbFirebase:FirebaseDbProvider, public toastCtrl: ToastController) {
		this.repartidor = navParams.get('repartidor');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EntregaCursoPage');
	}
	
	ionViewDidEnter(){
		this.dbFirebase.getEntregas().subscribe(listaEntregas=>{this.listaEntregas=listaEntregas;});
	}
	
	getRepartidorName(idEntrega: number): string {
		for (var i = 0; i < this.listaEntregas.length; i++) {
			if (this.listaEntregas[i].id === idEntrega) {
				if (this.listaEntregas[i].repartidor == null) {
					return "no asignado";
				}
				else {
					return this.listaEntregas[i].repartidor.nombre;
				}
			}
		}
	}
	
	enCurso(idEntrega: number): boolean {
		for (var i = 0; i < this.listaEntregas.length; i++) {
			if (this.listaEntregas[i].id === idEntrega) {
				return this.listaEntregas[i].enCurso;
			}
		}
	}

	goToLoginPage() {
		const root = this.app.getRootNav();
		root.popToRoot();
	}
	
	informacionAdicional() {
		let toast = this.toastCtrl.create({
		  message: 'Funcionalidad no implementada',
		  duration: 3000
		});
		toast.present();
	}
}
