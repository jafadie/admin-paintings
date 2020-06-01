import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
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
import { GLOBAL } from '../services/global';


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
  public typeNotificationAux: Number;
  public idNotificationAux: Number;
  baseUri:string = GLOBAL.baseUri;

  @Input()
  typeNotification: Number;

  @Input()
  idNotification: Number;


  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _notificationService: NotificationService,
		private _notificationSentService: NotificationSentService
	){
  		this.notification = new Notification(0, 0, true, 0, '', '', '', '', '', '', 0, '', [], '', false); 		
  		this.notificationSent = new NotificationSent(0, 0, 0, true, 0, '', '', '', '', '', '', 0, '', []);
      this.idNotificationAux = -1;
  }

  ngOnInit() {
  	console.log('notification-create.component.ts cargado');

    this.notification['deliveryDate'] = new Date().toISOString().slice(0, 16);
    this.notification['creationDate'] = new Date().toISOString().slice(0, 16);

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
      this.notification['image'] = this.filesToUpload[0].name;
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
		 	


    //if (this.notification[idNotification])
      //update
    //else
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
					this.notificationSent['deliveryDate'] = this.notification['deliveryDate'];
					this.notificationSent['mediaType'] = this.notification['mediaType'];
					this.notificationSent['link'] = this.notification['link'];
					this.notificationSent['userList'] = this.notification['userList'];


					this.createNewNotificationSent();

          //resetear campos
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

    sendPreviewNotification(){
      //correo lorena garcia
      let correoLorena = 'jafadie@gmail.com';
      let nameLorena = 'Lorena';

      let userPreview = new User('', '');
      userPreview['nameUser'] = nameLorena;
      userPreview['email'] = correoLorena;
      
      this.contactForm(userPreview);
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
      console.log('contact form subscription');
      console.log(this.notification['image']);
      console.log(user);

      if (this.notification['type'] == 1 || this.notification['type'] == 4 ){
        this._userService.sendMailNotifyEvents(user, this.notification).subscribe(() => {
         console.log('Mail sent correctly: sendMailNotifyEvents');
    
        });
      } else if (this.notification['type'] == 2){
        this._userService.sendMailAfterSubscription(user, this.notification).subscribe(() => {
         console.log('Mail sent correctly: sendMailAfterSubscription');
    
        });
      }
      else if (this.notification['type'] == 3){
        this._userService.sendMailAfterCommunication(user, this.notification).subscribe(() => {
         console.log('Mail sent correctly: sendMailAfterCommunication');
    
        });
      }

       

  	}

  	

  getUsers(){
	this._userService.getUsers().subscribe(
		result => {
			console.log(result);
			this.users = result;

      let usersNotification = this.notification['userList'];
      console.log(usersNotification);

      let myUser: [boolean, User];
      let allSelected = true;
      let exist = false;
			let i = 0;
			for (let user of this.users) {
        if (usersNotification)
        {
          exist = false;
          for (let userNotif of usersNotification) {
            if (user.email == userNotif){
              myUser = [true, user];
              this.myUserList[i] = myUser;
              exist = true;
              i++;
              break;
            }

          }
          if (!exist){
            myUser = [false, user];
            this.myUserList[i] = myUser;
            i++;
            allSelected = false;
          }
              
        }
        else{
          myUser = [false, user];
          allSelected = false;
        }

			}

      this.myGlobalCheck = true;
      if (!allSelected)
        this.myGlobalCheck = false;


      //this.checkValueGlobalCheck(this.myGlobalCheck);		

		},
		error => {
			console.log(<any>error);
		}
	);
  }

  initializeUsers() {

    this.getUsers();

  }

  
  
  onChangeNotificationType(){

    console.log('onChangeNotificationType');

    let typeNotification = this.notification['type'];
    console.log(typeNotification);
    if (typeNotification == 1 || typeNotification == 4)
    {
      this.initializeUsers();
      this.notification['scheduled'] = false;
      this.notification['eventType'] = 0;
      this.notification['mediaType'] = 0;
    }
    else
    {
      this.initializeCreateNotifications();
      
    }

    this.typeNotificationAux = this.notification['type'];
    this.buttonName = 'Send notification';
  	
    this.initializeDropDownLists(typeNotification);

  }

  initializeDropDownLists(typeNotification: Number){
    console.log('initializeDropDownLists');
    console.log(typeNotification);
    console.log(this.notification['type']);
    if (this.notification['type'] == 4){
      console.log('typeNotification');
      this.fillEventTypesNuevaExpo();
    }
    else if (this.notification['type'] == 1){
        this.notification['mediaType'] = 0;
        this.fillEventTypesArticulosPrensa();
        this.fillMediaTypes();
    }
  }

  initializeCreateNotifications(){
      this.notification['deliveryDate'] = undefined;
      this.notification['userList'] = undefined;
      this.notification['scheduled'] = undefined;
      this.notification['eventType'] = undefined;
      this.myUserList = [];
      this.users = [];
      this.notification['mediaType'] = undefined;

      this.getNotificationByType(this.notification['type']);

      if (this.notification['type'] == 2){
        this.buttonName = 'Save notification s';
      }
      else if (this.notification['type'] == 3){
        this.buttonName = 'Send notification c';
      }

      
  }

  getNotificationByType(type){
    console.log('getNotificationByType');
    this._notificationService.getNotificationsByType(type).subscribe(
      result => {
        console.log(result);
        this.notification['image'] = result[0]['image'];
        
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onPreviewSelectedNotification(typeNotification: Number){
    //send mail vista previa
    this.sendPreviewNotification();
  }


  ngOnChanges(changes: SimpleChanges ) {
      console.log('ngonchanges');
      console.log(changes['idNotification']);
    
      if( changes['typeNotification'] && changes['typeNotification'].previousValue != changes['typeNotification'].currentValue ) {
        console.log('ngOnChanges');

        this.notification['type'] = changes['typeNotification'].currentValue;
        this.typeNotificationAux = this.notification['type'];

        this.initializeCreateNotifications();      
      }

      if( changes['idNotification'] && changes['idNotification'].previousValue != changes['idNotification'].currentValue ) {
        console.log('ngOnChanges 2');
        console.log(changes['idNotification'].currentValue);

        
        this.idNotificationAux = changes['idNotification'].currentValue;


        this.getNotificationById(changes['idNotification'].currentValue);
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


  getNotificationById(idNotification){
    console.log('getNotificationById');
    console.log(idNotification);
    this._notificationService.getNotification(idNotification).subscribe(
      result => {
        console.log(result);
        this.notification = result[0];

        console.log(this.notification);

        

        

        this.notification['preview'] = true;





        this.initializeDropDownLists(this.notification['type']);
        this.buttonName = 'Save notification';
        this.initializeUsers();
        
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  

}
