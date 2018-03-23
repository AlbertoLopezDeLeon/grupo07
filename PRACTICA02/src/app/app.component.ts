import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'COMANDA';
  
  private colores:Array<[string,number]>=[['Ternera con bambu y setas',7],['Cerdo agridulce',5.5],['Arroz tres delicias',3.5]];
  
  public cod_color:string='Ternera con bambu y setas';
  public cod_color2=7;
  
  public element:[string,number]=[this.cod_color,this.cod_color2];
  
  public cadena:string =this.element[0]+" "+"("+this.element[1]+")";
  
  public lineas=[];
  
  public total:number = 0;
  
  public addLinea()
  {
	  //this.lineas.push('Linea de ejemplo '+(this.lineas.length+1));

	this.lineas.push(this.cadena.substring(0,this.cadena.indexOf("("))+"\t"+
						this.cadena.substring(this.cadena.indexOf("(")+1,this.cadena.indexOf(")")));
	let coste =+ this.cadena.substring(this.cadena.indexOf("(")+1,this.cadena.indexOf("€"));
	this.total +=coste;
  }
  
  public delLinea(i)
  {
	  let coste = this.lineas[i].substring(this.lineas[i].indexOf("\t")+1,this.lineas[i].indexOf("€"));
	  this.total -= coste;
	  this.lineas.splice(i,1);

  }
}
