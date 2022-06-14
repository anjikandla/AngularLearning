import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe-operator',
  templateUrl: './date-pipe-operator.component.html',
  styleUrls: ['./date-pipe-operator.component.scss']
})
export class DatePipeOperatorComponent implements OnInit {
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
