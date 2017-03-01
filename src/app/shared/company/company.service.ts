import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export enum CompanyPage { Intro, About, Projects, Contact, Info}

export interface ICompany {
    id: number; 
    name: string;
    description: string;
    email: string;
    photo: string;
}

export class Company implements ICompany {
//    
    constructor (public id: number, public name: string, public description: string, public email: string, public photo: string) {
    }
}
/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class CompanyService {

  /**
   * Creates a new PersonService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {} 
  
    /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getCompany(): Observable<Company[]> {
    return this.http.get('assets/company_data.json')
//                    .map((res: Response) => res)
                     .map((response: Response) => response.json())
                    .catch(this.handleError);
  }
 
 
  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

