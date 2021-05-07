import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EditTodoResolver } from './_resolvers/edit-todo.resolver';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  { path: 'todo-list', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'create-todo', component: CreateTodoComponent, canActivate: [AuthGuard] },
  {
    path: 'edit-todo/users/:user/todos/:id',
    component: EditTodoComponent, canActivate: [AuthGuard], resolve: { todo: EditTodoResolver }
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
