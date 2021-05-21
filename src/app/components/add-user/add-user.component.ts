import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddUserRequest } from 'src/app/_requests/add_user.request';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles = ['Superadmin', 'Admin', 'Support', 'User']
  userRequest: AddUserRequest = new AddUserRequest();


  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onAddUser() {
    this.userService.addUser(this.userRequest).subscribe(
      data => {
        this.toastr.success("User added!")
      }
    )
  }
}
