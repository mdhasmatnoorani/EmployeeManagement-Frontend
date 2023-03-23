import { Component } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent {

  completedtodos:Todo[];

  numberOfTodos: number;

  constructor(private todoservice:TodoService){}

  ngOnInit(){
  this.completedTodos();
  }

  completedTodos(){
    this.todoservice.getCompletedTodos().subscribe(
      (res:any)=>{
        this.completedtodos = res;
        this.numberOfTodos = this.completedtodos.length; 
        console.log(res);
      }
    );
  }

  

}
