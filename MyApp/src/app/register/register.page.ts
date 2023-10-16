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


  // Función para mostrar el valor del ion-checkbox
    crearPost(){
      if(this.isChecked){
        this.conductor = 1
      }else{
        this.conductor = 0
      }
      var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
      var fono = (<HTMLInputElement>document.getElementById("fono")).value;
      var contrasena = (<HTMLInputElement>document.getElementById("contra")).value;
      var correo = (<HTMLInputElement>document.getElementById("correo")).value;
      var conductor = this.conductor;
      var direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
      
      
      
      
      console.log(conductor);

      var post={
        conductor: conductor,
        contrasena: contrasena,
        correo: correo,
        direccion: direccion,
        nombre: nombre,
        telefono: fono
      };
      

      this.api.createPost(post).subscribe((success)=>{
      console.log(success);
      this.router.navigate(['/lobby']);}
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