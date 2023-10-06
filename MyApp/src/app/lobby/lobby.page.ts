import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { GoogleMap, Marker} from '@capacitor/google-maps';
import { ModalController } from "@ionic/angular";
import { environment } from "src/environments/environment";
import { ModalPage } from "../modal/modal.page";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage {
  @ViewChild('map')mapRef!: ElementRef;
  map!: GoogleMap;
  id : any;
  datos = [];
  constructor(private modalCtrl:ModalController, private api: ApiService) {}

  
  ngOnInit(){
    
    this.api.getPost().subscribe((res)=>{
      console.log(res[0]);
      this.datos = res;
      },(error)=>{
      console.log(error);
      });
  }

  

  ionViewDidEnter(){
    this.createMap();
  }


  async createMap(){
    this.map = await GoogleMap.create({
    id: 'my-map',
    apiKey: environment.mapsKey,
    element: this.mapRef.nativeElement,
    config: {
      center: {
        lat:-33.04353334085918,
        lng:-71.60435289558721,

      },
      zoom: 14,
    }
    });
    await this.addMarkers();
  }

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

}
  

