import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiarpass',
  templateUrl: './cambiarpass.page.html',
  styleUrls: ['./cambiarpass.page.scss'],
})
export class CambiarpassPage implements OnInit {


  constructor(private router: Router, private api: ApiService) { }


  ngOnInit() {
  }


  modPost(contrasena: string, correo : string, nombre : string, telefono: number, direccion : string, conductor : number) {

    var post = {
      conductor: conductor,
      contrasena: contrasena,
      correo: correo,
      direccion: direccion,
      nombre: nombre,
      telefono: telefono
    }

    if (contrasena.length > 0) {
      this.api.updatePost(correo,post).subscribe(
        (success) => {

          console.log('Contraseña modificada con éxito:', success);
          // Agregar lógica adicional o redireccionamiento aquí si es necesario
          this.router.navigate(['/home'])
        },
        (error) => {
          console.log('Error al modificar la contraseña:', error);
          // Agregar manejo de errores o mensajes de error al usuario aquí
        }
      );
    } else {
      console.log('Las contraseñas no coinciden.');
      // Agregar mensaje de error al usuario si las contraseñas no coinciden
    }
  }
  modificarContra() {
    var id = (<HTMLInputElement>document.getElementById("correo")).value;
    var contra = (<HTMLInputElement>document.getElementById("contra")).value;
    console.log(id);
    this.api.getPosts(id).subscribe((res) => {
      var nombre = res["nombre"];;
      var telefono = res["telefono"];
      var direccion = res["direccion"];
      var conductor = res["conductor"];
        this.modPost(contra, id, nombre, telefono,direccion,conductor);
        console.log("Completado");
    }, (error) => {
      console.log(error);
    });

  }
}
