import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MaterialLrnRoutingModule } from './material-lrn-routing.module';

const materialModules= [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule
];
@NgModule({
  declarations: [],
  imports: [materialModules,MaterialLrnRoutingModule],
  exports:[materialModules]
})
export class MaterialLrnModule { }
