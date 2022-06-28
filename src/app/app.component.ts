import { Component } from '@angular/core';
import { Coordinates } from './classes/coordinates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  coordinates: Coordinates = new Coordinates("None");
  coordinatesStr: string = "";
  showWeather: boolean = false;

  weatherData = JSON.stringify({});

  constructor() {}

  coordinatesChangedHandler(coords: Coordinates) {
    console.log("CoordinatesChangedEventHandler");
    console.log(coords);
    this.coordinates = coords;
    this.coordinatesStr = JSON.stringify(this.coordinates);
    console.log(this.coordinatesStr);
    this.showWeather = true;
  }

  weatherDataChangedHandler(data: any) {
    console.log("weatherDataChangedEventHandler");
    console.log(data);
  }
}
