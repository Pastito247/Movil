import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmailService } from '../mail.service';

@Component({
  selector: 'app-rescontra',
  templateUrl: './rescontra.page.html',
  styleUrls: ['./rescontra.page.scss'],
})
export class RescontraPage implements OnInit {

  posts = [];

  constructor(private router: Router, private api: ApiService
    , private authService: AuthService, private emailService: EmailService) { }

  ngOnInit() {
  }

  enviarCorreo(correo:string) {
    this.authService.getMail();
    this.emailService.enviarCorreo(correo, 'Correo', 'tu codigo de verificación es: 🎻')
      .subscribe(
        (response) => {
          console.log('Correo enviado con éxito', response);
        },
        (error) => {
          console.error('Error al enviar el correo', error);
        }
      );
  }

  validar() {
    var correo = (<HTMLInputElement>document.getElementById("correo")).value;
    console.log(correo);
    
    // validacion
    this.api.getPosts(correo).subscribe((res) => {
      console.log("Verificando: CORRESTO");
      this.posts = res["items"];
      this.enviarCorreo(correo);

    }, (error) => {
      console.log("Error");
    })
  }
}
