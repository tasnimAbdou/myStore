import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
myCart:Product[]=[]
total:number=0;
  constructor() { }

addToCart(product:Product){
  const index=this.myCart.findIndex(obj=>obj.id===product.id);
  if(index===-1){
this.myCart.push(product);}
else{
  this.myCart[index].amount=this.myCart[index].amount+product.amount;
}
for(let i=0;i<this.myCart.length;i++){
  this.total=this.total+this.myCart[i].amount*this.myCart[i].price;

}
}

getCart(){
  return this.myCart;
}
removeFromCart(id:number){

  this.myCart.splice(id,1);
  this.updateTotal();
  return this.myCart;
}
updateTotal(){
  this.total=0;
  for (let i = 0; i < this.myCart.length; i++) {
    this.total =this.total+( this.myCart[i].amount * this.myCart[i].price); }
    console.log(this.total)
  return this.total;
  }

calculateTotal(state:string,price:number){


  if(state=='increament'){
    console.log('increased')
    this.total=this.total+ price; 
  console.log(this.total) }
  else if(state=='decreament'){
    console.log('decreased')
    this.total =this.total-price;
    console.log(this.total)

  }
}
  }