import { Component } from '@angular/core';
import { state, style, trigger } from '@angular/animations';

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
    ]),
  ],
})
export class AppComponent {
  public state = 'normal';
  title = 'animation-app';
}
