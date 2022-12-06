import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { Book } from '../types/Book';
import { HttpService } from "../auth/http.service";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books: any[]= [];
  constructor(private user:HttpService) {}


  isShowing: boolean = true;

  ngOnInit() {
    
    this.user.getBooks().subscribe((res:any)=>{
      this.books = res
      console.log(res)
    })
  }

}
