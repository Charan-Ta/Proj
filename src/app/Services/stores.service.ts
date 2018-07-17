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
  }
}
