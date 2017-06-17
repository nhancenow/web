import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.css']
})
export class DatetimepickerComponent implements OnInit {

  constructor() { }

	myFunc(event) {
	   //alert('value is changed to ' + event);
	 }	
  ngOnInit() {
  }

}
