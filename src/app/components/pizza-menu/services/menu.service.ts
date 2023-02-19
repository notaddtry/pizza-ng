import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { menuItem } from '../models/menuItem.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<menuItem[]> {
    const a = this.http.get<menuItem[]>('assets/menu.json');
    a.subscribe((data) => console.log(data));
    return a;
  }
}
