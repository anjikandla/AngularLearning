import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit {
  
  constructor() {
    
   }

  ngOnInit() {
    //var cars = ["Toyota","Tata","Audi"];
    const date = new Date();
    console.log(date);
  }

}
