import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user= {
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    image: ""
  }

  msg=""
  constructor(private _auth:RegisterService) { }

  ngOnInit(): void {
  }
  handleForm(userData:NgForm){
    if(userData.valid){
      this._auth.register(this.user).subscribe(result=> console.log(result))
      this.msg="Done"
      userData.resetForm()
    }
    else{
      this.msg="Check Your Form Data"
    }
    
    
    
  }

}
