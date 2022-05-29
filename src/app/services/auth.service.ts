import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient:HttpClient) { }
  login(value: any) {
    return this.httpClient.post('https://library-39a3.restdb.io/rest/users',value );
  }
}
