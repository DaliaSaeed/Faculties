import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './Pages/Authentication/register/register.component';
import { FacultyOerationComponent } from './Pages/faculty-oeration/faculty-oeration.component';
import { LoginComponent } from './Pages/Authentication/login/login.component';
import { ShowAllUsersComponent } from './Pages/Authentication/show-all-users/show-all-users.component'


@NgModule({
  declarations: [AppComponent, SidebarComponent, FooterComponent, RegisterComponent, FacultyOerationComponent, LoginComponent, ShowAllUsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
