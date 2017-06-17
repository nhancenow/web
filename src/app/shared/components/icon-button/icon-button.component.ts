import { Component, Input,Output,OnInit,EventEmitter } from '@angular/core';
import { IconComponent } from '../icon';

@Component({
  selector: 'ui-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Input() buttonIcon: string;
  
  @Input() buttonText: string;

  @Output() onClick = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onClickButton($event) {
    console.log($event.target)
    this.onClick.emit();
  }

}
