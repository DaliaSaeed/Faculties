import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInterceptor } from '@modules/auth/providers/user.interceptor';
import { AuthGuard } from '@modules/auth/guards';
import { SuperAdminGuardsGuard } from '@modules/auth/guards/super-admin-guards.guard';
import { AuthService } from '@modules/auth/services';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,MatIconModule],
    providers: [
        {provide:HTTP_INTERCEPTORS, useClass:UserInterceptor, multi:true},
        AuthGuard,
        SuperAdminGuardsGuard,
        AuthService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
