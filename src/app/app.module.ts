import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSelectComponent } from './color-page/app-select/app-select.component';
import { ColorPageComponent } from './color-page/color-page.component';
import { OrangeComponent } from './color-page/orange/orange.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPageComponent,
    OrangeComponent,
    AppSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
