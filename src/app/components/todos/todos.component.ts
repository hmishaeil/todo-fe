import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { TodoService } from '../../_services/todo.service';
import { SESSION_STORAGE_USERNAME } from 'src/app/_constants/app.constant';
import { Todo } from 'src/app/models/Todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  errMsg = null;
  resMsg = null;
  user: string;

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      
    }, error => {
      console.error(error)
      this.errMsg = "Error happened.";
    });
  }

  onDeleteTodo(id: number){
    // this.todoService.deleteTodo(this.user, id).subscribe(res => {
    //   this.getAllTodos();
    //   this.resMsg = id + " Deleted!"
    // }, err => {
    //   this.errMsg = "Error happened.";
    // })
  }

  onEditTodo(id: number){
    console.log(id)
    this.router.navigate([`edit-todo/todos/${id}`])
  }

  onAdd(){
    this.router.navigate([`create-todo`])
  }
}

 
