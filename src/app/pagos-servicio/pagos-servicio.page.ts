import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../service/api-response.service';

@Component({
  selector: 'app-pagos-servicio',
  templateUrl: './pagos-servicio.page.html',
  styleUrls: ['./pagos-servicio.page.scss'],
})
export class PagosServicioPage implements OnInit {

  arrayDatos:any =[];

  arrayPagos:any=[];
  arrayAdeudos:any=[];

  constructor(
    private service:ApiResponseService
  ) { }



  ngOnInit() {
    this.getPagosUsuario();
    this.getAdeudosUsuarios();
    this.service.getAdeudos().then(res =>{
      this.arrayDatos = res;
      
    })
  }

  getPagosUsuario(){
    this.service.getPagos().then(res =>{
      this.arrayPagos = res;
      console.log(res);
      
    })
  }

  getAdeudosUsuarios(){
    this.service.getAdeudos().then(res =>{
      this.arrayAdeudos = res;
      console.log(res);
      
    })
  }

  segmentChanged(ev: any) {
    if(ev.detail.value == "pagos"){
      this.arrayDatos = this.arrayPagos;
    }else{
      this.arrayDatos = this.arrayAdeudos;
    }
  }
}
