import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
selectedproduct:Product;

constructor(private http:HttpClient) {
this.selectedproduct={
  id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 0

  
}

 }
getProducts():Observable<Product[]>{
return this.http.get<Product[]>("./assets/data.json");

}
productId(product:Product){
this.selectedproduct=product;

}

}
