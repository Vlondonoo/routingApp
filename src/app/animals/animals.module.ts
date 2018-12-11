import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals.component';

const routeAnimal: Routes = [
  {
    path: '',
    component: AnimalsComponent,
    children: [
      { path: 'cat', component: CatComponent },
      { path: 'dog', component: DogComponent }
    ]
  }];

@NgModule({
  declarations: [AnimalsComponent, CatComponent, DogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routeAnimal)

  ],
  exports: [CommonModule, RouterModule]

})
export class AnimalsModule { }
