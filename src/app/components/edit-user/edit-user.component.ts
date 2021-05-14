import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  loading: boolean
  errMsg: string
  user: User

  enabled: boolean

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.user = data.user)
  }

  onUserEdit() {
    this.userService.updateUser(this.user).subscribe(() => {
      this.toastr.success("User updated.")
      this.router.navigate(['/users'])
    })
  }
}
