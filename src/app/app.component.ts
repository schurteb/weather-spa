import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  value = 'Edit me';
  place = new FormControl('');

  updatePlace(e: Event): void {
    console.log(e);
    if (e == null)
      return;

    var input = e.target as HTMLInputElement;

    this.value = input.value;
  }
}
