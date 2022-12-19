import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {}

  public submit(): void {
    console.log(this.form);
  }
}
