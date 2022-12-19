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
    // console.log(this.form.value);
    // console.log(this.form.getRawValue());
    this.form.reset();
  }
}
