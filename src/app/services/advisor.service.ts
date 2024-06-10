import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Advisor } from '../model/advisor';

@Injectable({
  providedIn: 'root',
})
export class AdvisorService {

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
  

  getAdvisor(): Observable<Advisor[]> {
    return this.http
      .get<Advisor[]>(
        this.endpoint + '/advisor',
        this.httpOptions
        )
      .pipe(catchError(this.handleError));
  }

  createAdvisor(advisor: Advisor): Observable<Advisor> {
    return this.http
      .post<Advisor>(
        this.endpoint + '/advisor',
        JSON.stringify(advisor),
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
