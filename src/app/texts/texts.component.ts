import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../services/seo.service';
declare var ga: Function;

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.css'],
  providers: [SeoService]
})
export class TextsComponent implements OnInit {

	private title = 'Texts - Lorena Garcia Mateu';
  private description = 'Texts Lorena Garcia Mateu';
  private slug = 'app-texts';

  constructor(private titleService: Title,
    		  private metaTagService: Meta,
          private _router: Router,
          @Inject(PLATFORM_ID) platformId,
          private _seoService: SeoService
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
  	console.log('texts.component.ts cargado');

  	this.titleService.setTitle(this.title);
  	this._seoService.generateTags({
      title: this.title,
      description: this.description,
      slug: this.slug
    });
  }

}
