import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { TodosComponent } from './components/todos/todos.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { AuthInterceptor } from './_interceptors/auth.interceptor';
import { MatchPasswordDirective } from './_directives/match-password.directive';

import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { RequestRestPasswordComponent } from './components/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HttpErrorInterceptor } from './_interceptors/http-error.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    TodosComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    EditTodoComponent,
    CreateTodoComponent,
    MatchPasswordDirective,
    VerifyEmailComponent,
    RequestRestPasswordComponent,
    ResetPasswordComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(
      {
        timeOut: 5000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        progressBar: true,
        closeButton: true
      }
    ),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
