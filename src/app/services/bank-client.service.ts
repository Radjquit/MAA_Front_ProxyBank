import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankClient } from '../model/bank-client';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankClientService {
  endpoint = 'http://localhost:3000';
  //endpoint = 'http://localhost:8080';

  httpOptions = {};
  /*
  httpOptions = {
    headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
         'Access-Control-Allow-Origin' : '*'
     })
     */

  constructor(private http: HttpClient) {}

  getClients(): Observable<BankClient[]> {
    return this.http
      .get<BankClient[]>(this.endpoint + '/bclients', this.httpOptions)
      .pipe(catchError(this.handleError));
  }

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
