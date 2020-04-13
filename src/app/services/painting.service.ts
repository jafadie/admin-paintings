import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  baseUri:string = 'https://api-paintings.herokuapp.com/api/painting';
	//baseUri:string = 'http://localhost:4000/api/painting';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create painting
  createPainting(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all paintings
  getPaintings() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get paintings of a serie
  getPaintingsByIdSerie(idSerie): Observable<any> {
    let url = `${this.baseUri}/readSerie/${idSerie}`;
    return this.http.get(url);
  }

  // Get painting
  getPainting(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;

    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }


  // Get order of the last painting in a serie
  getOrderPainting(idSerie): Observable<any> {
    let url = `${this.baseUri}/readOrder/${idSerie}`;
    return this.http.get(url);
  }

  // Update order of a painting
  updateOrderPainting(id, data): Observable<any> {
    let url = `${this.baseUri}/updateOrder/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  

  getSequenceNumber(){
    let url = `${this.baseUri}/sequencePaintings`;
    return this.http.get(url);
  }

  
  // Update painting
  updatePainting(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }


  // Delete painting
  deletePainting(id): Observable<any> {
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
