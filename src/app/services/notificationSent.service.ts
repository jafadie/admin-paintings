import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationSentService {

	baseUri:string = 'http://localhost:4000/api/notificationSent';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create notificationSent
  createNotificationSent(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all notificationsSent
  getNotificationsSent() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get last notificationsSent
  getLastSentNotifications(): Observable<any> {
    let url = `${this.baseUri}/readLastNotificationSent`;
    return this.http.get(url);
  }



  // Get notificationSent
  getNotificationSent(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;

    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
 

  getSequenceNumber(){
    let url = `${this.baseUri}/sequenceNotificationsSent`;
    return this.http.get(url);
  }


  postFileImagen(imagenParaSubir: File){
    let url = `${this.baseUri}/uploadFile`;

    let formData = new FormData(); 
    formData.append('image', imagenParaSubir, imagenParaSubir.name);
    return this.http.post(url, formData);
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
