import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { base } from '../../environments/environment'

export interface City {
  city_name: string;
  city_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }


  getAreas(): Observable<any> {
    const url = `${base.baseUrl}/hermes/api/v1/zones/298/area-list`
    return this.http.get(url, {observe: 'response'})
      .pipe(
        map(res => res.body)
      );
  }

  getCities(): Observable<any> {
    const url = `${base.baseUrl}/hermes/api/v1/countries/1/city-list`
    return this.http.get(url);
  }

  getZones():  Observable<any> {
    const url = `${base.baseUrl}/hermes/api/v1/cities/1/zone-list`
    return this.http.get(url)
  }


}
