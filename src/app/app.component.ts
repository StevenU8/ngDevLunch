import { Team } from 'app/Team';
import { FSharpService } from './services/fsharp-service.service';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Code Camp AF!';
  hideTeams: boolean = true;
  teams: Team[];

  constructor(private FSharpService: FSharpService) { }

  GenerateTeams(): void {
    this.FSharpService.GenerateTeams()
      .then((response: Team[]) => { this.teams = response; })
  }
}
