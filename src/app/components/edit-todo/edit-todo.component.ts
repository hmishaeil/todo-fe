import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/Todo.model';
import { TodoService } from '../../_services/todo.service';
// import { Todo } from '../todos/todos.component';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  todo: Todo;

  constructor(private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private router: Router) {
    this.activatedRoute.data.subscribe(res => {
      this.todo = res.todo;
    })
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    // this.todoService.updateTodo(this.todo).subscribe(res => {
    //   this.router.navigate(['todo-list'])
    // });
  }
}
