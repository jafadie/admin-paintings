import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotificationSentService } from '../services/notificationSent.service';
import { NotificationType } from '../models/notificationType.model';
import { EventType } from '../models/eventType.model';
import { MediaType } from '../models/mediaType.model';

@Component({
  selector: 'app-notification-sent-list',
  templateUrl: './notification-sent-list.component.html',
  styleUrls: ['./notification-sent-list.component.css'],
  providers: [NotificationSentService]
})
export class NotificationSentListComponent implements OnInit {

	public notificationsSent:any = [];
	public notificationTypes: NotificationType[];
	public eventTypes0: EventType[];
	public eventTypes1: EventType[];
	public mediaTypes: MediaType[];


  constructor(
  		private _route: ActivatedRoute,
		  private _router: Router,
		  private _notificationSentService: NotificationSentService
	) { }

  ngOnInit() {
  	console.log('notification-sent-list.component.ts cargado');

  	this.getSentLastFiveNotifications();

  	this.fillNotificationTypes();
  	this.fillEventTypesNuevaExpo();
  	this.fillEventTypesArticulosPrensa();
  	this.fillMediaTypes();
  }

  getSentLastFiveNotifications(){

		this._notificationSentService.getLastSentNotifications().subscribe(
			result => {
				console.log(result);
				this.notificationsSent = result;
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
