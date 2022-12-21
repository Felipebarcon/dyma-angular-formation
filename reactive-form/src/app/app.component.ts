import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /*  public form: FormGroup = new FormGroup({
      email: new FormControl(''),
      hobbies: new FormArray([]),
      password: new FormControl(''),
      nom: new FormControl(''),
    });*/

  public form: FormGroup = this.fb.group({
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    hobbies: this.fb.array([]),
    password: [''],
  });

  constructor(private fb: FormBuilder) {}

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  ngOnInit(): void {
    console.log(this.form);
  }

  addHobby() {
    this.hobbies.push(new FormControl(''));
  }

  deleteHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  submit() {
    console.log(this.form.value);
  }
}
