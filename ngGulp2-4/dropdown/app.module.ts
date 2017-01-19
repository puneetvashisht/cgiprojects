import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DropDownComponent }  from './dropdown.component';
import { DdItemComponent }  from './dditem/dditem.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DropDownComponent,DdItemComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
