import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public nom: string = 'Jean';
  public date1 = new Date();
  public date2 = Date.now();
  public search = '';
  public names$ = this.userService.users$;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
