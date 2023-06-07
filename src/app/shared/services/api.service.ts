import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class APIService {
  constructor(private http: HttpClient) {}
  getMenuList() {
    let menuurl = '../../assets/mock/menu.json';
    return this.http.get(menuurl);
  }
}
