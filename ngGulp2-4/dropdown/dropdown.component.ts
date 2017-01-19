import { Component } from '@angular/core';

@Component({
  moduleId: module.id,    
  selector: 'my-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropDownComponent  { 
  text: string = "Select Course";
  courses: Array<string> = ['AngularJs', 'ReactJs', 'EmberJS'];
    
  show:Boolean = false;

toggleMenu(){
    this.show = !this.show;
}

handleSelectItem(data: string){
    console.log(data);
    this.text = data;
    this.show = false;
}

}
