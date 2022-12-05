import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { Book } from '../types/Book';
//import { BooksService } from './books.service';
import { HttpService } from "../auth/http.service";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books: any[]= [];
  constructor(private user:HttpService) {} //private booksService: BooksService,


  isShowing: boolean = true;
  //cart: Book[] = [];
  // addtocart(event: Book){
  //   console.log(event)
  // }
  
  ngOnInit() {
    //this.books = this.booksService.getBooks();
    //let token = JSON.parse(localStorage.getItem('token') || '{}');
    this.user.getBooks().subscribe((res:any)=>{
      this.books = res
      console.log(res)
    })
  }


  //isDisabled: boolean = false;

  // handleClick(){
  //   this.isDisabled = true
  // }

  //MyName: string= "";
  // handleInput(event:any){
  //  this.MyName= event.target.value;
  // }

}
