import { SignInRequest } from 'app/SignInRequest';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Team } from "app/Team";

@Injectable()
export class FSharpService {
  options: RequestOptionsArgs;


  constructor(
    private http: Http,
    
  ) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.options = { headers: headers };
  }

  GenerateTeams(): Promise<Team[]> {
    console.log("Calling Generate Teams");
    var url = " /getTeams";
    return this.http
      .get(url, this.options)
      .toPromise()
      .then(response => {
        return response.json() as Team[]
      });
  }

  SignIn(SignInRequest): void {
    console.log("Calling Sign In");
    var url = "/signin";
    let data = JSON.stringify(SignInRequest);
     this.http.post(url, data, this.options)
     .toPromise()
     .catch(response => { });
  }
}

