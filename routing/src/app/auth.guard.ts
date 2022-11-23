import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { UserEditComponent } from './user-edit/user-edit.component';
import { User } from './users/users.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements
    CanActivate,
    CanActivateChild,
    CanDeactivate<UserEditComponent>,
    Resolve<User>
{
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
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

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
    const userId = route.paramMap.get('id');
    return {
      id: 5,
      name: 'Milo',
    };
  }
}
