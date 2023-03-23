import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  employee:Employee = new Employee();
  
  constructor(private loginService:LoginService){}

  addEmployee(employee:Employee){
    this.loginService.doAddEmployee(employee).subscribe(
      resp=>{
        console.log(resp);
      }
    )
  }
}
