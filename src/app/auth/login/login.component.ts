import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Form,FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(private FormBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router) {
      this.loginform=this.FormBuilder.group({
        password:['',Validators.required]

      });
     }

  ngOnInit(): void {


  }
  login(){
    console.log(this.loginform.value);

    this.authService.login(this.loginform.value).subscribe((response:any) => {
    this.router.navigate(['/auth/forgotpassword'])
    });
 }
}
