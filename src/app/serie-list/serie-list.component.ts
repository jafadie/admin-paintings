import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SerieService } from '../services/serie.service';
import { SeriePreviewService } from '../services/serie-preview.service';
import { Serie } from '../models/serie.model';
import { Painting } from '../models/painting.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
  providers: [SerieService, SeriePreviewService]
})
export class SerieListComponent implements OnInit {

	public series:any = [];
	public serieEdition : Serie;

	@Input()
    idSerie: Number;

    @Input()
    isAdmin: boolean;

	@Output()
	selectIdSerie = new EventEmitter<Number>();

	@Output()
	selectPainting = new EventEmitter<Painting>();
	
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _serieService: SerieService,
		private _seriePreviewService: SeriePreviewService
	){
	}

	ngOnInit() {
		console.log('serie-list.component.ts cargado');

		this.initialize();
	}

	initialize(){
		this.serieEdition = new Serie(0, '', true, 0);
		this.serieEdition['idSerie'] = 0;
		this.serieEdition['title'] = '';
		this.serieEdition['visible'] = true;
		this.serieEdition['order'] = 0;
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
  		if (changes['isAdmin'] && changes['isAdmin'].firstChange) {

			setTimeout(() => {  
	            this.getSeriesPreview();
	          }, 1000);

  		} else 

  		//si se ha seleccionado una serie diferente
  		if( changes['idSerie'] && changes['idSerie'].previousValue != changes['idSerie'].currentValue ) {
    		this.getSeriesPreview();

			for (var serieAux of this.series) {
    			if (serieAux['idSerie']==changes['idSerie'].currentValue)
    			{
    				this.serieEdition['idSerie'] = changes['idSerie'].currentValue;
					this.serieEdition['title'] = serieAux['title'];
					this.serieEdition['visible'] = serieAux['visible'];
					this.serieEdition['order'] = serieAux['order'];
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

    	this.updateSerieWithSubmit();

    	

    	

    	//al cambiar de serie reseteo el valor de paintingSelected
    	//this.selectPainting.emit(-3);
  	}

  	updateSerieWithSubmit(){
  		this._serieService.updateSerie(this.serieEdition['idSerie'] ,this.serieEdition).subscribe(
	  	result => {
	    	console.log('Serie successfully updated!');

	    	//this.onSelectIdSerie(this.serieEdition['idSerie']);
            this.onSelectIdSerie(-1);
            //comprobar si sirve para algo cuando le doy al botón guardar
	    },
	    error => {
	      console.log(<any>error);
	    }
      );
  	}

  	updateSerie(){
      this._serieService.updateSerie(this.serieEdition['idSerie'] ,this.serieEdition).subscribe(
	  	result => {
	    	console.log('Serie successfully updated!');

	    	//this.onSelectIdSerie(this.serieEdition['idSerie']);
            //this.onSelectIdSerie(-1);
            //comprobar si sirve para algo cuando le doy al botón guardar
	    },
	    error => {
	      console.log(<any>error);
	    }
      );
    }


    onOrderSerieUp(serie){
    	//buscar serie order superior para restar 1 a order
    	//sumar 1 a order de esta serie

    	let serieSubirOrden: Serie = 0;
    	let serieSuperior: Serie = 0;
    	for (var serieAux of this.series) {
    		if (serieAux['idSerie'] == serie['idSerie']){
    			serieSubirOrden = serieAux;
    			break;
    		}
    		serieSuperior = serieAux;
		}

		this.serieEdition = serieSuperior;
		this.serieEdition['order'] = serieSuperior['order'] + 1;
		this.updateSerie();

		this.serieEdition = serieSubirOrden;
		this.serieEdition['order'] = serieSubirOrden['order'] - 1;
		this.updateSerie();

		this.initialize();
		
    }

    onOrderSerieDown(serie){
    	//buscar serie inferior para sumar 1 a order
    	//restar 1 a order de esta serie

    	let serieBajarOrden: Serie = 0;
    	let serieInferior: Serie = 0;
    	let encontrada: boolean = false;
    	for (var serieAux of this.series) {
    		if (encontrada)
    		{
    			serieInferior = serieAux;
    			break;
    		}

    		if (serieAux['idSerie'] == serie['idSerie']){
    			serieBajarOrden = serieAux;
    			encontrada = true;
    			continue;
    		}
    		
		}

		this.serieEdition = serieInferior;
		this.serieEdition['order'] = serieInferior['order'] - 1;
		this.updateSerie();

		this.serieEdition = serieBajarOrden;
		this.serieEdition['order'] = serieBajarOrden['order'] + 1;
		this.updateSerie();

		this.initialize();
    }

}