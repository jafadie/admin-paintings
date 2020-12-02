import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
declare var ga: Function;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

	private title = 'Events - Lorena Garcia Mateu';

  constructor(private titleService: Title,
    		  private metaTagService: Meta,
    		  private _router: Router,
    		  @Inject(PLATFORM_ID) platformId
    ) {

  	/*if (isPlatformBrowser(platformId)){
  		this._router.events.subscribe(event => {
		    if (event instanceof NavigationEnd) {
		        ga('set', 'page', event.urlAfterRedirects);
		        ga('send', 'pageview');
	    	}
    	});
  	}*/
  	
  }

  ngOnInit() {
  	console.log('events.component.ts cargado');

    this.titleService.setTitle(this.title);
  	this.metaTagService.updateTag(
    	{ name: 'description', content: 'Events Official Web Lorena Garcia Mateu' }
  	);
  }

}
