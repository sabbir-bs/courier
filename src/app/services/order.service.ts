import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { base } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(orderData: any): Observable<any> {
    const url = `${base.baseUrl}/hermes/api/v1/orders`
    return this.http.post(url, orderData);
      
  }
}
