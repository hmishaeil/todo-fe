import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/Todo.model';
import { TodoService } from '../_services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class EditTodoResolver implements Resolve<Todo> {

  constructor(private todoService: TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo> {

    let userId = route.paramMap.get('userId');
    let todoId = route.paramMap.get('todoId');

    return this.todoService.getTodo(userId, todoId);
  }
}
