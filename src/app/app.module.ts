import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSelectComponent } from './color-page/app-select/app-select.component';
import { ColorPageComponent } from './color-page/color-page.component';
import { OrangeComponent } from './color-page/orange/orange.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { StudentDataService } from './student-data.service';
import { CompanyComponent } from './company/company.component';
import { HttpClientModule } from '@angular/common/http';
import { CompCommunicationComponent } from './comp-communication/comp-communication.component';
import { ChildCompComponent } from './comp-communication/child-comp/child-comp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DatePipeOperatorComponent } from './date-pipe-operator/date-pipe-operator.component';
import { RouteParamatersComponent } from './route-paramaters/route-paramaters.component';
import { UserService } from './user.service';
import { RouteParameterResultComponent } from './route-parameter-result/route-parameter-result.component';
import { LessComponent } from './less/less.component';
import { ScssComponent } from './scss/scss.component';
@NgModule({
  declarations: [
    AppComponent,
    ColorPageComponent,
    OrangeComponent,
    AppSelectComponent,
    CompanyComponent,
    CompCommunicationComponent,
    ChildCompComponent,
    PageNotFoundComponent,
    SwitchCaseComponent,
    DataTableComponent,
    DatePipeOperatorComponent,
    RouteParamatersComponent,
    RouteParameterResultComponent,
    LessComponent,
    ScssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [StudentDataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
