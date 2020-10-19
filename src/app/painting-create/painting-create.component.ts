import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaintingPreviewService } from '../services/painting-preview.service';
import { Painting } from '../models/painting.model';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'app-painting-create',
  templateUrl: './painting-create.component.html',
  styleUrls: ['./painting-create.component.css'],
  providers: [PaintingPreviewService]
})
export class PaintingCreateComponent implements OnInit {
	public painting : Painting;
	public nameButton : string;
	public filesToUpload;
	public is_edit: boolean;
	public is_visible: boolean;
	baseUri:string = GLOBAL.baseUri;

	public valorReseteoPainting = -2;


	@Input()
    paintingSelected: Painting;

    @Input()
    idSerie: Number;

    @Output()
	selectIdSerie = new EventEmitter<Number>();

	@Output()
	selectPainting = new EventEmitter<Painting>();

	

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _paintingPreviewService: PaintingPreviewService
	){
		this.painting = this.initializePainting();
		this.nameButton = 'Create painting';
		this.is_edit = false;
		this.is_visible = false;
	}

	initializePainting() : Painting{
		return new Painting(0, '', 0, 0, 0, '', '', 0, true, true, 0);
	}

	ngOnInit(){
  		console.log('painting-create.component.ts cargado');
		this.painting = this.initializePainting();

		this.painting['available'] = true;
  	}

  	onSubmit(){

		if (this.is_edit){
			if (this.filesToUpload && this.filesToUpload[0].name != this.painting['image']){
				this.deleteFile(this.painting);
			}

			setTimeout (() => {
		         console.log("Hello from setTimeout");
		         if (this.filesToUpload){
					this.cargandoImagen(this.filesToUpload);
					this.painting['image'] = this.filesToUpload[0].name;
		  		 }
		         this.updatePainting();
		         console.log('Existing painting saved');
		      }, 1000);
			
		}
		else{
			if (this.filesToUpload){
				this.cargandoImagen(this.filesToUpload);
				this.painting['image'] = this.filesToUpload[0].name;
  			}
			this.createNewPaintingWithOrderInSerie();
			console.log('New painting saved');
		}
  	}

  	deleteFile(paintingDeleteImage){
    this._paintingPreviewService.deleteFile(paintingDeleteImage).subscribe(
      result => {
      
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  	createNewPaintingWithOrderInSerie(){
  		this._paintingPreviewService.getOrderPainting(this.idSerie).subscribe(
  			result => {
				console.log('Order calculated from database');

				if (typeof result !== 'undefined' && result.length > 0)
				{
					this.painting['order'] = result[0]['order'] + 1;
					
				}else{
					this.painting['order'] = 0;
				}
				
				
				this.createNewPainting();

			},
			error => {
				console.log(<any>error);
			}
  		)
  	}

  	createNewPainting() {
  		this._paintingPreviewService.getSequenceNumber().subscribe(
  			result => {
				this.painting['idPainting'] = result['seq'];
				this.painting['idSerie'] = this.idSerie;
				
				if (!this.painting['available'])
					this.painting['available'] = false;

				this.createPainting();
				this.is_visible = false;
			},
			error => {
				console.log(<any>error);
			}
  		);
  	}

  	createPainting(){
  		this._paintingPreviewService.createPainting(this.painting).subscribe(
  			result => {
				console.log('Painting successfully created!');

				this.onSelectIdSerie(this.painting['idSerie']);
				this.onSelectPainting(this.painting);

			},
			error => {
				console.log(<any>error);
			}
  		)
  	}


  	updatePainting(){
      this._paintingPreviewService.updatePainting(this.painting['idPainting'] ,this.painting).subscribe(
	  	result => {
	    	console.log('Painting successfully updated!');
	      	this.is_visible = false;

	      	this.onSelectIdSerie(this.painting['idSerie']);
		  	this.onSelectPainting(this.painting);
	    },
	    error => {
	      console.log(<any>error);
	    }
      );
    }

  	
  	fileChangeEvent(fileInput: any){
  		this.filesToUpload = fileInput.target.files;
  	}

  	cargandoImagen(files: FileList){
  		console.log(files);
		this._paintingPreviewService.postFileImagen(files[0]).subscribe(

			response => {
				console.log(response);
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	ngOnChanges(changes: SimpleChanges ) {
		this.is_edit = false;
		this.nameButton = 'Create painting';

		//console.log('ngOnChanges painting create');
		//console.log(changes['paintingSelected']);
		//console.log(changes['idSerie']);

		if( changes['paintingSelected'] && changes['paintingSelected'].previousValue != changes['paintingSelected'].currentValue ) {
  			this.is_visible = true;
  			if(changes['paintingSelected'].currentValue != -1 && changes['idSerie'] && changes['idSerie'].previousValue != changes['idSerie'].currentValue ) {
				this.is_visible = false;
			} else if (changes['paintingSelected'] && changes['paintingSelected'].currentValue == -3) {
				this.is_visible = false;
			}

  			// si se ha hecho clic en Anyadir nuevo painting
  			// llega un -1 de la invocación de ese metodo
  			// que es distinto del -2 que se marca cuando se ha hecho savePainting
  			if (changes['paintingSelected'].currentValue != this.valorReseteoPainting) {

				this.painting['available'] = true;
				this.painting['visible'] = true;

				// si se ha seleccionado para editar un painting
				if (this.paintingSelected && this.paintingSelected['idPainting']){
					this.painting = this.paintingSelected;
					this.is_edit = true;
					this.nameButton = 'Save changes';
				}
  			}
  			else{
  				this.is_visible = false;
  			}
  		}
	}

	onSelectIdSerie(idSerie: Number) {
    	this.selectIdSerie.emit(idSerie);
  	}

  	onSelectPainting(painting: Painting) {
		this.painting = this.initializePainting();	//vacio el formulario
		this.selectPainting.emit(this.valorReseteoPainting);
  	}

}

