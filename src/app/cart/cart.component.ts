import { getLocaleExtraDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { HttpService } from "../auth/http.service";
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cart: any ={}
  cart: any=[]
  item: any=[]
  email = JSON.parse(localStorage.getItem('userEmail') || '{}');

  constructor(private router: Router,private toastr: ToastrService,private user:HttpService) { } //private cartService: CartService

  ngOnInit(): void {

    this.user.getCart(this.email).subscribe((res:any)=>{
      console.log(res)
      this.cart = res[0].books
      console.log(res[0].books)
      
    })
  }
  order(){
    this.router.navigateByUrl('/order')
  }

  async removeFromCart(id:any){
    

    console.log("Cart Component Before Removal:",this.cart)

    for(let i=0; i<this.cart.length; i++){
      if(this.cart[i].id == id)
      {
        this.item = this.cart[i]
        break;
      }
    }

    this.item.email = JSON.parse(localStorage.getItem('userEmail') || '{}');
    

    this.user.removeFromCart(this.item).subscribe(res=>{
       if(res.status == 200){
        location.reload()
        this.toastr.success("Book Removed From Cart !!")

        
      }
      else{
        this.toastr.error("Unable to remaove book from cart !" )

      }
      
    })
  }

}
