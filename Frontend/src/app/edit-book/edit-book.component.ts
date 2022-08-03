import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServicesService } from '../book-services.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

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

  constructor(private bookService: BookServicesService, private router: Router) { }

  ngOnInit(): void {
    const bookId = localStorage.getItem('editBookId');
    
    this.bookService.getBook(bookId)
    .subscribe((data)=> {
      this.bookItem = JSON.parse(JSON.stringify(data));
      // console.log(this.productItem);
    });
  }

  editBook(){

    this.bookService.editBook(this.bookItem)
    

      localStorage.removeItem('editBookId');
      this.router.navigate(['books']);
    
  }

}
