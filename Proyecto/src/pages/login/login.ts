import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdministradorPage } from '../administrador/administrador';
import { RepartidorPage } from '../repartidor/repartidor';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {TipoUsuario, Usuario} from '../../models/usuario';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	usuario: string;
	contrasenya: string;
	listaUsuarios: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {
		this.usuario = "";
		this.contrasenya = "";
		
		//Limpiamos y creamos los usuarios en la BD
		this.borrarUsuarios();
		this.crearUsuarios();
	}

	crearUsuarios() {
		//Administradores
		let usuario1:Usuario = new Usuario(1,"Cristian","1234",TipoUsuario.Administrador);
		this.dbFirebase.guardaUsuario(usuario1);
			
		let usuario2:Usuario = new Usuario(2,"Ivan","1234",TipoUsuario.Administrador);
		this.dbFirebase.guardaUsuario(usuario2);
		
		//Repartidores
		let usuario3:Usuario = new Usuario(3,"Alberto","1234",TipoUsuario.Repartidor);
		this.dbFirebase.guardaUsuario(usuario3);
			
		let usuario4:Usuario = new Usuario(4,"Juan","1234",TipoUsuario.Repartidor);
		this.dbFirebase.guardaUsuario(usuario4);
			
	}
	
	borrarUsuarios() {
		this.dbFirebase.delUsuario(1);
		this.dbFirebase.delUsuario(2);
		this.dbFirebase.delUsuario(3);
		this.dbFirebase.delUsuario(4);
	}
	
	login(){
		for (var i = 0; i < this.listaUsuarios.length; i++) {
			if (this.usuario === this.listaUsuarios[i].nombre && this.contrasenya === this.listaUsuarios[i].contrasenya && 
				this.listaUsuarios[i].tipo == TipoUsuario.Administrador) {
				this.navCtrl.push(AdministradorPage); 
			}

			if (this.usuario === this.listaUsuarios[i].nombre && this.contrasenya === this.listaUsuarios[i].contrasenya &&
				this.listaUsuarios[i].tipo == TipoUsuario.Repartidor) {
				this.navCtrl.push(RepartidorPage); 
			}
		}
	}
	
	ionViewDidEnter(){
		this.dbFirebase.getUsuarios().subscribe(listaUsuarios=>{this.listaUsuarios=listaUsuarios;});
	}

}
