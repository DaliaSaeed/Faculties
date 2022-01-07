import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService, UserService } from '@modules/auth/services';

@Component({
  selector: 'sb-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLoaded = false
  isnull=false

  constructor(public userService:UserService, public _auth:AuthService) { }

  ngOnInit(): void {
    this._auth.profile().subscribe(
      (data)=>{
        console.log(data)
        this._auth.myData = data
      },
      (err)=>{
        console.log(err)
        this.isLoaded = true
        this.isnull=true
        this._auth.isAuth = false
      },
      ()=>{
        this.isLoaded = true
        this._auth.isAuth = true
      }
    )
  }

}
