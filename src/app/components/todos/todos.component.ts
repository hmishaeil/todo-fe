import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../_services/todo.service';
import { Todo } from 'src/app/models/Todo.model';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert';
import { AuthService } from 'src/app/_services/auth.service';
import { UtilService } from 'src/app/_services/util.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  errMsg = null;
  resMsg = null;

  loading: boolean = true;

  needle: string = null;

  searchResultCount: number = 0;
  searchResultBanner: boolean = false;

  userId: number = 0;
  todoId: number = 0;

  constructor(
    private todoService: TodoService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      url => {
        this.userId = url.userId;
        this.todoId = url.todoId;
      }
    )

    this.getTodos(this.userId);
  }

  private getTodos(userId: number) {
    this.todoService.getTodos(userId).subscribe(todos => {
      this.todos = todos;
    }, error => {
      console.error(error)
      this.errMsg = "Error happened.";
    }).add(() => this.loading = false);
  }

  onAdd() {
    this.router.navigate([`users/${this.userId}/todos/create`])
  }

  onEditTodo(todoId) {
    console.log(`/users/${this.userId}/todos/${todoId}/edit`);
    this.router.navigate([`/users/${this.userId}/todos/${todoId}/edit`])
  }

  onDeleteTodo(id: number) {
    swal("Are you sure to delete the todo?", {
      dangerMode: true,
      buttons: ["Cancel", "Ok"],
    }).then(
      willDelete => {
        if (willDelete) {
          this.todoService.deleteTodo(this.userId, id).subscribe(res => {
            this.toastr.success("Todo deleted successfully!");
            this.getTodos(this.userId)
          }, err => {
            this.toastr.error(err);
            this.errMsg = "Error happened.";
          })
        }
      }
    );
  }

  onSearchTodo() {
    this.todoService.getTodos(this.userId, this.needle.toLowerCase()).subscribe(
      data => {
        this.todos = data;
        this.searchResultBanner = true;
        this.searchResultCount = this.todos.length;
      }
    );
  }

  onSearchInputChange(e) {
    this.needle = e;

    if (e.length === 0) {
      this.searchResultBanner = false;
      this.searchResultCount = 0;
      this.getTodos(this.userId);
    }
  }

  areTodosMine() {
    let loggedInUserId = this.authService.USER$.value.userId;
    return (loggedInUserId == this.userId.toString())
  }

}


