import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user.interface';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    private activatedRoute: ActivatedRoute,
    private httpService: HttpClient,
    private router: Router
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
    this.httpService
      .post<User>('https://restapi.fr/api/angularuser', this.userForm.value)
      .subscribe((user: User) => {
        console.log(user);
        this.router.navigateByUrl('/');
      });

    console.log(this.userForm.value);
  }
}
