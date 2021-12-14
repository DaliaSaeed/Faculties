import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  msg=""
  constructor(private _auth:RegisterService) { }

  ngOnInit(): void {
  }
  handleForm(userData:any){
    if(userData.valid){
      console.log(userData.value)
      this._auth.register(userData.value).subscribe(result=> console.log(result))
      this.msg=""
      userData.resetForm()
    }
    else{
      this.msg="Check Your Form Data"
    }
    
    
    
  }

}
