import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMoonComponent } from './about-moon/about-moon.component';
import { AcademicsComponent } from './academics/academics.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PublicationComponent } from './publication/publication.component';

const routes: Routes = [
  {path:'', pathMatch:'prefix', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about-moon', component:AboutMoonComponent},
  {path:'academics',component:AcademicsComponent},
  {path:'activities',component:ActivitiesComponent},
  {path:'publication',component:PublicationComponent},
  {path:'contact',component:ContactComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent, AboutMoonComponent, AcademicsComponent, ActivitiesComponent, PublicationComponent, ContactComponent]
