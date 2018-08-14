import { Injectable } from '@angular/core';
import { HttpClient} from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user = {
    firstName: "Victor",
    lastName: "Rodriguez",
    email: "webdevvmrdz@gmail.com"
  }
  

  constructor(public http: HttpClient) { }

  loginUser() {
    this.http.get('http://percent-pos.test/login')
    .subscribe( (data) => {
      console.log(data);
    });
  }

}
