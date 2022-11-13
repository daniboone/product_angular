import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: CartService;

  constructor(cart: CartService) {
    this.cart = cart;
  }


  ngOnInit(): void {
  }

}
