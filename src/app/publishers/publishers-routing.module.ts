import { ListPublisherComponent } from './list-publisher/list-publisher.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'add/publisher',component:AddPublisherComponent},
{path:'list/publisher',component:ListPublisherComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishersRoutingModule { }
