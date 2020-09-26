import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { EventType } from '../models/eventType.model';
import { MediaType } from '../models/mediaType.model';
import { Notification } from '../models/notification.model';
import { NotificationService } from '../services/notification.service';
import Swal from 'sweetalert2'
declare var jQuery: any;
import { GLOBAL } from '../services/global';


@Component({
  selector: 'app-notification-create',
  templateUrl: './notification-create.component.html',
  styleUrls: ['./notification-create.component.css'],
  providers: [UserService, NotificationService]
})
export class NotificationCreateComponent implements OnInit {

	public users:any = [];
	public eventTypes: EventType[];
	public mediaTypes: MediaType[];
	public notification: Notification;
	public filesToUpload;
	public myUserList: any = [];
	public buttonName: string;
  public deliveryDate:Date;
  public myGlobalCheck;
  public typeNotificationAux: Number;
  public idNotificationAux: Number;
  public edition: boolean;
  baseUri:string = GLOBAL.baseUri;

  @Input()
  typeNotification: Number;

  @Input()
  idNotification: Number;

  @Output()
  selectIdNotification = new EventEmitter<Number>();

  @Output()
  selectTypeNotification = new EventEmitter<Number>();


  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _notificationService: NotificationService
	){
  		this.notification = new Notification(0, 0, true, 0, '', '', '', '', '', '', 0, '', [], '', false);
      this.idNotificationAux = -1;
  }

  ngOnInit() {
  	console.log('notification-create.component.ts cargado');
  }

  toDateString(date: Date): string {   

        return (date.getFullYear().toString() + '-' 
           + ("0" + (date.getMonth() + 1)).slice(-2) + '-' 
           + ("0" + (date.getDate())).slice(-2))
           + 'T' + date.toTimeString().slice(0,5);
           
    }

  parseDateString(date): Date {
       date = date.replace('T','-');
       var parts = date.split('-');
       var timeParts = parts[3].split(':');

      // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
      return new Date(parts[0], parts[1]-1, parts[2], timeParts[0], timeParts[1]);     // Note: months are 0-based

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


  onSubmit(form){
    console.log('onsubmit');
    
    this.saveInfoNotification(form);
  }

  fillUsers() {
    this.notification['userList'] = [];
      
    let i = 0;
    for (let myUser of this.myUserList) {
      if (myUser[0]){
        this.notification['userList'][i] = myUser[1]['email'];
        i++;
      }
    }
  }

	createNewNotification(form){
		this._notificationService.getSequenceNumber().subscribe(
  			result => {
				this.notification['idNotification'] = result['seq'];
        console.log('createNewNotification');
        console.log(result);
        console.log(this.notification);
				
				
				this.createNotification(form);
			},
			error => {
				console.log(<any>error);
			}
  		);
	}
  	
  	createNotification(form){
  		this._notificationService.createNotification(this.notification).subscribe(
  			result => {
				console.log('Notification successfully created!');

        this.selectIdNotification.emit(result['idNotification']);

        form.resetForm();
								
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

      let userPreview = new User('', '', '');
      userPreview['nameUser'] = nameLorena;
      userPreview['email'] = correoLorena;
      
      this.contactForm(userPreview);
    }

    saveInfoNotification(form) {
      this.notification['creationDate'] = this.toDateString(new Date());
      this.notification['preview'] = false;

      if (this.filesToUpload){
        this.cargandoImagen(this.filesToUpload);
        this.notification['image'] = this.filesToUpload[0].name;
      }

      this.fillUsers();

      if (this.edition == true)
        this.updateNotification(form);
      else{
        this.createNewNotification(form);

        this.typeNotificationAux = undefined;
        this.idNotificationAux = undefined;
      }
    }

    sendNotification(form){
      this.saveInfoNotification(form);

    
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

      if (this.notification['type'] == 1 || this.notification['type'] == 4 ){
        this._userService.sendMailNotifyEvents(user, this.notification).subscribe(() => {
         console.log('Mail sent correctly: sendMailNotifyEvents');
    
        });
      } else if (this.notification['type'] == 5){
        this._userService.sendMailNotifyGeneralEvents(user, this.notification).subscribe(() => {
         console.log('Mail sent correctly: sendMailNotifyGeneralEvents');
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
          this.myUserList[i] = myUser;
          i++;
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

  cleanNotification(){
    this.notification['_id'] = undefined;
    this.notification['idNotification'] = undefined;
    this.notification['scheduled'] = false;
    this.notification['eventType'] = 0;
    this.notification['title'] = undefined;
    this.notification['localization'] = undefined;
    this.notification['openingDate'] = undefined;
    this.notification['closingDate'] = undefined;
    this.notification['image'] = undefined;
    this.notification['deliveryDate'] = undefined;
    this.notification['mediaType'] = 0;
    this.notification['link'] = undefined;
    this.notification['userList'] = undefined;
    this.notification['creationDate'] = undefined;
    this.notification['preview'] = false;
  }

  initializeNotification(){
    this.cleanNotification();

    this.edition = false;

    if (this.notification['type'] == 1 || this.notification['type'] == 4 || this.notification['type'] == 5)
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
    this.idNotificationAux = -1;
    this.buttonName = 'Save notification';
    
    this.initializeDropDownLists(this.notification['type']);
  }
  
  
  onChangeNotificationType(){
    
    this.initializeNotification();
    
    this.selectIdNotification.emit(-2);
    this.selectTypeNotification.emit(-2);
  }

  initializeDropDownLists(typeNotification: Number){

    if (this.notification['type'] == 4){
      this.fillEventTypesNuevaExpo();
    }
    else if (this.notification['type'] == 1){
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
  }

  getNotificationByType(type){
    console.log('getNotificationByType');
    this._notificationService.getNotificationsByType(type).subscribe(
      result => {
        console.log(result);
        this.notification = result[0];
        
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onPreviewSelectedNotification(typeNotification: Number){
    this.notification['preview'] = true;
    //send mail vista previa
    this.sendPreviewNotification();
  }


  ngOnChanges(changes: SimpleChanges) {
      this.edition = false;
      
      if (changes['typeNotification'] && (
        changes['typeNotification'].currentValue == 2 || changes['typeNotification'].currentValue == 3) )
      {
        if( changes['typeNotification'] && changes['typeNotification'].previousValue != changes['typeNotification'].currentValue ) {

          this.notification['type'] = changes['typeNotification'].currentValue;
          this.typeNotificationAux = this.notification['type'];

          this.idNotificationAux = undefined;
          this.edition = true;
          this.buttonName = 'Save notification';

          this.initializeCreateNotifications();
        }
      }
      else {
        if (changes['idNotification']){
          if (changes['idNotification'].currentValue == -2){
            this.initializeNotification();
          } else if (changes['idNotification'].previousValue == -2 && changes['idNotification'].currentValue == -1){
            //no hago nada
          } 
          else if((changes['typeNotification'] && changes['typeNotification'].currentValue == -1 &&
            changes['typeNotification'].previousValue == -2) ||
            (changes['idNotification'].previousValue != changes['idNotification'].currentValue) ) {

            if (this.notification['type']){

              this.idNotificationAux = changes['idNotification'].currentValue;
              this.edition = true;
              this.buttonName = 'Save notification';

              this.getNotificationById(changes['idNotification'].currentValue);
            }
          
            
          }
        }
      }
       
  }



  updateNotification(form){
      this._notificationService.updateNotification(this.notification['idNotification'] ,this.notification).subscribe(
      result => {
        console.log('Notification successfully updated!');

        this.selectIdNotification.emit(result['idNotification']);

        //mostrar mensaje guardado

      },
      error => {
        console.log(<any>error);
      }
      );
    }

    onSendNotification(form){
      Swal.fire({
        text: "Va a enviar la notificación a sus clientes, ¿desea continuar?",
        showCancelButton: true,
        confirmButtonColor: '#012e67',
        cancelButtonColor: '#9B9B9B',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'

      }).then((result) => {
  
        if (result.value) {
          this.sendNotification(form);
        }
      })
      
    }
  

  onOptionEventSelected(eventType){
	this.notification['eventType'] = eventType;
  }

  onOptionMediaSelected(mediaType){
	this.notification['mediaType'] = mediaType;
  }


  checkValueScheduled(event: any){
      this.notification['deliveryDate'] = this.toDateString(new Date());
  }


  


  getNotificationById(idNotification){
    console.log('getNotificationById');
    this._notificationService.getNotification(idNotification).subscribe(
      result => {
        console.log(result);
        this.notification = result[0];

        this.typeNotificationAux = this.notification['type'];    

        if (this.notification['type'] == 4){
          this.notification['title'] = result[0]['title'];

          let iniDate = this.parseDateString(result[0]['openingDate']);
          let endDate = this.parseDateString(result[0]['closingDate']);
          this.notification['openingDate'] = this.toDateString(iniDate);
          this.notification['closingDate'] = this.toDateString(endDate);
        } 


        if (this.notification['scheduled']) {
          let schedDate = this.parseDateString(result[0]['deliveryDate']);
          this.notification['deliveryDate'] = this.toDateString(schedDate);
        }
        

        this.notification['preview'] = true;


        this.initializeDropDownLists(this.notification['type']);
        this.initializeUsers();
        
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  

}

