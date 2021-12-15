import { Component, OnInit } from '@angular/core';
import { ShowAllUsersService } from 'src/app/services/showAllUsers/show-all-users.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.scss']
})
export class ShowAllUsersComponent implements OnInit {
  usersData:any =[]

  constructor(private _allUsers:ShowAllUsersService) { }

  ngOnInit(): void {
    this._allUsers.getUsers().subscribe(data=>{
      this.usersData = data
      console.log(data)
    })
  }

}
