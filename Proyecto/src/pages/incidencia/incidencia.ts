import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { TipoUsuario, Usuario} from '../../models/usuario';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Entrega} from '../../models/entrega';
import { ToastController } from 'ionic-angular';
import { ListaPaquetesPage } from '../../pages/lista-paquetes/lista-paquetes'

/**
 * Generated class for the IncidenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incidencia',
  templateUrl: 'incidencia.html',
})
export class IncidenciaPage {

	listaEntregas:any;
	repartidor:string;
	
	tipoIncidencia:string;
	descripcionOtra:string;
	
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public dbFirebase:FirebaseDbProvider, public toastCtrl: ToastController, public alertCtrl: AlertController) {
	this.repartidor = navParams.get('repartidor');
	this.descripcionOtra="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncidenciaPage');
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
	
	confirmarIncidencia() {
		  let alert = this.alertCtrl.create({
			title: 'Confirmar incidencia',
			message: 'Al confirmar la incidencia, pasaremos al siguiente paquete en curso. ¿Desea continuar?',
			buttons: [
			  {
				text: 'Confirmar',
				handler: () => {
					this.quitarEntregaEnCurso();
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
  
  quitarEntregaEnCurso() {
	var fin = false
		for (var i = 0; i < this.listaEntregas.length && !fin; i++) {
			if (this.listaEntregas[i].repartidor != null) {
				if (this.listaEntregas[i].repartidor.nombre === this.repartidor) {
					if (this.listaEntregas[i].enCurso) {
						this.listaEntregas[i].enCurso = false;
						this.listaEntregas[i].incidencia = this.tipoIncidencia;
						this.listaEntregas[i].descripcionOtra = this.descripcionOtra;
						this.dbFirebase.guardaEntrega(this.listaEntregas[i]);
						//this.dbFirebase.delEntrega(this.listaEntregas[i].id);
						fin = true;
						let toast = this.toastCtrl.create({
						  message: 'Incidencia reportada',
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
			if (this.listaEntregas[i].repartidor != null && this.listaEntregas[i].incidencia === "SinIncidencia" && !this.listaEntregas[i].entregado) {
				if (this.listaEntregas[i].repartidor.nombre === this.repartidor) {
					if (!this.listaEntregas[i].enCurso) {
						this.listaEntregas[i].enCurso = true;
						fin = true;
						this.dbFirebase.guardaEntrega(this.listaEntregas[i]);
					}
				}
			}
		}
	}
}
