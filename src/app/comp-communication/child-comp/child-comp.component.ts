import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit {
  @Input() public DataForChild:any;
  @Output() public DataForParent = new EventEmitter();
  public text:string = "This text send from Child Component";
  
  constructor() { }

  ngOnInit(): void {
    //this.sendData()
  }
  sendData(){
    this.DataForParent.emit(this.text);
  }
}
