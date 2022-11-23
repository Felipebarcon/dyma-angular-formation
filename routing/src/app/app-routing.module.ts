import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { UserEditComponent } from './user-edit/user-edit.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: UsersComponent,
    children: [
      {
        path: ':id/edit',
        canDeactivate: [AuthGuard],
        component: UserEditComponent,
      },
      {
        path: ':id',
        component: UserComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
