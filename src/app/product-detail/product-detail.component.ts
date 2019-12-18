import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  totalItem:number;


  constructor(private cartService:CartService) { }

  ngOnInit() {

    this.cartService.getCart().subscribe(
      data=> this.totalItem=data.totalItem
    );

  }

  addToCart(){
    this.cartService.setCart(this.totalItem,  1);
  }
}
