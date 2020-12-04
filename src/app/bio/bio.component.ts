import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
    			private _seoService: SeoService
    	){
		
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
