import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';
import { GlobalService } from '../../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private global: GlobalService,
    private router: Router) { }

  ngOnInit() {
  }

  // To register with new user
  registration(registerData: any) {
    this.auth.registration(registerData).subscribe(
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
