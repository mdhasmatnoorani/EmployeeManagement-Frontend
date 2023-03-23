import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  employee:Employee = new Employee();
  email:string;
  
  constructor(private loginService:LoginService,private activatedrouter:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
   this.activatedrouter.params.subscribe(
    res=>{
  this.loginService.doFindEmployee(res['id']).subscribe(
   (data:any)=>{
    this.employee=data
   }
  );
    }
   );
  }

  updateEmployee(email:String, employee:Employee){
    this.loginService.doUpdateEmployee(email, employee).subscribe(
      resp=>{
this.router.navigateByUrl("/admin-dashboard")      }
    )
  }
}
