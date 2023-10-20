<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() marker : any;

  constructor() { }

  ngOnInit() {
  }

}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 277e991b8d57bed1d78af159c106223b703bf222
