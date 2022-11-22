import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UsersComponent,
    UserComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
