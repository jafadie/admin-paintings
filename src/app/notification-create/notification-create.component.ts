import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { EventType } from '../models/eventType.model';
import { MediaType } from '../models/mediaType.model';
import { NotificationService } from '../services/notification.service';
import { NotificationSentService } from '../services/notificationSent.service';
import { Notification } from '../models/notification.model';
import { NotificationSent } from '../models/notificationSent.model';
import Swal from 'sweetalert2'
declare var jQuery: any;


@Component({
  selector: 'app-notification-create',
  templateUrl: './notification-create.component.html',
  styleUrls: ['./notification-create.component.css'],
  providers: [UserService, NotificationService, NotificationSentService]
})
export class NotificationCreateComponent implements OnInit {

	public users:any = [];
	public eventTypes: EventType[];
	public mediaTypes: MediaType[];
	public notification: Notification;
	public notificationSent: NotificationSent;
	public filesToUpload;
	public myUserList: any = [];
	public buttonName: string;
  public deliveryDate:Date;
  public myGlobalCheck;


  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _notificationService: NotificationService,
		private _notificationSentService: NotificationSentService
	){
  		this.notification = new Notification(0, 0, true, 0, '', '', '', '', '', '', 0, '', []); 		
  		this.notificationSent = new NotificationSent(0, 0, 0, true, 0, '', '', '', '', '', '', 0, '', []);
  }

  ngOnInit() {
  	console.log('notification-create.component.ts cargado'); 	

    this.notification['deliveryDate'] = new Date().toISOString().slice(0, 16);
  }


  fillEventTypesNuevaExpo(){
	this.eventTypes = [
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
	this.eventTypes = [
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

  fileChangeEvent(fileInput: any){
  		this.filesToUpload = fileInput.target.files;
  }

  cargandoImagen(files: FileList){
  	console.log(files);
	this._notificationService.postFileImagen(files[0]).subscribe(

		response => {
			console.log(response);
		},
		error => {
			console.log(<any>error);
		}
	);
  }

  checkValueGlobalCheck(event: any) {
    
      for (let myUser of this.myUserList) {
        myUser[0] = event;
      }
  }


  onSubmit(){
  		if (this.filesToUpload){
			this.cargandoImagen(this.filesToUpload);
			this.notification['image'] = this.filesToUpload[0].name;
  		}

  		this.notification['userList'] = [];
		
    let i = 0;
		for (let myUser of this.myUserList) {
			if (myUser[0]){
				this.notification['userList'][i] = myUser[1]['email'];
				i++;
			}
		}
		 		
  		this.createAndSendNewNotification();
  		
  	}

  	createAndSendNewNotification(){
		this._notificationService.getSequenceNumber().subscribe(
  			result => {
				this.notification['idNotification'] = result['seq'];
				
				
				this.createAndSendNotification();
			},
			error => {
				console.log(<any>error);
			}
  		);
  	}
  	
  	createAndSendNotification(){
  		this._notificationService.createNotification(this.notification).subscribe(
  			result => {
				console.log('Notification successfully created!');

				

				//if (!this.notification['scheduled'])
				//{
					this.notificationSent['idNotification'] = this.notification['idNotification'];
					this.notificationSent['type'] = this.notification['type'];
					this.notificationSent['scheduled'] = this.notification['scheduled'];
					this.notificationSent['eventType'] = this.notification['eventType'];
					this.notificationSent['title'] = this.notification['title'];
					this.notificationSent['localization'] = this.notification['localization'];
					this.notificationSent['openingDate'] = this.notification['openingDate'];
					this.notificationSent['closingDate'] = this.notification['closingDate'];
					this.notificationSent['image'] = this.notification['image'];
					this.notificationSent['deliveryDate'] = new Date();
					this.notificationSent['mediaType'] = this.notification['mediaType'];
					this.notificationSent['link'] = this.notification['link'];
					this.notificationSent['userList'] = this.notification['userList'];


					this.createNewNotificationSent();
				//}
								
			},
			error => {
				console.log(<any>error);
			}
  		)
  	}


  	createNewNotificationSent() {
  		this._notificationSentService.getSequenceNumber().subscribe(
  			result => {
				this.notificationSent['idNotificationSent'] = result['seq'];
				
				
				this.createNotificationSent();
			},
			error => {
				console.log(<any>error);
			}
  		);
  	}

  	createNotificationSent(){
  		this._notificationSentService.createNotificationSent(this.notificationSent).subscribe(
  			result => {
				console.log('NotificationSent successfully created!');

				this.sendNotification();//to all users selected


			},
			error => {
				console.log(<any>error);
			}
  		)
  	}

    sendNotification(){
    
      for (let myUser of this.myUserList) {
        if (myUser[0] == true)
        {
          this.contactForm(myUser[1]);  
        }
      }
      //Swal.fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
    }

  	contactForm(user) {
 		   this._userService.sendMailNotifyEvents(user, this.notification['deliveryDate']).subscribe(() => {
 		     console.log('Mail sent correctly');
 		
  		});
  	}

  	

  getUsers(){
	this._userService.getUsers().subscribe(
		result => {
			console.log(result);
			this.users = result;

			let i = 0;
			for (let user of this.users) {
				let myUser: [boolean, User] = [false, user];
				this.myUserList[i] = myUser;
				i++;
			}

      this.checkValueGlobalCheck(this.myGlobalCheck);		

		},
		error => {
			console.log(<any>error);
		}
	);
  }

  initializeUsers() {

    this.getUsers();

    this.myGlobalCheck = true;
    
  }
  
  onChangeNotificationType(e){

  	this.initializeUsers();
  	

  	//inicializar notificacion
  	this.notification['type'] = e.target.value;
  	this.notification['scheduled'] = false;
  	this.buttonName = 'Send notification';
  	this.notification['eventType'] = 0;

	

  	if (e.target.value == 0){
  		this.fillEventTypesNuevaExpo();
  	}
  	else if (e.target.value == 1){
  		this.notification['mediaType'] = 0;
  	  	this.fillEventTypesArticulosPrensa();
  	  	this.fillMediaTypes();
  	}

  }

  onOptionEventSelected(eventType){
	this.notification['eventType'] = eventType;
  }

  onOptionMediaSelected(mediaType){
	this.notification['mediaType'] = mediaType;
  }


  checkValueScheduled(event: any){

	if (event){
		this.buttonName = 'Save notification';
	}
	else{
		this.buttonName = 'Send notification';
	}
  }

}
