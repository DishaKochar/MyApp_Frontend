import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { CartService } from '../../cart/cart.service';
//import { Book } from '../../types/Book';
import { HttpService } from '../../auth/http.service';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  
  @Input() book: any ={};
  //@Output() bookEmitter = new EventEmitter<Book>();

  isInCart:boolean=false;

  qty = new FormGroup({
    'quantity': new FormControl(1,[Validators.pattern(/^(?=[1-9])/)])
  })
  get quantity()
  {
    return this.qty.get('quantity')
  }
 
  addtocart(){
    
    this.isInCart=true;
    this.cartService.add(this.book);
    console.log("Book Component",this.book)
    //this.bookEmitter.emit(this.book);
    this.book.email = JSON.parse(localStorage.getItem('userEmail') || '{}');

    this.book.quantity = this.quantity!.value;
    this.user.addToCart(this.book).subscribe(res=>{
      if(res.status == 200){
        console.log("add to cart response for post",res);  
        this.toastr.success("Book Added To Cart !!")
      
      }
      else{
        
        console.log("add to cart error response for post",res);
        this.toastr.error("Unable to add book to the cart")
      }
    })
  }

  constructor(private cartService: CartService, private toastr: ToastrService, private user:HttpService) { }
  
  ngOnInit(): void {
    
  }

}
