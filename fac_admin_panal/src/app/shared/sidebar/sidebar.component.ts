import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { ShowAllUsersService } from 'src/app/services/showAllUsers/show-all-users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isLoaded = false
 

  constructor(private observer: BreakpointObserver, public _auth:ShowAllUsersService) { }
  
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  ngOnInit(): void {
    this._auth.getSingleUser().subscribe(
      (data)=>{
        console.log(data)
        this._auth.userData = data
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

}
