import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
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
    gender: [''],
    city: ['genève'],
    majeur: [''],
  });

  public cities = [
    {
      label: 'Zurich',
      value: 'zurich',
    },
    {
      label: 'Genève',
      value: 'genève',
    },
    {
      label: 'Nyon',
      value: 'nyon',
    },
    {
      label: 'Lausanne',
      value: 'lausanne',
    },
  ];

  public subscription = new Subscription();

  constructor(private fb: FormBuilder) {}

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  ngOnInit(): void {
    this.subscription.add(
      this.form.statusChanges.subscribe((status) => {
        console.log(status);
      })
    );

    this.subscription.add(
      this.form.valueChanges.subscribe((value) => {
        console.log(value);
      })
    );

    console.log(this.form);
  }

  addHobby() {
    const control = new FormControl('');
    control.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.hobbies.push(control);
  }

  deleteHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  submit() {
    console.log(this.form.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
