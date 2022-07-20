import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-route-paramaters',
  templateUrl: './route-paramaters.component.html',
  styleUrls: ['./route-paramaters.component.scss']
})
export class RouteParamatersComponent implements OnInit {
  public Userlist:any = [];

  constructor(private UserServicelist: UserService, private _router:Router, private _activatedRoute:ActivatedRoute) { }
  public userID:any;
  ngOnInit(): void {
    this.getUsersList();
  }
  getUsersList(){
    this.UserServicelist.userData().subscribe(data=>{
      this.Userlist = data;
      //console.log(this.Userlist.data);
    })
  }
  navigate(x:any){
    this._router.navigate(['RouteParameters/', x.id]);
    this.userID = x.id;
  }
  childOne(){
    this._router.navigate(['childRouteOne'],{relativeTo:this._activatedRoute})
  }
  childTwo(){
    this._router.navigate(['childRouteTwo'],{relativeTo:this._activatedRoute})
  }
}
