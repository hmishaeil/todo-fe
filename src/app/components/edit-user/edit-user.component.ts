import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  loading: boolean
  errMsg: string
  user: User

  enabled
  
  constructor() { }

  ngOnInit(): void {
  }

  onUserEdit(){}
}
