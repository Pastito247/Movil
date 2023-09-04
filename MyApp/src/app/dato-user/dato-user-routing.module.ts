import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatoUserPage } from './dato-user.page';

const routes: Routes = [
  {
    path: '',
    component: DatoUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatoUserPageRoutingModule {}
