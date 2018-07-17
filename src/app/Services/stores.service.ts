import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStores } from '../Interfaces/stores';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  private _url : string= "/assets/JSON-Data/Stores.json";

  constructor(private http: HttpClient) { }

  getStores(): Observable<IStores[]>{
    return this.http.get<IStores[]>(this._url);
    //Is it mandatory to declare the type of Observable??
    //You do not have to define any type
    //I guess this is angular 6
    //Don't use it. It is in beta phase
    //npm install @angular/cli@1 -- for angular 5
    //@1 will install CLI 1.7.6 which is angular 5
    //
  }
}
