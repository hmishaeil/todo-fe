import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Utils from 'src/app/helpers/utils';
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

  needle: string = null;

  accessRoles = Utils.accessRoles;
  searchResultBanner: boolean = false;
  searchResultCount: number = 0;

  constructor(private userService: UserService, private router: Router) { }

  private getUsers() {
    this.userService.getUsers().subscribe(
      data => this.users = data
    ).add(
      () => this.loading = false
    )
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onUserAdd() {
    this.router.navigate([`/add-user`])
  }

  onUserEdit(id: number) {
    this.router.navigate([`/edit-user/users/${id}`])
  }

  onUserSearch() {
    this.userService.getUsers(this.needle.toLowerCase()).subscribe(
      data => {
        this.users = data;
        this.searchResultBanner = true;
        this.searchResultCount = this.users.length;
      }
    );
  }

  onSearchInputChange(e) {
    this.needle = e;

    if (e.length === 0) {
      this.searchResultBanner = false;
      this.searchResultCount = 0;
      this.needle = null;
      this.getUsers();
    }
  }

}
