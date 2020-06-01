import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { Notification } from '../models/notification.model';
import { NotificationType } from '../models/notificationType.model';
import { User } from '../models/user.model';
import { EventType } from '../models/eventType.model';
import { MediaType } from '../models/mediaType.model';

@Component({
  selector: 'app-notification-scheduled-list',
  templateUrl: './notification-scheduled-list.component.html',
  styleUrls: ['./notification-scheduled-list.component.css'],
  providers: [NotificationService, UserService]
})
export class NotificationScheduledListComponent implements OnInit {

	public notifications:any = [];
	public notificationTypes;
	public eventTypes0: EventType[];
	public eventTypes1: EventType[];
	public mediaTypes: MediaType[];
	public notification: Notification;


	@Output()
	selectIdNotification = new EventEmitter<Number>();

  constructor(
  		private _route: ActivatedRoute,
		private _router: Router,
		private _notificationService: NotificationService,
		private _userService: UserService
	){
  		this.notification = new Notification(0, 0, true, 0, '', '', '', '', '', '', 0, '', [], '', false);
	}

  ngOnInit() {
  	console.log('notification-scheduled-list.component.ts cargado');

  	this.getScheduledNotifications();

  	this.fillNotificationTypes();
  	this.fillEventTypesNuevaExpo();
  	this.fillEventTypesArticulosPrensa();
  	this.fillMediaTypes();
  }

  getScheduledNotifications(){
		this._notificationService.getScheduledNotifications().subscribe(
			result => {
				console.log(result);
				this.notifications = result;
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	fillNotificationTypes(){

		this.notificationTypes = new Map();
 
		this.notificationTypes.set( 4, 'Nueva exposición' );
		this.notificationTypes.set( 1, 'Artículos prensa' );
	}


	fillEventTypesNuevaExpo(){
		this.eventTypes0 = [
	      {
	        idEventType: 0,
	        description: 'Exposición individual'
	      },
	      {
	        idEventType: 1,
	        description: 'Exposición colectiva'
	      },
	      {
	        idEventType: 2,
	        description: 'Premio/Concurso'
	      },
	    ];
	}

  fillEventTypesArticulosPrensa(){
	this.eventTypes1 = [
      {
        idEventType: 0,
        description: 'Artículo'
      },
      {
        idEventType: 1,
        description: 'Entrevista'
      },
      {
        idEventType: 2,
        description: 'Reportaje'
      },
    ];
  }

  fillMediaTypes(){
  	this.mediaTypes = [
      {
        idMediaType: 0,
        description: 'Impreso'
      },
      {
        idMediaType: 1,
        description: 'Online'
      },
      {
        idMediaType: 2,
        description: 'Vídeo'
      },
    ];
  }

  onPreviewSelectedIdNotification(idNotification: Number) {
  	this.getNotificationById(idNotification);
  }

  getNotificationById(idNotification){
    console.log('getNotificationById');
    console.log(idNotification);
    this._notificationService.getNotification(idNotification).subscribe(
      result => {
        console.log(result);
        this.notification = result[0];
        
        //send mail vista previa
        this.sendPreviewNotification();
        
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  	sendPreviewNotification(){
      //correo lorena garcia
      let correoLorena = 'jafadie@gmail.com';
      let nameLorena = 'Lorena';

      let userPreview = new User('', '');
      userPreview['nameUser'] = nameLorena;
      userPreview['email'] = correoLorena;
      
      this.contactForm(userPreview);
    }

    contactForm(user) {
      console.log('contact form notification');
      console.log(this.notification['image']);
      console.log(user);

      this.notification['preview'] = true;

       this._userService.sendMailNotifyEvents(user, this.notification).subscribe(() => {
         console.log('Mail sent correctly');
    
      });

  	}

  	onSelectIdNotification(idNotification: Number) {
  		console.log('idNotification');
  		console.log(idNotification);

    	this.selectIdNotification.emit(idNotification);
  	}

}

