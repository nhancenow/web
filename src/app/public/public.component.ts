import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

logo:string;

  constructor() { }

  ngOnInit() {
  	this.logo="./assets/image/logo-big-black.png";
  }

}
