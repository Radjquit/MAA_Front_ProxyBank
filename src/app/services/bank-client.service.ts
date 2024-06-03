import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { BankClient } from '../model/bank-client';

@Injectable({
  providedIn: 'root',
})
export class BankClientService {

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
  

  createClient(client: BankClient): Observable<BankClient> {
    return this.http
      .post<BankClient>(
        this.endpoint + '/clients',
        JSON.stringify(client),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  deleteClient(id:number) {
    return this.http.delete<BankClient>(this.endpoint + '/clients/' + id, this.httpOptions)
        .pipe(
            catchError(this.handleError)
        )
  }

  getClients(): Observable<BankClient[]> {
    return this.http
      .get<BankClient[]>(this.endpoint + '/clients', this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getClientById(id:any): Observable<BankClient> {
    return this.http
      .get<BankClient>(this.endpoint + '/clients/' + id, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateClient(id : number, client : BankClient){
    return this.http
      .put<BankClient>(this.endpoint + '/clients/' + id,JSON.stringify(client), this.httpOptions)
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
