import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SerieService } from '../services/serie.service';
import { Serie } from '../models/serie.model';
import { Painting } from '../models/painting.model';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
  providers: [SerieService]
})
export class SerieListComponent implements OnInit {

	public series:any = [];

	@Input()
    idSerie: Number;

	@Output()
	selectIdSerie = new EventEmitter<Number>();

	@Output()
	selectPainting = new EventEmitter<Painting>();
	
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _serieService: SerieService
	){
	}

	ngOnInit() {
		console.log('serie-list.component.ts cargado');

		this.getSeries();
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

	onSelectIdSerie(idSerie: Number) {
    	this.selectIdSerie.emit(idSerie);

    	console.log('onSelectIdSerie');
    	console.log(idSerie);

    	//al cambiar de serie reseteo el valor de paintingSelected
    	this.selectPainting.emit(-3);
  	}

  	onDeleteSerie(idSerie: Number){
  		this._serieService.deleteSerie(idSerie).subscribe(
			result => {
				console.log(result);
				//TODO preguntar con jQuery si estas seguro que quieres eliminar
				this.getSeries();
			},
			error => {
				console.log(<any>error);
			}

		);
  	}

  	ngOnChanges(changes: SimpleChanges ) {
		//si se ha seleccionado una serie diferente
  		if( changes['idSerie'] && changes['idSerie'].previousValue != changes['idSerie'].currentValue ) {
    		this.getSeries();
  		}
  	}

}
