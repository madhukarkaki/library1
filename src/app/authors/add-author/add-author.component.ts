import { Router } from '@angular/router';
import { AuthorsService } from './../../services/authors.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-author',
  templateUrl:'./add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {
  authorForm: FormGroup;

  constructor(private FormBuilder: FormBuilder,
    private AuthorsService: AuthorsService,
    private Router: Router) {
    this.authorForm = this.FormBuilder.group({
     firstName: ['', Validators.required],
     middleName:[],
     lastName: ['', Validators.required],
     description:[]
    });
  }

  ngOnInit(): void {
  }
  saveAuthor(){
this.AuthorsService
  }
}
