"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9200],{9200:(Ne,U,h)=>{h.r(U),h.d(U,{HomePageModule:()=>Se});var g=h(6814),m=h(6728),V=h(95),k=h(9351),s=h(6689),vt=h(2112),yt=h(6466),Mt=h(3278);const Et=["title"],Tt=function(){return["/register"]},At=[{path:"",component:(()=>{class n{constructor(t,i,o,r,a){this.router=t,this.animationCtrl=i,this.api=o,this.authService=r,this.emailService=a,this.posts=[],this.confirmacion=!1,this.correoInput=document.getElementById("Correo"),this.isModalOpen=!1}ngOnInit(){}ngAfterViewInit(){this.animationCtrl.create().addElement(this.title.nativeElement).duration(3500).iterations(1/0).keyframes([{offset:0,transform:"translateX(0%)"},{offset:.5,transform:"translateX(80%)"},{offset:1,transform:"translateX(0%)"}]).play()}setOpen(t){this.isModalOpen=t}validar(){var t=document.getElementById("correo").value,i=document.getElementById("contra").value;console.log(t),this.api.getPosts(t).subscribe(o=>{this.confirmacion=!0,console.log("Verificando: CORRESTO"),this.posts=o.items,o.contrasena==i?(this.authService.setDatos(t,o.nombre,o.telefono,o.conductor,o.direccion),this.router.navigate(1===o.conductor?["/conductor"]:["/lobby"])):(console.log("error"),this.animation=this.animationCtrl.create().addElement(document.getElementsByName("Contra")).duration(500).iterations(2).keyframes([{offset:0,transform:"translateX(0px)"},{offset:.5,transform:"translateX(10px)"},{offset:1,transform:"translateX(0px)"}]),this.animation.play())},o=>{this.confirmacion=!1,console.log("Error"),this.animation=this.animationCtrl.create().addElement(document.getElementsByName("Correo")).duration(500).iterations(2).keyframes([{offset:0,transform:"translateX(0px)"},{offset:.5,transform:"translateX(10px)"},{offset:1,transform:"translateX(0px)"}]),this.animation.play()})}static#t=this.\u0275fac=function(i){return new(i||n)(s.Y36(k.F0),s.Y36(m.vB),s.Y36(vt.s),s.Y36(yt.e),s.Y36(Mt.j))};static#e=this.\u0275cmp=s.Xpm({type:n,selectors:[["app-home"]],viewQuery:function(i,o){if(1&i&&s.Gf(Et,5,s.SBq),2&i){let r;s.iGM(r=s.CRH())&&(o.title=r.first)}},decls:38,vars:4,consts:[[3,"translucent"],["title",""],["src","../assets/img/logo-duoc.png","id","Logo"],[3,"fullscreen"],["collapse","condense"],["size","large"],["src","../assets/img/logotipo.png","id","logotipo"],["name","inputs","id","inputs-login"],["type","email","fill","solid","label","Email","labelPlacement","floating","helperText","Ingrese Email","errorText","Invalid email","name","Correo","id","correo"],["id","contra","name","Contra","type","password","fill","solid","label","Contrase\xf1a","labelPlacement","floating","helperText","Ingrese Contrase\xf1a","errorText","Invalid email"],["for","","id","laber"],[3,"routerLink"],["routerLink","/rescontra"],["id","botones"],["id","ingresar",3,"click"],["for","","id","end"]],template:function(i,o){1&i&&(s.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",null,1),s._UZ(4,"img",2),s.qZA()()(),s.TgZ(5,"ion-content",3)(6,"ion-header",4)(7,"ion-toolbar")(8,"ion-title",5),s._uU(9,"Blank"),s.qZA()()(),s._UZ(10,"br")(11,"br")(12,"img",6),s.TgZ(13,"ion-list",7),s._UZ(14,"ion-input",8)(15,"br")(16,"br")(17,"ion-input",9),s.qZA(),s.TgZ(18,"label",10),s._uU(19,"No tienes cuenta?:"),s.qZA(),s.TgZ(20,"a",11),s._uU(21,"Register"),s.qZA(),s._UZ(22,"br"),s.TgZ(23,"label",10),s._uU(24,"Olvidaste tu contrase\xf1a?"),s.qZA(),s.TgZ(25,"a",12),s._uU(26,"Restablecer"),s.qZA(),s._UZ(27,"br")(28,"br")(29,"br")(30,"br")(31,"br"),s.TgZ(32,"div",13)(33,"ion-button",14),s.NdJ("click",function(){return o.validar()}),s._uU(34,"Ingresar"),s.qZA()()(),s.TgZ(35,"ion-footer")(36,"label",15),s._uU(37," \xa9 2023 Pasto International"),s.qZA()()),2&i&&(s.Q6J("translucent",!0),s.xp6(5),s.Q6J("fullscreen",!0),s.xp6(15),s.Q6J("routerLink",s.DdM(3,Tt)))},dependencies:[m.YG,m.W2,m.fr,m.Gu,m.pK,m.q_,m.wd,m.sr,m.j9,m.Fo,k.rH],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#res[_ngcontent-%COMP%], #mod[_ngcontent-%COMP%]{color:#fff}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#inputs-login[_ngcontent-%COMP%]{margin-top:10%;background-color:transparent}#laber[_ngcontent-%COMP%]{color:#fff}#end[_ngcontent-%COMP%]{color:#fff;margin-left:100%;position:absolute}a[_ngcontent-%COMP%]{text-decoration:none}#Logo[_ngcontent-%COMP%]{width:20%;height:15%}#logotipo[_ngcontent-%COMP%]{margin-left:36%;width:30%;height:20%}#botones[_ngcontent-%COMP%]{float:inherit}#ingresar[_ngcontent-%COMP%]{width:100%}#rescontra[_ngcontent-%COMP%]{float:right}ion-content[_ngcontent-%COMP%]{--ion-background-color:#000000}ion-header[_ngcontent-%COMP%]{--ion-background-color:#3d3d3d}"]})}return n})()}];let L,Ct=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=s.oAB({type:n});static#i=this.\u0275inj=s.cJS({imports:[k.Bz.forChild(At),k.Bz]})}return n})();try{L=typeof Intl<"u"&&Intl.v8BreakIterator}catch{L=!1}let C,T=(()=>{class n{constructor(t){this._platformId=t,this.isBrowser=this._platformId?(0,g.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!L)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#t=this.\u0275fac=function(i){return new(i||n)(s.LFG(s.Lbi))};static#e=this.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function x(n){return function Dt(){if(null==C&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>C=!0}))}finally{C=C||!1}return C}()?n:!!n.capture}h(5619);var O=h(8645);h(2096);var Pt=h(2181);h(3997);var H=h(9773);function K(n){return Array.isArray(n)?n:[n]}var Vt=h(2572),jt=h(5211),Gt=h(5592),Ht=h(8180),Kt=h(4352),Zt=h(9360),zt=h(8251),z=h(7398),Wt=h(7921);const Y=new Set;let _,$t=(()=>{class n{constructor(t,i){this._platform=t,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Xt}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&function Qt(n,e){if(!Y.has(n))try{_||(_=document.createElement("style"),e&&(_.nonce=e),_.setAttribute("type","text/css"),document.head.appendChild(_)),_.sheet&&(_.sheet.insertRule(`@media ${n} {body{ }}`,0),Y.add(n))}catch(t){console.error(t)}}(t,this._nonce),this._matchMedia(t)}static#t=this.\u0275fac=function(i){return new(i||n)(s.LFG(T),s.LFG(s.Ojb,8))};static#e=this.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Xt(n){return{matches:"all"===n||""===n,media:n,addListener:()=>{},removeListener:()=>{}}}let qt=(()=>{class n{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new O.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return W(K(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){const o=W(K(t)).map(a=>this._registerQuery(a).observable);let r=(0,Vt.a)(o);return r=(0,jt.z)(r.pipe((0,Ht.q)(1)),r.pipe(function G(n){return(0,Pt.h)((e,t)=>n<=t)}(1),function Yt(n,e=Kt.z){return(0,Zt.e)((t,i)=>{let o=null,r=null,a=null;const c=()=>{if(o){o.unsubscribe(),o=null;const l=r;r=null,i.next(l)}};function d(){const l=a+n,u=e.now();if(u<l)return o=this.schedule(void 0,l-u),void i.add(o);c()}t.subscribe((0,zt.x)(i,l=>{r=l,a=e.now(),o||(o=e.schedule(d,n),i.add(o))},()=>{c(),i.complete()},void 0,()=>{r=o=null}))})}(0))),r.pipe((0,z.U)(a=>{const c={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:l})=>{c.matches=c.matches||d,c.breakpoints[l]=d}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const i=this._mediaMatcher.matchMedia(t),r={observable:new Gt.y(a=>{const c=d=>this._zone.run(()=>a.next(d));return i.addListener(c),()=>{i.removeListener(c)}}).pipe((0,Wt.O)(i),(0,z.U)(({matches:a})=>({query:t,matches:a})),(0,H.R)(this._destroySubject)),mql:i};return this._queries.set(t,r),r}static#t=this.\u0275fac=function(i){return new(i||n)(s.LFG($t),s.LFG(s.R0b))};static#e=this.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function W(n){return n.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}const et="cdk-high-contrast-black-on-white",it="cdk-high-contrast-white-on-black",P="cdk-high-contrast-active";let he=(()=>{class n{constructor(t,i){this._platform=t,this._document=i,this._breakpointSubscription=(0,s.f3M)(qt).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const i=this._document.defaultView||window,o=i&&i.getComputedStyle?i.getComputedStyle(t):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove(P,et,it),this._hasCheckedHighContrastMode=!0;const i=this.getHighContrastMode();1===i?t.add(P,et):2===i&&t.add(P,it)}}static#t=this.\u0275fac=function(i){return new(i||n)(s.LFG(T),s.LFG(g.K0))};static#e=this.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=s.oAB({type:n});static#i=this.\u0275inj=s.cJS({})}return n})();const _e=new s.OlP("mat-sanity-checks",{providedIn:"root",factory:function fe(){return!0}});let R=(()=>{class n{constructor(t,i,o){this._sanityChecks=i,this._document=o,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return!function xt(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[t])}static#t=this.\u0275fac=function(i){return new(i||n)(s.LFG(he),s.LFG(_e,8),s.LFG(g.K0))};static#e=this.\u0275mod=s.oAB({type:n});static#i=this.\u0275inj=s.cJS({imports:[nt,nt]})}return n})();const rt=x({passive:!0,capture:!0});class Me{constructor(){this._events=new Map,this._delegateEventHandler=e=>{const t=function y(n){return n.composedPath?n.composedPath()[0]:n.target}(e);t&&this._events.get(e.type)?.forEach((i,o)=>{(o===t||o.contains(t))&&i.forEach(r=>r.handleEvent(e))})}}addHandler(e,t,i,o){const r=this._events.get(t);if(r){const a=r.get(i);a?a.add(o):r.set(i,new Set([o]))}else this._events.set(t,new Map([[i,new Set([o])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,rt)})}removeHandler(e,t,i){const o=this._events.get(e);if(!o)return;const r=o.get(t);r&&(r.delete(i),0===r.size&&o.delete(t),0===o.size&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,rt)))}}class S{static#t=this._eventManager=new Me;constructor(e,t,i,o){this._target=e,this._ngZone=t,this._platform=o,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,o.isBrowser&&(this._containerElement=D(i))}fadeInRipple(e,t,i={}){const o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r={...at,...i.animation},a=i.radius||function Te(n,e,t){const i=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),o=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+o*o)}(e,t,o),c=e-o.left,d=t-o.top,l=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=c-a+"px",u.style.top=d-a+"px",u.style.height=2*a+"px",u.style.width=2*a+"px",null!=i.color&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);const p=window.getComputedStyle(u),gt=p.transitionDuration,B="none"===p.transitionProperty||"0s"===gt||"0s, 0s"===gt||0===o.width&&0===o.height,b=new ye(this,u,i,B);u.style.transform="scale3d(1, 1, 1)",b.state=0,i.persistent||(this._mostRecentTransientRipple=b);return!B&&(l||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const _t=()=>this._finishRippleTransition(b),bt=()=>this._destroyRipple(b);u.addEventListener("transitionend",_t),u.addEventListener("transitioncancel",bt)}),this._activeRipples.set(b,null),(B||!l)&&this._finishRippleTransition(b),b}fadeOutRipple(e){if(2===e.state||3===e.state)return;const t=e.element,i={...at,...e.config.animation};t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity="0",e.state=2,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){const t=D(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,lt.forEach(i=>{S._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){"mousedown"===e.type?this._onMousedown(e):"touchstart"===e.type?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{dt.forEach(t=>{this._triggerElement.addEventListener(t,this,ct)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){0===e.state?this._startFadeOutTransition(e):2===e.state&&this._destroyRipple(e)}_startFadeOutTransition(e){const t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=1,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){const t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=3,null!==t&&(e.element.removeEventListener("transitionend",t.onTransitionEnd),e.element.removeEventListener("transitioncancel",t.onTransitionCancel)),e.element.remove()}_onMousedown(e){const t=q(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!J(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const t=e.changedTouches;if(t)for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{!e.config.persistent&&(1===e.state||e.config.terminateOnPointerUp&&0===e.state)&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const e=this._triggerElement;e&&(lt.forEach(t=>S._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&dt.forEach(t=>e.removeEventListener(t,this,ct)))}}let De=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=s.oAB({type:n});static#i=this.\u0275inj=s.cJS({imports:[R,R]})}return n})(),Re=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=s.oAB({type:n});static#i=this.\u0275inj=s.cJS({imports:[R,De,R]})}return n})(),Se=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=s.oAB({type:n});static#i=this.\u0275inj=s.cJS({imports:[g.ez,V.u5,m.Pc,Ct,Re]})}return n})()}}]);