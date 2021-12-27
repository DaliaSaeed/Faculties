import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register_login/register.service';
import { ShowAllUsersService } from 'src/app/services/showAllUsers/show-all-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSubmitted = false
  invalidData = false
  LoginForm = new FormGroup({
    email:new FormControl( 'dalia@test.com' , [Validators.required, Validators.email] ),    
    password: new FormControl('123456', [Validators.required])
  })

  constructor(private _auth:RegisterService, public myAuth:ShowAllUsersService, private _router: Router) { }

  ngOnInit(): void {
  }

  get email(){ return this.LoginForm.get('email')}
  get password(){ return this.LoginForm.get('password')}
  
  handleLogin(){
    this.isSubmitted = true
    if(this.LoginForm.valid){
      this._auth.loginUser(this.LoginForm.value).subscribe(
        (res)=>{
          console.log(res)
          localStorage.setItem('userToken', res.data.token)
        },
        (err)=>{
          console.log(err)
        },
        ()=>{
          this.LoginForm.reset()
          this.isSubmitted=false
          this._router.navigateByUrl('/showAllUsers')
          this.myAuth.isAuth = true
        }
      )
    }
  }
  

}
