import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './Pages/Authentication/add-news/add-news.component';
import { LoginComponent } from './Pages/Authentication/login/login.component';
import { ProfileComponent } from './Pages/Authentication/profile/profile.component';
import { RegisterComponent } from './Pages/Authentication/register/register.component';
import { ShowAllUsersComponent } from './Pages/Authentication/show-all-users/show-all-users.component';

const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"showAllUsers", component:ShowAllUsersComponent},
  {path:"addNews", component:AddNewsComponent},
  {path:"", component:LoginComponent},
  {path:"profile", component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
