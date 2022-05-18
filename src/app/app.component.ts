import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngTraining';
  //msg:any;
  UserName: any;
  data:any;
  matchCase:any;
  //option:any;
  constructor(private router: Router) {

  }
  //@ViewChild('Input', { static: false }) divHello: ElementRef;
  navigate() {
    this.router.navigate(['/color-page']);
  }
  SaveData(){
    //console.log(msg)
    //this.EventText = "Button Clicked";
    this.UserName = this.data;
  }
  ngswitch(option:any){
    this.matchCase = option;
  }
}
