import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Coordinates } from '../classes/coordinates';

@Component({
  selector: 'input-searchbar',
  templateUrl: './input-searchbar.component.html',
  styleUrls: ['./input-searchbar.component.css']
})
export class SearchbarComponent {
  address = new FormControl('TEKO Schweizerische Fachschule AG, Pilatusstrasse 38, Luzern, Schweiz');
  coords = new FormControl('');

  constructor(private http: HttpClient) { }

  @Output()
  coordinatesChanged: EventEmitter<Coordinates> = new EventEmitter();

  onSubmit(e: any) {
    console.log(this.address.value);

    this.requestGeocodingAPI(this.address.value);
  }

  requestGeocodingAPI(address: String) {
    let c: Coordinates = new Coordinates(address);

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
    this.http.get(
      environment.GOOGLE_GEOCODING_API_URL + "?address=" + address + "&key=" + environment.GOOGLE_GEOCODING_API_KEY,
      options
    ).subscribe((value: any) => {
      // Cast response to it's correct type
      const response = value as google.maps.GeocoderResponse;

      // Get first item from results
      const result = response.results.pop();

      // Type gate for "possibly undefined objects"
      if (result !== undefined && result.geometry.location.lng !== undefined && result.geometry.location.lat !== undefined) {

        console.log(result.geometry.location);

        // Cast lat & lng to TS native Numbers & store them in c for quick reference
        c.SetCoordinates(
          Number(result.geometry.location.lat),
          Number(result.geometry.location.lng)
        )
        
        // Set coordinate formControl value
        this.coords.setValue(c.latitude + " / " + c.longitude);

        // Emit the coordinatesChanged event to notify the parent component of an update
        this.coordinatesChanged.emit(c);
      }
    })
  }
}
