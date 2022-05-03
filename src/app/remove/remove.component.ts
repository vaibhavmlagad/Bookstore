import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor() { }
  bid : number = 0;
  books = Book.books;
  display : boolean= false;
  formdata: FormGroup = new FormGroup({
    bid : new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
  });

  ngOnInit(): void {
  }

  removeBook(){
    console.log(this.bid)
    this.books.forEach((value, index) =>{
      if(value.bid==this.bid){
        this.books.splice(index, 1);
        this.display=true;
        console.log("element removed");
      }
    })
  }
}
