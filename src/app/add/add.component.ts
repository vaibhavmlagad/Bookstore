import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
  books = Book.books;
  display: boolean= false;
  constructor(private router : Router) { }

  formdata: FormGroup = new FormGroup({
    bid : new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    name : new FormControl("", [Validators.required, Validators.minLength(4)]),
    author : new FormControl("", [Validators.required, Validators.minLength(4)]),
    info:  new FormControl("", [Validators.required, Validators.minLength(8)]),
    price : new FormControl("", [Validators.required, Validators.minLength(2)]),
    quantity : new FormControl("", [Validators.required, Validators.minLength(1)]),
  });

  ngOnInit(): void {
  }

  addBooks(books : Book){
    if(this.formdata.invalid){
      console.log("Wrong entries")
      return;
    }
    this.books.push(this.formdata.value);
    console.log(this.books);
    this.display=true;
    this.router.navigateByUrl("display");
  }

}
