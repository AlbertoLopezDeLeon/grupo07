import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { TipoUsuario, Usuario} from '../../models/usuario';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Entrega} from '../../models/entrega';


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

	listaEntregas: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public dbFirebase:FirebaseDbProvider) {
		//Limpiamos y creamos las entregas en la BD
		//this.borrarEntregas();
		//this.crearEntregas();
	}
  
	crearEntregas() {
		//Entregas
		let entrega1:Entrega = new Entrega(1,"Joan","687218832","Calle Mayor 15 2D",1,"12:00 - 14:00","5kg");
		this.dbFirebase.guardaEntrega(entrega1);
		
		let entrega2:Entrega = new Entrega(2,'Álvaro','633444567','Calle Rio Ebro 5 1D',3,'15:00 - 17:00','8kg');
		this.dbFirebase.guardaEntrega(entrega2);
		
		let entrega3:Entrega = new Entrega(3,'Ana','687252129','Calle Abedul 24 4A',1,'11:00 - 14:00','2kg');
		this.dbFirebase.guardaEntrega(entrega3);
		
		let entrega4:Entrega = new Entrega(4,'Bart','669444012','Calle Falsa 123',2,'11:00 - 13:00','12kg');
		this.dbFirebase.guardaEntrega(entrega4);	
	}
	
	borrarEntregas() {
		this.dbFirebase.delEntrega(1);
		this.dbFirebase.delEntrega(2);
		this.dbFirebase.delEntrega(3);
		this.dbFirebase.delEntrega(4);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AsignacionRepartosPage');
	}	

	goToLoginPage() {
		const root = this.app.getRootNav();
		root.popToRoot();
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
					return this.listaEntregas[i].repartidor.getNombre();
				}
			}
		}
	}
  
}
