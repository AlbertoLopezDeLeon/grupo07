export class Vehiculo {
	public foto: string;
	public marca: string;
	public modelo: string;
	public anyo: Date;
	public fechaVenta: Date;
	public precio: number;
	constructor(foto: string, marca: string, modelo: string, anyo: Date, fechaVenta: Date, precio: number){
		this.foto = foto;
		this.marca = marca;
		this.modelo = modelo;
		this.anyo = anyo;
		this.fechaVenta = fechaVenta;
		this.precio = precio;
	}
	getPVP(){
		return this.precio * 1.21;
	}
}
