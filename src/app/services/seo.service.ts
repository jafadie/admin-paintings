import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private metaTagService: Meta) { }

  generateTags(config){
  	config = {
  		title: 'Lorena Garcia Mateu',
  		description: 'Web Lorena Garcia Mateu',
  		image: '',
  		slug: '',
  		...config
  	}

  	this.metaTagService.updateTag({ name: 'description', content: config.description });

  	this.metaTagService.updateTag({ name: 'twitter:card', content: 'summary' });
	this.metaTagService.updateTag({ name: 'twitter:site', content: '@LorenaGarcaMat1' });
	this.metaTagService.updateTag({ name: 'twitter:title', content: config.title });
	this.metaTagService.updateTag({ name: 'twitter:description', content: config.description });
	this.metaTagService.updateTag({ name: 'twitter:image', content: config.image });

	this.metaTagService.updateTag({ property: 'og:type', content: 'article' });
	this.metaTagService.updateTag({ property: 'og:site_name', content: 'https://www.facebook.com/lorgarmateu' });
	this.metaTagService.updateTag({ property: 'og:title', content: config.title });
	this.metaTagService.updateTag({ property: 'og:description', content: config.description });
	this.metaTagService.updateTag({ property: 'og:image', content: config.image });
	this.metaTagService.updateTag({ property: 'og:url', content: `https://lorenagarciamateu.es/${config.slug}` });
  }
}
