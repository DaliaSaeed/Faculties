import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShowUsersService } from '@modules/auth/services/show-users.service';

@Component({
  selector: 'sb-show-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {
  usersData:any = [];
  loaded:Boolean=false;
  notFound:Boolean=false
  constructor(private _allUsers:ShowUsersService) { }

  ngOnInit(): void {
    this._allUsers.getUsers().subscribe(
      (data)=>{this.usersData = data
      console.log(data)},
      (err)=>{this.notFound=true},
      ()=>{this.loaded=true}
    )
  }

}
