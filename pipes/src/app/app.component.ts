import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, ReplaySubject } from 'rxjs';

interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public user: ReplaySubject<User> = new ReplaySubject(1);

  ngOnInit() {
    this.user.next({
      firstName: 'Jean',
      lastName: 'Dupuis',
    });

    const s1 = this.user
      .pipe(
        filter((user: User) => user != null), // la fonction passée à
        // filter doit retourner un booléen
        map((user: User) => `${user.firstName} ${user.lastName}`)
      )
      .subscribe((fullName: string) => console.log('[s1] : ', fullName));
  }
}
