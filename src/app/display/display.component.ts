import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }
  books = Book.books;
  ngOnInit(): void {
    console.log(this.books);
  }

}
