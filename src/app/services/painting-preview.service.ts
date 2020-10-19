import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PaintingPreviewService {

  baseUri:string = GLOBAL.baseUri + '/api/paintingPreview';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  
  // Create paintingPreview
  createPainting(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete image file
  deleteFile(data): Observable<any> {
    let url = `${this.baseUri}/deleteImage`;

    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all paintingsPreview
  getPaintings() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get paintingsPreview of a seriePreview
  getPaintingsByIdSerie(idSerie): Observable<any> {
    let url = `${this.baseUri}/readSerie/${idSerie}`;
    return this.http.get(url);
  }

  // Get paintingPreview
  getPainting(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;

    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }


  // Get order of the last paintingPreview in a seriePreview
  getOrderPainting(idSerie): Observable<any> {
    let url = `${this.baseUri}/readOrder/${idSerie}`;
    return this.http.get(url);
  }

  // Update order of a paintingPreview
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

  
  // Update paintingPreview
  updatePainting(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  //Copy PaintingPreview to Painting
  copyPainting(id, data): Observable<any> {
    let url = `${this.baseUri}/paintingCopy/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }


  // Delete paintingPreview
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

  copyFiles(){
    let url = `${this.baseUri}/copyImages`;
    return this.http.post(url, null);
  }


  updateDirectoryImages(){
    let url = `${this.baseUri}/updateFolderImages`;
    return this.http.post(url, null);
  }

  deleteAllPaintings(): Observable<any> {

      return this.getPaintings()
      .pipe(mergeMap((result: any) =>
              from(result).pipe(

                  mergeMap(painting => this.deletePainting(painting['idPainting']))
                )
          ));       
  }

  copyAllPaintings(): Observable<any> {

      return this.getPaintings()
      .pipe(mergeMap((result: any) =>
              from(result).pipe(

                mergeMap(painting => this.copyPainting(painting['idPainting'], painting))
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
