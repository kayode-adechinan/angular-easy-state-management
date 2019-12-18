import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  totalItem:number;

  constructor(private cartService:CartService) { }

  ngOnInit() {

    this.cartService.getCart().subscribe(
      data=> this.totalItem=data.totalItem
    );

  }

  resetCart(){
    this.cartService.resetCart();
  }



}
