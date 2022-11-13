export class CartItem {

    quantity = 1;
  
    product: any;
  
    constructor(product: any) {
      this.product = product;
    }
  
    get lineTotal() {
      return this.quantity * this.product.price;
    }
  
  }