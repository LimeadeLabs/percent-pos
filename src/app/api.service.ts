import { Injectable } from '@angular/core';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(public http: Http) { }

  registerUser() {
    this.http.post('percent-pos.test/register', this.registerUser);
  }

}
