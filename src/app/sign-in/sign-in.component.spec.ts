import { HttpModule } from '@angular/http';
import { FSharpService } from './../services/fsharp-service.service';
import { SignInRequest } from './../SignInRequest';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      providers: [FSharpService],
      imports: [HttpModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain sign in form', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('form')).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.css('button[type="submit"]')).length).toBe(1);
  });

  it('should contain backing properties for sign in info', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    expect(app.SignInRequest.Name).toBe('');
    expect(app.SignInRequest.Role).toBe('');
  });

  it('should contain field bound to name', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#name'))).toBeTruthy();

  });

  it('should contain field bound to role', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#role'))).toBeTruthy();
  });

});


