import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';
import { User } from '../models/user.model';
import { Notification } from '../models/notification.model';
import Swal from 'sweetalert2';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [UserService, NotificationService]
})
export class ContactComponent implements OnInit {
  private title = 'Contact - Lorena García Mateu';

	public user : User;
  public notification : Notification;

  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
    private _notificationService: NotificationService,
    private titleService: Title,
    private metaTagService: Meta
	){
		this.initializeUser();
  }

  ngOnInit() {
  	console.log('contact.component.ts cargado');

    this.titleService.setTitle(this.title);
      this.metaTagService.updateTag(
          { name: 'description', content: 'Contact Official Web Lorena García Mateu' }
      );
  }

  initializeUser(){
  	this.user = new User('', '', '');
  }

  onSubmit(){
  	this.createUser();
  }

  createUser(){
    this._userService.createUser(this.user).subscribe(
      result => {
      console.log('User successfully created!');

      let typeNotification = 2;
      this.sendMailSubscriptionWithNotificationSaved(typeNotification);

      Swal.fire('Formulario de contacto', 'Se ha subscrito correctamente', 'success');
      
    },
    error => {
      console.log(<any>error);
    })
  }

  sendMailSubscription() {
      this._userService.sendMailAfterSubscription(this.user, this.notification).subscribe(
        result => {
          this.initializeUser();
          console.log('Mail sent correctly');
        
        },
        error => {
          console.log(<any>error);
        }
      );
  }

  sendMailSubscriptionWithNotificationSaved(type){
    this._notificationService.getNotificationsByType(type).subscribe(
      result => {
        console.log(result);
        this.notification = result[0];
        //this.sendMailSubscription();
        //falta cargarla en el control
        
        this.initializeUser();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
