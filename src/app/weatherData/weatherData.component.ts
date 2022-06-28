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

    buildOpenWeatherMapRequest(environment.OPENWEATHERMAP_API_KEY, parseFloat(c.latitude.toString()), parseFloat(c.longitude.toString()))
      .units(Units.Metric)
      .execute()
      .then((value: Forecast) => {
        console.log(value);
        this.weatherData = value;
      })
      .catch(console.log);
  }

  parseDate(unix: number): Date {
    return new Date(unix * 1000);
  }
}
