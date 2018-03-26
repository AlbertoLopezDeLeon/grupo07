import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vehiculo } from './vehiculo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'VENTA DE VEHICULOS';
  
  filtro = '';
  
  vehiculos:Array<Vehiculo>=
		[new Vehiculo('../../assets/Images/SeatLeon.jpg', 'Seat', 'Leon', new Date(2002,3,30), new Date(2003,1,1), 15000),
		 new Vehiculo('../../assets/Images/AudiNuvolari.jpg', 'Audi', 'Nuvolari', new Date(2003,0,12), new Date(2003,1,30), 24000),
		 new Vehiculo('../../assets/Images/AudiA4.jpg', 'Audi', 'A4', new Date(2005,4,1), new Date(2005,5,1), 18500),
		 new Vehiculo('../../assets/Images/NoDisponible.jpg', 'BMW', 'Serie 4', new Date(2015,3,17), new Date(2015,7,1), 25000),
		 new Vehiculo('../../assets/Images/NoDisponible.jpg', 'BMW', 'X3', new Date(2008,10,18), new Date(2009,1,2), 17000),
		 new Vehiculo('../../assets/Images/SeatToledo.JPG', 'Seat', 'Toledo', new Date(2000,8,15), new Date(2001,2,2), 12000)];
		 
  vehiculosFiltro:Array<Vehiculo> = this.vehiculos;
		 
  public vendido(id:number)
  {
	this.vehiculos.splice(id,1);
	this.vehiculosFiltro = this.vehiculos;
  }
  
  public rebajar(id:number)
  {
	this.vehiculosFiltro[id].precio = this.vehiculosFiltro[id].precio*0.9;
  }
  
  public filtrar()
  {
	this.vehiculosFiltro = this.vehiculos.filter(vehiculo => vehiculo.marca.substring(0,this.filtro.length).toLowerCase() === this.filtro.toLowerCase());
  }
}
