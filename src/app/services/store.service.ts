import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { base } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getStores(): Observable<any> {
    const url = `${base.baseUrl}/hermes/api/v1/store-list`
    return this.http.get(url, {observe: 'response'})
      .pipe(
        map(res => res.body)
      );
  }
}
