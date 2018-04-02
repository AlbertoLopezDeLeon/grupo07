import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EstadoCoche, Vehiculo } from './vehiculo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'Venta de coches de segunda mano';
  
  filtro = '';
  
  public EstadoCoche:any = EstadoCoche;
  
  public vehiculos:Array<Vehiculo>=
		[new Vehiculo('../../assets/Images/SeatLeon.jpg', 'Seat', 'Leon', new Date(2002,3,30), new Date(2003,1,1), 15000, this.EstadoCoche.BUENO),
		 new Vehiculo('../../assets/Images/AudiNuvolari.jpg', 'Audi', 'Nuvolari', new Date(2003,0,12), new Date(2003,1,30), 24000, this.EstadoCoche.BUENO),
		 new Vehiculo('../../assets/Images/AudiA4.jpg', 'Audi', 'A4', new Date(2005,4,1), new Date(2005,5,1), 18500, this.EstadoCoche.MALO),
		 new Vehiculo('', 'BMW', 'Serie 4', new Date(2015,3,17), new Date(2015,7,1), 25000, this.EstadoCoche.MALO),
		 new Vehiculo('', 'BMW', 'X3', new Date(2008,10,18), new Date(2009,1,2), 17000, this.EstadoCoche.BUENO),
		 new Vehiculo('../../assets/Images/SeatToledo.JPG', 'Seat', 'Toledo', new Date(2000,8,15), new Date(2001,2,2), 12000, this.EstadoCoche.MALO)];
		 
		 
  public vendido(id:number)
  {
	this.vehiculos.splice(id,1);
  }
  
  public rebajar(id:number)
  {
	this.vehiculos[id].precio = this.vehiculos[id].precio*0.9;
  }
  
  public getFiltrados(): Array<number>
  {
	var ret: Array<number> = new Array(0);
	var id: number = 0;
	for (let vehiculo of this.vehiculos)
	{
		if (vehiculo.marca.substring(0,this.filtro.length).toLowerCase() === this.filtro.toLowerCase())
		{
			ret.push(id);
		}
		id = id + 1;
	}
	return ret;
  }
}
