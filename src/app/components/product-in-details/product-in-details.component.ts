import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-in-details',
  templateUrl: './product-in-details.component.html',
  styleUrls: ['./product-in-details.component.css']
})
export class ProductInDetailsComponent implements OnInit {
selectedproduct:Product;
  constructor(private productservice:ProductService ,private shoppingCart:ShoppingCartService) { 
this.selectedproduct={
  id: 0,
  name: '',
  price: 0,
  url: '',
  description: '',
  amount: 0

      }
  }
  ngOnInit(): void {
this.selectedproduct=this.productservice.selectedproduct;
  }

  AddToCart(product:Product){
  
    this.shoppingCart.addToCart(product);
    alert(`${product.name} added successflly`)
    
    }
    

}
