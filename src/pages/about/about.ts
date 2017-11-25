import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  nombre: string = "pierina kiram";
  ocupacion: string = "estudiante";
  edad: number = 14;


  datos: any = {
    nombre: "pierina kiram",
    ocupacion: "Estudiante",
    edad: 15
  };

 informacion: any[]=[
   {
     titulo: "origen",
     dato:"lima,peru",
     icono:"flag"
   },
   {
     titulo: "e-mail",
     dato:"pierinita_4782461@hotmail.com",
     icono:"mail"
   },
   {
     titulo:"telefono",
     dato:"993368689",
     icono:"call"
   }
 ];



  constructor(public navCtrl: NavController) {

  }

}
