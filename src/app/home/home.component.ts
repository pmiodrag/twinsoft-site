import { Component, OnInit, trigger,
state,
style,
transition,
keyframes,
animate } from '@angular/core';
import { CompanyService, Company, CompanyPage } from '../shared/index';
import {BehaviorSubject} from "rxjs/Rx";
import {asObservable} from "../shared/util/asObservable";


@Component({
    selector: 'as-home',
    templateUrl: 'home.html',
    styleUrls: [
        'home.css'
    ],
    animations: [ trigger('visibilityChanged', [
        state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
        state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
        transition('1 => 0',  animate('200ms ease-in')),
        transition('0 => 1', animate('500ms  ease-out'))
        ])]
})
export class HomeComponent implements OnInit {
    
    _companyPage: BehaviorSubject<any> = new BehaviorSubject(CompanyPage.Intro);
    errorMessage: string;
    company: Company[] = [];
    public page = CompanyPage;
    /**
     * Creates an instance of the HomeComponent with the injected
     * NameListService.
     *
     * @param {NameListService} nameListService - The injected NameListService.
     */
    constructor(private companyService: CompanyService) { }

    ngOnInit() {
        this.getCompany();
    }
    
    get companyPage() {
        return  asObservable(this._companyPage);
    }
    
    changeComapanyPage(page: CompanyPage) {
        this._companyPage.next(page);
    }
    /**
     * Handle the personService observable
     */
    getCompany() {
        this.companyService.getCompany()
            .subscribe(
                company => {
                    this.company = company;
                },
                error => {
                    console.log("Call getCompany() finished with error", error);
                    this.errorMessage = <any>error;
                }
            );
    }
}
