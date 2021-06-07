import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../service/api-response.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.page.html',
  styleUrls: ['./login-app.page.scss'],
})
export class LoginAppPage implements OnInit {

  constructor(
    private service:ApiResponseService,
    private router: Router,
    private controlMenu : MenuController,
    public loadingController: LoadingController,
    public toastController: ToastController
    ) { }

  ngOnInit() {
    this.controlMenu.enable(false);    
  }


  login(email,password){
    var data = {
      "email": email.value,
      "pass": password.value
    }
    this.service.LoginPost(data).then(res =>{
      if(res['id_usuario']){
        this.presentLoading(res['nombre']) .then(e =>{
          window.localStorage.setItem("id",res['id_usuario']); 
          this.router.navigate(['/inicio']);
        })
      }else{
        this.presentToast()
      }
    })
  }


  async presentLoading(nombre) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Bienvenido '+nombre,
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Datos incorrectos',
      duration: 2000
    });
    toast.present();
  }
}
