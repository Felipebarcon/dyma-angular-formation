import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/:id/:name',
    component: UserComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
