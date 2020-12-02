import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';
import { User } from '../models/user.model';
import { Notification } from '../models/notification.model';
import Swal from 'sweetalert2';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../services/seo.service';
import { GoogleAnalyticsService } from '../services/google-analytics.service';
declare var ga: Function;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [UserService, NotificationService, SeoService]
})
export class ContactComponent implements OnInit {
  private title = 'Contact - Lorena Garcia Mateu';
  private description = 'Contact Lorena Garcia Mateu';
  private slug = 'app-contact';

	public user : User;
  public notification : Notification;

  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
    private _notificationService: NotificationService,
    private titleService: Title,
    private metaTagService: Meta,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) platformId,
    private _googleAnalyticsService: GoogleAnalyticsService
	){
		this.initializeUser();

    /*if (isPlatformBrowser(platformId)){
      this._router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            ga('set', 'page', event.urlAfterRedirects);
            ga('send', 'pageview');
        }
      });
    }*/
    
  }

  ngOnInit() {
  	console.log('contact.component.ts cargado');

    this.titleService.setTitle(this.title);
    this._seoService.generateTags({
      title: this.title,
      description: this.description,
      slug: this.slug
    });
    
  }

  initializeUser(){
  	this.user = new User('', '', '');
  }

  onSubmit(){
    this._googleAnalyticsService.eventEmitter("subscribe", "contact", "click_button", "click", 10);
    
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
