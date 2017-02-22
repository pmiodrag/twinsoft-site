import { Component, OnInit, trigger,
state,
style,
transition,
keyframes,
animate } from '@angular/core';
import { InfoService, CompanyServiceInfo } from '../shared/index';
import {BehaviorSubject} from "rxjs/Rx";
import {asObservable} from "../shared/util/asObservable";

@Component({
    selector: 'as-service',
    templateUrl: 'service.html',
    styleUrls: [
        'service.css'
    ],
    animations: [ trigger('visibilityChanged', [
        state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
        state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
        transition('1 => 0', animate('300ms')),
        transition('0 => 1', animate('600ms'))
        ]),
        trigger('visibilityChanged1', [
        state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
        state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
        transition('1 => 0', animate('1000ms')),
        transition('0 => 1', animate('2000ms'))
        ])
    ]
})
export class ServiceComponent implements OnInit {
    
    errorMessage: string;
    services: CompanyServiceInfo[] = [];
    serviceId: number = 1;
    service: any;
    showServiceInfo: boolean = false;
    /**
     * Creates an instance of the HomeComponent with the injected
     * NameListService.
     *
     * @param {NameListService} nameListService - The injected NameListService.
     */
    constructor(private infoService: InfoService) { }

    ngOnInit() {
        this.getCompanyServiceInfo();
    }
    
       
    /**
     * Handle the personService observable
     */
    getCompanyServiceInfo() {
        this.infoService.getCompanyServiceInfo()
            .subscribe(
                services => {
                    this.services = services;
                    console.log("this.service", this.services[0]);
                    this.service = services[0];
                },
                error => {
                    console.log("Call getCompany() finished with error", error);
                    this.errorMessage = <any>error;
                }
            );
    }
    
    showService(serviceInfo: CompanyServiceInfo) {
        this.service = serviceInfo;
        this.showServiceInfo = false;
    }
    
    showServiceDetails(show: boolean) {
        this.showServiceInfo = show;
    }
}
