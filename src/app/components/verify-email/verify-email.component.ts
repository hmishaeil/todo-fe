import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  verified: boolean

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    const token = this.activatedRoute.snapshot.params.token;
    this.authService.verifyEmail(token).subscribe(() => {
      this.toastr.success("Verified Successfully");
      this.verified = true;
    }, () => {
      this.verified = false;
    })
  }

}
