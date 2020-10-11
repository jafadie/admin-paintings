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

  	onDeleteSerie(idSerie: Number, order: Number) {
  		Swal.fire({
	        text: "¿Desea eliminar la serie?",
	        showCancelButton: true,
	        confirmButtonColor: '#012e67',
	        cancelButtonColor: '#9B9B9B',
	        confirmButtonText: 'Aceptar',
	        cancelButtonText: 'Cancelar'

      	}).then((result) => {
  
	        if (result.value) {
	          this.deleteSerie(idSerie, order);
	        }
     	})
  	}

  	deleteSerie(idSerie: Number, order: Number){
  		this._seriePreviewService.deleteSerie(idSerie).subscribe(
			result => {
				//TODO preguntar con jQuery si estas seguro que quieres eliminar
				this.getSeriesPreviewDeleting(order);				
			},
			error => {
				console.log(<any>error);
			}
		);
  	}

  	

  	getSeriesPreviewDeleting(order) : any{
		this._seriePreviewService.getSeries().subscribe(
			result => {
				this.series = result;
				this.reorderSeries(order);
			},
			error => {
				console.log(<any>error);
			}
		);
	}

  	reorderSeries(order) { 		  		
  		for (var serieAux of this.series) {
  			// todas las series que esten por debajo del orden
  			// les resto 1 para subirlas en el orden actual
  			if (serieAux['order'] > order){
  				serieAux['order'] = serieAux['order'] - 1;
  			}
  		}
  		this.updateOrderSeries();
  	}

  	updateOrderSeries(){
  		for (var serieAux of this.series) {
  			this._seriePreviewService.updateSerie(serieAux['idSerie'] ,serieAux).subscribe(
		  	result => {
		    	//console.log('Serie successfully updated!');

		    },
		    error => {
		      console.log(<any>error);
		    }
	      );
  		}

  		this.onSelectIdSerie(-1);
  	}

  	ngOnChanges(changes: SimpleChanges ) {
  		if ((changes['isAdmin'] && changes['isAdmin'].currentValue == true)
  				|| (changes['isAdmin'] == undefined && changes['idSerie'] 
  						&& changes['idSerie'].currentValue < 0 )) {

  			this.getSeriesPreview();

  		} else 

  		//si se ha seleccionado una serie diferente
  		if( changes['idSerie'] && changes['idSerie'].previousValue != changes['idSerie'].currentValue ) {
    		this.getSeriesPreviewEdition(changes['idSerie'].currentValue);
  		}
  		
  	}

  	getSeriesPreviewEdition(idSerie) : any{
		this._seriePreviewService.getSeries().subscribe(
			result => {
				this.series = result;

				for (var serieAux of this.series) {
	    			if (serieAux['idSerie']==idSerie)
	    			{
	    				this.serieEdition['idSerie'] = idSerie;
						this.serieEdition['title'] = serieAux['title'];
						this.serieEdition['visible'] = serieAux['visible'];
						this.serieEdition['order'] = serieAux['order'];
	    			}
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

  	onSaveIdSerie() {
    	this.updateSerieWithSubmit();
  	}

  	updateSerieWithSubmit(){
  		this._seriePreviewService.updateSerie(this.serieEdition['idSerie'] ,this.serieEdition).subscribe(
	  	result => {
	    	//console.log('Serie successfully updated!');
            this.onSelectIdSerie(-1);
	    },
	    error => {
	      console.log(<any>error);
	    }
      );
  	}

  	updateSerie1(serie1: Serie, serie2: Serie, direction: Number){
    	this._seriePreviewService.updateSerie(serie1['idSerie'] ,serie1).subscribe(
	  	result => {
	    	//console.log('Serie successfully updated!');

            this.updateSerie2(serie2, direction);
	    },
	    error => {
	      console.log(<any>error);
	    }
      );
    }

    updateSerie2(serie2: Serie, direction: any){
      this._seriePreviewService.updateSerie(serie2['idSerie'] ,serie2).subscribe(
	  	result => {
	    	//console.log('Serie successfully updated!');

	    	this.onSelectIdSerie((direction)*(serie2['idSerie']+serie2['order']));
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

		serieSuperior['order'] = serieSuperior['order'] + 1;
		serieSubirOrden['order'] = serieSubirOrden['order'] - 1;
		this.updateSerie1(serieSuperior, serieSubirOrden, -1);
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

		serieInferior['order'] = serieInferior['order'] - 1;
		serieBajarOrden['order'] = serieBajarOrden['order'] + 1;
		this.updateSerie1(serieInferior, serieBajarOrden, -2);
		this.initialize();
    }

}