import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'ui-selectbox',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

  @Input() options:any[];

  @Input() defaultOption:boolean = true;

  @Input() required:boolean;

  @Output() onValueChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  onChange($event){
	console.log($event.target.value)
	this.onValueChange.emit();
  }
}
