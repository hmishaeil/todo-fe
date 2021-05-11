import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EditTodoResolver } from './_resolvers/edit-todo.resolver';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { RequestRestPasswordComponent } from './components/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'request-reset-password', component: RequestRestPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] },
  { path: 'create-todo', component: CreateTodoComponent, canActivate: [AuthGuard] },
  {
    path: 'edit-todo/todos/:id',
    component: EditTodoComponent, canActivate: [AuthGuard], resolve: { todo: EditTodoResolver }
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
