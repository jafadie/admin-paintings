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
  CdkDropList, CdkDropListGroup, CdkDragMove, CdkDragEnter,
  moveItemInArray
} from "@angular/cdk/drag-drop";
import {ViewportRuler} from "@angular/cdk/overlay";
declare var jQuery: any;

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.css'],
  providers: [PaintingService, PaintingPreviewService]
})
export class PaintingListComponent implements OnInit, AfterViewInit  {

  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList) placeholder: CdkDropList;

  public target: CdkDropList;
  public targetIndex: number;
  public source: CdkDropList;
  public sourceIndex: number;
  public dragIndex: number;
  public activeContainer;

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
    private _paintingPreviewService: PaintingPreviewService,
    private viewportRuler: ViewportRuler
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
    let phElement: any;

    if (this.placeholder != undefined) {
      phElement = this.placeholder.element.nativeElement;

      phElement.style.display = 'none';
      phElement.parentElement.removeChild(phElement);
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


  dragMoved(e: CdkDragMove) {
    let point = this.getPointerPositionOnPage(e.event);

    this.listGroup._items.forEach(dropList => {
      if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
        this.activeContainer = dropList;
        return;
      }
    });
  }

  dropListDropped(event: CdkDropList) {
    if (!this.target)
      return;

    let phElement = this.placeholder.element.nativeElement;
    let parent = phElement.parentElement;

    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

    this.target = null;
    this.source = null;

    console.log('dropListDropped');
    console.log(this.sourceIndex);
    console.log(this.targetIndex);
    console.log(this.paintings);
    console.log('end dropListDropped');

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

  dropListEnterPredicate = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop == this.placeholder)
      return true;

    if (drop != this.activeContainer)
      return false;

    let phElement = this.placeholder.element.nativeElement;
    let sourceElement = drag.dropContainer.element.nativeElement;
    let dropElement = drop.element.nativeElement;

    let dragIndex = __indexOf(dropElement.parentElement.children, (this.source ? phElement : sourceElement));
    let dropIndex = __indexOf(dropElement.parentElement.children, dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';
      
      sourceElement.parentElement.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentElement.insertBefore(phElement, (dropIndex > dragIndex 
      ? dropElement.nextSibling : dropElement));

    this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
    return false;
  }
  
  /** Determines the point of the page that was touched by the user. */
  getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    const point = __isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        const scrollPosition = this.viewportRuler.getViewportScrollPosition();

        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
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

/** Determines whether an event is a touch event. */
function __isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
  return event.type.startsWith('touch');
}

function __isInsideDropListClientRect(dropList: CdkDropList, x: number, y: number) {
  const {top, bottom, left, right} = dropList.element.nativeElement.getBoundingClientRect();
  return y >= top && y <= bottom && x >= left && x <= right; 
}