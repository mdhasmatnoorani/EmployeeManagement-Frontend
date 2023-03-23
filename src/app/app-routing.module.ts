import { ApplicationRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { AllTodoAdminComponent } from './all-todo-admin/all-todo-admin.component';
import { AlladminComponent } from './alladmin/alladmin.component';
import { AlltodoComponent } from './alltodo/alltodo.component';
import { ApprovedTodosComponent } from './approved-todos/approved-todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotapprovedTodosComponent } from './notapproved-todos/notapproved-todos.component';
import { RegisterComponent } from './register/register.component';
import { RejectedTodosComponent } from './rejected-todos/rejected-todos.component';
import { TodoClubComponent } from './todo-club/todo-club.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"", component:HomeComponent},
  {path:"allemployees", component:AllEmployeeComponent},
  {path:"todo-club", component:TodoClubComponent},
  {path:"create-todo", component:CreateTodoComponent},
  {path:"view-todo", component:AlltodoComponent},
  {path:"rejected-todos", component:RejectedTodosComponent},
  {path:"admin-login", component:AdminLoginComponent},
  {path:"alladmin", component:AlladminComponent},
  {path:"admin-dashboard", component:AdminDashboardComponent},
  {path:"all-todo-admin", component:AllTodoAdminComponent},
  {path:"update-employee/:id", component:UpdateEmployeeComponent},
  {path:"approved-todos", component:ApprovedTodosComponent},
  {path:"not-approved-todos", component:NotapprovedTodosComponent},
  {path:"completed-todos",component:CompletedTodosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
