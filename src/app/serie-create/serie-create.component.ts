import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SerieService } from '../services/serie.service';
import { Serie } from '../models/serie.model';

@Component({
  selector: 'app-serie-create',
  templateUrl: './serie-create.component.html',
  styleUrls: ['./serie-create.component.css'],
  providers: [SerieService]
})
export class SerieCreateComponent implements OnInit {
	public series:any = [];
	public serie : Serie;
	public lastOrder: number;

	@Output()
	selectIdSerie = new EventEmitter<Number>();

	constructor(
    	private _route: ActivatedRoute,
		private _router: Router,
		private _serieService: SerieService
	){
		this.initializeSerie();
	}

  	ngOnInit() {
  		console.log('serie-create.component.ts cargado');
  	}

  	initializeSerie(){
		this.serie = new Serie(0, '', true, 0);
  	}

	onSubmit(){
		this.createNewOrderSerie();

		console.log('New serie saved');
	}

  	createNewSerie(){
  		this._serieService.getSequenceNumber().subscribe(
  			result => {
				this.serie['idSerie'] = result['seq'];
				this.createSerie();
			},
			error => {
				console.log(<any>error);
			}
  		);
  	}

  	createSerie(){
  		this._serieService.createSerie(this.serie).subscribe(
  			result => {
				console.log('Serie successfully created!');
				this.initializeSerie();

				//this.selectIdSerie.emit(result['idSerie']);
				this.selectIdSerie.emit(-3);
			},
			error => {
				console.log(<any>error);
			}
  		)
  	}

  	getOrderLastSerie() : any{
		this._serieService.getSeries().subscribe(
			result => {
				console.log(result);

				this.series = result;
				this.lastOrder = this.series[this.series.length-1]['order'];

				//llamar a create con el order actualizado (order + 1)
  				this.serie['order'] = this.lastOrder + 1;

  				this.createNewSerie();
			},
			error => {
				console.log(<any>error);
			}
		);
	}

  	createNewOrderSerie(){
  		this.getOrderLastSerie();
  	}

  	

}
