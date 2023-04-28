import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientInfoService {
clientname:string='';
total:number=0;
  constructor() {
    console.log(this.total)
   }


}
