import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './input-searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    SearchbarComponent
  ],
  providers: [],
  bootstrap: [SearchbarComponent]
})
export class InputSearchbarModule { }
