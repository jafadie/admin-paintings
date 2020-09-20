import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class SeriePreviewService {

  baseUri:string = GLOBAL.baseUri + '/api/seriePreview';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private http: HttpClient) { }

	// Create seriePreview
  createSerie(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all seriesPreview
  getSeries() {
  	console.log('Get all seriesPreview');
    return this.http.get(`${this.baseUri}`);
  }

  // Get seriePreview
  getSerie(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;

    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  
  getSequenceNumber(){
    let url = `${this.baseUri}/sequenceSeries`;
    return this.http.get(url);
  }

  // Update seriePreview
  updateSerie(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }


  //Copy SeriePreview to Serie
  copySerie(id, data): Observable<any> {
    let url = `${this.baseUri}/serieCopy/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }


  // Delete SeriePreview
  deleteSerie(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  deleteAllSeries(): Observable<any> {

      return this.getSeries()
      .pipe(mergeMap((result: any) =>
              from(result).pipe(

                  mergeMap(serie => this.deleteSerie(serie['idSerie']))
                )
          ));       
  }

  copyAllSeries(): Observable<any> {

      return this.getSeries()
      .pipe(mergeMap((result: any) =>
              from(result).pipe(

                mergeMap(serie => this.copySerie(serie['idSerie'], serie))
              )
          ));       
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
