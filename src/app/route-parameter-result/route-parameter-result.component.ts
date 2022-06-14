import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-parameter-result',
  templateUrl: './route-parameter-result.component.html',
  styleUrls: ['./route-parameter-result.component.scss']
})
export class RouteParameterResultComponent implements OnInit {
  GetID:any;
  @Input() public RouteID:any;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('id'));
    this.GetID = this.router.snapshot.paramMap.get('id');
  }

}
