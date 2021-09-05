import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';

import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  }, BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
