import { Component, OnInit } from '@angular/core';
import { ControllersService } from '../controllers.service';
import { Book } from './../book/book';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book = new Book();
  message: any;

  constructor(
    private service: ControllersService
    ) { }

  ngOnInit(): void {
  }

  public createBook(){
    const createBook = this.service.createBook(this.book);
    createBook.subscribe((data: any) => this.message = data);
    console.log(this.book);

  }

}
