import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario: string = '';
  private correo = ' ';
  private fono: number | null = null;
  private conductor: number | null = null;
  private direccion: string | null = null;
  private code: string | null = null;
  setDatos(correo: string, user: string , fono: number, conductor: number, direccion: string): void {
    this.usuario = user;
    this.correo = correo;
    this.fono = fono;
    this.conductor = conductor;
    this.direccion = direccion;
  }
  setCode(code : string){
    this.code = code;
  }
  getUser(): string | null {
    return this.usuario;
  }
  getMail(){
    return this.correo;
  }
  getFono(): number | null {
    return this.fono;
  }
  getConductor(): number | null {
    return this.conductor;
  }
  getDireccion(): string | null {
    return this.direccion;
  }
  // Otros métodos relacionados con la autenticación
}