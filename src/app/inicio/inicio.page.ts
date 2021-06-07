import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiResponseService } from '../service/api-response.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

   arrayPlatillosL : any =[];
   arrayPlatillosM : any =[];
   arrayPlatillosMi : any =[];
   arrayPlatillosJ : any =[];
   arrayPlatillosV : any =[];
   arrays: any =[];

  constructor(
    private menu:MenuController,
    private servicio:ApiResponseService
    ) { }

  ngOnInit() {
    this.menu.enable(true);
    this.getPlatillosSemanales();
  }


  getPlatillosSemanales(){
    this.servicio.getPlatillos().then(res =>{
      var platillos = res[0];
      const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

      for(let e of platillos){
        const numeroDia = new Date(e.fecha_seguimiento).getDay();
        console.log();
        e.fecha_seguimiento = new Date(e.fecha_seguimiento).toDateString();
        const nombreDia = dias[numeroDia];

        if(nombreDia == 'Lunes'){
          this.arrayPlatillosL.push(e);
        }else
        if(nombreDia == 'Martes'){
          this.arrayPlatillosM.push(e);
        }else
        if(nombreDia == 'Miercoles'){
          this.arrayPlatillosMi.push(e);
        }else
        if(nombreDia == 'Jueves'){
          this.arrayPlatillosJ.push(e);
        }else
        if(nombreDia == 'Viernes'){
          this.arrayPlatillosV.push(e);
        };
      }
      this.arrays.push(this.arrayPlatillosL,this.arrayPlatillosM,this.arrayPlatillosMi,this.arrayPlatillosJ,this.arrayPlatillosV)
      console.log(this.arrays);
      
    })
  }
  
  slidesOptions = {
    slidesPerView: 1
  }


}
