import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss']
})
export class OrangeComponent implements OnInit {

 @Input() public data: string = 'child data';

  constructor() { }

  ngOnInit() {
  }

}
