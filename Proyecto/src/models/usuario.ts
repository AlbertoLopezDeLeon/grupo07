export enum TipoUsuario {	
	Administrador,
	Repartidor
}

export class Usuario {
	id: number;
	nombre: string;
	edad: number;
	vehiculo: string;
	contrasenya: string;
	tipo: TipoUsuario;
	
	constructor(id: number, nombre: string, edad: number, vehiculo: string, contrasenya: string, tipo: TipoUsuario) {
		this.id = id;
		this.nombre = nombre;
		this.edad = edad;
		this.vehiculo = vehiculo;
		this.contrasenya = contrasenya;
		this.tipo = tipo;
	}
	
	public getId(): number {
		return this.id;
	}
	
	public getNombre(): string {
		return this.nombre;
	}
	
	public getEdad(): number {
		return this.edad;
	}
	
	public getVehiculo(): string {
		return this.vehiculo;
	}
	public getContrasenya(): string {
		return this.contrasenya;
	}
	
	public getTipo(): TipoUsuario {
		return this.tipo;
	}
	
	
}