import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';
import { LoginService } from '../login.service';
import { Admin } from '../model/Admin';
import { Todo } from '../model/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-all-todo-admin',
  templateUrl: './all-todo-admin.component.html',
  styleUrls: ['./all-todo-admin.component.css']
})
export class AllTodoAdminComponent {

  alladmin: Admin[];

  constructor(private adminservice: AdminloginService, 
              private router:Router,
              private service:TodoService,
              private todoEmpoloyeeService:LoginService,
              private todoService:TodoService
              ) { }
  
  todo:any;
  alltodos:Todo[];
  alltodosbyEmployee:Todo[];
  todoApprovedList:Todo = new Todo();

  numberOfTodos: number;

  

  ngOnInit(): void {
    if(localStorage.getItem("Token")!=null && localStorage.getItem("auth-user")!=null && localStorage.getItem("user-type")=="ADMIN"){

    
    if (localStorage.getItem("Token")) {
      let resp = this.adminservice.doGetAllAdmin();
      resp.subscribe(data => {
        if (data != null) {
          this.alladmin = <Admin[]>data;
        } 
      })
      let resp2 = this.todoEmpoloyeeService.doGetAllTodosByEmployee();
      resp2.subscribe((data) => {
        if (data != null) {
          this.alltodosbyEmployee = <Todo[]>data;
          this.numberOfTodos = this.alltodosbyEmployee .length;
          console.log(data);
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

  todoApproved(id:String){
   this.todoService.updateApprovedTodo(id).subscribe(
    res=>{
      this.ngOnInit();
    }
   );
  }

  todoNotApproved(){
    alert("Todo Not Approved!");

  }
}