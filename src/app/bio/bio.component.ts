import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
declare var ga: Function;
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
  providers: [SeoService]
})
export class BioComponent implements OnInit {
	private title = 'Bio - Lorena Garcia Mateu';
	private description = 'Bio Lorena Garcia Mateu';
  	private slug = 'app-bio';
	
	constructor(private titleService: Title,
    			private metaTagService: Meta,
    			private _router: Router,
    			@Inject(PLATFORM_ID) platformId,
    			private _seoService: SeoService
    	){
		/*if (isPlatformBrowser(platformId))
		{
			this._router.events.subscribe(event => {
			    if (event instanceof NavigationEnd) {
			        ga('set', 'page', event.urlAfterRedirects);
			        ga('send', 'pageview');
		    	}
		    });
		}*/
	}

	
	ngOnInit() {
		console.log('bio.component.ts cargado');

		this.titleService.setTitle(this.title);
    	this._seoService.generateTags({
		    title: this.title,
		    description: this.description,
		    slug: this.slug
		});
	}


}
