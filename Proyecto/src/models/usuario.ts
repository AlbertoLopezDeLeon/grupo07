export enum TipoUsuario {	
	Administrador,
	Repartidor
}

export class Usuario {
	id: number;
	nombre: string;
	edad: number;
	telefono: number;
	vehiculo: string;
	contrasenya: string;
	tipo: TipoUsuario;
    ruta_imagen: string;
	
	constructor(id: number, nombre: string, edad: number, telefono: number, vehiculo: string, contrasenya: string, tipo: TipoUsuario, ruta_imagen :string) {
		this.id = id;
		this.nombre = nombre;
		this.edad = edad;
		this.telefono = telefono;
		this.vehiculo = vehiculo;
		this.contrasenya = contrasenya;
		this.tipo = tipo;
        this.ruta_imagen = ruta_imagen;
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
	
	public getTelefono(): number {
		return this.telefono;
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
    
    public getRutaImagen(): string {
		return this.ruta_imagen;
	}
	
	
}