import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivateChild, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor() { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
