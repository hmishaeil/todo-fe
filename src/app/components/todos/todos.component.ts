import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../_services/todo.service';
import { Todo } from 'src/app/models/Todo.model';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert';

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

  loading: boolean = true;

  constructor(private todoService: TodoService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    }, error => {
      console.error(error)
      this.errMsg = "Error happened.";
    }).add(() => this.loading = false );
  }

  onAdd() {
    this.router.navigate([`create-todo`])
  }

  onEditTodo(id: number) {
    console.log(id)
    this.router.navigate([`edit-todo/todos/${id}`])
  }

  onDeleteTodo(id: number) {
    swal("Are you sure to delete the todo?", {
      dangerMode: true,
      buttons: ["Cancel", "Ok"],
    }).then(
      willDelete => {
        if(willDelete){
                  this.todoService.deleteTodo(id).subscribe(res => {
          this.toastr.success("Todo deleted successfully!");
    
          this.getTodos()
        }, err => {
          this.toastr.error(err);
          this.errMsg = "Error happened.";
        })
        }
      }
    );
  }
}


