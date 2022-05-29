import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishersRoutingModule } from './publishers-routing.module';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { ListPublisherComponent } from './list-publisher/list-publisher.component';


@NgModule({
  declarations: [
    AddPublisherComponent,
    ListPublisherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublishersRoutingModule
  ]
})
export class PublishersModule { }
