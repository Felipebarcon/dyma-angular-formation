import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { UserEditComponent } from './user-edit/user-edit.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements CanActivate, CanActivateChild, CanDeactivate<UserEditComponent>
{
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(route);
    console.log(state);
    return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }

  canDeactivate(
    component: UserEditComponent,
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return component.canDeactivate();
  }
}
