import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	baseUri:string = 'http://localhost:4000/api/user';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

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
sendMailAfterSubscription(data, date) {
  let url = `${this.baseUri}/sendMailAfterSubscription/${date}`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}


// 2: Send mail after communication
sendMailAfterCommunication(data, date) {
  let url = `${this.baseUri}/sendMailAfterCommunication/${date}`;
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
sendMailNotifyEvents(data, date) {
  let url = `${this.baseUri}/sendMailNotifyEvents/${date}`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
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
