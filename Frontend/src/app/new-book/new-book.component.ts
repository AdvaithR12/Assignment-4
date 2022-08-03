import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServicesService } from '../book-services.service';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  bookItem = {
    bookId :'',
    bookName:'',
    bookCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''
  }

  constructor(private bookService: BookServicesService, private router: Router ) { }

  ngOnInit(): void {
  }

  AddBook()
  {    
    this.bookService.newBook(this.bookItem);
    console.log(this.bookItem);    
    this.router.navigate(['']);
  }

}
