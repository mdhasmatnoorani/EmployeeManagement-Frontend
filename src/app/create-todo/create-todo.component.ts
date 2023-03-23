import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../model/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit{

  todo:Todo = new Todo();

  constructor(private service:TodoService, private router:Router){}

  ngOnInit(){
    
  }

  onAddTodo(){
   let resp =  this.service.addTodo(this.todo);
   resp.subscribe(data=>{
    if(data=="Todo added!"){
      alert("Todo Added");
      this.ngOnInit();
      this.router.navigateByUrl("/todo-club");
    }
   })
  }

}
