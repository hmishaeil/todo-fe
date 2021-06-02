import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RequestRestPasswordComponent } from './components/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SentVerifyEmailComponent } from './components/sent-verify-email/sent-verify-email.component';
import { SignupComponent } from './components/signup/signup.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './_guards/auth.guard';
import { PermissionGuard } from './_guards/permission.guard';
import { EditTodoResolver } from './_resolvers/edit-todo.resolver';
import { EditUserResolver } from './_resolvers/edit-user.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sent-verify-email', component: SentVerifyEmailComponent },
  { path: 'verify-email/:token', component: VerifyEmailComponent },
  { path: 'request-reset-password', component: RequestRestPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] },
  {
    path: 'users', 
    canActivate: [AuthGuard], 
    children: [
      {
        path: '', 
        component: UsersComponent,
        canActivate: [PermissionGuard],
        data: {
          role: 'ROLE_ADMIN'
        },
      },
      {
        path: ':userId/edit',
        component: EditUserComponent, 
        resolve: { user: EditUserResolver },
        canActivate: [PermissionGuard],
        data: {
          role: 'ROLE_ADMIN'
        },
      },
      { path: 'add', 
        component: AddUserComponent,
        canActivate: [PermissionGuard],
        data: {
          role: 'ROLE_ADMIN'
        },
      },
      {
        path: ':userId/todos', 
        component: TodosComponent,
      },
      {
        path: ':userId/todos/:todoId/edit',
        component: EditTodoComponent,
        resolve: { todo: EditTodoResolver }
      },
      { path: ':userId/todos/create', 
        component: CreateTodoComponent 
      },
    ]
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
