import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  studentData: { id: number; name: string; course: string; date: string; Marks: number; }[] = [];
  studentHeaderClm: string[] = [];
  //studnetVales: any;
  totalMarks: any;
  studnetVales: any = [];

  constructor(private _studntData: StudentDataService) { }

  ngOnInit(): void {
    this.studentData = this._studntData.getStudent();
    //console.log(this.studentData);
    this.studentHeaderClm = Object.keys(this.studentData[0]);
    for (let x of this.studentData){
      //console.log("for of:"+ Object.keys(x));
      this.studnetVales.push(Object.values(x));
    }
    // for(let x in this.studentData){
    //   console.log("for in:"+ Object.keys(this.studentData[x]));
    // }
    this.totalMarks = this.studentData.reduce((total: number,value: any)=>{ /*console.log(value);*/ return total + value.Marks},0);

    /*this.studentData = this._studntData.getStudent();
    console.log(this.studentData);
    this.studentHeaderClm = Object.keys(this.studentData);
    console.log(this.studentHeaderClm);*/
  }

}
