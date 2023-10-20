import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private platform: Platform, private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000'; // Cambia la URL por la de tu servidor

  enviarCorreo(destinatario: string, asunto: string, cuerpo: string) {
    const data = { destinatario, asunto, cuerpo };
    return this.http.post(`${this.apiUrl}/correo`, data);
  }
}
