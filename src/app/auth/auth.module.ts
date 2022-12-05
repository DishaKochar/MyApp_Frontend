import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
    
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,MatInputModule,HttpClientModule]
})
export class AuthModule { }
