import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CountryComponent }  from './country.component';
import { CityComponent }  from './city.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CityComponent, CountryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
