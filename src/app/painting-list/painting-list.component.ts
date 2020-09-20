import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, NgModule, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaintingService } from '../services/painting.service';
import { PaintingPreviewService } from '../services/painting-preview.service';
import { Painting } from '../models/painting.model';
import { Serie } from '../models/serie.model';
import { GLOBAL } from '../services/global';
import Swal from 'sweetalert2';
import {
  CdkDrag,
  CdkDragStart,
  CdkDropList, CdkDropListContainer, CdkDropListGroup,
  moveItemInArray
} from "@angular/cdk/drag-drop";
declare var jQuery: any;

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.css'],
  providers: [PaintingService, PaintingPreviewService]
})
export class PaintingListComponent implements OnInit, AfterViewInit  {

  @ViewChild(CdkDropListGroup, {static: false}) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList, {static: false}) placeholder: CdkDropList;

  public target: CdkDropList;
  public targetIndex: number;
  public source: CdkDropListContainer;
  public sourceIndex: number;

	public paintings:any;
	public isVisible: Boolean;

  baseUri:string = GLOBAL.baseUri;

	public valorReseteoPainting : number;

	  @Input()
    idSerie: Number;

    @Input()
    paintingSelected: Painting;   

    @Output()
	  selectPainting = new EventEmitter<Painting>();

    @Output()
    selectIdSerie = new EventEmitter<number>();

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _paintingService: PaintingService,
    private _paintingPreviewService: PaintingPreviewService
	){
		  this.target = null;
    	this.source = null;
	}

	ngOnInit() {
		console.log('painting-list.component.ts cargado');

		this.isVisible = false;

		this.getPaintingsByIdSerie(-1);

    this.valorReseteoPainting = -2;
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
        this.paintings = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  

	getPaintingsByIdSerie(idSerie: Number){
    this.isVisible = false;
		if (idSerie != -1){
			jQuery("#myPaintings").css('display', 'inline');
			this.isVisible = true;
		}

		this._paintingPreviewService.getPaintingsByIdSerie(idSerie).subscribe(
			result => {
				console.log(result);
				this.paintings = result;
			},
			error => {
				console.log(<any>error);
			}
		);
	}

  onDeletePainting(id: Number){
    Swal.fire({
          text: "¿Desea eliminar el cuadro?",
          showCancelButton: true,
          confirmButtonColor: '#012e67',
          cancelButtonColor: '#9B9B9B',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'

        }).then((result) => {
  
          if (result.value) {
            this.deletePainting(id);
          }
      })
  }

	deletePainting(id: Number){
		this._paintingPreviewService.deletePainting(id).subscribe(
			result => {
				console.log(result);
				//TODO preguntar con jQuery si estas seguro que quieres eliminar
				this.getPaintingsByIdSerie(this.idSerie);
			},
			error => {
				console.log(<any>error);
			}

		);
	}

	ngOnChanges(changes: SimpleChanges ) {
    //console.log('ngOnChanges paintinglist');
    //console.log(changes['paintingSelected']);
    //console.log(this.idSerie);

      /*if (!changes['paintingSelected']) {
        console.log('ueueueuueueueueueueueueueueueue');
          console.log(changes['paintingSelected']);
          console.log(this.idSerie);

          console.log(this.paintings[0]);
          this.isVisible = false;
      } else {*/



    		//si se ha seleccionado una serie diferente
    		if( changes['idSerie'] && changes['idSerie'].currentValue /*&& changes['idSerie'].previousValue != changes['idSerie'].currentValue*/ ) {		
  			  jQuery("#myPaintings").css('display', 'inline');
  	        
    			this.isVisible = true;

          this.getPaintingsByIdSerie(changes['idSerie'].currentValue);
    		}
    		// si se ha guardado el painting y el selectedPainting = -2 (forzado desde el save)
    		else if( changes['paintingSelected'] 
    			&& (changes['paintingSelected'].previousValue != changes['paintingSelected'].currentValue)
    			&& changes['paintingSelected'].currentValue == this.valorReseteoPainting) {

    				this.getPaintingsByIdSerie(this.idSerie);
    		}
        else if( changes['paintingSelected'] 
          && (changes['paintingSelected'].previousValue != changes['paintingSelected'].currentValue)
          && changes['paintingSelected'].currentValue == -3) {
          
          this.isVisible = true;
          this.getPaintingsByIdSerie(this.idSerie);
        }
      /*}*/
	}

	onSelectPainting(painting: Painting) {
		jQuery("#myPaintings").css('display', 'none');

		this.isVisible = false;

    console.log('onSelectPainting');
    console.log(painting);

  	this.selectPainting.emit(painting);

    //falta resetear idSerie
    //if (painting == -1)
      //this.selectIdSerie.emit(-1);
  }

  	ngAfterViewInit() {
  		if (this.placeholder)
  		{
  			let phElement = this.placeholder.element.nativeElement;

    		phElement.style.display = 'none';
    		phElement.parentNode.removeChild(phElement);
  		}
  	}


  drop() {
    if (!this.target)
      return;


    let phElement = this.placeholder.element.nativeElement;
    let parent = phElement.parentNode;

    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

    this.target = null;
    this.source = null;

    if (this.sourceIndex != this.targetIndex){
      moveItemInArray(this.paintings, this.sourceIndex, this.targetIndex);

      this.paintings[this.sourceIndex]['order'] = this.sourceIndex;
      this.paintings[this.targetIndex]['order'] = this.targetIndex;
      
      this.updateOrderPainting(this.paintings[this.sourceIndex]['idPainting'], 
                               this.paintings[this.sourceIndex]);

      this.updateOrderPainting(this.paintings[this.targetIndex]['idPainting'],
                               this.paintings[this.targetIndex]);
    }
  }

  updateOrderPainting(idPainting, painting){
    this._paintingPreviewService.updateOrderPainting(idPainting, painting).subscribe(
      result => {
        console.log('Order updated successfully');
      },
      error => {
        console.log(<any>error);
      }
      );
  }

  enter = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop == this.placeholder)
      return true;

    let phElement = this.placeholder.element.nativeElement;
    let dropElement = drop.element.nativeElement;

    let dragIndex = __indexOf(dropElement.parentNode.children, drag.dropContainer.element.nativeElement);
    let dropIndex = __indexOf(dropElement.parentNode.children, dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      let sourceElement = this.source.element.nativeElement;
      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';
      
      sourceElement.parentNode.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentNode.insertBefore(phElement, (dragIndex < dropIndex)
      ? dropElement.nextSibling : dropElement);

    this.source.start();
    this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);

    return false;
  }


  setPaintingClasses(painting){
		
		let classes = {
			my_box: true,
			box_vertical: painting.width < painting.height,
			box_horizontal: painting.width > painting.height,
      box_cuadrado: painting.width == painting.height
		}

		return classes;
	}


}

function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
  };