import { Component,ElementRef, ViewChild, /*Agregado para otras funcionalidades */ OnInit } from '@angular/core';
//Agregué para animación
import { Animation, AnimationController, createAnimation } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild("title", { read: ElementRef}) title!: ElementRef;

  

  conductor = 0;
  constructor(private router:Router, private api : ApiService, private animationCtrl: AnimationController) {}
    
  isChecked: boolean = false; // Define la propiedad y establece un valor inicial

//Crear Post y enviar a la base de datos
    crearPost(){
        // Función para mostrar el valor del ion-checkbox
      if(this.isChecked){
        this.conductor = 1
      }else{
        this.conductor = 0
      }
      var name = (<HTMLInputElement>document.getElementById("nombre")).value;
      var phone = (<HTMLInputElement>document.getElementById("fono")).value;
      var password = (<HTMLInputElement>document.getElementById("contra")).value;
      var mail = (<HTMLInputElement>document.getElementById("correo")).value;
      var driver = this.conductor;
      var direction = (<HTMLInputElement>document.getElementById("direccion")).value;
      
      
      
      
      console.log(driver);

      var post={
        conductor: driver,
        contrasena: password,
        correo: mail,
        direccion: direction,
        nombre: name,
        telefono: phone
      };
      

      this.api.createPost(post).subscribe((success)=>{
      console.log(success);
      this.router.navigate(['/home']);}
      ,error=>{
      console.log(error);
      })
    }
    
  ngOnInit() {
    
  }

  
  ngAfterViewInit() {
    const cardA = this.animationCtrl
      .create()
      .addElement(this.title.nativeElement)
      .duration(3500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'translateX(0%)' },
        { offset: 0.5, transform: 'translateX(80%)' },
        { offset: 1, transform: 'translateX(0%)' },
      ]);
      cardA.play();
  }

   
}