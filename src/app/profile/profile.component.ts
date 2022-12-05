import { Component, Input, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from "@angular/forms";
import { HttpService } from "../auth/http.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  constructor(private user:HttpService) { }

  profile = new FormGroup({
    'name': new FormControl(),
    'mobilenumber':new FormControl(),
    'email':new FormControl(),
    'password': new FormControl(),
    'address':new FormControl(),
    'wallet':new FormControl(),
  });

  //@Input() profile: any = {}
    // {
    //   name:'Disha Kochar',
    //   mobilenumber:'8078607585',
    //   email: 'disha@gmail.com',
    //   password:'1234',
    //   address:'Sanganeri Gate'
    // },
    // {
    //   name:'Harshita Singh',
    //   mobilenumber:'8078607585',
    //   email: 'happy@gmail.com',
    //   password:'4321',
    //   address:'Durgapura'
    // } 

  order: any =[]
  
  ngOnInit(): void {
    let email = JSON.parse(localStorage.getItem('userEmail') || '{}');

    this.user.getProfileDetails(email).subscribe((res:any)=>{
      this.profile.setValue({
        name: res.data.name,
        mobilenumber: res.data.mobilenumber,
        email: res.data.email,
        password: res.data.password,
        address: res.data.address,
        wallet: res.data.wallet
      })
      console.log("profile data",res)
    })

    this.user.getOrderDetails(email).subscribe((res: any)=>{
      console.log("Order Details:-",res.data)
      this.order = res.data[0].books
      console.log(this.order)
    })

  }

}
