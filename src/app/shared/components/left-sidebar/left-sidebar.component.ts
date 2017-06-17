import { Component, OnInit, Input } from '@angular/core';
import {SidebarItem} from './left-sidebar-item';

@Component({
  selector: 'ui-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

	@Input() item: SidebarItem[];

	constructor() { }

  	ngOnInit() {
  	}

}
