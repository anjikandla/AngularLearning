import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-communication',
  templateUrl: './comp-communication.component.html',
  styleUrls: ['./comp-communication.component.scss']
})
export class CompCommunicationComponent implements OnInit {
  DataForChildComp = "This Text came from Parent Component";
  msg:any;
  constructor() { }

  ngOnInit(): void {
  }

}
