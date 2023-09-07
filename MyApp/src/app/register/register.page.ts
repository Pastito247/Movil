import { Component,ElementRef, ViewChild, /*Agregado para otras funcionalidades */ OnInit } from '@angular/core';
//Agregué para animación
import { Animation, AnimationController, createAnimation } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild("title", { read: ElementRef}) title!: ElementRef;


  private animation!: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    const cardA = this.animationCtrl
      .create()
      .addElement(this.title.nativeElement)
      .duration(3500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'translateX(0%)' },
        { offset: 0.5, transform: 'translateX(80%)' },
        { offset: 1, transform: 'translateX(0%)' },
      ]);
      cardA.play();
  }
}