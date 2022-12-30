import { TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';

describe('AppComponent', () => {
  let userServiceSpy: any;

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);
    userServiceSpy.getUsers.and.returnValue(of(['tintin']));

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: UsersService, useValue: userServiceSpy }],
    }).compileComponents();

    TestBed.inject(UsersService);
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

  it('Users should be initialized', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(userServiceSpy.getUsers).toHaveBeenCalled();
    expect(fixture.componentInstance.users).toEqual(['tintin']);
  });
});
