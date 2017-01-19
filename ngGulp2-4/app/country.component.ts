import { Component } from '@angular/core';

@Component({
  moduleId: module.id,    
  selector: 'cgi-country',
  template: `
     <p>Country</p>
     <select #c (change)="0">
        <option *ngFor="let country of countries"  value="{{country}}">{{country}}</option>
     </select>

      <p>From child component: {{city}}</p>
    
      <hr>    
      <cgi-city [country]="c.value" (cityChange)="handleCityChange($event)"></cgi-city>    
  `
})
export class CountryComponent  { 
   countries = ['India', 'US'];
   city = '';    

   handleCityChange(data){
       console.log('cityChange event in country component')
       console.log(data);
       this.city = data;
       
   }
   /*country = '';

   handleChange(event){
       console.log('Change happen');
       console.dir(event.target.value);
       this.country = event.target.value;
   }*/
}
