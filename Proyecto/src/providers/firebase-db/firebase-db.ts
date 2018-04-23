//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoUsuario, Usuario } from '../../models/usuario';


import { AngularFireDatabase} from 'angularfire2/database';
/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

	private usuariosRef = this.afDB.list<Usuario>('usuarios');

	constructor(public afDB:AngularFireDatabase) {
		console.log('Hello FirebaseDbProvider Provider');
	}
  
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
  

}
