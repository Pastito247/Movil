import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { EmailService } from '../mail.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  posts: any[] = [];
  correo!: string | null;
  constructor(private api: ApiService, private emailService: EmailService,private authService: AuthService) { }

  ngOnInit() {
    this.api.getVehicle().subscribe((res) => {
      console.log("Verificando: CORRESTO");
      this.posts = res["items"];
    }, (error) => {
      console.log("Error");
    })
  }
  correoPasajero(correo:string) {

    this.emailService.enviarCorreo(correo, 'Notificación de Viaje', 'Su viaje fue registrado con exito')
      .subscribe(
        (response) => {
          console.log('Correo enviado con éxito', response);
        },
        (error) => {
          console.error('Error al enviar el correo', error);
        }
      );
  }

  reservar(){
    this.api.getVehicle().subscribe((res) => {
      console.log("Verificando: CORRESTO");
      this.posts = res["items"];

      console.log(this.posts);
    }, (error) => {
      console.log("Error");
    });
    var pasajero = this.authService.getMail();
    this.correoPasajero(pasajero);

  }
}
