import { NgModule } from "@angular/core";
import { RouterModule , Routes} from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AuthguardGuard } from "./auth/authguard.guard";
import { ProfileComponent } from "./profile/profile.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { OrderComponent } from "./order/order.component";


const routes: Routes= [
    {
        path:'books',
        component: BooksComponent,
        canActivate: [AuthguardGuard],
    },
    {
        path:'book/add',
        component: AddBookComponent,
        canActivate: [AuthguardGuard],
    },
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'profile',
        component: ProfileComponent, 
        canActivate: [AuthguardGuard],
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthguardGuard],
    },
    {
        path:'order',
        component: OrderComponent,
        canActivate: [AuthguardGuard],
    },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
