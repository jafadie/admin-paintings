import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

	selectedTypeNotification: Number;
  selectedIdNotification: Number;

  constructor(){
  }

  ngOnInit() {
  	console.log('admin-users.component.ts cargado');
  }

  processSelectedTypeNotification(typeNotification: Number) {
    this.selectedTypeNotification = typeNotification;
  }

  processSelectedIdNotification(idNotification: Number) {
    console.log('process idNotification');
      console.log(idNotification);
    this.selectedIdNotification = idNotification;
  }

}
