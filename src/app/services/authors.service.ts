import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthor } from '../authors/models/IAuthor';


@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient:HttpClient) { }
  createAuthor(author:IAuthor) {
    return this.httpClient.post("http://localhost:3000/posts",author,
   {
     headers:
     {
     'cache-control':'no-cache',
     'x-apikey':'362718ee0a47e387f60fbe639d9ca9c24c60',
     'content-type':'application/json'
     }
   });
    
  }

getAuthors(){
  return this.httpClient.post("http://localhost:3000/posts",
  {
    headers:
    {
    'cache-control':'no-cache',
    'x-apikey':'362718ee0a47e387f60fbe639d9ca9c24c60',
    'content-type':'application/json'
    }
  });
}

}
