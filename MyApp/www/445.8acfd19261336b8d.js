"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[445],{445:(v,l,a)=>{a.r(l),a.d(l,{LobbyPageModule:()=>M});var m=a(6814),g=a(95),i=a(6728),c=a(9351),u=a(5861),h=a(692),t=a(6689),p=a(2112),f=a(6466);const Z=["map"],C=[{path:"",component:(()=>{class n{constructor(e,o,r){this.modalCtrl=e,this.api=o,this.authService=r,this.posts=[],this.isConductor=!1,this.isModalOpen=!1}ngOnInit(){this.usuario=this.authService.getUser(),this.fono=this.authService.getFono(),this.correo=this.authService.getMail(),this.direccion=this.authService.getDireccion(),this.conductor=this.authService.getConductor(),1===this.conductor&&(this.isConductor=!0),console.log(this.conductor)}addMarkers(){var e=this;return(0,u.Z)(function*(){yield e.map.addMarkers([{coordinate:{lat:33.7,lng:-117.8},title:"localhost",snippet:"Best place on earth"},{coordinate:{lat:33.7,lng:-117.8},title:"random place",snippet:"not sure"}]),e.map.setOnMarkerClickListener(function(){var s=(0,u.Z)(function*(d){(yield e.modalCtrl.create({component:h.P,componentProps:{marker:d},breakpoints:[0,.3],initialBreakpoint:.3})).present()});return function(d){return s.apply(this,arguments)}}())})()}setOpen(e){this.isModalOpen=e}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(i.IN),t.Y36(p.s),t.Y36(f.e))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-lobby"]],viewQuery:function(o,r){if(1&o&&t.Gf(Z,5),2&o){let s;t.iGM(s=t.CRH())&&(r.mapRef=s.first)}},decls:39,vars:0,consts:[["contentId","main-content"],["id","item","item",""],[1,"ion-padding"],["id","item","routerLink","/exit"],["id","item","name","home-outline","slot","start"],["id","item","routerLink","/dato-user"],["id","item","name","person-outline","slot","start"],["id","item","routerLink","/reservar"],["id","item","name","car-outline","slot","start"],["id","item","routerLink","/chatbox"],["id","item","name","chatbox-outline","slot","start"],["id","item","routerLink","/card"],["id","item","name","card-outline","slot","start"],["id","item","routerLink","/settings"],["id","item","name","settings-outline","slot","start"],["id","item","routerLink","/home"],["id","item","name","exit-outline","slot","start"],["id","main-content",1,"ion-page"],["slot","start"],["id","item"],[1,"container"],["map",""]],template:function(o,r){1&o&&(t.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title",1),t._uU(4,"DuocExpress "),t.qZA()()(),t.TgZ(5,"ion-content",2)(6,"ion-item",3),t._UZ(7,"ion-icon",4),t._uU(8," Menu Principal "),t.qZA(),t.TgZ(9,"ion-item",5),t._UZ(10,"ion-icon",6),t._uU(11," Perfil "),t.qZA(),t.TgZ(12,"ion-item",7),t._UZ(13,"ion-icon",8),t._uU(14," Viajes "),t.qZA(),t.TgZ(15,"ion-item",9),t._UZ(16,"ion-icon",10),t._uU(17," Contactos "),t.qZA(),t.TgZ(18,"ion-item",11),t._UZ(19,"ion-icon",12),t._uU(20," Pagos "),t.qZA(),t.TgZ(21,"ion-item",13),t._UZ(22,"ion-icon",14),t._uU(23," Configuraci\xf3n "),t.qZA(),t.TgZ(24,"ion-item",15),t._UZ(25,"ion-icon",16),t._uU(26," Cerrar sesion "),t.qZA()()(),t.TgZ(27,"div",17)(28,"ion-header")(29,"ion-toolbar")(30,"ion-buttons",18),t._UZ(31,"ion-menu-button",19),t.qZA(),t.TgZ(32,"ion-title",19),t._uU(33,"DuocExpress"),t.qZA()()(),t.TgZ(34,"ion-content",2)(35,"ion-content")(36,"div",20),t._UZ(37,"capacitor-google-map",null,21),t.qZA()()()())},dependencies:[i.Sm,i.W2,i.Gu,i.gu,i.Ie,i.z0,i.fG,i.wd,i.sr,i.YI,c.rH],styles:["#Logo[_ngcontent-%COMP%]{width:20%;height:15%}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.container[_ngcontent-%COMP%]{width:100%;height:100%}capacitor-google-map[_ngcontent-%COMP%]{display:inline-block;width:100%;height:50%}#item[_ngcontent-%COMP%]{color:#fff}#res[_ngcontent-%COMP%]{float:left}#cerrar[_ngcontent-%COMP%]{float:right;text-decoration:none}ion-content[_ngcontent-%COMP%]{--ion-background-color:#000000}ion-header[_ngcontent-%COMP%]{--ion-background-color:#3d3d3d}"]})}return n})()}];let P=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(C),c.Bz]})}return n})(),M=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[m.ez,g.u5,i.Pc,P]})}return n})()}}]);