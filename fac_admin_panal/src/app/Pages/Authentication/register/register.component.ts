import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register_login/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  isSumitted : Boolean = false
  emailUsedBefore : Boolean= false
  roles:any = ['Fci_admin', 'SAdmin']

  registerForm = new FormGroup({
    fname:new FormControl('', [Validators.required]),
    lname:new FormControl('', [Validators.required]),
    phone:new FormControl('', [Validators.required]),
    role:new FormControl('', [Validators.required]),
    image:new FormControl('', ),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  
  constructor(private _auth:RegisterService,  private _router: Router) { }

  ngOnInit(): void {
  }
 
  get fname(){return this.registerForm.get('fname')}
  get lname(){return this.registerForm.get('lname')}
  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}
  handleRegister(){
    this.isSumitted = true
    if(this.registerForm.valid){
      this._auth.register(this.registerForm.value).subscribe(
        (res)=>{
          console.log(res)
        },
        (err)=>{
          this.emailUsedBefore = true
          console.log(this.emailUsedBefore)
          console.log(err)
        },
        ()=>{
          this.registerForm.reset()
          this.isSumitted=false
          this._router.navigateByUrl('/login')
        }
      )
    }
  }

}
