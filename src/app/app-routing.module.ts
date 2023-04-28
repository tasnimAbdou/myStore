import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductInDetailsComponent } from './components/product-in-details/product-in-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



const routes: Routes = [
{path:'',component:ProductsListComponent},
{path:'shoppingCart',component:ShoppingCartComponent},
{path:'productInDetails',component:ProductInDetailsComponent},
{path:'orderConfirmation',component:OrderConfirmationComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
