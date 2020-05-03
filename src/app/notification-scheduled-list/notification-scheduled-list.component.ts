import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { NotificationType } from '../models/notificationType.model';
import { EventType } from '../models/eventType.model';
import { MediaType } from '../models/mediaType.model';

@Component({
  selector: 'app-notification-scheduled-list',
  templateUrl: './notification-scheduled-list.component.html',
  styleUrls: ['./notification-scheduled-list.component.css'],
  providers: [NotificationService]
})
export class NotificationScheduledListComponent implements OnInit {

	public notifications:any = [];
	public notificationTypes: NotificationType[];
	public eventTypes0: EventType[];
	public eventTypes1: EventType[];
	public mediaTypes: MediaType[];

  constructor(
  		private _route: ActivatedRoute,
		private _router: Router,
		private _notificationService: NotificationService
	){
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
		this.notificationTypes = [
	      {
	        idNotificationType: 0,
	        description: 'Nueva exposición'
	      },
	      {
	        idNotificationType: 1,
	        description: 'Artículos prensa'
	      },
	    ];
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

}
