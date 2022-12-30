import { Component } from '@angular/core';
import {
  animate,
  group,
  query,
  stagger,
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
      transition(
        'normal => wild',
        group([
          animate(
            200,
            style({
              borderRadius: '50%',
            })
          ),
          animate(
            2000,
            style({
              backgroundColor: 'red',
            })
          ),
        ])
        // animate(
        //   2000,
        //   keyframes([
        //     style({
        //       backgroundColor: 'yellow',
        //       offset: 0,
        //     }),
        //     style({
        //       backgroundColor: 'green',
        //       offset: 0.2,
        //     }),
        //     style({
        //       backgroundColor: 'blue',
        //       offset: 0.4,
        //     }),
        //     style({
        //       backgroundColor: 'orange',
        //       offset: 0.6,
        //     }),
        //     style({
        //       backgroundColor: 'teal',
        //       offset: 0.8,
        //     }),
        //   ])
        // )
      ),
    ]),

    /* Query and Stagger */

    trigger('list', [
      transition(
        ':enter',
        query('li', [
          style({
            opacity: 0,
            transform: 'translateX(-10px)',
          }),
          stagger(-100, animate(400)),
        ])
      ),
    ]),
  ],
})
export class AppComponent {
  public state = 'normal';
  title = 'animation-app';
}
