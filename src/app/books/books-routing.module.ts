import { RequestedBookComponent } from './requested-book/requested-book.component';
import { IssuedBookComponent } from './issued-book/issued-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'book/add',component:AddBookComponent},
{path:'book/list',component:BookListComponent},
{path:'issued/book',component:IssuedBookComponent},
{path:'requested/book',component:RequestedBookComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
