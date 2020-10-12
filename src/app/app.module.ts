import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { PaintingCreateComponent } from './painting-create/painting-create.component';
import { PaintingListComponent } from './painting-list/painting-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PaintingService } from './services/painting.service';
import { UiModule } from './ui/ui.module';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { SerieCreateComponent } from './serie-create/serie-create.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieService } from './services/serie.service';
import { AdminPaintingsComponent } from './admin-paintings/admin-paintings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { NotificationCreateComponent } from './notification-create/notification-create.component';
import { NotificationScheduledListComponent } from './notification-scheduled-list/notification-scheduled-list.component';
import { NotificationService } from './services/notification.service';
import { NotificationFixedComponent } from './notification-fixed/notification-fixed.component';
import { EventsComponent } from './events/events.component';
import { TextsComponent } from './texts/texts.component';
import { SeriePreviewService } from './services/serie-preview.service';
import { PaintingPreviewService } from './services/painting-preview.service';
import { PortfolioPreviewComponent } from './portfolio-preview/portfolio-preview.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    PaintingCreateComponent,
    PaintingListComponent,
    HomeComponent,
    PortfolioComponent,
    BioComponent,
    ContactComponent,
    SerieCreateComponent,
    SerieListComponent,
    AdminPaintingsComponent,
    AdminUsersComponent,
    NotificationCreateComponent,
    NotificationScheduledListComponent,
    NotificationFixedComponent,
    EventsComponent,
    TextsComponent,
    PortfolioPreviewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    DragDropModule
  ],
  providers: [
  PaintingService,
    SerieService,
    UserService,
    NotificationService,
    SeriePreviewService,
    PaintingPreviewService,
    CookieService
	],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
