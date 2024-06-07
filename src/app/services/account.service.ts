import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../model/account';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  endpoint = 'http://localhost:8080';
  //endpoint = 'http://localhost:3000';
 

  constructor(private http: HttpClient) {}

  //httpOptions = {}
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  getAccounts(): Observable<Account[]> {
    return this.http
      .get<Account[]>(this.endpoint + '/accounts', this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // getAccountsByClientID(id: number): Observable<Account[]> {
  //   const params = new HttpParams()
  //   .set('id', "yourName");
  //   return this.http
  //     .get<Account[]>(this.endpoint + '/accounts/clientId', this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
  
}
