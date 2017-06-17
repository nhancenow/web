import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DatePickerComponent } from '../date-picker';
import { SelectBoxComponent } from '../select-box';
import { InputBoxComponent } from '../input-box';
import { IconComponent } from '../icon';

@Component({
  selector: 'ui-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

@Input() type:string='input-box';

@Input() placeholder:string;

@Output() onClick = new EventEmitter();

dropdownValues =["John","Matt","Steve"]

  constructor() { }

  ngOnInit() {
  
  }
  
   focusOutFunction($event){
     console.log($event.target)
     this.onClick.emit();
   
   }
   onKey($event) { 
     console.log($event.target)
     this.onClick.emit();
   
   }
   onClickSerchIcon($event){
     console.log($event.target)
     this.onClick.emit();
   
   }
  
}
