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
    fixture.detectChanges();
    // const h1Content = fixture.nativeElement.querySelector('h1').textContent;

    fixture.componentInstance.title = 'testapp3';
    fixture.detectChanges();
    const h1Content = fixture.nativeElement.querySelector('h1').textContent;

    expect(h1Content).toEqual('Welcome testapp3');

    // console.log(fixture.nativeElement.querySelector('span').innerHTML);
  });
});
