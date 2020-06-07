import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { Notification } from '../models/notification.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-notification-fixed',
  templateUrl: './notification-fixed.component.html',
  styleUrls: ['./notification-fixed.component.css'],
  providers: [NotificationService, UserService]
})
export class NotificationFixedComponent implements OnInit {

	public notification: Notification;


	@Input()
    typeNotification: Number;

    @Output()
	selectTypeNotification = new EventEmitter<Number>();

	@Output()
  	selectIdNotification = new EventEmitter<Number>();


	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _notificationService: NotificationService,
		private _userService: UserService,
	) {
		this.notification = new Notification(0, 0, true, 0, '', '', '', '', '', '', 0, '', [], '', false);
	}

	ngOnInit() {
		console.log('notification-sent-fixed.component.ts cargado');
	}

	onSelectTypeNotification(typeNotification: Number) {
    	this.selectTypeNotification.emit(typeNotification);

    	this.selectIdNotification.emit(-2);
  	}

  	
  	onPreviewSelectedTypeNotification(typeNotification: Number){
		this.getNotificationByType(typeNotification);
  	}

  	getNotificationByType(type){
	    console.log('getNotificationByType');
	    console.log(type);
	    this._notificationService.getNotificationsByType(type).subscribe(
	      result => {
	        console.log(result);
	        this.notification = result[0];
	        
	        //send mail vista previa
	        this.sendPreviewSubscriptionNotification();
	        
	      },
	      error => {
	        console.log(<any>error);
	      }
	    );
	  }

  	sendPreviewSubscriptionNotification(){
      //correo lorena garcia
      let correoLorena = 'jafadie@gmail.com';
      let nameLorena = 'Lorena';

      let userPreview = new User('', '');
      userPreview['nameUser'] = nameLorena;
      userPreview['email'] = correoLorena;
      
      this.contactFormSubscription(userPreview);
    }

    contactFormSubscription(user) {
      console.log('contact form subscription');
      console.log(this.notification['image']);
      console.log(user);
       this._userService.sendMailAfterSubscription(user, this.notification).subscribe(() => {
         console.log('Mail sent correctly');
    
      });

  	}

  	

}
