import { Component} from '@angular/core';
import { ShowAllUsersService } from './services/showAllUsers/show-all-users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  constructor(public _auth:ShowAllUsersService) {}
  
}
