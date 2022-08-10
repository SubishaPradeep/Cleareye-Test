import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  constructor() { }
 info:Array<Employee>;
  ngOnInit() {
    let employeeInfo = localStorage.getItem("employeeData")
     this.info = JSON.parse(employeeInfo)
  }

}
