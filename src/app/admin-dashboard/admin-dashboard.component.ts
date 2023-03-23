import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';
import { LoginService } from '../login.service';
import { Admin } from '../model/Admin';
import { Todo } from '../model/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  alladmin: Admin[];

  constructor(private adminservice: AdminloginService, 
              private router:Router,
              private service:TodoService,
              private todoEmpoloyeeService:LoginService
              ) { }
  
  todo:any;
  alltodos:Todo[];
  alltodosbyEmployee:Todo[];

  

  ngOnInit(): void {
    if(localStorage.getItem("Token")!=null && localStorage.getItem("auth-user")!=null && localStorage.getItem("user-type")=="ADMIN"){
    if (localStorage.getItem("Token")) {
      let resp = this.adminservice.doGetAllAdmin();
      resp.subscribe(data => {
        if (data != null) {
          this.alladmin = <Admin[]>data;
        } 
      })
      let resp2 = this.service.getAllTodo();
      resp2.subscribe((data) => {
        if (data != null) {
          this.alltodos = <Todo[]>data;
        } 
      })
      let resp3 = this.todoEmpoloyeeService.doGetAllTodosByEmployee();
      resp3.subscribe((data) => {
        if (data != null) {
          this.alltodosbyEmployee = <Todo[]>data;
        } 
      })
      
    }else{
      alert("You are not logged in! Please login to view this page.");
      this.router.navigateByUrl("admin-login");
    }
  }else{
    alert("You are not authorized to view this page.");
    this.router.navigateByUrl("/");
  }
  }
  
  }
