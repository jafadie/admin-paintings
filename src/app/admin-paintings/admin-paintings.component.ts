import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Serie } from '../models/serie.model';
import { Painting } from '../models/painting.model';
import { SerieService } from '../services/serie.service';
import { SeriePreviewService } from '../services/serie-preview.service';
import { PaintingService } from '../services/painting.service';
import { PaintingPreviewService } from '../services/painting-preview.service';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-paintings',
  templateUrl: './admin-paintings.component.html',
  styleUrls: ['./admin-paintings.component.css'],
  providers: [SerieService, SeriePreviewService, PaintingService, PaintingPreviewService]
})
export class AdminPaintingsComponent implements OnInit {

	selectedIdSerie: Number;
	selectedPainting: Painting;
  selectedPaintingAux: Painting;

  public username: string;
  public password: string;
  public isAdmin: boolean;
  public mostrarError: boolean;
  public series:any = [];
  public paintings:any = [];
  public token: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _serieService: SerieService,
    private _seriePreviewService: SeriePreviewService,
    private _paintingService: PaintingService,
    private _paintingPreviewService: PaintingPreviewService,
    private _userService: UserService
  ) {
    this.username = '';
    this.password = '';
    this.isAdmin = false;
    this.mostrarError = false;
  }

  ngOnInit() {
    console.log('admin-paintings.component.ts cargado');

    if (this.existeToken()) {
      console.log('admin true');
      this.isAdmin = true;

      //faltaría comprobar que el token se corresponde con el usuario logado
      /*const user = {username: this.username, email: '', password: this.password};
      console.log(user);
      this._userService.verifyTokenUser(this.token).subscribe( data => {
        console.log(data);
        
      });*/
    }
      
  }

  processSelectedIdSerie(idSerie: Number) {
    this.selectedIdSerie = idSerie;
  }

	processSelectedPainting(painting: Painting){
    this.selectedPainting = painting;
	}

  processSelectedPaintingAux(painting: Painting){
    this.selectedPaintingAux = painting;
  }

  onSubmit(){
     console.log(this.username);
     console.log(this.password);

     

     if (this.username == 'lgmateu' && this.password == 'mocito_bueno%37'){

        //login
        this.login();

        this.isAdmin = true;

        this.cloneSeriesComplete();
        this.clonePaintingsComplete();

     } else {
        this.mostrarError = true;
     }
  }

  
  onAcceptChanges(){
    console.log('onAcceptChanges');

    //pantalla de confirmación de aceptar cambios
    //remove series y paintings
    //clone SeriesPreview to Series
    //clone PaintingsPreview to Paintings

    console.log('obtengo series');
    this.getSeriesPreview();
    this.getPaintingsPreview();

    setTimeout(() => {  
      this.deleteAllSeries();
      this.deleteAllPaintings();


      setTimeout(() => {  
        console.log('cloneSeriesPreviewComplete');
        this.cloneSeriesPreviewComplete();
        this.clonePaintingsPreviewComplete();

        setTimeout(() => {  
          console.log('delete series y paintings preview');
          this.deleteAllSeriesPreview();
          this.deleteAllPaintingsPreview();

      }, 5000);

      }, 5000);

    }, 5000);

    
  }

  onCancelChanges(){
      console.log('onCancelChanges');

      //pantalla de confirmación de cancelar cambios
      //delete preview
      //copy series y paintings to preview
      //pintar preview

      this.deleteAllSeriesPreview();
      this.deleteAllPaintingsPreview();
  }

  




  cloneSeriesComplete(){
    this._serieService.copyAllSeries().subscribe(
      result => {
        console.log(result);
        console.log('Series copied correctly!');

      },
      error => {
        console.log(<any>error);
      }
    );
  }

  cloneSeriesPreviewComplete(){
    this._seriePreviewService.copyAllSeries().subscribe(
      result => {
        console.log(result);
        console.log('Series copied correctly!');

      },
      error => {
        console.log(<any>error);
      }
    );
  }


  clonePaintingsComplete(){
    this._paintingService.copyAllPaintings().subscribe(
      result => {
        console.log(result);
        console.log('Paintings copied correctly!');

      },
      error => {
        console.log(<any>error);
      }
    );
  }


  clonePaintingsPreviewComplete(){
    this._paintingPreviewService.copyAllPaintings().subscribe(
      result => {
        console.log(result);
        console.log('Paintings copied correctly!');

      },
      error => {
        console.log(<any>error);
      }
    );
  }


  deleteAllSeries(){
    this._serieService.deleteAllSeries().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteAllSeriesPreview(){
    this._seriePreviewService.deleteAllSeries().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  
  
  deleteAllPaintings(){
    this._paintingService.deleteAllPaintings().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteAllPaintingsPreview(){
    this._paintingPreviewService.deleteAllPaintings().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }


  getSeries() : any{
    this._serieService.getSeries().subscribe(
      result => {
        console.log(result);

        this.series = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getSeriesPreview() : any{
    this._seriePreviewService.getSeries().subscribe(
      result => {
        this.series = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getPaintings(){
    this._paintingService.getPaintings().subscribe(
      result => {
        console.log(result);

        this.paintings = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getPaintingsPreview(){
    this._paintingPreviewService.getPaintings().subscribe(
      result => {
        console.log(result);

        this.paintings = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }


  login() {
    const user = {username: this.username, email: '', password: this.password};
    this._userService.loginUser(user).subscribe( data => {
      console.log(data);
      this._userService.setToken(data.accessToken);
    });
  }

  existeToken() {
    console.log('existeToken');
    this.token = this._userService.getToken();
    console.log(this.token);
    
    if (!this.token)
      return false;   

    return true;
  }

  onSessionClose() {
    this._userService.deleteToken();
  }


}