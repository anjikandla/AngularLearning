import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.scss']
})
export class AppSelectComponent implements OnInit {

  @Input() items: string[] = [];

  @Output() valueChanged: EventEmitter<any> = new EventEmitter(); //bell

  constructor() { }

  ngOnInit() {
  }

  getValue(event: any) {
    console.log(event.target.value);
    this.valueChanged.emit(event.target.value); // bell ring
  }

}
