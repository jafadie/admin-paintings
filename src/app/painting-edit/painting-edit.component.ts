import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaintingService } from '../services/painting.service';
import { Painting } from '../models/painting.model';

@Component({
  selector: 'app-painting-edit',
  templateUrl: '../painting-create/painting-create.component.html',
  styleUrls: ['./painting-edit.component.css'],
  providers: [PaintingService]
})
export class PaintingEditComponent implements OnInit {
  	public painting : Painting;
  	public nameButton : string;
    public is_edit: boolean;
    public is_visible: boolean;
    public filesToUpload;

    //public valorReseteoPainting = -2;

    /*@Input()
    paintingSelected: Painting;

    @Input()
    idSerie: Number;

    @Output()
    selectIdSerie = new EventEmitter<Number>();

    @Output()
    selectPainting = new EventEmitter<Painting>();*/



    constructor(
    	private _route: ActivatedRoute,
  		private _router: Router,
  		private _paintingService: PaintingService
	  ){
  		this.painting = this.initializePainting();
  		this.nameButton = 'Save changes';
      this.is_edit = true;
      this.is_visible = false;
	  }

    initializePainting() : Painting{
      return new Painting(0, '', 0, 0, 0, '', '', 0, true, true, 0);
    }

  	ngOnInit() {
  		console.log('painting-edit.component.ts cargado');
  		//this.getPainting();
  	}

  	getPainting() {
  		this._route.params.forEach((params: Params) => {
  			let id = params['id'];

        console.log('mi id');
        console.log(id);
  			
  			this._paintingService.getPainting(id).subscribe(
  				result => {
  					this.painting = result[0];
  				}, 
  				error => {
  					console.log(<any>error);
  				}
  			);

  		});
  	}

  	onSubmit(){
		  this.updatePainting();
  	}

    fileChangeEvent(fileInput: any){
      this.filesToUpload = fileInput.target.files;
    }

    updatePainting(){
      /*this._paintingService.updatePainting(this.painting['idPainting'] ,this.painting).subscribe(
        result => {
          console.log('Painting successfully updated!');
          this.is_visible = false;
        },
        error => {
          console.log(<any>error);
        }
      );*/
    }


    /*ngOnChanges(changes: SimpleChanges ) {
      if( changes['paintingSelected'] && changes['paintingSelected'].previousValue != changes['paintingSelected'].currentValue ) {

        // si se ha hecho clic en Anyadir nuevo painting
        // llega un -1 de la invocación de ese metodo
        // que es distinto del -2 que se marca cuando se ha hecho savePainting
        if (changes['paintingSelected'].currentValue != this.valorReseteoPainting) {

        this.is_visible = true;

        // si se ha seleccionado para editar un painting
        if (this.paintingSelected && this.paintingSelected['idPainting']){
          this.painting = this.paintingSelected;
        }
        }
        else{
          this.is_visible = false;
        }

      
      }

  }*/

}
