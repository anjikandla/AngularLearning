import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.scss']
})
export class ColorPageComponent implements OnInit {

  parentInp: string = 'parent data';
  msg:any;
  @Input() public ParentComp:any;
  colors:any = ['orange','yellow', 'green', 'blue']

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //listner
  // updateData(event: any){
  //   console.log('parent', event);
  // }
  navigate(msg:any) {
    console.log(msg);
    this.router.navigate(["/"+ msg ]);
    //this.defaultPage = false;
  }

}
