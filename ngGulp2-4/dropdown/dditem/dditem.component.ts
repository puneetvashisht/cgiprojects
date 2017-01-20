import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,    
  selector: 'dd-item',
  template: `
            <p (click)="handleClick()">{{text}}</p>
            <p>{{firstname}} : <input type="text" #t1 (blur)="0"/> {{t1.value}} <button (click)="sendToParent(t1.value)">Send to Parent</button></p>
    `
})
export class DdItemComponent  { 
    @Input('itemtext') text:string;
    @Input('firstname') firstname: string;
    @Output('selectItem') selectItem: EventEmitter<string> = new EventEmitter();  
    @Output('enterName') enterName: EventEmitter<string> = new EventEmitter();  

    handleClick(){
        console.log('item clicked' + this.text);
        this.selectItem.emit(this.text);
    }
     
     sendToParent(name: string){
         console.log('send to parent: ' + name);
        this.enterName.emit(name);
     }
}
