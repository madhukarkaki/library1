import { ListAuthorComponent } from './list-author/list-author.component';
 import { AddAuthorComponent } from'./add-author/add-author.component';
import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'add/author',component:AddAuthorComponent},
{path:'list/author',component:ListAuthorComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
