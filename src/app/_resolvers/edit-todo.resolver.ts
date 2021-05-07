import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TodoService } from '../_services/todo.service';
import { Todo } from '../components/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class EditTodoResolver implements Resolve<Todo> {

  constructor(private todoService: TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo> {
    return this.todoService.getTodo(route.params.user, route.params.id);
  }
}
