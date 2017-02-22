import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export enum TeamPage { Personal, About, Skills, Contact}

export interface IPerson {
    id: number; 
    firstname: string;
    lastname: string;
    email: string;
    photo: string;
    page: TeamPage;
}

export class Person implements IPerson {
//    
    constructor (public id: number, public firstname: string, public lastname: string, public email: string
                    , public photo: string, public page: TeamPage) {
    }
}
/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class PersonService {

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
  getPersons(): Observable<Person[]> {
    return this.http.get('assets/team_data.json')
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

