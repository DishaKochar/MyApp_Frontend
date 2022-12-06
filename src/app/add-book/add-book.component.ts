import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import { HttpService } from "../auth/http.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  myGroup = new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'author':new FormControl('',[Validators.required]),
    'amount':new FormControl(0,[Validators.required]),
    // 'src': new FormControl(''),
  });
  
  get name()
  {
    return this.myGroup.get('name');
  };

  get author()
  {
    return this.myGroup.get('author');
  }
  get amount()
  {
    return this.myGroup.get('amount');
  };


  constructor(private router: Router,private toastr: ToastrService, private user:HttpService){ }

  ngOnInit(): void {
    
  }

  submit(){
    let token = JSON.parse(localStorage.getItem('token') || '{}');
    let obj = {
      name: this.name!.value,
      author:this.author!.value,
      amount:this.amount!.value,
      src:'https://m.media-amazon.com/images/I/41VndKVtiXL._SX442_BO1,204,203,200_.jpg',
      token: token
    }
    this.user.addBooks(obj).subscribe((res:any)=>{
      console.log("API RESPONSE for adding book details",res);
      if(res.status===200){
        console.log('Add Book res: ',res);
        this.toastr.success(res.message);
        this.router.navigateByUrl('books');
      }
      else{
        console.log('Add Book res: ',res);
        this.toastr.error("Unable to add books ",res.message);
        this.router.navigateByUrl('book/add');  
      }
     })
  }
}

