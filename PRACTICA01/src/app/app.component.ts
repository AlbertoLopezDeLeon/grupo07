import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'COMANDA';
  
  public txtNombre:string="Pepe";
  public txtApellidos:string="Martin Manso";
  
  private colores:Array<[string,number]>=[['Ternera con bambu y setas',7],['Cerdo agridulce',5.5],['Arroz tres delicias',3.5]];
  public cod_color:string='verde';
  public cod_color2=0;
  
  public lineas=[];
  
  public addLinea(arg: string)
  {
	  this.lineas.push(arg);
  }
  
  public delLinea(i)
  {
	  this.lineas.splice(i,1);
  }
}
