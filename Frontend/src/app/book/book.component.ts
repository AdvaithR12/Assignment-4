import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServicesService } from '../book-services.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  pageTitle: string = 'Books';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  books=[{
    bookId :'',
    bookName:'',
    bookCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}
  ];

  constructor(private bookService: BookServicesService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe((data)=>{
      // console.log(data)
      this.books=JSON.parse(JSON.stringify(data));
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  deleteBook(book:any) {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(b => b !== book);
      })
  }

  editBook(book:any) {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update'])
  }

}
