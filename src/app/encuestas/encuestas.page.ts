import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../service/api-response.service';


@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.page.html',
  styleUrls: ['./encuestas.page.scss'],
})
export class EncuestasPage implements OnInit {

  public form = [];
  public comidas = [];
  public desayunos = [];
  public confirmEncuesta = false;
  private id_encuesta:any;
  private idsDetalles = [];

  constructor(
    private service: ApiResponseService,

  ) { }

  ngOnInit() {
    
    this.encuestasDisponibles();
  }

  encuestasContestadas(){
    return new Promise((resolve,reject)=>{
      this.service.getEncuestas().then(res =>{
          if(res['CANTIDAD']>0){
            this.confirmEncuesta = true;
            resolve(false); 
          }else{
            resolve(true);
          }
      })
    }) 
  }

  infoEncuestas(confirm){
    this.service.getInfoEncuestas().then(res =>{
      var datos:any = res;

      if(confirm == true){
        for(let e of datos){
          this.id_encuesta=e.id_encuesta;
          Object.assign(e, {"isSelected":false})          
          this.form.push(e);
  
          if(e.tipo == "COMIDA"){
            this.comidas.push(e);
          }else{
            this.desayunos.push(e);
          }
        } 
      }else{
        console.log('Encuesta ya contestada');
      }
    
           
    })
  }

  encuestasDisponibles(){
    return new Promise (()=>{
      this.service.getInfoEncuestasDisponibles().then(res =>{
        console.log(res);
        
        if(res['CANTIDAD']>0){
          this.encuestasContestadas().then(res =>{
            this.infoEncuestas(res);
          });
        }else{
          console.log("Sin encuestas disponibles");
        }
        
      })
    })
  }

  cambiarRegVotos(e){
    console.log(e);
    return new Promise (()=>{
      var data ={
        "id_detalle":e.id_detalle
      };
      
      if(e.isSelected == true){
        console.log("Seleccionado");
        
        this.service.addDatosEncuesta(data,'sum').then(res =>{
          if(res['affectedRows'] !== 1){
            console.log("Error al seleccionar");
          }else{
            this.idsDetalles.push(e.id_detalle);
          }
          
        });

      }else{
        this.service.addDatosEncuesta(data,'res').then(res =>{
          if(res['affectedRows'] !== 1){
            console.log("Error al seleccionar");
          }else{
            this.idsDetalles.push(e.id_detalle);
          }
        });
      
      }
      
    })  
  }

  terminarEncuesta(){
    var data ={
      "id_encuesta":this.id_encuesta,
      "id_usuario":window.localStorage.getItem('id')
    }
    this.service.addDatosEncuesta(data,'fin').then(res =>{
      console.log(res);
      if(res['affectedRows'] !== 1){
        console.log("Error al guardar");
      }else{
        for(let e of this.idsDetalles){
          var array={
            "id_encuesta":this.id_encuesta,
            "id_usuario":window.localStorage.getItem('id'),
            "id_detalle":e
          }
          this.service.addDatosEncuesta(array,'detail').then(res =>{
            if(res['affectedRows'] !== 1){
             console.log("Error fatal");
            }
          })
        }
        
      }
      
    });
    
  }
}
