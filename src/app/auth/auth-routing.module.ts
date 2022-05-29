import { RegisterConformationComponent } from './register-conformation/register-conformation.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordConformationComponent } from './forgot-password-conformation/forgot-password-conformation.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'auth/login',component:LoginComponent},
{path:'auth/forgotpassword',component:ForgotPasswordComponent},
{path:'auth/forgotpasswordconformation',component:ForgotPasswordConformationComponent},
{path:'auth/register',component:RegisterComponent},
{path:'auth/registerconformation',component:RegisterConformationComponent},
{path:'auth/resetpassword',component:ResetPasswordComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
