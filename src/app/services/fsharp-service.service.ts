import { SignInRequest } from 'app/SignInRequest';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Team } from "app/Team";
import { Observable } from "rxjs/Observable";

@Injectable()
export class FSharpService {
  options: RequestOptionsArgs;
  baseUrl: string = "http://localhost:8080";

  constructor(
    private http: Http,
    
  ) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.options = { headers: headers };
  }

  GenerateTeams(): Observable<Team[]> {
    console.log("Calling Generate Teams");
    var url = this.baseUrl + "/getTeams";

    return this.http.get(url)
                .map(response => response.json() as Team[]);
                // .catch(this.handleError);
    // return this.http
    //   .get(url, this.options)
    //   .toPromise()
    //   .then(response => {
    //     return response.json() as Team[]
    //   });
  }

  SignIn(SignInRequest): void {
    var url = this.baseUrl + "/signin";
    let data = JSON.stringify(SignInRequest);
    console.log("Calling Sign In " + url + ". with data: " + data);
     this.http.post(url, data, this.options).subscribe(response => console.log(response));
  }
}

