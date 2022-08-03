import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  constructor(private http: HttpClient) { }

  newBook(item:any) {  
     
    return this.http.post("http://localhost:8080/insert",{ "book":item })
    .subscribe(data =>{console.log(data)})
  }

  getBooks() {
    return this.http.get("http://localhost:8080/books");
  } 

  getBook(id: any) {
    return this.http.get("http://localhost:8080/books/"+id);
  } 

  deleteBook(id: any) {
    return this.http.delete("http://localhost:8080/remove/"+id)
  }

  editBook(book:any) {
    return this.http.put("http://localhost:8080/books/update", book)
    .subscribe(data =>{console.log(data)})
  }

}
