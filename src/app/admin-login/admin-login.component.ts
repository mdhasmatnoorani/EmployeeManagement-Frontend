import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';
import { Admin } from '../model/Admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin:Admin = new Admin();
  
  constructor(private adminservice:AdminloginService, private router:Router){}
  
  ngOnInit() {

  }

  doLogin(admin:Admin){
    let resp = this.adminservice.doAuth(admin);
    resp.subscribe(data=>{
      if(data!=null){
        localStorage.setItem("Token", data);
        localStorage.setItem("auth-user",admin.adminEmailId.toString());
        localStorage.setItem("user-type","ADMIN");
      }
      this.router.navigateByUrl("/admin-dashboard");
    })
  }

}
