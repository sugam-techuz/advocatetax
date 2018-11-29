import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';
import { GlobalService } from '../../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private global: GlobalService,
    private router: Router) { }

  ngOnInit() {
  }

  // For forgot password (reset password)
  resetPassword(email: any) {
    this.auth.resetPassword(email).subscribe(
      (response: any) => {
        if (response) {
          this.router.navigate(['/content-layout/login'])
        }
      },
      (error) => {
        this.global.showError(error);
      }
    )
  }
}
