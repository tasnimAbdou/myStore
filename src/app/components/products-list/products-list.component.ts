import { Component, OnInit } from '@angular/core';
import { subscribeOn, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  product$: Product[] = [];
  sub = Subscription;
  constructor(private products: ProductService ,private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
    this.products.getProducts().subscribe(product => {
      for (let index = 0; index < product.length; index++) {
        this.product$[index] = product[index];
        console.log(product[index])
      }
    })

  }
AddToCart(product:Product){
  
this.shoppingCart.addToCart(product);
alert(`${product.name} added successflly`)

}

}


