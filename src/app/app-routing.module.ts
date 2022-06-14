import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlueComponent } from './color-page/blue/blue.component';
import { ColorPageComponent } from './color-page/color-page.component';
import { OrangeComponent } from './color-page/orange/orange.component';
import { RedComponent } from './color-page/red/red.component';
import { CompCommunicationComponent } from './comp-communication/comp-communication.component';
import { CompanyComponent } from './company/company.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DatePipeOperatorComponent } from './date-pipe-operator/date-pipe-operator.component';
import { LessComponent } from './less/less.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteParamatersComponent } from './route-paramaters/route-paramaters.component';
import { RouteParameterResultComponent } from './route-parameter-result/route-parameter-result.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';

const routes: Routes = [
  {path: '', redirectTo: '/company', pathMatch:'full'},
  {path: 'company', component: CompanyComponent},
  {path:'componentCommunication', component: CompCommunicationComponent},
  {path:'SwitchCase', component: SwitchCaseComponent},
  {path:'DataTable', component: DataTableComponent},
  {path:'Date-Pipe-Operator', component: DatePipeOperatorComponent},
  {path:'RouteParameters', component: RouteParamatersComponent},
  {path:'RouteParameters/:id', component: RouteParameterResultComponent},
  {path:'LessCss', component: LessComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*{
    path: 'color-page',
    component: ColorPageComponent,
    children: [
      {
        path: 'orange',
        component: OrangeComponent,
        //outlet: 'color-panel'
      },
      {
        path: 'blue',
        component: BlueComponent
      },
      {
        path: 'red',
        component: RedComponent
      }
    ]
  },*/