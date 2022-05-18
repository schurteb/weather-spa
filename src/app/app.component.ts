import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Coordinates } from './classes/coordinates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  value = 'Edit me';
  place = new FormControl('');

  constructor(private http: HttpClient) {}

  updatePlace(e: Event): void {
    console.log(e);
    if (e == null)
      return;

    var input = e.target as HTMLInputElement;

    this.value = input.value;
  }

  coordinatesChangedHandler(coords: Coordinates) {
    console.log("CoordinatesChangedEventHandler");
    console.log(coords);
  }
}
