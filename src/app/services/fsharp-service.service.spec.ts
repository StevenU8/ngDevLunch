import { Team } from './../Team';
import { HttpModule, XHRBackend, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { FSharpService } from './fsharp-service.service';

describe('FSharpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        FSharpService,
        MockBackend,
      ]
    });
  });

//test not working currently. Need to setup HTTP fake
  // it('GenerateTeams should return promised teams ',
  //   inject([FSharpService, MockBackend], (fSharpService, mockBackend) => {

  //     const mockResponse = {
  //       data: [
  //         {
  //           Name: 'Team 0',
  //           MemberNames: [
  //             "Member 0"
  //           ]
  //         }
  //       ]
  //     };

  //     mockBackend.connections.subscribe((connection) => {
  //       connection.mockRespond(new Response(new ResponseOptions({
  //         body: JSON.stringify(mockResponse)
  //       })));
  //     });

  //     fSharpService.GenerateTeams().then((team) => {       
  //       expect(team.length()).toBe(1);
  //       expect(team[0].Name).toEqual('Team 1');
  //       expect(team[0].MemberNames.length).toBe(1);
  //       expect(team[0].MemberNames[0]).toEqual("Member 0");
  //     });
  //   }));
});
