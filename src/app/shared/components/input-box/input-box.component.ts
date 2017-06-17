import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})

export class InputBoxComponent implements OnInit {

     @Input() maxLenghtOfInputBox:number =8;
	
	 @Input() minLenghtOfInputBox:number=2;
	
	 @Input() placeholder:string;

     @Input() boxFieldId :string;	

	 isRequired = false;
	 constructor() { }
	
	  ngOnInit() {
	  	this.placeholder= "Enter Text";
 }


}
