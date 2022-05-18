import { environment } from "src/environments/environment";

export class Coordinates {
  address: String = "";
  latitude: Number = 0;
  longitude: Number = 0;

  constructor(addr: String) {
    this.address = addr;
  }

  /**
   * GetCoordinates
   * 
   * Returns: Coordinates
   */
  public GetCoordinates(): Coordinates {
    return this;
  }

  /**
   * SetCoordinates
   * 
   * Params:
   *  lat: Number; // Set the latitude
   *  long: Number; // Set the longitude
   */
  public SetCoordinates(lat: Number, long: Number) {
    this.latitude = lat;
    this.longitude = long;
  }
}