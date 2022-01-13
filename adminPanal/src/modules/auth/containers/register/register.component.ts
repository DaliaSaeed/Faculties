import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    isSumitted : Boolean = false
    emailUsedBefore : Boolean= false
    roles:any = ['fci_user','archaeology_user','alsun_user','toursim_user', 'admin']

  registerForm = new FormGroup({
    fname:new FormControl('', [Validators.required]),
    lname:new FormControl('', [Validators.required]),
    phone:new FormControl('', [Validators.required]),
    role:new FormControl('', [Validators.required]),
    image:new FormControl('', ),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })
    constructor(private _auth:AuthService, private _router:Router) {}
    ngOnInit() {

    }
    get fname(){return this.registerForm.get('fname')}
  get lname(){return this.registerForm.get('lname')}
  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}
  get role(){return this.registerForm.get('role')}
  get image(){return this.registerForm.get('image')}
  get phone(){return this.registerForm.get('phone')}
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
        }
      )
    }
  }
}
