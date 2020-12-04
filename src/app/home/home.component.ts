import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SeoService]
})
export class HomeComponent implements OnInit {
  private title = 'Lorena Garcia Mateu';
  private description = 'Lorena Garcia Mateu';
  private slug = 'app-home';

  public isBrowser: boolean;

  constructor(
          private titleService: Title,
    		  private metaTagService: Meta,
          private _seoService: SeoService
  ) {
    
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
  	//no tengo muy claro porque, pero necesito precargar esto de esta manera
  	this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.12/js/lightgallery.min.js');

    this.titleService.setTitle(this.title);
  	this._seoService.generateTags({
        title: this.title,
        description: this.description,
        slug: this.slug
    });
  }

}
