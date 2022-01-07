import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    isSubmitted = false
    invalidData = false

    LoginForm = new FormGroup({
    email:new FormControl( 'test@fci.com' , [Validators.required, Validators.email] ),    
    password: new FormControl('123456', [Validators.required])
  })

    constructor(private _auth:AuthService, private _router:Router) {}
    ngOnInit() {}

    get email(){ return this.LoginForm.get('email')}
    get password(){ return this.LoginForm.get('password')}

    handleLogin(){
        this.isSubmitted = true
        if(this.LoginForm.valid){
          this._auth.loginUser(this.LoginForm.value).subscribe(
            (result)=>{
              
              console.log(result)
              localStorage.setItem('userToken', result.token)
              localStorage.setItem('role', result.data.role)
              
            },
            (err)=>{
              console.log(err)
            },
            ()=>{
              this.LoginForm.reset()
              this._auth.profile().subscribe(
                (data) => {this._auth.myData= data},
                (err)=>{this._auth.isAuth = false},
                ()=>{
                  localStorage.setItem('role', this._auth.myData.role)
                  this._auth.isAuth = true
                } 
                
              )
              this._router.navigateByUrl('/dashboard') 
            }
          )
        }
      }
}
