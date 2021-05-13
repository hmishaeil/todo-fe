import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loading = true;
  errMsg: string;

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      data => this.users = data
    ).add(
      () => this.loading = false
    )
  }

  onUserAdd() { }
  onUserEdit() { }

}
