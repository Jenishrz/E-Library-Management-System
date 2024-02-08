import { Injectable } from '@angular/core';
import { User } from './model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = "http://localhost:1234"
  constructor(private http: HttpClient) { }
  /*insert(user:User)
  {
    this.http.post(this.url+"/login",user).subscribe();
    return "Login Successfull" + user.emailId+ user.password;
  }*/
  login(User: any) {
    return this.http.post(this.url + "/login", User);
  }
}