import { Component, OnInit } from '@angular/core';
declare var require:Function;
const localforage = require('localforage');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    console.log("logout called");
    localforage.clear();
  }
}
