import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})

export class AllEmployeeComponent implements OnInit {


  allemployees: Employee[];

  numberOfEmployees: number;

  constructor(private empservice: LoginService, private router:Router) { }


  ngOnInit(): void {
    if (localStorage.getItem("Token")) {
      let resp = this.empservice.doGetAllEmployee();
      resp.subscribe(data => {
        if (data != null) {
          this.allemployees = <Employee[]>data;
          this.numberOfEmployees = this.allemployees.length;
          console.log(this.numberOfEmployees);
        }
      })
    }else{
      alert("You are not logged in! Please login to view this page.");
      this.router.navigateByUrl("login");
    }
  }

  onDelete(email:String){
    let resp2 = this.empservice.doDeleteEmployee(email);
      resp2.subscribe(data => {
       this.ngOnInit();
      })
  }

}

