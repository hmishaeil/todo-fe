import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { TodoService } from '../../_services/todo.service';
import { SESSION_STORAGE_USERNAME } from 'src/app/_constants/app.constant';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];
  errMsg = null;
  resMsg = null;
  user: string;

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem(SESSION_STORAGE_USERNAME)

    this.getAllTodos();
  }

  private getAllTodos() {

    this.todoService.getTodos(this.user).subscribe(todos => {
      this.todoList = todos;
    }, error => {
      console.log(error)
      this.errMsg = "Error happened.";
    });
  }

  onDeleteTodo(id: number){
    this.todoService.deleteTodo(this.user, id).subscribe(res => {
      this.getAllTodos();
      this.resMsg = id + " Deleted!"
    }, err => {
      this.errMsg = "Error happened.";
    })
  }

  onEditTodo(id: number){
    this.router.navigate([`edit-todo/users/${this.user}/todos/${id}`])
  }

  onAdd(){
    this.router.navigate([`create-todo`])
  }
}

export class Todo{
  constructor(
    public id: number = 0,
    public user: string = null,
    public description: string = null,
    public done: boolean = false,
    public deadline: Date = null,
  ) { }
}
