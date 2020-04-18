import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
	
	constructor(){
	}

	
	ngOnInit() {
		console.log('bio.component.ts cargado');	
	}

	

}
