import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './input-searchbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchbarComponent
  ],
  providers: [],
  bootstrap: [SearchbarComponent]
})
export class InputSearchbarModule { }
