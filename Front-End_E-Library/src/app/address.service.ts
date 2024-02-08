import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { book } from './model/book';
import { address } from './model/address';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http : HttpClient) { }

  private url: string = 'http://localhost:1234';


  postAddress(data : address):Observable<any>{
   
    return this.http.post<any>("http://localhost:1234//performinsertAddress", data);
  }

  getAddress():Observable<any>{
   
    return  this.http.get<[any[]]>("http://localhost:1234/ViewAllBooks");
  }
  putAddress(data : any, id : number):Observable<any>{
   
    return   this.http.put<any>("http://localhost:1234/performBookUpdate", data );
  }
 


  deleteAddress(data : book):Observable<any>{
    return this.http.delete(this.url+"/performBookDelete/"+data.bookId);
  }

}
