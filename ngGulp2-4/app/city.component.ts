import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,    
  selector: 'cgi-city',
  template: `
     
     <p>Country is {{country}}</p>
     
    <select #c (change)="handleChange(c.value)">
        <option *ngFor="let city of cities"  value="{{city}}">{{city}}</option>
     </select>
  `
})
export class CityComponent  { 
  @Input('country') country = ''; 
  @Output('cityChange') cityChange: EventEmitter<string> = new EventEmitter();

  handleChange(city:string){
      console.log('Change event in city component')
      console.log(city);
      this.cityChange.emit(city);
  }   
   
  ngOnChanges(){
     
           console.log('Every time input property changes');
          if(this.country === 'India'){
              this.cities = ['Delhi', 'Bangalore']    
          }
          else{
             this.cities = ['NY', 'LA']  
          }
      
     
  }   

  cities:Array<string> = []    
}













