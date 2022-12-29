import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square', [
      state(
        'normal',
        style({
          backgroundColor: 'white',
          border: '2px solid #444',
          borderRadius: '0',
        })
      ),
      state(
        'wild',
        style({
          backgroundColor: 'red',
          border: 'none',
          borderRadius: '50%',
        })
      ),
      // transition('normal <=> wild', animate(1000)),
      // transition('void => normal', animate(1000)),
      // transition('* => *', animate(1000)),
      // transition(':enter', animate('1s 1s ease-in')),
      // transition(':leave', animate(1000)),
      transition(':enter', [
        style({
          backgroundColor: 'blue',
        }),
        animate(
          800,
          style({
            backgroundColor: 'green',
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  public state = 'wild';
  title = 'animation-app';
}
