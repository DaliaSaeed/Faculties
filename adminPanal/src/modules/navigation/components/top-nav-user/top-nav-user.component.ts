import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService, UserService } from '@modules/auth/services';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    isLoaded = false
    constructor(public userService: UserService, public _auth:AuthService) {}
    ngOnInit() {
        this._auth.profile().subscribe(
            (data)=>{
              console.log(data)
              this._auth.myData = data
            },
            ()=>{
              this.isLoaded = true
              this._auth.isAuth = false
            },
            ()=>{
              this.isLoaded = true
              this._auth.isAuth = true
            }
          )
    }
    logout(){
      this._auth.logout().subscribe(
        (res) => console.log(res),
        (err) => console.log(err),
        () => {
          localStorage.clear()
          this._auth.isAuth=false
          window.location.reload();
        }
      
      )
    }
}
