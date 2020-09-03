import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SerieService } from '../services/serie.service';
import { Serie } from '../models/serie.model';
import { Painting } from '../models/painting.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
  providers: [SerieService]
})
export class SerieListComponent implements OnInit {

	public series:any = [];
	public serieEdition : Serie;

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

		this.serieEdition = new Serie(0, '', true);
		this.serieEdition['idSerie'] = 0;
		this.serieEdition['title'] = '';
		this.serieEdition['visible'] = true;

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
		this.selectionIdSerie(idSerie);
  	}

  	onUnSelectIdSerie() {
  		this.selectionIdSerie(-1);
  	}

  	selectionIdSerie(idSerie: Number){
  		this.selectIdSerie.emit(idSerie);

    	//al cambiar de serie reseteo el valor de paintingSelected
    	this.selectPainting.emit(-3);
  	}

  	onDeleteSerie(idSerie: Number) {
  		Swal.fire({
	        text: "¿Desea eliminar la serie?",
	        showCancelButton: true,
	        confirmButtonColor: '#012e67',
	        cancelButtonColor: '#9B9B9B',
	        confirmButtonText: 'Aceptar',
	        cancelButtonText: 'Cancelar'

      	}).then((result) => {
  
	        if (result.value) {
	          this.deleteSerie(idSerie);
	        }
     	})
  	}

  	deleteSerie(idSerie: Number){
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

    		for (var serieAux of this.series) {
    			if (serieAux['idSerie']==changes['idSerie'].currentValue)
    			{
    				this.serieEdition['idSerie'] = changes['idSerie'].currentValue;
					this.serieEdition['title'] = serieAux['title'];
					this.serieEdition['visible'] = serieAux['visible'];
    			}
			}

  		}
  	}

  	onSaveIdSerie() {
    	//this.selectIdSerie.emit(idSerie);

    	console.log('onSaveIdSerie');
    	console.log(this.idSerie);
    	console.log(this.serieEdition['idSerie']);
    	console.log(this.serieEdition['title']);

    	this.updateSerie();

    	//al cambiar de serie reseteo el valor de paintingSelected
    	//this.selectPainting.emit(-3);
  	}

  	updateSerie(){
      this._serieService.updateSerie(this.serieEdition['idSerie'] ,this.serieEdition).subscribe(
	  	result => {
	    	console.log('Serie successfully updated!');

	      	//this.onSelectIdSerie(this.serieEdition['idSerie']);
	      	this.onSelectIdSerie(-1);
	    },
	    error => {
	      console.log(<any>error);
	    }
      );
    }

}