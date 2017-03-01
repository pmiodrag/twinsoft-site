import { Component, OnInit, trigger, Input,
state,
style,
transition,
keyframes,
animate  } from '@angular/core';
import { Location } from '@angular/common';
import { PersonService, Person, TeamPage } from '../shared/index';
import {BehaviorSubject} from "rxjs/Rx";
import {asObservable} from "../shared/util/asObservable";

@Component({
    selector: 'as-home',
    templateUrl: 'team.html',
    styleUrls: [
        'team.css'
    ],
     animations: [ trigger('visibilityChanged', [
      state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])
     ]
})
export class TeamComponent implements OnInit {
    
    _teamPage: BehaviorSubject<any> = new BehaviorSubject(TeamPage.Personal);

    errorMessage: string;   
    persons: Person[] = [];
    public page = TeamPage; 
    personId: number;
 
    /**
     * Creates an instance of the HomeComponent with the injected
     * NameListService.
     *
     * @param {NameListService} nameListService - The injected NameListService.
     */
    constructor(private personService: PersonService, private location: Location) { }


    ngOnInit() {
        this.getPersons();
    }
    
    get teamPage() {
        return  asObservable(this._teamPage);
    }
    
    changeTeamPage(page: TeamPage, person: Person) {
        this.personId = person.id;
        person.page = page;
        this._teamPage.next(page);
    }
    /**
  * Handle the nameListService observable
  */
    getPersons() {
        this.personService.getPersons()
            .subscribe(
                persons => {
                    this.persons = persons;
                },
                error => {
                    console.log("Call getPersons() finished with error", error);
                    this.errorMessage = <any>error;
                }
            );
    }
    
}
