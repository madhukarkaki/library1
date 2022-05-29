import { Router } from '@angular/router';
import { PublishersService } from './../../services/publishers.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-publisher',
  templateUrl:'./add-publisher.component.html',
  styleUrls: ['./add-publisher.component.scss']
})
export class AddPublisherComponent implements OnInit {
 publisherForm:FormGroup;
  constructor(private FormBuilder: FormBuilder,
    private PublishersService:PublishersService,
    private Router:Router) {
    this.publisherForm = this.FormBuilder.group({
      title:['', Validators.required]
    });
   }

  ngOnInit(): void {
  }
  savePublisher(){
    console.log(this.publisherForm.value)
  }
}
