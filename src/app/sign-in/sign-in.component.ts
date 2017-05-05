import { SignInRequest } from './../SignInRequest';
import { FSharpService } from './../services/fsharp-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  SignInRequest: SignInRequest;
  
  constructor(
    private service: FSharpService
    ) { }

  ngOnInit() {
     this.SignInRequest = new SignInRequest();
  }

  SignIn(){
    this.service.SignIn(this.SignInRequest);
    this.SignInRequest.Name = "";
    this.SignInRequest.Role = "";
  }

}
