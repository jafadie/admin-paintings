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
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';


const routes: Routes = [
  { path: '', redirectTo: '/app-home', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-portfolio', component: PortfolioComponent },
  { path: 'app-portfolio/:id', component: PortfolioComponent },
  { path: 'app-bio', component: BioComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: 'painting-list', component: PaintingListComponent },
  { path: 'painting-create', component: PaintingCreateComponent },
  { path: 'serie-create', component: SerieCreateComponent },
  { path: 'serie-list', component: SerieListComponent },
  { path: 'admin-paintings', component: AdminPaintingsComponent },
  { path: 'admin-users', component: AdminUsersComponent }
  //,{path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [
  	[RouterModule]
  ]
})
export class AppRoutingModule { }
