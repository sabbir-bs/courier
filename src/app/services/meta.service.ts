import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { base } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private http: HttpClient) { }

  getMetaData(): Observable<any> {
    const url = `${base.baseUrl}/atlas/meta`
    return this.http.get(url, {observe: 'response'})
      .pipe(
        map(res => res.body)
      );
  }
}
