import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorPageComponent } from './color-page/color-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'app-color-page', component: ColorPageComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
