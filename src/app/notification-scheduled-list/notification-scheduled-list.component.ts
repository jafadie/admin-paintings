import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification-scheduled-list',
  templateUrl: './notification-scheduled-list.component.html',
  styleUrls: ['./notification-scheduled-list.component.css'],
  providers: [NotificationService]
})
export class NotificationScheduledListComponent implements OnInit {

	public notifications:any = [];

  constructor(
  		private _route: ActivatedRoute,
		private _router: Router,
		private _notificationService: NotificationService
	){
	}

  ngOnInit() {
  	console.log('notification-scheduled-list.component.ts cargado');

  	this.getScheduledNotifications();
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

}
