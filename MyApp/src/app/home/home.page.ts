import { Component,ElementRef, ViewChild, /*Agregado para otras funcionalidades */ OnInit } from '@angular/core';
//Agregué para animación
import { Animation, AnimationController, IonCard } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmailService } from '../mail.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  @ViewChild("title", { read: ElementRef}) title!: ElementRef;
  posts = [];
  confirmacion = false;
  private animation!: Animation;
  correoInput = document.getElementById("Correo");
  data: any;
  constructor(private router: Router, private animationCtrl: AnimationController, private api: ApiService
  , private authService: AuthService, private emailService: EmailService) {}

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
      cardA.play();}
  
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  validar() {
    var correo = (<HTMLInputElement>document.getElementById("correo")).value;
    var contra = (<HTMLInputElement>document.getElementById("contra")).value;
    console.log(correo);
    
    // validacion
    this.api.getPosts(correo).subscribe((res) => {
      this.confirmacion = true;
      console.log("Verificando: CORRESTO");
      this.posts = res["items"];
      if(res["contrasena"] == contra){
        const usuario = res["nombre"];
        const fono = res["telefono"];
        const conductor = res["conductor"];
        const direccion = res["direccion"]
        this.authService.setDatos(correo,usuario,fono,conductor,direccion);
        if(res['conductor']=== 1){
          this.router.navigate(['/conductor']);
        }else{
          this.router.navigate(['/lobby']);
        }
      }else{
        console.log("error")
        this.animation = this.animationCtrl
        .create()
        .addElement(document.getElementsByName("Contra"))
        .duration(500)
        .iterations(2)
        .keyframes([
          { offset: 0,transform: 'translateX(0px)' },
          { offset: 0.5, transform: 'translateX(10px)' },
          { offset: 1, transform: 'translateX(0px)' },
        ])
        this.animation.play();
      }
      
    }, (error) => {
      this.confirmacion = false;
      console.log("Error");
      this.animation = this.animationCtrl
      .create()
      .addElement(document.getElementsByName("Correo"))
      .duration(500)
      .iterations(2)
      .keyframes([
        { offset: 0,transform: 'translateX(0px)' },
        { offset: 0.5, transform: 'translateX(10px)' },
        { offset: 1, transform: 'translateX(0px)' },
      ])
      this.animation.play();
    })
  }
 
}
