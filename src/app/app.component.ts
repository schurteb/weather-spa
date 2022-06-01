import { Component } from '@angular/core';
import { Coordinates } from './classes/coordinates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  constructor() {}

  coordinatesChangedHandler(coords: Coordinates) {
    console.log("CoordinatesChangedEventHandler");
    console.log(coords);
  }
}
