import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../service/api-response.service';

@Component({
  selector: 'app-pagos-servicio',
  templateUrl: './pagos-servicio.page.html',
  styleUrls: ['./pagos-servicio.page.scss'],
})
export class PagosServicioPage implements OnInit {

  arrayPagos:any =[];

  constructor(
    private service:ApiResponseService
  ) { }

  ngOnInit() {
    this.getPagosUsuario();
  }

  getPagosUsuario(){
    this.service.getPagos().then(res =>{
      this.arrayPagos = res;
      console.log(res);
      
    })
  }
}
