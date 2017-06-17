import { Component, OnInit } from '@angular/core';
import {FileUploadComponent} from '../../shared/components/file-upload';
import {EmailFieldComponent} from '../../shared/components/email-field';
import {IconButtonComponent} from '../../shared/components/icon-button';
import {SelectBoxComponent} from '../../shared/components/select-box';
import {InputBoxComponent} from '../../shared/components/input-box';
import {CurrencyComponent} from '../../shared/components/currency';
import {SearchFieldComponent} from '../../shared/components/search-field';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
imagePath = 'assets/icons/save.png';

  constructor() { }

  ngOnInit() {
  }
	onClick(){
	alert('hi')
	}
	dropdownValues =["John","Matt","Steve"]
}
