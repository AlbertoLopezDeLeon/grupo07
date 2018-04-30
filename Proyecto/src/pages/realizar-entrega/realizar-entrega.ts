import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { TipoUsuario, Usuario} from '../../models/usuario';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Entrega} from '../../models/entrega';
import { ToastController } from 'ionic-angular';
import { IncidenciaPage } from '../../pages/incidencia/incidencia';
import { ListaPaquetesPage } from '../../pages/lista-paquetes/lista-paquetes'

/**
 * Generated class for the RealizarEntregaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-realizar-entrega',
  templateUrl: 'realizar-entrega.html',
})
export class RealizarEntregaPage {
	
	listaEntregas:any;
	repartidor:string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public dbFirebase:FirebaseDbProvider, public toastCtrl: ToastController, public alertCtrl: AlertController) {
		this.repartidor = navParams.get('repartidor');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RealizarEntregaPage');
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
	
	confirmarEntrega() {
		  let alert = this.alertCtrl.create({
			title: 'Confirmar entrega',
			message: 'Al confirmar la entrega, el paquete se eliminará de la lista de paquetes. ¿Desea continuar?',
			buttons: [
			  {
				text: 'Realizar Entrega',
				handler: () => {
					this.borrarEntregaEnCurso();
                    this.navCtrl.pop();
				}
			  },
			  {
				text: 'Volver',
				role: 'cancel',
				handler: () => {  
				}
			  }
			]
		  });
		  alert.present();
	}

	borrarEntregaEnCurso() { // no la borra, le pone el flag entregado a true
	var fin = false
		for (var i = 0; i < this.listaEntregas.length && !fin; i++) {
			if (this.listaEntregas[i].repartidor != null) {
				if (this.listaEntregas[i].repartidor.nombre === this.repartidor) {
					if (this.listaEntregas[i].enCurso) {
						
                       
                        this.dbFirebase.delEntrega(this.listaEntregas[i].id);
                        this.listaEntregas[i].enCurso=false;
                        this.listaEntregas[i].entregado=true;
                        this.dbFirebase.guardaEntrega(this.listaEntregas[i]);
						fin = true;
						let toast = this.toastCtrl.create({
						  message: 'Entrega realizada con éxito',
						  duration: 3000
						});
						toast.present();
						this.ponerEnCursoSiguientePaquete();
					}
				}
			}
		}
	}
	
	ponerEnCursoSiguientePaquete() {
		var fin = false;
		for (var i = 0; i < this.listaEntregas.length && !fin; i++) {
			if (this.listaEntregas[i].repartidor != null) {
				if (this.listaEntregas[i].repartidor.nombre === this.repartidor) {
					if (!this.listaEntregas[i].enCurso && !this.listaEntregas[i].entregado && this.listaEntregas[i].incidencia === "SinIncidencia") {
						this.listaEntregas[i].enCurso = true;
						fin = true;
						this.dbFirebase.guardaEntrega(this.listaEntregas[i]);
					}
				}
			}
		}
	}
    
    incidencia() {
		this.navCtrl.push(IncidenciaPage,{repartidor:this.repartidor});
	}
}
