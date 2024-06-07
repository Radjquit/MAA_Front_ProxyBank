import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  endpoint = 'http://localhost:8080/signin';
  //endpoint = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  //httpOptions = {}
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  

  signin(user: User): Observable<User> {
    return this.http.post<User>(
      this.endpoint,
      JSON.stringify(user),
      this.httpOptions
    )
    .pipe(catchError(err => {
      return this.handleError(err)
    }))
  }

  handleError(err: any) {
    const errorMessage = `Message : ${err.error.message}, code: ${err.error.statusCode}`;
    window.alert(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
