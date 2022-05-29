import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.scss']
})
export class ListAuthorComponent implements OnInit {
  authors:any[]=[]

  constructor(private authorService :AuthorsService) {
    this.authorService.getAuthors().subscribe((response:any)=>{
   });
  }
  ngOnInit(): void {
  }

}
