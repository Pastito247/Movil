import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatoUserPageRoutingModule } from './dato-user-routing.module';

import { DatoUserPage } from './dato-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatoUserPageRoutingModule
  ],
  declarations: [DatoUserPage]
})
export class DatoUserPageModule {}
