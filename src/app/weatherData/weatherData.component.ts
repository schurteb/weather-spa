import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
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

    let options/*: {
      headers?: HttpHeaders | {[header: string]: string | string[]},
      observe?: 'body' | 'events' | 'response',
      params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
      reportProgress?: boolean,
      responseType?: 'arraybuffer'|'blob'|'json'|'text',
      withCredentials?: boolean,
    }*/ = {
      //headers: new HttpHeaders("API:" + environment.GOOGLE_GEOCODING_API_KEY),
    }


    // Create request to Google's Geocoding API
    /*this.http.get(
      environment.OPENWEATHERMAP_API_URL + "?lat=" + c.latitude + "&lon=" + c.longitude + "&units=metric" + "&appid=" + environment.OPENWEATHERMAP_API_KEY,
      options
    ).subscribe((value: any) => {

      console.log(value);
      this.weatherDataStr = JSON.stringify(value);

      // Cast response to it's correct type

    })*/
  }

  parseDate(unix: number): Date {
    return new Date(unix * 1000);
  }
}
