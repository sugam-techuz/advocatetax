import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CustomFormsModule } from 'ng2-validation';


@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule,
        CustomFormsModule
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
        ForgotPasswordComponent
    ]
})
export class ContentPagesModule { }
