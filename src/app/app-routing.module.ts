import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingListComponent } from './painting-list/painting-list.component';
import { PaintingCreateComponent } from './painting-create/painting-create.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { SerieCreateComponent } from './serie-create/serie-create.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { AdminPaintingsComponent } from './admin-paintings/admin-paintings.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { EventsComponent } from './events/events.component';
import { TextsComponent } from './texts/texts.component';
import { PortfolioPreviewComponent } from './portfolio-preview/portfolio-preview.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-home', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-portfolio', component: PortfolioComponent },
  { path: 'app-portfolio/:id', component: PortfolioComponent },
  { path: 'app-bio', component: BioComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-events', component: EventsComponent },
  { path: 'app-texts', component: TextsComponent },
  { path: 'painting-list', component: PaintingListComponent },
  { path: 'painting-create', component: PaintingCreateComponent },
  { path: 'serie-create', component: SerieCreateComponent },
  { path: 'serie-list', component: SerieListComponent },
  { path: 'admin-paintings', component: AdminPaintingsComponent },
  { path: 'admin-paintings/:id', component: AdminPaintingsComponent }, //lo uso para cerrar sesión
  { path: 'admin-users', component: AdminUsersComponent },
  { path: 'app-portfolio-preview', component: PortfolioPreviewComponent },
  { path: 'app-portfolio-preview/:id', component: PortfolioPreviewComponent },
  { path: 'app-exhibitions', component: ExhibitionsComponent },
  { path: 'app-exhibitions/:id', component: ExhibitionsComponent },
  {path: '**', component: HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
