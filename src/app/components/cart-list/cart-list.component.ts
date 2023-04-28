import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { findIndex } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ClientInfoService } from '../../services/client-info.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  carts$: Product[] = [];
  length: number = 0;
  @Input() id: number = 0;
   total: number = 0;

  constructor(private shoppingCart: ShoppingCartService, private clientservice: ClientInfoService) {


  }


  ngOnInit(): void {
    this.carts$ = this.shoppingCart.getCart();
    this.total=this.shoppingCart.updateTotal();


      this.clientservice.total = this.total;
      this.length = this.carts$.length;
    }
  
  RemoveFromCart(product: Product) {
if(confirm("Are you sure you want to remove this item"+product.name))
{


    let index = this.carts$.findIndex(o => o.id === product.id);
    console.log(index)
    this.shoppingCart.removeFromCart(index);
    this.carts$=this.shoppingCart.myCart;
    this.total=this.shoppingCart.updateTotal();
    console.log(this.carts$)
    console.log(this.total)
    alert(`${product.name} removed from cart successflly`)


  }}

  detectchange(event:any){

    this.total=this.shoppingCart.updateTotal();
    this.clientservice.total=this.total;
    console.log(this.clientservice.total)
    
      }

}
