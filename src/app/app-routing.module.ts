import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThingComponent } from './thing/thing.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch:'full'},
  {path:'home/id', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'animals', loadChildren:'./animals/animals.module#AnimalsModule'},
  { path: 'thing', component: ThingComponent },
  {path:'**', component: NotFoundComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
