import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../interfaces/Product';
import { Tag } from "../interfaces/Tag";

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  product: Product = {
    description: new String,
    imageUrl: new String,
    price: new Number,
    tags: []
  }

  allTags: any;
  highs: Tag[] = [];
  mids: Tag[] = [];
  lows: Tag[] = [];

  constructor(private httpClient: HttpClient, private router: Router, private cart: CartService) {
  }

  // tag::ngOnInit[]
  ngOnInit() {
    this.httpClient.get('http://localhost:8080/tags')
        .subscribe(data => {
          this.allTags = data;
          this.highs = this.allTags.filter((h: { trend: string; }) => h.trend === 'HIGH');
          this.mids = this.allTags.filter((m: { trend: string; }) => m.trend === 'MID');
          this.lows = this.allTags.filter((l: { trend: string; }) => l.trend === 'LOW');
        });
  }
  // end::ngOnInit[]

  updateTags(tag: Tag, event: any) {
    if (event.target.checked) {
      this.product.tags.push(tag);
    } else {
      this.product.tags.splice(this.product.tags.findIndex(i => i === tag), 1);
    }
  }

  // tag::onSubmit[]
  onSubmit() {
    this.httpClient.post(
        'http://localhost:8080/design',
        this.product, {
            headers: new HttpHeaders().set('Content-type', 'application/json'),
        }).subscribe(product => this.cart.addToCart(product));

    this.router.navigate(['/cart']);
  }
  // end::onSubmit[]
}
