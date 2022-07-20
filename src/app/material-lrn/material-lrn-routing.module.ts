import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngMaterialLeranComponent } from './ang-material-leran/ang-material-leran.component';

const routes: Routes = [
  {path: '', redirectTo: '/all', pathMatch:'full'},
  {path:'all', component:AngMaterialLeranComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialLrnRoutingModule { }
