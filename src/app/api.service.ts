import { Injectable } from '@angular/core';
import { HttpClient} from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(public http: HttpClient) { }

  registerUser() {
    this.http.post('percent-pos.test/register', this.registerUser)
    .subscribe(data => {

    });
  }

}
