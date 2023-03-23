import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';
import { Admin } from '../model/Admin';

@Component({
  selector: 'app-alladmin',
  templateUrl: './alladmin.component.html',
  styleUrls: ['./alladmin.component.css']
})
export class AlladminComponent implements OnInit {
  
  alladmin: Admin[];

  constructor(private adminservice: AdminloginService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("Token")) {
      let resp = this.adminservice.doGetAllAdmin();
      resp.subscribe(data => {
        if (data != null) {
          this.alladmin = <Admin[]>data;
        }
      })
    }else{
      alert("You are not logged in! Please login to view this page.");
      this.router.navigateByUrl("admin-login");
    }
  }


}
