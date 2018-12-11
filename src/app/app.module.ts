import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThingComponent } from './thing/thing.component';
import { AnimalsModule } from './animals/animals.module';
import { NotFoundComponent } from './not-found/not-found.component';

//const route:Routes=[{path:'home', component: HomeComponent},
//{ path: 'thing', component: ThingComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThingComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AnimalsModule,
    AppRoutingModule,
    
    //RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
