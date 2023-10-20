import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { GoogleMap, Marker} from '@capacitor/google-maps';
import { ModalController } from "@ionic/angular";
import { environment } from "src/environments/environment";
import { ModalPage } from "../modal/modal.page";
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Geolocation} from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {
  @ViewChild('map')mapRef!: ElementRef;
  map!: GoogleMap;
  posts = [];
  usuario!: string | null;
  correo!: string | null;
  fono!: number | null;
  conductor!: number | null;
  direccion!: string | null;

  isConductor: boolean = false;
  constructor(private modalCtrl:ModalController, private api: ApiService,private authService: AuthService) {}

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

  ionViewDidEnter(){
    this.createMap();
  }


  async createMap() {
    const coordinates = await Geolocation.getCurrentPosition();
    const lat = coordinates.coords.latitude;
    const lng = coordinates.coords.longitude;
  
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: lat,
          lng: lng,
        },
        zoom: 14,
      }
    });
  
    await this.addMarkers();
  }
  

<<<<<<< HEAD
  async addMarkers() {
    const coordinates = await Geolocation.getCurrentPosition();
    const lat = coordinates.coords.latitude;
    const lng = coordinates.coords.longitude;
  
    const markers: Marker[] = [
      {
        coordinate: {
          lat: lat,
          lng: lng,
        },
        title: 'Su ubicación',
        snippet: 'Estás aquí',
      }
=======
  async addMarkers(){
    
    const markers: Marker[] =[
    {
      coordinate:{
        lat:33.7,
        lng:-117.8,
      },
      title: 'localhost',
      snippet:'Best place on earth',
      },
      {
        coordinate: {
          lat:33.7,
          lng:-117.8,
        },
        title: 'random place',
      snippet:'not sure',
      },
    
>>>>>>> parent of 0b2f1f0e (cambios)
    ];
  
    const result = await this.map.addMarkers(markers);
  
    this.map.setOnMarkerClickListener(async (marker) => {
      const modal = await this.modalCtrl.create({
        component: ModalPage,
        componentProps: {
          marker,
        },
        breakpoints: [0, 0.3],
        initialBreakpoint: 0.3,
      });
      modal.present();
    });
  }
  
  }

  

