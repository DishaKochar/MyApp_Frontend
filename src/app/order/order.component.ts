import { Component, OnInit } from '@angular/core';
import { HttpService } from "../auth/http.service";
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: any[]=[]
  cartDetails : any = []
  email = JSON.parse(localStorage.getItem('userEmail') || '{}');

  constructor(private router: Router,private toastr: ToastrService,private user:HttpService) { } //private cartService: CartService
  total: number = 0
  ngOnInit(): void {
  // getCart(){
  //   return this.cartService.get();
  // }
    this.user.getCart(this.email).subscribe((res:any)=>{
      this.order = res[0].books
      this.cartDetails=res[0]

      this.order.forEach((value) => {
        this.total+= value.quantity * value.amount
      });
      
      this.cartDetails.totalAmount=this.total

      console.log("Cart Details:\n",this.cartDetails)
    })
  }
  placeOrder(){
    this.user.placeOrder(this.cartDetails).subscribe((res:any)=>{
      if(res.status==200)
      {
        this.toastr.success("Order Placed Successfully !!")
        this.router.navigateByUrl('/books')

      }
      else{
        const points= res.data
        this.toastr.error("Order Not Placed \n You need more points in wallet:"+  points)
      }
      console.log(res)
    })
  }
  //this.toastr.success("You have successfully registered ! \n Login to get started!!")

}



