import { Injectable } from '@angular/core';
import { CartItem } from './cart/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items$: CartItem[] = [];

  constructor() {
    this.items$ = [];
  }

  addToCart(product: any) {
    this.items$.push(new CartItem(product));
  }

  getItemsInCart() {
    return this.items$;
  }

  getCartTotal() {
    let total = 0;
    this.items$.forEach(item => {
      total += item.lineTotal;
    });
    return total;
  }

  emptyCart() {
    this.items$ = [];
  }
}
