import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputSearchbarModule } from './input-searchbar/input-searchbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    InputSearchbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
