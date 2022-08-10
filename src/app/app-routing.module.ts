import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';


const routes: Routes = [
  {
    path:"",
    component:EmployeeFormComponent
  },
  {
    path:"employeeInfo",
    component:EmployeeInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
