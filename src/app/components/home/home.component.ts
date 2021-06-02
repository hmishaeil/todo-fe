import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  images = [
    { url: "../../../assets/signup.png", alt: "SignUp Form" },
    { url: "../../../assets/login.png", alt: "Login Form" },
    { url: "../../../assets/reset-password.png", alt: "Reset Password" },
    { url: "../../../assets/user-todo.png", alt: "User Todos" },
    { url: "../../../assets/create-todo.png", alt: "Create Todo" },
    { url: "../../../assets/edit-todo.png", alt: "Edit Todo" },
    { url: "../../../assets/delete-todo.png", alt: "Delete Todo" },
    { url: "../../../assets/users.png", alt: "Users List" },
    { url: "../../../assets/verify-email-template.png", alt: "Verify Email Template" },
    { url: "../../../assets/temporary-password-email-template.png", alt: "Temporary Password Email Template" },
    { url: "../../../assets/reset-password-email-template.png", alt: "Reset Password Email Template" },
    { url: "../../../assets/login-email-template.png", alt: "Login Email Template" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onImageClick(imageUrl) {
    Swal.fire({
      imageUrl: imageUrl,
      showCancelButton: false,
      showConfirmButton: false
    });
  }

}
