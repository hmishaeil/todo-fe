import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE_TOKEN, SESSION_STORAGE_USERNAME } from 'src/app/_constants/app.constant';
import { TodoService } from '../../_services/todo.service';
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo: Todo;
  
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.todo = new Todo;
  }

  onSubmit(){
    this.todo.user = sessionStorage.getItem(SESSION_STORAGE_USERNAME);

    this.todoService.createTodo(this.todo).subscribe(res => {
      this.router.navigate(['/todo-list']);
    });
  }

}
