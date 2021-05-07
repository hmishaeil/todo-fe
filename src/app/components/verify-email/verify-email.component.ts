import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  @Input() email: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
