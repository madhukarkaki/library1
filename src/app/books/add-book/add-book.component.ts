import { Router } from '@angular/router';
import { BooksService } from './../../services/books.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
bookForm: FormGroup;
  constructor(private FormBuilder: FormBuilder,
    private BooksService:BooksService,
    private Router:Router) {
    this.bookForm = this.FormBuilder.group({
      title:['',Validators.required]

    });
  }

  ngOnInit(): void {
  }
  SaveBook(){
    console.log(this.bookForm.value);
  }
}
