import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaintingService } from '../services/painting.service';
import { SerieService } from '../services/serie.service';
import { Painting } from '../models/painting.model';
import { Serie } from '../models/serie.model';
import { GLOBAL } from '../services/global';
declare var jQuery: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [PaintingService, SerieService]
})
export class PortfolioComponent implements OnInit {

  public paintings:any = [];
  public serie: Serie;
  public idPainting: number;
  public clickExecuted = true; // initialize it to true for the first run
  baseUri:string = GLOBAL.baseUri;
	
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _paintingService: PaintingService,
		private _serieService: SerieService
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
		this.loadScript('../../assets/js/jquery.mousewheel.min.js');

		this.loadScript('../../assets/js/lg-thumbnail.min.js');
		this.loadScript('../../assets/js/lg-fullscreen.min.js');

		this.loadScript('../../assets/js/lg-zoom.min.js');
		this.loadScript('../../assets/js/lg-autoplay.min.js');
		this.loadScript('../../assets/js/lg-hash.min.js');
		this.loadScript('../../assets/js/lg-pager.min.js');
		this.loadScript('../../assets/js/lg-share.min.js');
		this.loadScript('../../assets/js/lg-video.min.js');
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

	getPaintingsByIdSerie(idSerie: Number){
		this._paintingService.getPaintingsByIdSerie(idSerie).subscribe(
			result => {
				console.log(result);
				this.paintings = result;
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	getSerieById(idSerie: Number){
		this._serieService.getSerie(idSerie).subscribe(
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

		if (this.clickExecuted) {
        	// Do all the things with the stuff
        	this.clickExecuted = false; // set it to false until you need to trigger again

        	(function ($) {
	      		$(document).ready(function(){
	      		
					var $customEvents = $('#lightgallery');

					$customEvents.lightGallery({
						mode: 'lg-slide',
						speed: 600,
						height: '600px',
						width: '100%',
						showThumbByDefault:false,
						thumbnail: false,
						download: false,
						zoom: true,
						loop: false,
						escKey: true,
						counter: false,
						autoplayControls: false,
						fullScreen: true,
						share: false,
						html: false,
						appendSubHtmlTo: '.lg-html',
						subHtmlSelectorRelative: true
					});


					$customEvents.on('onBeforeSlide.lg',function(event){
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

	        		console.log("Hello from jQuery!");
	      		});
    		})(jQuery);
        }

	}

	onDeletePainting(id){
		this._paintingService.deletePainting(id).subscribe(
			result => {
				console.log(result);
				this.getPaintings();
			},
			error => {
				console.log(<any>error);
			}

		);
	}

	setPaintingClasses(painting){
		
		let classes = {
        	img_vertical: painting.width <= painting.height,
        	img_horizontal: painting.width > painting.height
    	};
    	return classes;
	}

}
