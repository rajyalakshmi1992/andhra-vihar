import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}
  getMenuList() {
    let apiurl = '../../assets/mock/menu.json';
    return this._http.get(apiurl);
  }
}

