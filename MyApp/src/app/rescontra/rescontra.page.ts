import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmailService } from '../mail.service';
import { Animation, AnimationController, IonCard } from '@ionic/angular';
@Component({
  selector: 'app-rescontra',
  templateUrl: './rescontra.page.html',
  styleUrls: ['./rescontra.page.scss'],
})
export class RescontraPage implements OnInit {
  private animation!: Animation;
  posts = [];
  codigoVerificacion = this.generarCodigoAlfanumerico(6);
  constructor(private router: Router, private api: ApiService
    , private authService: AuthService, private emailService: EmailService,private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  generarCodigoAlfanumerico(longitud: number): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';

    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indice);
    }

    return codigo;
  }

  enviarCorreo(correo:string) {

    console.log(this.codigoVerificacion);
    this.emailService.enviarCorreo(correo, 'Codigo de verificacion', 'su codigo es: '+this.codigoVerificacion)
      .subscribe(
        (response) => {
          console.log('Correo enviado con éxito', response);
          this.setOpen(false);
        },
        (error) => {
          console.error('Error al enviar el correo', error);
        }
      );
  }
  isModalOpen = true;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  verificarCode(){
    var codigo = (<HTMLInputElement>document.getElementById("code")).value;
    if(codigo == this.codigoVerificacion){
      console.log('exito');
      this.router.navigate(['/cambiarpass']);
    }else{
      console.log("error")
      this.animation = this.animationCtrl
      .create()
      .addElement(document.getElementsByName("verificar"))
      .duration(500)
      .iterations(2)
      .keyframes([
        { offset: 0,transform: 'translateX(0px)' },
        { offset: 0.5, transform: 'translateX(10px)' },
        { offset: 1, transform: 'translateX(0px)' },
      ])
      this.animation.play();
    }
  }
  validar() {
    var correo = (<HTMLInputElement>document.getElementById("correo")).value;

    console.log(correo);
    
    // validacion
    this.api.getPosts(correo).subscribe((res) => {
      console.log("Verificando: CORRESTO");
      this.posts = res["items"];
      this.enviarCorreo(correo);
      this.authService.setDatos(correo,res['usuario'],res['telefono'],res['conductor'],res['direccion']);
    }, (error) => {
      console.log("Error");
    })
  }

}
