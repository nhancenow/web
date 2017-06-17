import { Component, OnInit, Input } from '@angular/core';
import { deepExtend } from '../../../helpers/json-util.helper';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {
	
  	@Input()
  	pageSettings:any = {};
  
  	@Input()
  	dataSource:any;
  	
  	createIcon:string = 'create';
  
  	defaultSettings = {
		title: "",
		showCreateIcon: false,	// true|false
		viewSettings: {
			columns: {},
		 	actions: {
	      		columnTitle: 'Actions',
	      		add: false,
	      		edit: false,
	      		delete: false,
	      		custom: [],
	      		position: 'right'
	    	}
		},
	};
  
  	constructor() { }

	ngOnInit(){
		deepExtend({}, this.defaultSettings, this.pageSettings);
	}
}
