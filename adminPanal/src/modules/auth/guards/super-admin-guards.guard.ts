import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminGuardsGuard implements CanActivate {
  constructor(private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(localStorage.getItem('userToken') && localStorage.getItem('role') == 'user'){
        return true
      }else {
        alert('u cant go here')
        this._router.navigateByUrl('/auth/login')
        return false
      }
  }
  
}
