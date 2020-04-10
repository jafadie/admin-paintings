import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaintingService } from '../services/painting.service';
import { Painting } from '../models/painting.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
  providers: [PaintingService]
})
export class BioComponent implements OnInit {

  public paintings:any = [];
	
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _paintingService: PaintingService
	){
	}

	
	ngOnInit() {
		console.log('bio.component.ts cargado');	
	}

	

}
