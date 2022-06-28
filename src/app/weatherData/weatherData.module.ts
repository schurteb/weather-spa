import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDataComponent } from './weatherData.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [
    WeatherDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    WeatherDataComponent
  ],
  providers: [],
  bootstrap: [WeatherDataComponent]
})
export class WeatherDataModule { }
