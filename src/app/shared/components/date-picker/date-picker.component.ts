import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'ui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  date: DateModel;
  options: DatePickerOptions;
 
  constructor() {
    this.options = new DatePickerOptions();
  }
  ngOnInit() {
  }

}

