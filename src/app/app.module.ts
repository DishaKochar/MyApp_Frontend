import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from "./auth/auth.module";
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
//import { MatFormFieldModule } from "@angular/material/form-field";
import { ToastrModule } from 'ngx-toastr';
import { AddBookComponent } from './add-book/add-book.component';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrderComponent } from './order/order.component';


@NgModule({
    providers: [ 
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      ],
    declarations: [AppComponent, BooksComponent, BookComponent, CartComponent, MainComponent, ProfileComponent, AddBookComponent, OrderComponent],
    imports: [
        BrowserModule, 
        AuthModule, 
        AppRoutingModule, 
        ReactiveFormsModule,
        FormsModule, 
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FontAwesomeModule, 
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot()
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }
