import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { SeoService } from '../services/seo.service';
declare var jQuery: any;
//declare var ga: Function;


@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css'],
  providers: [SeoService]
})
export class ExhibitionsComponent implements OnInit {

	private title = 'Exhibitions - Lorena Garcia Mateu';
	private description = 'Exhibitions Lorena Garcia Mateu';
  	private slug = 'app-exhibitions';

	public photos:any = [];
	public clickExecuted = true; // initialize it to true for the first run
	public isBrowser: boolean;

  constructor(
	private _route: ActivatedRoute,
	private _router: Router,
	@Inject(PLATFORM_ID) platformId,
	private titleService: Title,
    private metaTagService: Meta,
    private _seoService: SeoService
  ){
  	this.isBrowser = isPlatformBrowser(platformId);

  	/*if (this.isBrowser){
  		this._router.events.subscribe(event => {
		    if (event instanceof NavigationEnd) {
		        ga('set', 'page', event.urlAfterRedirects);
		        ga('send', 'pageview');
	    	}
	    });
  	}*/
  	
  }

  ngOnInit(): void {
  	console.log('bio.component.ts cargado');

	this.titleService.setTitle(this.title);
	this._seoService.generateTags({
	    title: this.title,
	    description: this.description,
	    slug: this.slug
	});
    	
  	this._route.params.subscribe(params => {
		let id = params['id'];

		this.fillExhibitionWithPhotos(id);
	});

  	
  }

  fillExhibitionWithPhotos(id){
  	if (id == 1){
  		this.photos.push('1.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_152553.jpg');
	  	this.photos.push('2.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_152503.jpg');
	  	this.photos.push('3.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_152335.jpg');
	  	this.photos.push('4.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_153120.jpg');
	  	this.photos.push('5.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_153138.jpg');
	  	this.photos.push('6.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_154401.jpg');
	  	this.photos.push('7.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_152933.jpg');
	  	this.photos.push('8.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_154847.jpg');
	  	this.photos.push('9.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_153108.jpg');
	  	this.photos.push('10.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_154911.jpg');
	  	this.photos.push('11.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_154208.jpg');
	  	this.photos.push('12.Kristin-Hejllegerde-London-Bridge-A-Splendour-Among-Shadows-09082020_154926.jpg');

		jQuery("#photo_exhibition").css("display", "inline");
		jQuery("#video_exhibition").css("display", "inline");		
  	}
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
						subHtmlSelectorRelative: true,
						enableDrag: false
					});


					$customEvents.on('onBeforeSlide.lg',function(event){
						$('.lg-item').css('margin-top', '5em');
						$('.lg-item').css('max-width', '100%');
						$('.lg-item').css('max-height', '100%');
						$('.lg-item').css('height', '80%');
						$('.lg-item').css('margin-left', '6%');
						$('.lg-item').css('margin-top', '5%');

						
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

	loadLibraries() {
		this.loadScript('https://cdn.jsdelivr.net/picturefill/2.3.1/picturefill.min.js');
		this.loadScript('../../assets/js/lightgallery-all.min.js');

		this.loadScript('../../assets/js/lg-thumbnail.min.js');
		this.loadScript('../../assets/js/lg-fullscreen.min.js');

		this.loadScript('../../assets/js/lg-zoom.min.js');
		this.loadScript('../../assets/js/lg-autoplay.min.js');
		this.loadScript('../../assets/js/lg-hash.min.js');
		this.loadScript('../../assets/js/lg-pager.min.js');
		this.loadScript('../../assets/js/lg-share.min.js');
		this.loadScript('../../assets/js/lg-video.min.js');
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



}
