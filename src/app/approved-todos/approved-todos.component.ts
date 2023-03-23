import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-approved-todos',
  templateUrl: './approved-todos.component.html',
  styleUrls: ['./approved-todos.component.css']
})
export class ApprovedTodosComponent implements OnInit {

  approvedtodos:Todo[];

  numberOfTodos: number;

constructor(private todoservice:TodoService){}

  ngOnInit(){
  this.getApprovedTodos();
  }

  getApprovedTodos(){
    this.todoservice.getApprovedTodos().subscribe(
      (res:any)=>{
        this.approvedtodos = res;
        this.numberOfTodos = this.approvedtodos.length;
        console.log(res);
      }
    );
  }



}
