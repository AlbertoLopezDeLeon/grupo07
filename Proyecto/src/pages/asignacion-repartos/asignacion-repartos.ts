import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { TipoUsuario, Usuario} from '../../models/usuario';
import { FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Entrega} from '../../models/entrega';
import { ToastController } from 'ionic-angular';


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
	listaUsuarios: any;
	asignaciones:any[] = [null,null,null,null];

	constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public dbFirebase:FirebaseDbProvider, public toastCtrl: ToastController, public alertCtrl: AlertController) {
		//Limpiamos y creamos las entregas en la BD
		//this.borrarEntregas();
		//this.crearEntregas();
	}
  
	crearEntregas() {
		//Entregas
		let entrega1:Entrega = new Entrega(1,"Joan","687218832","Calle Mayor 15 2D",1,"12:00 - 14:00","5kg","SinIncidencia");
		this.dbFirebase.guardaEntrega(entrega1);
		
		let entrega2:Entrega = new Entrega(2,'Álvaro','633444567','Calle Rio Ebro 5 1D',3,'15:00 - 17:00','8kg',"SinIncidencia");
		this.dbFirebase.guardaEntrega(entrega2);
		
		let entrega3:Entrega = new Entrega(3,'Ana','687252129','Calle Abedul 24 4A',1,'11:00 - 13:00','2kg',"SinIncidencia");
		this.dbFirebase.guardaEntrega(entrega3);
		
		let entrega4:Entrega = new Entrega(4,'Bart','669444012','Calle Falsa 123',2,'12:00 - 15:00','12kg',"SinIncidencia");
		this.dbFirebase.guardaEntrega(entrega4);	
	}
	
	borrarEntregas() {
        for(var i= 0; i< this.listaEntregas.length; i++){
            this.dbFirebase.delEntrega(this.listaEntregas[i].id);
        }
        console.log("habia "+i+"en la base de datos");
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
		this.dbFirebase.getUsuarios().subscribe(listaUsuarios=>{this.listaUsuarios=listaUsuarios;});
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
	
	isRepartidor(usuario: Usuario): boolean {
		if (usuario.tipo === TipoUsuario.Repartidor) {
			return true;
		} else {
			return false;
		}
	}
	
	finAsignacionManual() {
		for (var i = 0; i < this.listaEntregas.length; i++) {
			if (this.asignaciones[i] != null) {
				if (this.verificarSiTieneEntregas(this.listaUsuarios[this.asignaciones[i] - 1].id) == false){
					if (this.listaEntregas[i].repartidor == null) {
						this.listaEntregas[i].enCurso = true;
					}
				} else {
					if (this.listaEntregas[i].repartidor == null) {
						this.listaEntregas[i].enCurso = false;
					}
					
				}
				this.listaEntregas[i].repartidor = this.listaUsuarios[this.asignaciones[this.listaEntregas[i].id - 1]-1];
				this.dbFirebase.guardaEntrega(this.listaEntregas[i]);
			}
		}
		
		this.asignacionManualMensaje();
	}
	
	verificarSiTieneEntregas(idRepartidor: number): boolean {
		for (var i = 0; i < this.listaEntregas.length; i++) {
			if (this.listaEntregas[i].repartidor != null) {
				if (this.listaEntregas[i].repartidor.id === idRepartidor) {
					return true;
				}
			}
		}
		return false;
	}
	
	sinIncidencia(idEntrega: number): boolean{ //no incidencia y no entregado
		for (var i = 0; i < this.listaEntregas.length; i++) {
			if (this.listaEntregas[i].id === idEntrega) {
				return (this.listaEntregas[i].incidencia === "SinIncidencia")&&!this.listaEntregas[i].entregado;
			}
		}
	}
    
    NoEntregado(idEntrega: number): boolean{
		for (var i = 0; i < this.listaEntregas.length; i++) {
			if (this.listaEntregas[i].id === idEntrega) {
				return !this.listaEntregas[i].entregado;
			}
		}
	}
	
	asignacionAutomaticaMensaje() {
		let toast = this.toastCtrl.create({
		  message: 'Asignación automática completada con éxito',
		  duration: 3000
		});
		toast.present();
	}
	
	asignacionManualMensaje() {
		let toast = this.toastCtrl.create({
		  message: 'Asignacion manual completada con éxito',
		  duration: 3000
		});
		toast.present();
	}
    
    asignacionAutomaticaAlert(){
        let alert = this.alertCtrl.create({
			title: '¿Asignación automática?',
			message: 'Al confirmar se realizara una asignación automática de los paquetes a repartidores. ¿Desea continuar?',
			buttons: [
			  {
				text: 'Asignar',
				handler: () => {
					this.asignacionAutomatica();
				}
			  },
			  {
				text: 'Reset',
				role: 'cancel',
				handler: () => {  
                    this.borrarEntregas();
                    this.crearEntregas();
				}
			  }
			]
		  });
		  alert.present();
    }
    
    asignacionAutomatica(){
        this.borrarEntregas();
		this.crearEntregas();
        
        this.listaEntregas[0].repartidor=this.listaUsuarios[2]; //Alberto
        this.listaEntregas[0].enCurso = true;
        this.listaEntregas[1].repartidor=this.listaUsuarios[2];


        this.listaEntregas[2].repartidor=this.listaUsuarios[3]; //Angelo
        this.listaEntregas[2].enCurso = true;
        this.listaEntregas[3].repartidor=this.listaUsuarios[3];
        
        for (var i = 0; i < this.listaEntregas.length; i++) {
            this.dbFirebase.guardaEntrega(this.listaEntregas[i]);
        }
        this.asignacionAutomaticaMensaje();
    }
}
