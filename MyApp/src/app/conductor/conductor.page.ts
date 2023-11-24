import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { GoogleMap, Marker} from '@capacitor/google-maps';
import { ModalController } from "@ionic/angular";
import { environment } from "src/environments/environment";
import { ModalPage } from "../modal/modal.page";
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  @ViewChild('map')mapRef!: ElementRef;
  map!: GoogleMap;
  vehicles = [];
  usuario!: string | null;
  correo!: string | null;
  fono!: number | null;
  conductor!: number | null;
  direccion!: string | null;


  isConductor: boolean = true;
  constructor(private router:Router, private modalCtrl:ModalController, private api: ApiService,private authService: AuthService) {}

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
  

  // async createMap(){
  //   this.map = await GoogleMap.create({
  //   id: 'my-map',
  //   apiKey: environment.mapsKey,
  //   element: this.mapRef.nativeElement,
  //   config: {
  //     center: {
  //       lat:-33.04353334085918,
  //       lng:-71.60435289558721,
  //     },
  //     zoom: 14,
  //   }
  //   });
  //   await this.addMarkers();
  // }

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
    
    ];

    const result = await this.map.addMarkers(markers);
   

    this.map.setOnMarkerClickListener(async (marker) =>{
      const modal = await this.modalCtrl.create({
        component: ModalPage,
        componentProps: {
        marker,},
        breakpoints:[0, 0.3],
        initialBreakpoint: 0.3,
       
      
      });
      modal.present();


    });
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  crearViaje(){
    var mail = this.authService.getMail();
    var espacio = (<HTMLInputElement>document.getElementById("capacidad")).value;
    var paint = (<HTMLInputElement>document.getElementById("color")).value;
    var time = (<HTMLInputElement>document.getElementById("hora")).value;
    var model = (<HTMLInputElement>document.getElementById("modelo")).value;
    var license = (<HTMLInputElement>document.getElementById("patente")).value;
    var place = (<HTMLInputElement>document.getElementById("lugar")).value;
    var vehicles={
      capacidad: espacio,
      color: paint,
      dueño: this.correo,
      hora: time,
      lugar: place,
      modelo: model,
      patente: license
    };
    
    console.log(mail);

    this.api.createViaje(vehicles).subscribe((success)=>{
    console.log(success);
    this.isModalOpen = false;}
    ,error=>{
    console.log(error);
    })
  }
}

