import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SeoService } from '../services/seo.service';

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
          private _seoService: SeoService
  ) {
    
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
