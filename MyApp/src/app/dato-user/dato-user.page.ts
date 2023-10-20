<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-dato-user',
  templateUrl: './dato-user.page.html',
  styleUrls: ['./dato-user.page.scss'],
})
export class DatoUserPage implements OnInit {

  usuario!: string | null;
  correo!: string | null;
  fono!: number | null;
  conductor!: number | null;
  direccion!: string | null;
  isConductor: boolean = false;


  constructor(private api: ApiService,private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.authService.getUser();
    this.fono = this.authService.getFono();
    this.correo = this.authService.getMail();
    this.direccion = this.authService.getDireccion();
    this.conductor = this.authService.getConductor();

    if(this.conductor === 1){
      this.isConductor = true;
    }

    console.log(this.conductor)
    
  }

}
=======
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-dato-user',
  templateUrl: './dato-user.page.html',
  styleUrls: ['./dato-user.page.scss'],
})
export class DatoUserPage implements OnInit {

  usuario!: string | null;
  correo!: string | null;
  fono!: number | null;
  conductor!: number | null;
  direccion!: string | null;
  isConductor: boolean = false;


  constructor(private api: ApiService,private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.authService.getUser();
    this.fono = this.authService.getFono();
    this.correo = this.authService.getMail();
    this.direccion = this.authService.getDireccion();
    this.conductor = this.authService.getConductor();

    if(this.conductor === 1){
      this.isConductor = true;
    }

    console.log(this.conductor)
    
  }

}
>>>>>>> 277e991b8d57bed1d78af159c106223b703bf222
