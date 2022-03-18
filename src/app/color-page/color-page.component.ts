import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.scss']
})
export class ColorPageComponent implements OnInit {

  parentInp: string = 'parent data';

  colors: string[] = ['orange','yellow', 'green', 'blue']

  constructor() { }

  ngOnInit(): void {
  }

  //listner
  updateData(event: any){
    console.log('parent', event);
  }

}
