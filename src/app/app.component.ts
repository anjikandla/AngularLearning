import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataService } from './student-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngTraining';
  CurrentPage = "App Component";
  
  //msg:any;
  UserName: any;
  data:any;
  matchCase:any;
  defaultPage:boolean = true;
  students:any=[];
  public studentData:any = [];
  public dataSource:any =[];
  public studentHeaderClm:any = []; 
  public totalMarks:any;
  studnetVales:any = [];
  public TemRefValue:any;
  public date = new Date();
  //option:any;
  constructor(private router: Router, private _studntData: StudentDataService) {}
  //@ViewChild('Input', { static: false }) divHello: ElementRef;
  ngOnInit(){
  }
  navigate() {
    this.router.navigate(['/color-page']);
    this.defaultPage = false;
  }
  SaveData(){
    //console.log(msg)
    //this.EventText = "Button Clicked";
    this.UserName = this.data;
  }
  InputData(TemRef:any){
    this.TemRefValue = TemRef;
  }
  
  
}
