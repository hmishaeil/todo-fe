import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/models/Todo.model';
import { TodoService } from '../../_services/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  todo: Todo;
  userId;

  constructor(private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private router: Router,
    private toastr: ToastrService) {
    this.activatedRoute.data.subscribe(res => {
      this.todo = res.todo;
    })
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId")
  }

  onUpdate() {
    this.todoService.updateTodo(this.userId, this.todo).subscribe(res => {
      this.toastr.success("Todo updated successfully!")
      this.router.navigate([`/users/${this.userId}/todos`])
    });
  }
}
