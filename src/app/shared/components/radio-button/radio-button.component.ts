import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
  @Input() radioName:String; 
  
  @Output() onClick = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  onButtonClick($event) {
    console.log($event.target)
    this.onClick.emit();
  }

}
