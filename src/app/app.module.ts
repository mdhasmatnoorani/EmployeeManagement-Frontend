import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { AlltodoComponent } from './alltodo/alltodo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoClubComponent } from './todo-club/todo-club.component';
import { RejectedTodosComponent } from './rejected-todos/rejected-todos.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AlladminComponent } from './alladmin/alladmin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllTodoAdminComponent } from './all-todo-admin/all-todo-admin.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ApprovedTodosComponent } from './approved-todos/approved-todos.component';
import { NotapprovedTodosComponent } from './notapproved-todos/notapproved-todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AllEmployeeComponent,
    AlltodoComponent,
    CreateTodoComponent,
    TodoClubComponent,
    RejectedTodosComponent,
    AdminLoginComponent,
    AlladminComponent,
    AdminDashboardComponent,
    AllTodoAdminComponent,
    UpdateEmployeeComponent,
    ApprovedTodosComponent,
    NotapprovedTodosComponent,
    CompletedTodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
