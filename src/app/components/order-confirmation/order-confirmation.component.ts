import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ClientInfoService } from '../../services/client-info.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
total:number=0;
fullName:string='';
  constructor( private clientservice:ClientInfoService,private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
    this.fullName=this.clientservice.clientname;
    this.total=this.shoppingCart.updateTotal();
  }

}
