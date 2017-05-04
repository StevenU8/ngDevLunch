
import { Component, OnInit } from '@angular/core';
import { SignInRequest } from "app/SignInRequest";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  SignInRequest: SignInRequest;
  
  constructor() { }

  ngOnInit() {
     this.SignInRequest = new SignInRequest();
  }

}
