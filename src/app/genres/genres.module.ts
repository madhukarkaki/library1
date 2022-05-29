import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { AddGenresComponent } from './add-genres/add-genres.component';
import { ListGenresComponent } from './list-genres/list-genres.component';


@NgModule({
  declarations: [
    AddGenresComponent,
    ListGenresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GenresRoutingModule
  ]
})
export class GenresModule { }
