import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Pages/Authentication/register/register.component';
import { ShowAllUsersComponent } from './Pages/Authentication/show-all-users/show-all-users.component';

const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"showAllUsers", component:ShowAllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
