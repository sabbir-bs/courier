import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { LocationService } from './services/location.service';
import { MetaService } from './services/meta.service';
import { OrderService } from './services/order.service';
import { StoreService } from './services/store.service';

export interface RootObject {
  store_id: number;
  merchant_order_id: string;
  recipient_name: string;
  recipient_phone: string;
  recipient_address: string;
  recipient_city: number;
  recipient_zone: number;
  recipient_area?: any;
  delivery_type: number;
  item_type: number;
  special_instruction: string;
  item_quantity: number;
  item_weight: string;
  item_description: string;
  amount_to_collect: string;
}

export interface City {
  city_id: string;
  city_name: string;
}

export interface Store {
  store_id: number;
  store_name: string;
  store_address: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: any;
  orderForm: any;

  cityData: City[] = [];
  storeData: Store[] = [];
  zoneData: any;
  metaData: any;

  constructor(
    private locationService: LocationService,
    private storeService: StoreService,
    private metaDataService: MetaService,
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCities();
    this.getAreas();
    this.getZones();
    this.getStores();
    this.getMetaData();
    this.createOrderForm();
  }

  createOrderForm() {
    this.orderForm = this.formBuilder.group({
      store_id: [119, Validators.required],
      merchant_order_id: [''],
      recipient_name: ['Sabbir', Validators.required],
      recipient_phone: ['01745299389', Validators.required],
      recipient_address: ['Dhaka, 1212, Bangladesh', Validators.required],
      recipient_city: [52, Validators.required],
      recipient_zone: [300, Validators.required],
      recipient_area: [''],
      delivery_type: [12],
      item_type: [2],
      special_instruction: [''],
      item_quantity: [2],
      item_weight: ['0.5'],
      item_description: ['Pasta, 1000'],
      amount_to_collect: ['', Validators.required],
    });
  }


  createOrder()
  {
    const orderData = Object.assign({}, this.orderForm.value);

    this.orderService.createOrder(orderData).subscribe(data => {
      console.log('return data', data);
    }, error => {
      console.log(error);
    })

    console.log('order clicked', orderData);
  }

  getMetaData() {
    this.metaDataService.getMetaData().subscribe(data => {
      const res = {...data};
      this.metaData = res;
      console.log('meta', this.metaData);
    }, error => {
      console.log(error);
    })
  }

  
  getCities() {
    this.locationService.getCities().subscribe(data => {
      const res = {...data };
      this.cityData = res?.data?.data;
      console.log('city data', this.cityData);
    }, error => {
      console.log(error);
    })
  }

  getAreas() {
    this.locationService.getAreas().subscribe(data => {
      console.log('area data', data);
    }, error => {
      console.log(error);
    })
  }

  getZones() {
    this.locationService.getZones().subscribe(data => {
      const res = { ... data};
      this.zoneData = res?.data?.data;
      console.log('zone data', this.zoneData);
    }, error => {
      console.log(error);
    })
  }

  getStores() {
    this.storeService.getStores().subscribe(data => {
      console.log('store data', data);
      const res = {...data};
      this.storeData = res?.data;
      console.log('store data', this.storeData);
;    }, error => {
      console.log(error);
    })
  }

}