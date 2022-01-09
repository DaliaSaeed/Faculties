/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { AuthModule } from './auth.module';

/* Containers */
import * as authContainers from './containers';

/* Guards */
import * as authGuards from './guards';
import { AuthGuard } from './guards';
import { SuperAdminGuardsGuard } from './guards/super-admin-guards.guard';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        canActivate: [],
        component: authContainers.LoginComponent,
        data: {
            title: 'Pages Login',
        } as SBRouteData,
    },
    {
        path: 'register',
        canActivate: [AuthGuard],
        component: authContainers.RegisterComponent,
        data: {
            title: 'Pages Register',
        } as SBRouteData,
    },
    {
        path: 'forgot-password',
        canActivate: [],
        component: authContainers.ForgotPasswordComponent,
        data: {
            title: 'Pages Forgot Password ',
        } as SBRouteData,
    },
    {
        path: 'addNews',
        canActivate: [AuthGuard],
        component: authContainers.AddNewsComponent,
        data: {
            title: 'Add News',
        } as SBRouteData,
    },
    {
        path: 'addFciNews',
        canActivate: [AuthGuard],
        component: authContainers.AddFciNewsComponent,
        data: {
            title: 'Add News',
        } as SBRouteData,
    },
    {
        path: 'addToursimNews',
        canActivate: [AuthGuard],
        component: authContainers.AddToursimNewsComponent,
        data: {
            title: 'Add News',
        } as SBRouteData,
    },
    {
        path: 'addFineArtNews',
        canActivate: [AuthGuard],
        component: authContainers.AddFineArtNewsComponent,
        data: {
            title: 'Add News',
        } as SBRouteData,
    },
    {
        path: 'addArchaeologyNews',
        canActivate: [AuthGuard],
        component: authContainers.AddArchaeologyNewsComponent,
        data: {
            title: 'Add News',
        } as SBRouteData,
    },
    {
        path: 'AllNews',
        canActivate: [AuthGuard],
        component: authContainers.AllNewsComponent,
        data: {
            title: 'All News',
        } as SBRouteData,
    },
    {
        path: 'editNew/:id',
        canActivate: [AuthGuard],
        component: authContainers.EditNewComponent,
        data: {
            title: 'edit New',
        } as SBRouteData,
    },
    
    {
        path: 'showUsers',
        canActivate: [AuthGuard],
        component: authContainers.ShowUsersComponent,
        data: {
            title: 'Show All Users',
        } as SBRouteData,
        
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        component: authContainers.ProfileComponent,
        data: {
            title: 'User Profile',
        } as SBRouteData,
    } 
];

@NgModule({
    imports: [AuthModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
