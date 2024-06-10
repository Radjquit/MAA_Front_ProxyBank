import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  endpoint = 'http://localhost:8080';
  //endpoint = 'http://localhost:3000';

  // return this._HttpClient.get(`${API_URL}/api/v1/data/logs`, { params: params })
  constructor(private http: HttpClient) {}

  //httpOptions = {}
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  getTransactions(): Observable<Transaction[]> {
    return this.http
      .get<Transaction[]>(
        this.endpoint + '/transactions',
        this.httpOptions
        )
      .pipe(catchError(this.handleError));
  }

  getTransactionById(id:number): Observable<Transaction> {
    return this.http
      .get<Transaction>(
        this.endpoint + '/transactions/' + id,
        this.httpOptions
        )
      .pipe(catchError(this.handleError));
  }

  createTransaction(idDeb:number ,idCred: number, transac: Transaction): Observable<Transaction> {
    return this.http
      .post<Transaction>(
        this.endpoint + '/transactions/'+idDeb+'/'+idCred,
        JSON.stringify(transac),
        this.httpOptions
      )
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
