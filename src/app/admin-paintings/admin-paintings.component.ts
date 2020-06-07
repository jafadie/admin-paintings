import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Serie } from '../models/serie.model';
import { Painting } from '../models/painting.model';

@Component({
  selector: 'app-admin-paintings',
  templateUrl: './admin-paintings.component.html',
  styleUrls: ['./admin-paintings.component.css']
})
export class AdminPaintingsComponent implements OnInit {

	selectedIdSerie: Number;
	selectedPainting: Painting;
  selectedPaintingAux: Painting;

  constructor() { 
  }

  ngOnInit() {
    console.log('admin-paintings.component.ts cargado');
  }

  processSelectedIdSerie(idSerie: Number) {
    this.selectedIdSerie = idSerie;
  }

	processSelectedPainting(painting: Painting){
    this.selectedPainting = painting;
	}

  processSelectedPaintingAux(painting: Painting){
    this.selectedPaintingAux = painting;
  }

}