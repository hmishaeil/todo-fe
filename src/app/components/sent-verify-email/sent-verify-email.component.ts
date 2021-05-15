import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './sent-verify-email.component.html',
  styleUrls: ['./sent-verify-email.component.css']
})
export class SentVerifyEmailComponent implements OnInit {

  username: string

  constructor() { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem("username")
  }

}
