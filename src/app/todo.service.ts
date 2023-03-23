import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getAllTodo(){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get("http://localhost:9090/api/v1/employee/todos/alltodos", {responseType:'json', headers:header});
  }

  getAllTodoById(id:String){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get(`http://localhost:9090/api/v1/employee/todos/${id}`, {responseType:'json', headers:header});
  }

  addTodo(todo:Todo){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.post("http://localhost:9090/api/v1/employee/todos/addtodo", todo, {responseType:'text', headers:header});
  }


  getApprovedTodos(){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get("http://localhost:9090/api/v1/employee/todos/todo-approved", {responseType:'json', headers:header});
  }

  getNotApprovedTodos(){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get("http://localhost:9090/api/v1/employee/todos/todo-notapproved", {responseType:'json', headers:header});
  }
  
  updateApprovedTodo(id:String){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get(`http://localhost:9090/api/v1/employee/todos/updateapprovedtodo/${id}`, {responseType:'text', headers:header});

  }

  getCompletedTodos(){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get(`http://localhost:9090/api/v1/employee/todos/todo-completed`, {responseType:'json', headers:header});
  }

  updateCompletedTodo(id:String){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get(`http://localhost:9090/api/v1/employee/todos/updatecompletedtodo/${id}`, {responseType:'json', headers:header});

  }

}
