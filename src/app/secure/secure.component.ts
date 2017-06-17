import { Component, OnInit } from '@angular/core';
import {LEFTMENU} from '../shared/configs/left-menu.config';
import {SidebarItem} from '../shared/components/left-sidebar';
import {FooterComponent} from '../shared/components/footer';
import {HeaderComponent} from '../shared/components/header';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  menu: SidebarItem[];
  
  constructor() { }

  ngOnInit() {
  	this.menu = LEFTMENU;
  }

}
