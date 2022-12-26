import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public nom: string = 'Jean';
  public date1 = new Date();
  public date2 = Date.now();
  public search = '';
  public names = ['Julie', 'Julien', 'Louis', 'Tintin', 'Milou'];
}
