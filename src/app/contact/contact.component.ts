import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [UserService]
})
export class ContactComponent implements OnInit {
	public user : User;

  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	){
		this.initializeUser();
  }

  ngOnInit() {
  	console.log('contact.component.ts cargado');
  }

  initializeUser(){
  	this.user = new User('', '');
  }

  onSubmit(){
  	this.createUser();
  }

  createUser(){
    this._userService.createUser(this.user).subscribe(
      result => {
      console.log('User successfully created!');

      this.sendMailSubscription();

      Swal.fire('Formulario de contacto', 'Se ha subscrito correctamente', 'success');
      this.initializeUser();
    },
    error => {
      console.log(<any>error);
    })
  }

  sendMailSubscription() {
      let date = new Date();
      console.log(date);
      this._userService.sendMailAfterSubscription(this.user, date).subscribe(
        result => {
          console.log('Mail sent correctly');
        
        },
        error => {
          console.log(<any>error);
        }
      );
  } 

}
