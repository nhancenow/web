import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

	@Input() label: string;
	@Input() action: string;
	
	constructor() { }
  	ngOnInit() {
  	}

}
