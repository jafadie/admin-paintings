import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.css']
})
export class TextsComponent implements OnInit {

	private title = 'Texts - Lorena García Mateu';

  constructor(private titleService: Title,
    		  private metaTagService: Meta
  ) { }

  ngOnInit() {
  	console.log('texts.component.ts cargado');

  	this.titleService.setTitle(this.title);
  	this.metaTagService.updateTag(
    	{ name: 'description', content: 'Texts Official Web Lorena García Mateu' }
  	);
  }

}
