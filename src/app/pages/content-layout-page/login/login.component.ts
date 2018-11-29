import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';
import { GlobalService } from '../../../shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private global: GlobalService
      ) { }

  ngOnInit() {
  }

  // To login user with credential
  onLogin(credential: any) {
    this.auth.login(credential).subscribe(
      (response: any) => {
        this.global.showSuccess('success')
      },
      (error) => {
        this.global.showError(error);
      }
    )
  }

}
