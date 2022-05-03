import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  books = Book.books;
  bookId = " ";
  bookList: any[] = [];
  
  ngOnInit(): void {
  }

  getBooksById(){
    this.bookList = this.books.filter(b => b.bid === parseInt(this.bookId));
    // this.bookList.push(this.books.find( ({bid}) => bid === parseInt(this.bookId)));
    console.log(this.bookList);
  }

}
