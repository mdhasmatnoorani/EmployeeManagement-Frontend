import { Component } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-notapproved-todos',
  templateUrl: './notapproved-todos.component.html',
  styleUrls: ['./notapproved-todos.component.css']
})
export class NotapprovedTodosComponent {

  notapprovedtodos:Todo[];

  numberOfTodos: number;

  constructor(private todoservice:TodoService){}


  ngOnInit(){
  this.getNotApprovedTodos();
  }

  getNotApprovedTodos(){
    this.todoservice.getNotApprovedTodos().subscribe(
      (res:any)=>{
        this.notapprovedtodos = res;
        this.numberOfTodos = this.notapprovedtodos.length;
        console.log(res);
      }
    );
  }

}
