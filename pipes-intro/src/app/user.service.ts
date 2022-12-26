import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject([
    'Julie',
    'Julien',
    'Louis',
    'Tintin',
    'Milou',
  ]);
  constructor() {}
}
