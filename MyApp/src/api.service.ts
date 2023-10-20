import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
'@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ApiService {
 httpOptions = {
 headers: new HttpHeaders({
 'Content-Type': 'application/json',
 'Access-Control-Allow-Origin' :'*'
 })
 }
 // Se establece la base url del API a consumir
 apiURL = 'https://g2c47a8051cd535-movilapp.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/usuarios/';
 // Se declara la variable http de tipo HttpClient
 constructor(private http:HttpClient) { }

 getPosts(correo:string):Observable<any>{
  return this.http.get(this.apiURL+correo).pipe(
  retry(3)
  );
  }

 createPost(post={}):Observable<any> {
  return this.http.post(this.apiURL,post,this.httpOptions).pipe(
  retry(3)
  );
  }
}