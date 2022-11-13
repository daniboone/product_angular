import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Order } from '../interfaces/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  order: Order = {
    deliveryCity: "",
    deliveryName: "",
    deliveryStreet: "",
    deliveryState: "",
    deliveryZip: "",
    ccNumber: "",
    ccExpiration: "",
    ccCVV: "",
    products: []
  }

  constructor(private cart: CartService, private httpClient: HttpClient) {
    this.cart = cart;
  }

  ngOnInit() {}

  get cartItems() {
    return this.cart.getItemsInCart();
  }

  get cartTotal() {
    return this.cart.getCartTotal();
  }

  onSubmit() {
    // this.model.products = this.cart.getItemsInCart();
    this.cart.getItemsInCart().forEach(cartItem => {
      this.order.products.push(cartItem.product);
    });

    this.httpClient.post(
        'http://localhost:8080/orders',
        this.order, {
            headers: new HttpHeaders().set('Content-type', 'application/json')
                    .set('Accept', 'application/json'),
        }).subscribe(r => this.cart.emptyCart());

    // TODO: Do something after this...navigate to a thank you page or something
  }

}
