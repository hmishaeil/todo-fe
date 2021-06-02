import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/Todo.model';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/_services/user.service';
import { UtilService } from 'src/app/_services/util.service';
import Swal from 'sweetalert2';

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

  showUserTodos: boolean = false;
  todos: Todo[] =[];

  searchResultBanner: boolean = false;
  searchResultCount: number = 0;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private userService: UserService, 
    private utilService: UtilService) { }

  private getUsers() {
    this.userService.getUsers().subscribe(
      data => this.users = data
    ).add(
      () => this.loading = false
    )
  }

  ngOnInit(): void {
    this.getUsers()
  }

  onUserAdd() {
    this.router.navigate([`/users/add`])
  }

  onUserEdit(id: number) {
    this.router.navigate([`/users/${id}/edit`])
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

  onGetUserTodos(userId: number){
    this.router.navigate([`/users/${userId}/todos`])
  }

  accessRoles(roles: []){
    return this.utilService.accessRoles(roles);
  }

}
