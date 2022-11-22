import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: User[] = [
    {
      id: 1,
      name: 'Louis',
    },
    {
      id: 2,
      name: 'Theo',
    },
    {
      id: 3,
      name: 'Melina',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
