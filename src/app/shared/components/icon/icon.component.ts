import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input()
  type = '';
  
  constructor() { }

  ngOnInit() {
  }

}
