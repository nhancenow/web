import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'ui-emailfield',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.css']
})
export class EmailFieldComponent implements OnInit {

	@Input() minlength:number;
	
	@Input() maxlength:number;
	
	@Input() placeholder:string;	
	 
	constructor() { }
	
	ngOnInit(){
		this.placeholder = "abc@xyz.com";
	}
	 
}
