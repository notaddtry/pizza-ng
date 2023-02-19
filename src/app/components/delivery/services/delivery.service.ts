import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private http: HttpClient) {}

  postForm(formValue: { name: string; address: string; phone: string }): void {
    console.log(formValue);
    this.http.post('/api', formValue);
  }
}
