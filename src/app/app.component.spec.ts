import { HttpModule } from '@angular/http';
import { FSharpService } from './services/fsharp-service.service';
import { By } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [CarouselModule, HttpModule],
      providers: [FSharpService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async((done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Welcome to Code Camp AF!'`, async((done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to Code Camp AF!');
  }));

  it('should render title in a h1 tag', async((done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Code Camp AF!');
  }));

  it('should display welcome carousel', async((done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('welcome')).toBeTruthy();
  }));

  it('should display sign in form', async((done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('sign-in')).toBeTruthy();
  })); 

});
