import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http : HttpClient) { }

  private url: string = 'http://localhost:1234';
  /*Insert Books*/
  postBook(data : book):Observable<any>{
   
    return this.http.post<any>("http://localhost:1234/performBookinsert", data);
  }
  /*View All Books*/
  getBook():Observable<any>{
   
    return  this.http.get<[any[]]>("http://localhost:1234/ViewAllBooks");
  }
  /*Update Books*/
  putBook(data : any, id : number):Observable<any>{
   
    return   this.http.put<any>("http://localhost:1234/performBookUpdate", data );
  }
  /*Delete Books*/
  deleteBook(data : book):Observable<any>{
    return this.http.delete(this.url+"/performBookDelete/"+data.bookId);
  }

}
