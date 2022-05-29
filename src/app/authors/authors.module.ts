import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AddAuthorComponent } from './add-author/add-author.component';
import { ListAuthorComponent } from './list-author/list-author.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddAuthorComponent,
    ListAuthorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorsRoutingModule,
    
  
  ]
})
export class AuthorsModule { }
