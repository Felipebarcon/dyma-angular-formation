import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup = this.initForm();
  public user?: User;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.userForm = this.initForm();
    });
  }

  initForm(user = { username: null, age: null }) {
    return this.fb.group({
      username: [user.username],
      age: [user.age],
    });
  }

  submit() {
    console.log(this.userForm.value);
  }
}
