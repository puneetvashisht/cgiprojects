import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,    
  selector: 'dd-item',
  template: `
            <p (click)="handleClick()">{{text}}</p>
    `
})
export class DdItemComponent  { 
    @Input('itemtext') text:string;
    @Output('selectItem') selectItem: EventEmitter<string> = new EventEmitter();  

    handleClick(){
        console.log('item clicked' + this.text);
        this.selectItem.emit(this.text);
    }
}
