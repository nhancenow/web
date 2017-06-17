import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

    @Input() minlength:number;
	
	@Input() maxlength:number;
	
	@Input() placeholder:string;

	@Input() currencyField :number;	
	 
	  constructor() { }
	
	  ngOnInit() {
	  	this.placeholder= "Enter Currency";
	  }

}
