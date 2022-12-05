import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import { HttpService } from "../http.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myGroup = new FormGroup({
    'name': new FormControl(''),
    'mobilenumber':new FormControl(''),
    'email':new FormControl('',[Validators.required]),
    'password': new FormControl('',[Validators.required]),
    'address':new FormControl(''),
  });
  
  get email()
  {
    return this.myGroup.get('email')
  }

  get password()
  {
    return this.myGroup.get('password')
  }


  constructor(private router: Router,private toastr: ToastrService, private user:HttpService){ }

  ngOnInit(): void {
    
  }

  submit(){
    let obj = {
      email: this.email!.value,
      password:this.password!.value
    }
    this.user.verifyLoginDetails(obj).subscribe((res:any)=>{
      console.log("API RESPONSE for verifying login details",res);
      if(res.status=='200'){
        console.log('1 login res: ',res.status);
        this.toastr.success("You have successfully logged in !");
        localStorage.setItem('userEmail',JSON.stringify(obj.email))
        localStorage.setItem('status',JSON.stringify(res.status))
        localStorage.setItem('token',JSON.stringify(res.token))

        this.router.navigateByUrl('books')
      }
      else{
        console.log('2 login res: ',res.status);
        this.toastr.error("Invalid email or password !! \nPlease enter valid details.")
        localStorage.setItem('status',JSON.stringify(res.status))
        this.router.navigateByUrl('')    
      }
     })
  }

  onClick(){
    this.router.navigateByUrl('register');
  }
}
