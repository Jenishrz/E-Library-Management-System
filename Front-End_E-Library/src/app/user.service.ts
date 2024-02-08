import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllUsers: any;
  constructor(private http : HttpClient) { }

  private url: string = 'http://localhost:1234';
/*Insert Books*/
postUser(data : User):Observable<any>{
   
  return this.http.post<any>("http://localhost:1234/performUserinsert", data);
}
/*View All Books*/
getUser():Observable<any>{
 
  return  this.http.get<[any[]]>("http://localhost:1234/ViewAllUsers");
}
/*Update Books*/
putUser(data : any, id : number):Observable<any>{
 
  return   this.http.put<any>("http://localhost:1234/performUsersUpdate", data );
}
/*Delete Books*/
deleteUser(data : User):Observable<any>{
  return this.http.delete(this.url+"/performUserDelete/"+data.userId);
}
}
