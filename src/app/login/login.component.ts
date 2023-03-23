import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { LoginService } from '../login.service';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  employee:Employee = new Employee();

  constructor(private empservice:LoginService, private router:Router){}

  ngOnInit(): void {

  }

  doLogin(employee:Employee){
    let resp = this.empservice.doAuth(employee);
    resp.subscribe(data=>{
      if(data!=null){
        localStorage.setItem("Token", data);
        localStorage.setItem("auth-user",employee.employeeId.toString());
        localStorage.setItem("user-type","EMPLOYEE");
      }
      this.router.navigateByUrl("/");
    })
  }
}
