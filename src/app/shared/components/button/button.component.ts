import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonName: string;
  
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onButtonClick($event) {
    console.log($event.target)
  	this.onClick.emit();
  }

}
