import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

	private title = 'Events - Lorena García Mateu';

  constructor(private titleService: Title,
    		  private metaTagService: Meta
    ) { }

  ngOnInit() {
  	console.log('events.component.ts cargado');

    this.titleService.setTitle(this.title);
  	this.metaTagService.updateTag(
    	{ name: 'description', content: 'Events Official Web Lorena García Mateu' }
  	);
  }

}
