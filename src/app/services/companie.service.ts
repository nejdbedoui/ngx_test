import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanieService {
  url;
  constructor(private _http: HttpClient) {
    this.url="http://localhost:8080/api/comp";
   }
}
