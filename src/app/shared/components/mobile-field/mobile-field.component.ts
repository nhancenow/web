import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ui-mobile-field',
  templateUrl: './mobile-field.component.html',
  styleUrls: ['./mobile-field.component.css']
})

export class MobileFieldComponent implements OnInit {
    
	@Input() minlength:number = 2;
	
	@Input() maxlength:number =12;
	
	@Input() placeholder:string;

	@Input() mobileField :number;
    
	 isRequired = false;

  constructor() { }

     ngOnInit() {
     this.placeholder= "Mobile Number";
       }

}
