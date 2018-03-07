import {Injectable} from '@angular/core';
import { IStudents } from './students';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import {Headers,RequestOptions} from '@angular/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()


export class NarutoServices{
    private narutourl="https://localhost:8080/api/books";
    constructor(private _http:HttpClient){

    }
    
    getstudents(): Observable<IStudents[]>{
        return this._http.get<IStudents[]>(this.narutourl)
        .do(data=>console.log("All" +JSON.stringify(data)))
        .catch(this.handleError);
    }
    /*addHero (hero: IStudents): Observable<IStudents> {
        return this._http.post<IStudents>(this.narutourl, hero, httpOptions)
        .catch(this.handleError);
    }
    
    deleteHero (studs:IStudents|number): Observable<IStudents> {
        const id = typeof studs === 'number' ? studs : studs.id;
        const url = `${this.narutourl}/${id}`;
        return this._http.delete<IStudents>(url, httpOptions)
        .catch(this.handleError);
      }*/
      
    private handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
