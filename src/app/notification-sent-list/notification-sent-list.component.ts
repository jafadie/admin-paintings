import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotificationSentService } from '../services/notificationSent.service';

@Component({
  selector: 'app-notification-sent-list',
  templateUrl: './notification-sent-list.component.html',
  styleUrls: ['./notification-sent-list.component.css'],
  providers: [NotificationSentService]
})
export class NotificationSentListComponent implements OnInit {

	public notificationsSent:any = [];

  constructor(
  		private _route: ActivatedRoute,
		private _router: Router,
		private _notificationSentService: NotificationSentService
	) { }

  ngOnInit() {
  	console.log('notification-sent-list.component.ts cargado');

  	this.getSentLastFiveNotifications();
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

}
