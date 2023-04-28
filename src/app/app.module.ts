import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductInDetailsComponent } from './components/product-in-details/product-in-details.component'; // <== add the imports!

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
    OrderConfirmationComponent,
    NavbarComponent,
    CartListComponent,
    ShippingFormComponent,
    ProductInDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
