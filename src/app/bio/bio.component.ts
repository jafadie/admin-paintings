import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
	private title = 'Bio - Lorena García Mateu';
	
	constructor(private titleService: Title,
    			private metaTagService: Meta
    	){
	}

	
	ngOnInit() {
		console.log('bio.component.ts cargado');

		this.titleService.setTitle(this.title);
    	this.metaTagService.updateTag(
      		{ name: 'description', content: 'Bio Official Web Lorena García Mateu' }
    	);	
	}


}
