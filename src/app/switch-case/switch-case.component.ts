import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.scss']
})
export class SwitchCaseComponent implements OnInit {
  matchCase: any;

  constructor() { }

  ngOnInit(): void {
    this.ngswitch('1');
  }
  ngswitch(option:any){
    this.matchCase = option;
  }
}
