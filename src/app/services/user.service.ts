import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUri:string = GLOBAL.baseUri + '/api/user';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private cookies: CookieService) { }

  // Create user
  createUser(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all users
  getUsers() {
    return this.http.get(`${this.baseUri}`);
  }

// 1: Send mail after subscription
sendMailAfterSubscription(user, data) {
  let url = `${this.baseUri}/sendMailAfterSubscription/${user.email}`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}


// 2: Send mail after communication
sendMailAfterCommunication(user, data) {
  let url = `${this.baseUri}/sendMailAfterCommunication/${user.email}`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}

// 3: Send mail notify changes
sendMailNotifyChanges(data, date) {
  let url = `${this.baseUri}/sendMailNotifyChanges/${date}`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}



// 4: Send mail notify events
sendMailNotifyEvents(user, data) {
  let url = `${this.baseUri}/sendMailNotifyEvents/${user.email}`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}

// 5: Send mail notify events
sendMailNotifyGeneralEvents(user, data) {
  let url = `${this.baseUri}/sendMailNotifyGeneralEvents/${user.email}`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}

  loginUser(data): Observable<any> {
    let url = `${this.baseUri}/login`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  verifyTokenUser(data) {
    let url = `${this.baseUri}/verify`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }



  setToken(token: string) {
    this.cookies.set("token", token);
  }
  
  getToken() {
    return this.cookies.get("token");
  }

  deleteToken() {
    this.cookies.delete("token");
  }

  

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
