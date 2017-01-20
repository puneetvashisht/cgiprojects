import { Component } from '@angular/core';

@Component({
  moduleId: module.id,    
  selector: 'my-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropDownComponent  { 
  lastName: string;
  text: string = "Select Course";
  courses: Array<string> = ['AngularJs', 'ReactJs', 'EmberJS'];
    
  show:Boolean = true;

toggleMenu(){
    this.show = !this.show;
}

handleSelectItem(data: string){
    console.log(data);
    this.text = data;
    this.show = false;
}

handleEnterName(data: string){
    console.log(data);
    this.lastName =data;
    
}

}
