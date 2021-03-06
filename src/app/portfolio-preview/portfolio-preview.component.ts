import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaintingPreviewService } from '../services/painting-preview.service';
import { SeriePreviewService } from '../services/serie-preview.service';
import { Painting } from '../models/painting.model';
import { Serie } from '../models/serie.model';
import { GLOBAL } from '../services/global';
declare var jQuery: any;

@Component({
  selector: 'app-portfolio-preview',
  templateUrl: './portfolio-preview.component.html',
  styleUrls: ['./portfolio-preview.component.css'],
  providers: [PaintingPreviewService, SeriePreviewService]
})
export class PortfolioPreviewComponent implements OnInit {

  public paintings:any = [];
  public serie: Serie;
  public idPainting: number;
  public clickExecuted = true; // initialize it to true for the first run
  baseUri:string = GLOBAL.baseUri;
	
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _paintingPreviewService: PaintingPreviewService,
		private _seriePreviewService: SeriePreviewService
	){
	}

	public loadScript(url: string) {
	    const body = <HTMLDivElement> document.body;
	    const script = document.createElement('script');
	    script.innerHTML = '';
	    script.src = url;
	    script.async = false;
	    script.defer = true;
	    body.appendChild(script);
  	}


	ngOnInit() {
		console.log('painting-list.component.ts cargado');


		this.loadLibraries();


		this._route.params.subscribe(params => {
  			let id = params['id'];

  			this.getPaintingsByIdSerie(id);

  			this.getSerieById(id);
  		});
		
	}

	loadLibraries() {
		this.loadScript('https://cdn.jsdelivr.net/picturefill/2.3.1/picturefill.min.js');
		this.loadScript('../../assets/js/lightgallery-all.min.js');
		//this.loadScript('../../assets/js/jquery.mousewheel.min.js');

		this.loadScript('../../assets/js/lg-thumbnail.min.js');
		this.loadScript('../../assets/js/lg-fullscreen.min.js');

		this.loadScript('../../assets/js/lg-zoom.min.js');
		this.loadScript('../../assets/js/lg-autoplay.min.js');
		this.loadScript('../../assets/js/lg-hash.min.js');
		this.loadScript('../../assets/js/lg-pager.min.js');
		this.loadScript('../../assets/js/lg-share.min.js');
		this.loadScript('../../assets/js/lg-video.min.js');
	}

	getPaintingsByIdSerie(idSerie: Number){
		this._paintingPreviewService.getPaintingsByIdSerie(idSerie).subscribe(
			result => {
				console.log(result);
				this.paintings = result;

				this.clickExecuted = true;
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	getSerieById(idSerie: Number){
		this._seriePreviewService.getSerie(idSerie).subscribe(
			result => {
				console.log(result);
				this.serie = result[0];
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	

	onClickImage(){
		this.loadLibraries();
		//esperar un tiempo hasta que se carguen

		

		if (this.clickExecuted) {
        	// Do all the things with the stuff
        	this.clickExecuted = false; // set it to false until you need to trigger again

        	(function ($) {
	      		$(document).ready(function(){
	      		
					var $customEvents = $('#lightgallery');

					console.log($customEvents.data('lightGallery'));

					//para cuando se cambia de serie necesito la carga de la libreria
					if ($customEvents.data('lightGallery') != undefined){
						$customEvents.data('lightGallery').destroy(true);
					}


					$customEvents.lightGallery({
						mode: 'lg-slide',
						speed: 600,
						height: '100%',
						width: '100%',
						showThumbByDefault:false,
						thumbnail: false,
						download: false,
						zoom: true,
						loop: false,
						escKey: true,
						counter: false,
						autoplayControls: false,
						fullScreen: false,
						share: false,
						html: false,
						appendSubHtmlTo: '.lg-html',
						subHtmlSelectorRelative: true
					});


					$customEvents.on('onBeforeSlide.lg',function(event){
						$('.lg-item').css('margin-top', '5em');
						$('.lg-item').css('max-width', '100%');
						$('.lg-item').css('max-height', '100%');
						$('.lg-item').css('height', '90%');

						
						$('.lg-toolbar').css('background-color', '#ffffff');
						$('.lg-next').css('background-color', '#ffffff');
						$('.lg-prev').css('background-color', '#ffffff');
    					
    					$('.lg-backdrop').css('background-color', '#ffffff');


    					$('.lg-sub-html').css('background-color', '#ffffff');
    					$('.lg-sub-html').css('color', '#000000');
    					$('.lg-sub-html').css('text-align', 'left');

    					$('.lg-html').css('background-color', '#ffffff');
    					$('.lg-html').css('color', '#000000');
    					$('.lg-html').css('text-align', 'left');

    					$('.lg-sub-html').css('border', '2px solid #717D85');

					});
	        		
	      		});
    		})(jQuery);


        } 

	}

	setPaintingClasses(painting){
		
		let classes = {
        	img_vertical: painting.width < painting.height,
        	img_horizontal: painting.width > painting.height,
        	img_cuadrado: painting.width == painting.height,
        	img_painting: true
    	};
    	return classes;
	}

}
