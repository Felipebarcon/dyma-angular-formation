import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  validatorPaul(formControl: AbstractControl): { [p: string]: boolean } | null {
    if (formControl.value === 'paul') {
      return { notPaul: true };
    } else {
      return null;
    }
  }

  validatorAsync(
    formControl: AbstractControl
  ): Promise<{ [s: string]: boolean } | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 50000);
    });
  }
  public form: FormGroup = new FormGroup({
    nom: new FormControl('', [
      this.validatorPaul,
      Validators.required,
      this.validatorAsync,
    ]),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    // this.form.patchValue({
    //   email: 'jean@live.fr',
    // });
    // this.form.setValue({
    //   nom: 'Jean',
    //   email: 'jean@live.fr',
    //   password: '123',
    // });
    // this.form.addControl('nom', new FormControl('')); => ajouter un
    // nouveau control
    //
    // this.form.removeControl('nom'); => supprimer un control
    //
    // this.form.setControl('nom', new FormControl()); => modifier un control
    // console.log(this.form.get('nom'));
  }

  public submit(): void {
    console.log(this.form);
    // console.log(this.form.getRawValue());
  }
}
