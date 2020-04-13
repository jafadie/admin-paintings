import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseUri:string = GLOBAL.baseUri + '/api/notification';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create notification
  createNotification(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all notifications
  getNotifications() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get scheduled notifications
  getScheduledNotifications() {
    return this.http.get(`${this.baseUri}/scheduled`);
  }

  // Get notifications of a type
  getNotificationsByType(type): Observable<any> {
    let url = `${this.baseUri}/readNotification/${type}`;
    return this.http.get(url);
  }

  // Get notification
  getNotification(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;

    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
 

  getSequenceNumber(){
    let url = `${this.baseUri}/sequenceNotifications`;
    return this.http.get(url);
  }

  
  // Update notification
  updateNotification(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }


  // Delete notification
  deleteNotification(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
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
