import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/Employee';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  doAddEmployee(employee:Employee){
    return this.http.post("http://localhost:9090/api/v1/employee/auth/add", employee, {responseType:"text"});
  }

  doAuth(employee:Employee){
    return this.http.post("http://localhost:9090/api/v1/employee/auth/authenticate", employee, {responseType:"text"});
  }

  doGetAllEmployee(){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get("http://localhost:9090/api/v1/employee/allemployees", {responseType:"json", headers:header});
  }

  doGetAllTodosByEmployee(){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get("http://localhost:9090/api/v1/employee/todos/todo-employee-details", {responseType:"json", headers:header});
  }

  doUpdateEmployee(email:String, employee: Employee){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.put(`http://localhost:9090/api/v1/employee/update/${email}`, employee, {responseType:"json", headers:header});
  }

  doDeleteEmployee(email:String){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.delete(`http://localhost:9090/api/v1/employee/delete/${email}`, {headers:header});
  }

  doFindEmployee(email: String){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get(`http://localhost:9090/api/v1/employee/find/${email}`, {headers:header});
  }
}
