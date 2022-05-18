import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlueComponent } from './color-page/blue/blue.component';
import { ColorPageComponent } from './color-page/color-page.component';
import { OrangeComponent } from './color-page/orange/orange.component';
import { RedComponent } from './color-page/red/red.component';

const routes: Routes = [
  {
    path: 'color-page',
    component: ColorPageComponent,
    children: [
      {
        path: 'orange',
        component: OrangeComponent,
        //outlet: 'color-panel'
      },
      {
        path: 'blue',
        component: BlueComponent
      },
      {
        path: 'red',
        component: RedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
