import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { RequestedBookComponent } from './requested-book/requested-book.component';

@NgModule({
  declarations: [
    AddBookComponent,
    BookListComponent,
    RequestedBookComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
