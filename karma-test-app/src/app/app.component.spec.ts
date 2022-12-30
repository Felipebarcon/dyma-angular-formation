import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('App tittle shoul be app', () => {
    const fixture = TestBed.createComponent(AppComponent);

    console.log(fixture.nativeElement.querySelector('span').innerHTML);
  });
});
