import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ClientInfoService } from '../../services/client-info.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() productcard: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter;
  @Output() removeFromCart: EventEmitter<Product> = new EventEmitter;
  @Output() mytotal: EventEmitter<number>=new EventEmitter;
  
  total:number=0;
  amount: number = 0;
  id: number = 0;
  constructor(private shoppingCart: ShoppingCartService,private clientInfo:ClientInfoService, private productservice: ProductService, public router: Router, private actrout: ActivatedRoute) {
    this.productcard = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 0



    }
  }

  ngOnInit(): void {
this.total=this.clientInfo.total;
this.shoppingCart.total=this.total;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
  AddToCart(product: Product) {
    
    this.addToCart.emit(product);

  }
  RemoveFromCart(product: Product) {

    this.removeFromCart.emit(product);
    
  }
  productdetails(product: Product) {
    this.productcard = product;
    console.log(this.productcard);
    this.productservice.productId(product);
    this.router.navigate(['/productInDetails']);
  }
  detectchange(product:Product){

this.mytotal.emit();

  }

}
