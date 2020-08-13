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

  public username: string;
  public password: string;
  public isAdmin: boolean;
  public mostrarError: boolean;

  constructor() {
    this.username = '';
    this.password = '';
    this.isAdmin = false;
    this.mostrarError = false;
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

  onSubmit(){
     console.log(this.username);
     console.log(this.password);

     if (this.username == 'lgmateu' && this.password == 'mocito_bueno%37'){
        this.isAdmin = true;
     } else {
        this.mostrarError = true;
     }
    }

}