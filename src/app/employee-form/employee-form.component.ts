import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormArray, FormControlName} from '@angular/forms';
import { Employee } from '../employee';
import { Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
 submitted:boolean=false;
 empList:Array<Employee> = [];
  constructor(private route: Router,private empForm:FormBuilder) { }

   public employeeData=new FormGroup({
     name :new FormControl("",Validators.required),
     dob :new FormControl(new Date(),Validators.required),
     gender :new FormControl("",Validators.required),
     phone :new FormArray([
      new FormControl(Number,Validators.required)
    ],Validators.required),
     role:new FormControl("",Validators.required),
     address :new FormControl("",Validators.required)
   })

   submit(){
      this.submitted=true;
      if(this.employeeData.status=="VALID"){
        this.empList.push(this.employeeData.value);
        let getExisting = JSON.parse(localStorage.getItem("employeeData"));
        if(getExisting){
          this.empList = this.empList.concat(getExisting);
        }
        localStorage.setItem("employeeData",JSON.stringify(this.empList));
        this.route.navigate(["employeeInfo"]);
        this.submitted=false;
      }
   }
  ngOnInit() {
  }

}
