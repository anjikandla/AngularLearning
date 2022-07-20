import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myRoutings } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSelectComponent } from './color-page/app-select/app-select.component';
import { ColorPageComponent } from './color-page/color-page.component';
import { OrangeComponent } from './color-page/orange/orange.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentDataService } from './student-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ChildCompComponent } from './comp-communication/child-comp/child-comp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './user.service';
import { ScssComponent } from './scss/scss.component';
import { TableFilterPipe } from './table-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ColorPageComponent,
    OrangeComponent,
    AppSelectComponent,
    ChildCompComponent,
    PageNotFoundComponent,
    ScssComponent,
    TableFilterPipe,
    myRoutings,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatIconModule,
    // MatButtonModule
    HttpClientModule
  ],
  providers: [StudentDataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
