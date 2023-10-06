import { Component,ElementRef, ViewChild, /*Agregado para otras funcionalidades */ OnInit } from '@angular/core';
//Agregué para animación
import { Animation, AnimationController, createAnimation } from '@ionic/angular';
  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
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


    const cardB = createAnimation()
      .addElement(document.getElementsByName('inputs'))
      
      .keyframes([
        { offset: 0, transform: 'translatex(0%)'},
        { offset: 0.5, transform: 'translatex(100%)' },
        { offset: 1, transform: 'translatex(0%)' },
      ]);



    this.animation = this.animationCtrl
      .create()
      .duration(2000)
      .iterations(1)
      .addAnimation([cardB]);
  }

  delete() {
    this.animation.play();
  }
  
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
