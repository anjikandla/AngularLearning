import { Component, OnInit } from '@angular/core';
import { StudentDataService, UserData } from '../student-data.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  public data:any;
  [x: string]: any;
  TableData:any = []
  HeaderClm:any = [];
  studnetVales: any =[];
  totalMarks: any;
  employeeTable: any =[]
  employeeHeader:any =[];
  userData: any[] = [];
  TableHeader:any = [];
  public mymodel:string ="";
  constructor(private _studntData: StudentDataService) { }

  ngOnInit(): void {
    
//console.log(this.employeeTable);
    // for(let x in this.employeeTable){
      
    //   console.log(Object.keys(this.employeeTable[x]));
    // }
    //console.log(this.data);
    this.getUsers();
  }

  getUsers(){
    this._studntData.getData().subscribe(data =>{
      //console.log(data);
      //this.userData = data.slice(1,15);
      //console.log(this.mymodel);
    this.userData = data.slice(1,15);
    //this.employeeTable = this.TableData.Employees;
    this.TableHeader = Object.keys(this.userData[0]);
    }, err => {
      console.error("Api Executed with error ", err);
    },() => {
      console.log("Api Executed");
    });
  }
  valuechange(newValue:any) {
    this.mymodel = newValue;
    console.log(this.mymodel);
    //this.getUsers();
  }
}
