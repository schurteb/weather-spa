import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Coordinates } from '../classes/coordinates';
import { buildOpenWeatherMapRequest, Forecast, Units } from 'owm-onecall-api';

@Component({
  selector: 'weatherdata',
  templateUrl: './weatherdata.component.html',
  styleUrls: ['./weatherdata.component.css']
})
export class WeatherDataComponent {
  @Input() coordinates: Coordinates;
  @Input() coordinatesStr: string;

  weatherData: Forecast | undefined;

  constructor(private http: HttpClient) {
    this.coordinates = new Coordinates("None");
    this.coordinatesStr = "None";
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['coordinates']) {
      // Do your logic here
      console.log("coordinatesStr changed");
      this.requestWeatherData(this.coordinates);
    }
  }

  requestWeatherData(c: Coordinates) {
    // Build the OWM request object, include API-Key & coordinates
    buildOpenWeatherMapRequest(
      environment.OPENWEATHERMAP_API_KEY,
      parseFloat(
        c.latitude.toString()
      ),
      parseFloat(
        c.longitude.toString()
      )
    )
    // define the units to be requests
    .units(Units.Metric)
    // send the request
    .execute()
    // catch the response & parse it into an object implementing the interface Forecast defined in 'WeatherDataResponse.interface.ts'
    .then((value: Forecast) => {
      console.log(value);
      this.weatherData = value;
    })
    // catch any errors that might occur
    .catch(console.log);
  }

  parseDate(unix: number): Date {
    return new Date(unix * 1000);
  }
}
