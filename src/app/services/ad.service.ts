import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyAaaaRecord } from 'dns';
import {Ad} from '../models/Ad'
@Injectable({
  providedIn: 'root'
})
export class AdService {
url;
  constructor(private _http: HttpClient) {
    this.url="http://localhost:8080/api/ad";
   }

   getallad(){
    return this._http.get<Ad[]>(`${this.url}/get_ad`);
   }

}
