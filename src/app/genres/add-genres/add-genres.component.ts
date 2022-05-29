import { Router } from '@angular/router';
import { GenresService } from './../../services/genres.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-genres',
  templateUrl: './add-genres.component.html',
  styleUrls: ['./add-genres.component.scss']
})
export class AddGenresComponent implements OnInit {
genrersForm:FormGroup;
  constructor(private FormBuilder: FormBuilder,
    private GenresService: GenresService,
    private Router:Router) {
      this.genrersForm = this.FormBuilder.group({
        title:['',Validators.required]
      });
    }

  ngOnInit(): void {
  }
savegenres(){
  console.log(this.genrersForm.value)
}
}
