import { Team } from 'app/Team';
import { FSharpService } from './../services/fsharp-service.service';
import { CarouselModule } from 'ngx-bootstrap';
import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  imageUrls: string[];
  
  constructor(private FSharpService: FSharpService) {
    this.imageUrls = [
      "https://angular.io/resources/images/logos/angular/angular.svg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Fsharp%2C_Logomark%2C_October_2014.svg/1024px-Fsharp%2C_Logomark%2C_October_2014.svg.png",
      "https://cdn.worldvectorlogo.com/logos/angular-3.svg",
      "https://sergeytihon.files.wordpress.com/2015/04/w2.jpg",
      "https://cdn-images-1.medium.com/max/622/1*grk7btEn0OJEQRKgG2Qs2A.png",
      "https://www.microsoft.com/net/images/learn/languages/fsharp.svg",
      "assets/images/CrazyAF.PNG"
    ];
  }
}
