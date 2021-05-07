import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../_services/todo.service';
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  username: string;
  todo: Todo;

  constructor(private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private router: Router) {
    this.activatedRoute.data.subscribe(res => {
      this.todo = res.todo;
    })
  }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username')
  }
  
  onSubmit() {
    this.todoService.updateTodo(this.todo).subscribe(res => {
      this.router.navigate(['todo-list'])
    });
  }
}
