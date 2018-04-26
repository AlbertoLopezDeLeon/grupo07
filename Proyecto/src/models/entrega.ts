import {TipoUsuario, Usuario} from 'usuario';

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
	incidencia: TipoIncidencia;
	
	constructor(id: number, nombreReceptor: string, telefonoReceptor: string, direccion: string, numeroBultos: number, franjaHoraria: string, pesoTotal: string) {
		this.id = id;
		this.repartidor = null;
		this.nombreReceptor = nombreReceptor;
		this.telefonoReceptor = telefonoReceptor;
		this.direccion = direccion;
		this.numeroBultos = numeroBultos;
		this.franjaHoraria = franjaHoraria;
		this.pesoTotal = pesoTotal;
		this.incidencia = TipoIncidencia.SinIncidencia;
	}
	
	public getId(): number {
		return this.id;
	}
	
	public getRepartidorName(): string {
		if (repartidor == null) {
			return "no asignado";
		}
		else {
			return this.repartidor.getNombre();
		}
	}
}