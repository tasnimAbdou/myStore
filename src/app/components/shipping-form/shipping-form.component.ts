import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ClientInfoService } from '../../services/client-info.service';
import { InvokeFunctionExpr } from '@angular/compiler';
@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  fullName:string='';
  Address:string='';
  creditNo:string='';
  constructor(private router:Router,private clientservice:ClientInfoService) { }

  ngOnInit(): void {
  }
submitInfo(){
  this.clientservice.clientname=this.fullName;

  this.router.navigate(['/orderConfirmation']);




}

}
