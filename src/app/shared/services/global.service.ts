import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalService {
  // All validation
  somethingWentWrong = 'somethingWentWrong';
  badRequest = 'badRequest';
  loginRequired = 'loginRequired';
  internalServerError = 'internalServerError'
  constructor(private toastr: ToastrService) {
  }

  showSuccess(Message: any) {
    this.toastr.success(Message, 'Success');
  }

  showError(Message: any) {
    this.toastr.error(Message, 'Error');
  }

  showWarning(Message: any) {
    this.toastr.warning(Message, 'Warning');
  }

  showInfo(Message: any) {
    this.toastr.info(Message, 'Info');
  }

}
