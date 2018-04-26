//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoUsuario, Usuario } from '../../models/usuario';
import { TipoIncidencia, Entrega } from '../../models/entrega';


import { AngularFireDatabase} from 'angularfire2/database';
/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

	private usuariosRef = this.afDB.list<Usuario>('usuarios');
	private entregasRef = this.afDB.list<Entrega>('entregas');

	constructor(public afDB:AngularFireDatabase) {
		console.log('Hello FirebaseDbProvider Provider');
	}
  
	//Metodos para usuarios
	guardaUsuario(usuario:Usuario) {	
		return this.afDB.database.ref('usuarios/'+usuario.getId()).set(usuario);
	}
	
	delUsuario(id:number) {
		this.afDB.database.ref('usuarios/'+id).remove();
	}
	
	getUsuarios():any {
		if (this.usuariosRef != null) {
			return this.usuariosRef.valueChanges();
		}
	}
	
	//Metodos para entregas
	guardaEntrega(entrega:Entrega) {	
		return this.afDB.database.ref('entregas/'+entrega.getId()).set(entrega);
	}
	
	delEntrega(id:number) {
		this.afDB.database.ref('entregas/'+id).remove();
	}
	
	getEntregas():any {
		if (this.entregasRef != null) {
			return this.entregasRef.valueChanges();
		}
	}
  

}
