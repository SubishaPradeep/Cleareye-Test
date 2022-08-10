import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employeeDetails';
  ngOnInit(){
    let one =   {name:"caacs"}
    localStorage.setItem("mykey" , JSON.stringify(one) )
  }
}
