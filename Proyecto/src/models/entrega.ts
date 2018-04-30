import {TipoUsuario, Usuario} from '../models/usuario';

export enum TipoIncidencia {	
	DireccionErronea,
	ClienteAusente,
	PaqueteMalasCondiciones,
	EntregaRehusada,
	OtraIncidencia,
	SinIncidencia
}

export class Entrega {
	id: number;
	repartidor: Usuario;
	nombreReceptor: string;
	telefonoReceptor: string;
	direccion: string;
	numeroBultos: number;
	franjaHoraria: string;
	pesoTotal: string;
	incidencia: string;
	enCurso: boolean;
	descripcionOtra: string;
	
	constructor(id: number, nombreReceptor: string, telefonoReceptor: string, direccion: string, numeroBultos: number, franjaHoraria: string, pesoTotal: string, incidencia: string) {
		this.id = id;
		this.repartidor = null;
		this.nombreReceptor = nombreReceptor;
		this.telefonoReceptor = telefonoReceptor;
		this.direccion = direccion;
		this.numeroBultos = numeroBultos;
		this.franjaHoraria = franjaHoraria;
		this.pesoTotal = pesoTotal;
		this.incidencia = incidencia;
		this.enCurso = false;
		this.descripcionOtra = "";
	}
	
	public getId(): number {
		return this.id;
	}
	
	public getRepartidorName(): string {
		if (this.repartidor == null) {
			return "no asignado";
		}
		else {
			return this.repartidor.getNombre();
		}
	}
	
	public getIncidencia(): string {
		return this.incidencia;
	}
}